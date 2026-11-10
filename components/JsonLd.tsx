import { faqs, site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "Organization"],
        "@id": `${site.url}/#organization`,
        name: site.legalName,
        legalName: site.legalName,
        url: site.url,
        email: site.email,
        telephone: site.phone,
        image: `${site.url}/og.jpg`,
        logo: `${site.url}/logo/bn-hidrovalf-makine-gecici.png`,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          postalCode: site.address.postalCode,
          addressLocality: site.address.locality,
          addressRegion: site.address.region,
          addressCountry: site.address.country,
        },
        areaServed: ["Ankara", "İvedik", "Ostim", "Türkiye"],
      },
      {
        "@type": "Service",
        "@id": `${site.url}/#services`,
        serviceType: "Valf ve pompa revizyonu",
        provider: { "@id": `${site.url}/#organization` },
        areaServed: "TR",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Hizmetler",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "İş makinası valf revizyonu",
                description:
                  "Her marka iş makinası valf revizyonu, spool imalatı, arıza çözümü ve valf testi. Test sonucu videolu kayıttır.",
                url: `${site.url}/revizyon/valf`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "İş makinası pompa revizyonu",
                description:
                  "Her marka iş makinası pompa revizyonu, iç grup yüzey taşlama ve pompa testi. Test sonucu videolu kayıttır.",
                url: `${site.url}/revizyon/pompa`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "CNC ve özel imalat",
                url: `${site.url}/imalat`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Yedek parça",
                url: `${site.url}/yedek-parca`,
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/#faq`,
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${site.url}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Ana sayfa",
            item: `${site.url}/`,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
