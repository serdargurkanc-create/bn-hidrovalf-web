/**
 * Bağımsız kalite turu: tüm rotalarda kırık varlık, konsol hatası, yatay taşma,
 * üst üste binme, kırık iç link, animasyon tetiklenmesi ve reduced-motion.
 * Kullanım: node scripts/qa-audit.mjs [baseUrl]
 */
import { chromium } from "playwright";

const base = process.argv[2] || "http://localhost:4173/bn-hidrovalf-web";
const routes = [
  "/", "/revizyon/", "/revizyon/valf/", "/revizyon/pompa/", "/revizyon/surec/",
  "/revizyon/videolu-test/", "/revizyon/ariza-belirtileri/", "/revizyon/teslimat/",
  "/revizyon/marka/", "/revizyon/marka/komatsu/", "/revizyon/marka/cat/",
  "/revizyon/marka/hitachi/", "/revizyon/marka/volvo/", "/revizyon/marka/jcb/",
  "/revizyon/marka/hyundai/", "/revizyon/marka/rexroth/", "/revizyon/marka/kawasaki/",
  "/revizyon/marka/linde/", "/imalat/", "/yedek-parca/", "/hakkimizda/", "/sss/",
  "/iletisim/", "/teklif/", "/gizlilik/", "/cerez-politikasi/", "/404.html",
];
const widths = [390, 768, 1440];

const browser = await chromium.launch({
  executablePath: "/usr/local/bin/google-chrome",
  args: ["--no-sandbox"],
});

const issues = [];
const note = (m) => { issues.push(m); console.log("! " + m); };

// 1) Varlık / konsol / taşma / örtüşme — her genişlik
for (const w of widths) {
  const ctx = await browser.newContext({ viewport: { width: w, height: 900 } });
  const page = await ctx.newPage();
  const failed = new Map();
  page.on("response", (res) => {
    if (res.status() >= 400) failed.set(res.url(), res.status());
  });
  const consoleErrs = [];
  page.on("console", (msg) => { if (msg.type() === "error") consoleErrs.push(msg.text()); });
  page.on("pageerror", (err) => consoleErrs.push(String(err)));

  for (const r of routes) {
    failed.clear();
    consoleErrs.length = 0;
    const resp = await page.goto(base + r, { waitUntil: "load" });
    if (r !== "/404.html" && resp && resp.status() >= 400) note(`${w} ${r} sayfa ${resp.status()}`);
    for (const [u, s] of failed) {
      if (u.includes("/olmayan")) continue;
      note(`${w} ${r} varlık ${s}: ${u.replace(base, "")}`);
    }
    for (const e of consoleErrs) note(`${w} ${r} konsol: ${e.slice(0, 180)}`);

    const over = await page.evaluate(() =>
      Math.max(document.documentElement.scrollWidth, document.body.scrollWidth) -
      document.documentElement.clientWidth);
    if (over > 1) note(`${w} ${r} yatay taşma +${over}px`);

    const overlaps = await page.evaluate(() => {
      const out = [];
      const nodes = [...document.querySelectorAll("h1,h2,h3,p,a,button,summary,label,li")]
        .filter((e) => {
          const st = getComputedStyle(e);
          if (st.visibility === "hidden" || st.display === "none") return false;
          const b = e.getBoundingClientRect();
          return b.width > 8 && b.height > 8 && (e.innerText || "").trim().length > 1;
        });
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          if (a.contains(b) || b.contains(a)) continue;
          const ra = a.getBoundingClientRect(), rb = b.getBoundingClientRect();
          const iw = Math.min(ra.right, rb.right) - Math.max(ra.left, rb.left);
          const ih = Math.min(ra.bottom, rb.bottom) - Math.max(ra.top, rb.top);
          if (iw > 12 && ih > 12) {
            const small = Math.min(ra.width * ra.height, rb.width * rb.height);
            if ((iw * ih) / small > 0.5) {
              out.push(`${a.tagName}("${(a.innerText||"").trim().slice(0,24)}") x ${b.tagName}("${(b.innerText||"").trim().slice(0,24)}")`);
            }
          }
        }
      }
      return [...new Set(out)].slice(0, 5);
    });
    for (const o of overlaps) note(`${w} ${r} örtüşme: ${o}`);
  }
  await ctx.close();
}

// 2) Kırık iç linkler (tek geçiş, tüm rotalardan toplanan href'ler)
{
  const ctx = await browser.newContext();
  const page = await ctx.newPage();
  const hrefs = new Set();
  for (const r of routes) {
    await page.goto(base + r, { waitUntil: "load" });
    const found = await page.$$eval("a[href]", (as) => as.map((a) => a.getAttribute("href")));
    for (const h of found) {
      if (!h || h.startsWith("#") || h.startsWith("tel:") || h.startsWith("mailto:")) continue;
      if (h.startsWith("http") && !h.startsWith(base)) continue;
      hrefs.add(h.startsWith("http") ? h : base + h);
    }
  }
  for (const u of hrefs) {
    const res = await page.request.get(u);
    if (res.status() >= 400) note(`kırık link ${res.status()}: ${u.replace(base, "")}`);
  }
  console.log(`iç link kontrolü: ${hrefs.size} adres`);
  await ctx.close();
}

// 3) Animasyon tetiklenmesi
{
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await ctx.newPage();
  await page.goto(base + "/revizyon/valf/", { waitUntil: "load" });
  const before = await page.evaluate(() => document.querySelectorAll(".rv.in").length);
  await page.mouse.wheel(0, 900);
  await page.waitForTimeout(900);
  const after = await page.evaluate(() => ({
    in: document.querySelectorAll(".rv.in").length,
    motion: !!document.querySelector('script[src*="motion.js"]'),
    visible: [...document.querySelectorAll(".rv.in")].filter((e) => getComputedStyle(e).opacity === "1").length,
  }));
  if (before !== 0) note(`animasyon: jest öncesi .in sayısı ${before} (0 beklenir)`);
  if (!after.motion || after.in === 0 || after.visible === 0)
    note(`animasyon tetiklenmedi: ${JSON.stringify(after)}`);
  else console.log(`animasyon OK: jest sonrası ${after.in} öğe görünür`);

  // gauge ibresi son açıya döndü mü
  await page.goto(base + "/", { waitUntil: "load" });
  await page.mouse.wheel(0, 2600);
  await page.waitForTimeout(1600);
  const gauge = await page.evaluate(() => {
    const g = document.querySelector(".gauge-needle");
    if (!g) return "gauge yok";
    const anim = g.closest(".anim");
    return { in: anim?.classList.contains("in") || false, tf: getComputedStyle(g).transform };
  });
  if (!gauge.in) note(`gösterge animasyonu tetiklenmedi: ${JSON.stringify(gauge)}`);
  else console.log("gösterge OK:", JSON.stringify(gauge));
  await ctx.close();
}

// 4) reduced-motion
{
  const ctx = await browser.newContext({ reducedMotion: "reduce", viewport: { width: 1280, height: 800 } });
  const page = await ctx.newPage();
  await page.goto(base + "/", { waitUntil: "load" });
  await page.mouse.wheel(0, 2600);
  await page.waitForTimeout(700);
  const rm = await page.evaluate(() => ({
    reduced: document.documentElement.classList.contains("reduced"),
    hidden: [...document.querySelectorAll(".rv,.anim")].filter((e) => getComputedStyle(e).opacity === "0").length,
    flowAnim: getComputedStyle(document.querySelector(".flow-oil") || document.body).animationName,
  }));
  if (!rm.reduced || rm.hidden > 0) note(`reduced-motion sorun: ${JSON.stringify(rm)}`);
  else console.log("reduced-motion OK");
  await ctx.close();
}

await browser.close();
console.log(issues.length === 0 ? "DENETİM TEMİZ" : `TOPLAM ${issues.length} sorun`);
process.exit(issues.length === 0 ? 0 : 1);
