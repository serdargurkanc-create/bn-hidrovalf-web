import type { Metadata, Viewport } from "next";
import { ConsentAnalytics } from "@/components/ConsentAnalytics";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileDock } from "@/components/MobileDock";
import { asset } from "@/lib/paths";
import { site } from "@/lib/site";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAF8F5",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "BN Hidrovalf Makina — valf ve pompa revizyonu, Ankara",
    template: "%s — BN Hidrovalf Makina",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/",
    languages: { tr: "/", "x-default": "/" },
    types: { "text/markdown": "/llms.txt" },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: site.url,
    siteName: site.name,
    title: "BN Hidrovalf Makina — Valf ve pompa revizyonu",
    description: site.description,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BN Hidrovalf Makina — Valf ve pompa revizyonu",
    description: site.description,
    images: ["/og.jpg"],
  },
  icons: {
    icon: [{ url: asset("/favicon.png"), type: "image/png" }],
    apple: [{ url: asset("/apple-touch-icon.png") }],
  },
  manifest: asset("/manifest.webmanifest"),
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } }
    : {}),
};

/* LCP hero alt kümesi AYRI aile adında: aynı "Plus Jakarta Sans" adına
   dar unicode-range yazılırsa "Videolu" gibi kelimelerde bazı harfler
   alt kümeden, bazıları sistem fontundan gelir → kalın/ince karışımı.
   Tam aile fonts-deferred.css ile yüklenir; tüm site tek tip kalır. */
const criticalFontCss = `@font-face{font-family:"Plus Jakarta Sans LCP";font-style:normal;font-weight:800;font-display:swap;src:url("${asset(
  "/fonts/plus-jakarta-sans-800-lcp.woff2"
)}") format("woff2");}`;

const bootScript = [
  "document.documentElement.classList.add('js');",
  "if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('reduced');",
  "addEventListener('scroll',function(){var h=document.querySelector('.header');if(h)h.classList.toggle('is-scrolled',scrollY>10)},{passive:true});",
  "addEventListener('keydown',function(e){if(e.key==='Escape'){var c=document.getElementById('menu-toggle');if(c)c.checked=false;var lb=document.getElementById('lightbox');if(lb)lb.hidden=true;document.querySelectorAll('nav.nav details[open]').forEach(function(d){d.open=false;});}});",
  "document.addEventListener('click',function(e){var t=e.target&&e.target.closest&&e.target.closest('.drawer a');if(t){var c=document.getElementById('menu-toggle');if(c)c.checked=false;}document.querySelectorAll('nav.nav details[open]').forEach(function(d){var inside=d.contains(e.target);var link=e.target.closest&&e.target.closest('a');if(!inside||(link&&d.contains(link)))d.open=false;});});",
  "(function(){var ev=['scroll','wheel','touchstart','pointerdown','keydown'];var motion=false,next=false;",
  "function drop(){ev.forEach(function(e){removeEventListener(e,onFirst);removeEventListener(e,bootMotion);});}",
  `function bootMotion(){if(motion)return;motion=true;drop();var s=document.createElement('script');s.src='${asset(
    "/motion.js"
  )}';s.defer=true;document.head.appendChild(s);}`,
  "function runNext(){if(next)return;next=true;var pending=[];document.querySelectorAll('script[data-defer-next]').forEach(function(old){var s=document.createElement('script');var src=old.getAttribute('data-src');if(src){s.src=src;s.async=false;pending.push(s);}else s.textContent=old.textContent;if(old.hasAttribute('nomodule'))s.noModule=true;if(old.id)s.id=old.id;old.replaceWith(s);});function mark(){if(document.documentElement.dataset.hydrated)return;document.documentElement.dataset.hydrated='1';revealFold();document.dispatchEvent(new Event('bn-hydrated'));}if(!pending.length){mark();return;}var left=pending.length;pending.forEach(function(s){function done(){if(--left===0)mark();}s.addEventListener('load',done);s.addEventListener('error',done);});}",
  "function onFirst(){bootMotion();runNext();}",
  "ev.forEach(function(e){addEventListener(e,onFirst,{once:true,passive:true});});",
  // İlk viewport: sync getBoundingClientRect döngüsü yok (forced-reflow).
  // IO ile görünür reveal'ları aç; 'reduced' eklenmez.
  "function revealFold(){var sel='.rv:not(.in),.rv-l:not(.in),.rv-r:not(.in),.rv-scale:not(.in),.anim:not(.in),.timeline:not(.in)';var nodes=document.querySelectorAll(sel);if(!nodes.length)return;if(!('IntersectionObserver' in window)){nodes.forEach(function(el){el.classList.add('in');});return;}var io=new IntersectionObserver(function(ents){ents.forEach(function(e){if(!e.isIntersecting)return;e.target.classList.add('in');io.unobserve(e.target);});},{root:null,rootMargin:'80px 0px',threshold:0});nodes.forEach(function(el){io.observe(el);});}",
  "if(document.readyState==='loading')addEventListener('DOMContentLoaded',revealFold,{once:true});else revealFold();",
  "addEventListener('pageshow',function(e){if(e.persisted)revealFold();});",
  "setTimeout(function(){if(!motion){revealFold();bootMotion();}},2500);",
  "})();",
  // Font + mercek CSS: ilk boyamadan hemen sonra (DOMContentLoaded).
  `(function(){function f(){document.querySelectorAll('link[data-fonts-deferred],link[data-lens-deferred]').forEach(function(l){l.media='all';});}if(document.readyState==='loading')addEventListener('DOMContentLoaded',f,{once:true});else f();})();`,
].join("");

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr">
      <head>
        <link
          rel="preload"
          href={asset("/fonts/plus-jakarta-sans-800-lcp.woff2")}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          fetchPriority="high"
        />
        {/* Latin aileler fonts-deferred ile gelir — LCP bant genişliğini paylaşmasın. */}
        <style dangerouslySetInnerHTML={{ __html: criticalFontCss }} />
        <link
          rel="alternate"
          type="text/markdown"
          href={`${site.url}/llms.txt`}
          title="llms.txt"
        />
        <link
          rel="stylesheet"
          href={asset("/fonts-deferred.css")}
          media="print"
          data-fonts-deferred
        />
        {/* Mercek süsü: below-fold; kritik iskelet globals’ta (CLS yok). */}
        <link
          rel="stylesheet"
          href={asset("/process-lens.css")}
          media="print"
          data-lens-deferred
        />
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>
        <a className="skip" href="#icerik">
          İçeriğe geç
        </a>
        <Header />
        <main id="icerik">{children}</main>
        <Footer />
        <MobileDock />
        <ConsentAnalytics />
      </body>
    </html>
  );
}
