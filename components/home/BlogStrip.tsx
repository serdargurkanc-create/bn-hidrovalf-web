import Link from "next/link";
import { Pic } from "@/components/Pic";
import { formatBlogDate, posts } from "@/lib/blog";

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 8h8M9 4l4 4-4 4" />
    </svg>
  );
}

/** Ana sayfa altı: ortadaki yazı net, yanlar soluk. Kaydırma motion.js ile. */
export function BlogStrip() {
  return (
    <section className="blog-strip" aria-labelledby="blog-onizleme">
      <div className="wrap blog-strip-head">
        <h2 id="blog-onizleme">
          Blog
        </h2>
        <p>
          Atölyeden valf, pompa ve test notları. İvedik OSB’de ölçülen işin kısa hali.
        </p>
      </div>
      <div className="blog-slider" data-blog-slider>
        <div className="blog-slider-viewport">
          <div className="blog-slider-track">
            {posts.map((post, i) => (
              <article className={`blog-slide${i === 0 ? " is-active" : ""}`} key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="blog-slide-card">
                  <span className="blog-slide-media">
                    <Pic
                      src={post.image.src}
                      srcSet={post.image.srcSet}
                      avifSrcSet={post.image.avifSrcSet}
                      alt={post.image.alt}
                      width={800}
                      height={600}
                      sizes="(max-width: 700px) 78vw, 420px"
                    />
                    <span className="blog-slide-go" aria-hidden="true">
                      <Arrow />
                    </span>
                  </span>
                  <span className="blog-slide-meta">
                    <span className="blog-kicker">{post.category}</span>
                    <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
                  </span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span className="blog-slide-more">Devamını oku</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
        <div className="blog-slider-nav">
          <button type="button" data-blog-prev aria-label="Önceki yazı">
            <Arrow />
          </button>
          <Link href="/blog">Tüm yazılar</Link>
          <button type="button" data-blog-next aria-label="Sonraki yazı">
            <Arrow />
          </button>
        </div>
      </div>
    </section>
  );
}
