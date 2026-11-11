import type { Video } from "@/lib/media";
import { site } from "@/lib/site";

/** Sayfa adresini canonical ile aynı biçimde üretir (sonda eğik çizgi). */
function abs(path: string): string {
  if (!path || path === "/") return `${site.url}/`;
  return `${site.url}${path.endsWith("/") ? path : `${path}/`}`;
}

type Crumb = { href?: string; label: string };
type Faq = { q: string; a: string };

/**
 * İç sayfa JSON-LD: BreadcrumbList + isteğe bağlı Service, FAQPage,
 * VideoObject. Telefon her zaman E.164 (+905418835331).
 */
export function SchemaLd({
  path,
  crumbs,
  service,
  faqs,
  videoList,
  about,
}: {
  path: string;
  crumbs: Crumb[];
  service?: { name: string; description: string };
  faqs?: readonly Faq[];
  videoList?: readonly Video[];
  /** Hakkımızda: AboutPage + LocalBusiness (NAP / GEO). */
  about?: boolean;
}) {
  const pageUrl = abs(path);
  const graph: Record<string, unknown>[] = [
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: crumbs.map((c, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: c.label,
        item: c.href ? abs(c.href) : pageUrl,
      })),
    },
  ];

  if (about) {
    graph.push({
      "@type": "AboutPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: `Hakkımızda — ${site.legalName}`,
      description: site.description,
      isPartOf: { "@type": "WebSite", name: site.name, url: `${site.url}/` },
      about: { "@id": `${site.url}/#localbusiness` },
      inLanguage: "tr-TR",
    });
    graph.push({
      "@type": "LocalBusiness",
      "@id": `${site.url}/#localbusiness`,
      name: site.legalName,
      legalName: site.legalName,
      url: `${site.url}/`,
      telephone: site.phoneTel,
      email: site.email,
      image: `${site.url}/images/logo.png`,
      description: site.description,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        postalCode: site.address.postalCode,
        addressLocality: site.address.locality,
        addressRegion: site.address.region,
        addressCountry: site.address.country,
      },
      hasMap: site.maps,
      areaServed: { "@type": "Country", name: "Türkiye" },
      knowsAbout: [
        "iş makinası valf revizyonu",
        "iş makinası pompa revizyonu",
        "spool imalatı",
        "iç grup yüzey taşlama",
        "videolu hidrolik test",
      ],
    });
  }

  if (service) {
    graph.push({
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: service.name,
      description: service.description,
      url: pageUrl,
      areaServed: "TR",
      provider: {
        "@type": "LocalBusiness",
        name: site.legalName,
        telephone: site.phoneTel,
        email: site.email,
        url: site.url,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          postalCode: site.address.postalCode,
          addressLocality: site.address.locality,
          addressRegion: site.address.region,
          addressCountry: site.address.country,
        },
      },
    });
  }

  if (faqs && faqs.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  if (videoList && videoList.length) {
    for (const v of videoList) {
      graph.push({
        "@type": "VideoObject",
        "@id": `${site.url}${v.src}#video`,
        name: v.title,
        description: v.desc,
        contentUrl: `${site.url}${v.src}`,
        thumbnailUrl: `${site.url}${v.poster}`,
        duration: v.duration,
        inLanguage: "tr",
      });
    }
  }

  const data = { "@context": "https://schema.org", "@graph": graph };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
