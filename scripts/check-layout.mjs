/**
 * Düzen doğrulaması: 390 / 768 / 1440 genişliklerde yatay taşma kontrolü,
 * 404 içeriği, teklif formu WhatsApp URL üretimi ve reduced-motion görünürlüğü.
 * Kullanım: node scripts/check-layout.mjs [baseUrl]
 */
import { chromium } from "playwright";

const base = process.argv[2] || "http://localhost:4173/bn-hidrovalf-web";
const routes = [
  "/",
  "/revizyon/",
  "/revizyon/valf/",
  "/revizyon/pompa/",
  "/revizyon/surec/",
  "/revizyon/videolu-test/",
  "/revizyon/ariza-belirtileri/",
  "/revizyon/teslimat/",
  "/revizyon/marka/",
  "/revizyon/marka/komatsu/",
  "/imalat/",
  "/yedek-parca/",
  "/hakkimizda/",
  "/sss/",
  "/iletisim/",
  "/teklif/",
  "/404.html",
];
const widths = [390, 768, 1440];

const browser = await chromium.launch({
  executablePath: "/usr/local/bin/google-chrome",
  args: ["--no-sandbox"],
});
let fail = 0;

for (const w of widths) {
  const ctx = await browser.newContext({ viewport: { width: w, height: 900 } });
  const page = await ctx.newPage();
  for (const r of routes) {
    await page.goto(base + r, { waitUntil: "load" });
    const over = await page.evaluate(() => {
      const d = document.documentElement;
      return Math.max(d.scrollWidth, document.body.scrollWidth) - d.clientWidth;
    });
    if (over > 1) {
      fail++;
      console.log(`TAŞMA ${w}px ${r}: +${over}px`);
      const el = await page.evaluate(() => {
        let worst = null;
        let max = document.documentElement.clientWidth;
        for (const e of document.querySelectorAll("*")) {
          const rct = e.getBoundingClientRect();
          if (rct.right > max + 1) {
            max = rct.right;
            worst = `${e.tagName}.${(e.className || "").toString().slice(0, 60)}`;
          }
        }
        return worst;
      });
      console.log(`  suçlu: ${el}`);
    }
  }
  await ctx.close();
}

// 404 içerik denetimi
{
  const ctx = await browser.newContext();
  const page = await ctx.newPage();
  await page.goto(`${base}/404.html`, { waitUntil: "load" });
  const txt = await page.textContent("h1");
  if (!/devrede değil/i.test(txt || "")) {
    fail++;
    console.log("404 Türkçe başlık bulunamadı");
  }
}

// Teklif formu WhatsApp URL doğrulaması
{
  const ctx = await browser.newContext();
  const page = await ctx.newPage();
  let waUrl = null;
  await page.exposeFunction("__noop", () => {});
  await page.addInitScript(() => {
    window.open = (u) => {
      window.__waUrl = u;
      return null;
    };
  });
  await page.goto(`${base}/teklif/`, { waitUntil: "load" });
  await page.fill('input[name="makine"]', "Komatsu PC200");
  await page.fill('textarea[name="aciklama"]', "Bom yavaş iniyor");
  await page.fill('input[name="ad"]', "Deneme Kişi");
  await page.fill('input[name="telefon"]', "05001112233");
  await page.click('button[type="submit"]');
  await page.waitForTimeout(400);
  waUrl = await page.evaluate(() => window.__waUrl || null);
  if (!waUrl || !waUrl.includes("wa.me/905418835331") || !waUrl.includes("text=")) {
    fail++;
    console.log(`Teklif formu WhatsApp URL hatalı: ${waUrl}`);
  } else {
    const decoded = decodeURIComponent(waUrl.split("text=")[1]);
    console.log("Form URL OK:", decoded.split("\n").slice(0, 3).join(" | "));
  }
  await ctx.close();
}

// Reduced motion: içerik görünür mü?
{
  const ctx = await browser.newContext({ reducedMotion: "reduce", viewport: { width: 390, height: 800 } });
  const page = await ctx.newPage();
  await page.goto(`${base}/revizyon/valf/`, { waitUntil: "load" });
  await page.mouse.wheel(0, 200);
  await page.waitForTimeout(600);
  const hidden = await page.evaluate(() =>
    [...document.querySelectorAll(".rv, .anim")].filter(
      (e) => getComputedStyle(e).opacity === "0"
    ).length
  );
  if (hidden > 0) {
    fail++;
    console.log(`reduced-motion altında ${hidden} öğe gizli kaldı`);
  } else {
    console.log("reduced-motion OK");
  }
  await ctx.close();
}

await browser.close();
console.log(fail === 0 ? "TÜM DÜZEN KONTROLLERİ GEÇTİ" : `${fail} sorun`);
process.exit(fail === 0 ? 0 : 1);
