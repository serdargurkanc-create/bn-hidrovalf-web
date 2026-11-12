import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Crumbs } from "@/components/Inner";
import { Pic } from "@/components/Pic";
import { SchemaLd } from "@/components/Schema";
import { blogAuthor, formatBlogDate, getPost, nextPost, posts } from "@/lib/blog";
import { pageMeta } from "@/lib/meta";
import { asset } from "@/lib/paths";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMeta({
    title: post.seoTitle ?? post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default async function Page({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const next = nextPost(post.slug);
  const crumbs = [
    { href: "/", label: "Ana sayfa" },
    { href: "/blog", label: "Blog" },
    { label: post.title },
  ];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "tr-TR",
    image: `${site.url}${post.image.src}`,
    mainEntityOfPage: `${site.url}/blog/${post.slug}/`,
    author: {
      "@type": "Organization",
      name: site.legalName,
      url: `${site.url}/`,
    },
    publisher: {
      "@type": "Organization",
      name: site.legalName,
      url: `${site.url}/`,
    },
  };

  return (
    <>
      <SchemaLd path={`/blog/${post.slug}`} crumbs={crumbs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="blog-detail">
        <div className="wrap">
          <Crumbs crumbs={crumbs} />
          <header className="blog-feature blog-detail-hero">
            <div>
              <span className="blog-kicker">Blog · {post.category}</span>
              <h1>{post.title}</h1>
              <p>{post.excerpt}</p>
              <div className="blog-author">
                <img src={asset("/logo/bn-hidrovalf-logo-56.webp")} alt="" width={36} height={36} />
                <b>{blogAuthor.name}</b>
                <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
              </div>
            </div>
            <div className="blog-feature-media">
              <Pic
                src={post.image.src}
                srcSet={post.image.srcSet}
                avifSrcSet={post.image.avifSrcSet}
                alt={post.image.alt}
                width={1200}
                height={900}
                sizes="(max-width: 800px) 100vw, 46vw"
                priority
              />
            </div>
          </header>

          <div className="blog-body">
            {post.blocks.map((block, i) => {
              if (block.type === "h2") return <h2 key={i}>{block.text}</h2>;
              if (block.type === "ul") {
                return (
                  <ul key={i}>
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={i}>{block.text}</p>;
            })}
            <p>
              <Link href={post.related.href}>{post.related.label}</Link>
            </p>
          </div>

          <p className="blog-back">
            <Link href="/blog" className="btn btn-outline">
              Bloga geri dön
            </Link>
          </p>

          <aside className="blog-author-end">
            <img src={asset("/logo/bn-hidrovalf-logo-112.webp")} alt="" width={72} height={72} />
            <div>
              <small>Yazar</small>
              <b>{blogAuthor.name}</b>
              <p>{blogAuthor.bio}</p>
              <Link href="/hakkimizda">Atölyeyi tanıyın</Link>
            </div>
          </aside>

          <section className="blog-next" aria-label="Sonraki makale">
            <article className="blog-card">
              <Link href={`/blog/${next.slug}`} className="blog-card-media">
                <Pic
                  src={next.image.src}
                  srcSet={next.image.srcSet}
                  avifSrcSet={next.image.avifSrcSet}
                  alt={next.image.alt}
                  width={1200}
                  height={900}
                  sizes="(max-width: 800px) 100vw, 50vw"
                />
              </Link>
              <div>
                <span className="blog-kicker">Bir sonraki makale</span>
                <h2>
                  <Link href={`/blog/${next.slug}`}>{next.title}</Link>
                </h2>
                <p>{next.excerpt}</p>
                <div className="blog-author">
                  <b>{blogAuthor.name}</b>
                </div>
              </div>
            </article>
          </section>
        </div>
      </article>
    </>
  );
}
