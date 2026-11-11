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
      <div className="blog-slider" id="blog-slider" data-blog-slider>
        <div className="blog-slider-viewport">
          <div className="blog-slider-track">
            {posts.map((post, i) => (
              <article
                className={`blog-slide${
                  i === 0 ? " is-active" : i === 1 ? " is-next" : i === posts.length - 1 ? " is-prev" : ""
                }`}
                key={post.slug}
              >
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
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){if(window.__blogSlider)return;window.__blogSlider=1;var want=0,timer=0,paused=false,reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;function slides(){var root=document.getElementById("blog-slider");return root?[].slice.call(root.querySelectorAll(".blog-slide")):[];}function current(){var list=slides();for(var idx=0;idx<list.length;idx++)if(list[idx].classList.contains("is-active"))return idx;return 0;}function visible(s){return s.classList.contains("is-active")||s.classList.contains("is-prev")||s.classList.contains("is-next");}function show(k,dir){var list=slides();var n=list.length;if(!n)return;var prev=new Map();list.forEach(function(s){if(visible(s)){var r=s.getBoundingClientRect();if(r.width)prev.set(s,r);}});want=(k+n)%n;var p=(want-1+n)%n,nx=(want+1)%n;list.forEach(function(s,idx){s.classList.remove("is-active","is-prev","is-next");s.style.transition="none";s.style.transform="";if(idx===want)s.classList.add("is-active");else if(idx===p)s.classList.add("is-prev");else if(idx===nx)s.classList.add("is-next");});if(!dir||reduced)return;list.forEach(function(s){if(!visible(s))return;var now=s.getBoundingClientRect();var old=prev.get(s);var dx=old?old.left-now.left:dir*(now.width+16);if(!dx)return;s.style.transform="translate3d("+dx+"px,0,0)";});requestAnimationFrame(function(){requestAnimationFrame(function(){list.forEach(function(s){if(!s.style.transform)return;s.style.transition="transform .5s cubic-bezier(0.22,1,0.36,1)";s.style.transform="translate3d(0,0,0)";});});});}function stop(){clearInterval(timer);}function start(){stop();if(reduced||paused)return;timer=setInterval(function(){show(current()+1,1);},3500);}document.addEventListener("click",function(e){var root=document.getElementById("blog-slider");var b=e.target&&e.target.closest&&e.target.closest("button");if(!root||!b||!root.contains(b))return;if(b.hasAttribute("data-blog-prev")){e.preventDefault();show(current()-1,-1);}else if(b.hasAttribute("data-blog-next")){e.preventDefault();show(current()+1,1);}});function bind(root){if(!root||root.dataset.bound)return;root.dataset.bound="1";root.addEventListener("pointerenter",function(){paused=true;stop();});root.addEventListener("pointerleave",function(){setTimeout(function(){var r=document.getElementById("blog-slider");if(r&&r.matches(":hover")){paused=true;stop();return;}paused=false;start();},60);});if(root.matches(":hover")){paused=true;stop();}}bind(document.getElementById("blog-slider"));new MutationObserver(function(){var root=document.getElementById("blog-slider");if(!root)return;bind(root);if(current()!==want)show(want,0);}).observe(document.documentElement,{childList:true,subtree:true});show(0,0);start();})();`,
        }}
      />
    </section>
  );
}
