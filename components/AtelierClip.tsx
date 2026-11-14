import type { AtelierClip } from "@/lib/media";
import { asset } from "@/lib/paths";

/**
 * Sessiz atölye klibi. Poster picture ile gelir; kaynak ancak görünürken
 * ve hareket azaltma kapalıyken eklenir. Mobil 9:16, masaüstü 4:5.
 */
export function AtelierFigure({ clip }: { clip: AtelierClip }) {
  const m = clip.mobile;
  const d = clip.desktop;
  return (
    <figure className="video-figure atelier-clip">
      <div className="atelier-frame">
        <picture>
          <source media="(min-width: 768px)" srcSet={asset(d.poster)} type="image/webp" />
          <img src={asset(m.poster)} alt="" width={m.w} height={m.h} loading="lazy" decoding="async" />
        </picture>
        <video
          muted
          loop
          playsInline
          autoPlay
          preload="none"
          width={d.w}
          height={d.h}
          aria-label={clip.desc}
          data-atelier-video=""
          data-webm-916={asset(m.webm)}
          data-mp4-916={asset(m.mp4)}
          data-poster-916={asset(m.poster)}
          data-webm-45={asset(d.webm)}
          data-mp4-45={asset(d.mp4)}
          data-poster-45={asset(d.poster)}
        />
      </div>
      <figcaption>{clip.desc}</figcaption>
    </figure>
  );
}

export function AtelierScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(){if(window.__atelierBoot)return;window.__atelierBoot=1;var desktop=matchMedia("(min-width: 768px)");var reduced=matchMedia("(prefers-reduced-motion: reduce)");var io;function arm(v){if(v.getAttribute("data-armed"))return;v.setAttribute("data-armed","1");var wide=desktop.matches;v.poster=v.getAttribute(wide?"data-poster-45":"data-poster-916")||"";var webm=document.createElement("source");var mp4=document.createElement("source");webm.type="video/webm";mp4.type="video/mp4";webm.src=v.getAttribute(wide?"data-webm-45":"data-webm-916")||"";mp4.src=v.getAttribute(wide?"data-mp4-45":"data-mp4-916")||"";v.appendChild(webm);v.appendChild(mp4);v.load();}function play(v){arm(v);var p=v.play();if(p&&p.catch)p.catch(function(){});}function stop(v){if(!v.pause)return;v.pause();var f=v.closest&&v.closest(".atelier-clip");if(f)f.classList.remove("is-playing");}function bind(v){if(v.__atelier)return;v.__atelier=1;if(reduced.matches){v.removeAttribute("autoplay");v.autoplay=false;return;}v.addEventListener("playing",function(){var f=v.closest(".atelier-clip");if(f)f.classList.add("is-playing");});if(!io){if(!("IntersectionObserver" in window))return;io=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting&&e.intersectionRatio>=0.25)play(e.target);else stop(e.target);});},{threshold:[0,0.25,0.6]});}io.observe(v);}function scan(){document.querySelectorAll("[data-atelier-video]").forEach(bind);}function go(){scan();if(window.__atelierMo)return;window.__atelierMo=new MutationObserver(scan);window.__atelierMo.observe(document.body,{childList:true,subtree:true});}function later(){setTimeout(go,60);}if(document.documentElement.dataset.hydrated)later();else document.addEventListener("bn-hydrated",later,{once:true});})();`,
      }}
    />
  );
}
