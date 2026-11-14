import type { Video } from "@/lib/media";
import { asset } from "@/lib/paths";

/**
 * İzinli atölye videosu: poster WebP, preload="none", yerleşik kontroller.
 * Otomatik oynatma ve otomatik ses yoktur; yükleme kullanıcı tıklayınca
 * başlar. Dikey 720p klipler sabit oranla yerleşir (CLS 0).
 */
export function VideoFigure({
  video,
  className,
  lazyPoster = false,
}: {
  video: Video;
  className?: string;
  /** Katın altındaki kayıtlarda poster görseli lazy yüklenir; video poster’ı indirmez. */
  lazyPoster?: boolean;
}) {
  const figureClass = `video-figure${lazyPoster ? " video-figure-lazy" : ""}${className ? ` ${className}` : ""}`;
  return (
    <figure className={figureClass}>
      {lazyPoster ? (
        <img
          src={asset(video.poster)}
          alt=""
          width={video.w}
          height={video.h}
          loading="lazy"
          decoding="async"
        />
      ) : null}
      <video
        controls
        playsInline
        preload="none"
        poster={lazyPoster ? undefined : asset(video.poster)}
        width={video.w}
        height={video.h}
        aria-label={video.title}
      >
        <source src={asset(video.src)} type="video/mp4" />
        Tarayıcınız video oynatmayı desteklemiyor.
      </video>
      <figcaption>
        {video.title}
        {video.sound ? <span className="video-note"> · sesli kayıt</span> : null}
      </figcaption>
    </figure>
  );
}
