import type { Metadata, Viewport } from "next";
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
    default: "BN Hidrovalf Makina — Valf ve pompa revizyonu, İvedik OSB Ankara",
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
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

/* LCP başlık fontu: kritik alt küme; kalan ağırlıklar fonts-deferred.css ile. */
const criticalFontCss = `@font-face{font-family:"Plus Jakarta Sans";font-style:normal;font-weight:800;font-display:swap;src:url("${asset(
  "/fonts/plus-jakarta-sans-800-lcp.woff2"
)}") format("woff2");unicode-range:U+20,U+2e,U+42,U+48-49,U+4d-4e,U+61,U+64-66,U+69,U+6b-70,U+72-73,U+75-76,U+79-7a,U+117,U+130-131,U+137,U+13c,U+145-146,U+157,U+15f,U+17c,U+227,U+229,U+22f,U+307,U+327,U+1e02,U+1e0b,U+1e11,U+1e1f,U+1e22,U+1e28,U+1e40-1e41,U+1e44-1e45,U+1e57,U+1e59,U+1e61,U+1e8f;}`;

const bootScript = [
  "document.documentElement.classList.add('js');",
  "if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('reduced');",
  "addEventListener('scroll',function(){var h=document.querySelector('.header');if(h)h.classList.toggle('is-scrolled',scrollY>10)},{passive:true});",
  "addEventListener('keydown',function(e){if(e.key==='Escape'){var c=document.getElementById('menu-toggle');if(c)c.checked=false;var lb=document.getElementById('lightbox');if(lb)lb.hidden=true;}});",
  "document.addEventListener('click',function(e){var t=e.target&&e.target.closest&&e.target.closest('.drawer a');if(t){var c=document.getElementById('menu-toggle');if(c)c.checked=false;}});",
  "(function(){var ev=['scroll','wheel','touchstart','pointerdown','keydown'];var motion=false,next=false;",
  "function drop(){ev.forEach(function(e){removeEventListener(e,onFirst);removeEventListener(e,bootMotion);});}",
  `function bootMotion(){if(motion)return;motion=true;drop();var s=document.createElement('script');s.src='${asset(
    "/motion.js"
  )}';s.defer=true;document.head.appendChild(s);}`,
  "function runNext(){if(next)return;next=true;document.querySelectorAll('script[data-defer-next]').forEach(function(old){var s=document.createElement('script');var src=old.getAttribute('data-src');if(src){s.src=src;s.async=false;}else s.textContent=old.textContent;if(old.hasAttribute('nomodule'))s.noModule=true;if(old.id)s.id=old.id;old.replaceWith(s);});}",
  "function onFirst(){bootMotion();runNext();}",
  "ev.forEach(function(e){addEventListener(e,onFirst,{once:true,passive:true});});",
  "})();",
  `addEventListener('load',function(){var l=document.querySelector('link[data-fonts-deferred]');if(l)l.media='all';},{once:true});`,
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
      </body>
    </html>
  );
}
