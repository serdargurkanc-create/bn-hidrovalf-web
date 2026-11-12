import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/Inner";
import { Pic } from "@/components/Pic";
import { SchemaLd } from "@/components/Schema";
import { blogAuthor, formatBlogDate, posts } from "@/lib/blog";
import { pageMeta } from "@/lib/meta";
import { asset } from "@/lib/paths";

export const metadata: Metadata = pageMeta({
  title: "Blog — valf, pompa ve atölye notları",
  description:
    "BN Hidrovalf Makina blogu: valf revizyonu ne zaman gerekir, spool imalatı, videolu test, pompa yüzey taşlama ve parçanın atölyeye gelişi. İvedik OSB, Ankara.",
  path: "/blog",
});

const crumbs = [{ href: "/", label: "Ana sayfa" }, { label: "Blog" }];
const [featured, ...rest] = posts;

export default function Page() {
  return (
    <>
      <SchemaLd path="/blog" crumbs={crumbs} />
      <PageHero
        kicker="Blog"
        title="Son yazılan"
        accent="blog içerikleri"
        lead="Valf, pompa, spool ve test tezgâhı. Atölyede görülen arıza, ölçü ve teslim. Abartısız, işin içinden notlar."
        crumbs={crumbs}
      />
      <section className="blog-page">
        <div className="wrap">
          <article className="blog-feature">
            <div>
              <span className="blog-kicker">Öne çıkan makale</span>
              <h2>
                <Link href={`/blog/${featured.slug}`}>{featured.title}</Link>
              </h2>
              <p>{featured.excerpt}</p>
              <div className="blog-author">
                <img src={asset("/logo/bn-hidrovalf-logo-56.webp")} alt="" width={36} height={36} />
                <b>{blogAuthor.name}</b>
              </div>
            </div>
            <Link href={`/blog/${featured.slug}`} className="blog-feature-media" tabIndex={-1} aria-hidden="true">
              <Pic
                src={featured.image.src}
                srcSet={featured.image.srcSet}
                avifSrcSet={featured.image.avifSrcSet}
                alt={featured.image.alt}
                width={1200}
                height={900}
                sizes="(max-width: 800px) 100vw, 46vw"
                priority
              />
            </Link>
          </article>

          <div className="blog-grid">
            {rest.map((post) => (
              <article className="blog-card" key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="blog-card-media">
                  <Pic
                    src={post.image.src}
                    srcSet={post.image.srcSet}
                    avifSrcSet={post.image.avifSrcSet}
                    alt={post.image.alt}
                    width={1200}
                    height={900}
                    sizes="(max-width: 800px) 100vw, 40vw"
                  />
                </Link>
                <span className="blog-kicker">{post.category}</span>
                <h2>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p>{post.excerpt}</p>
                <div className="blog-author">
                  <b>{blogAuthor.name}</b>
                  <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
