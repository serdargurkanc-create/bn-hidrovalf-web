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
}: {
  video: Video;
  className?: string;
}) {
  return (
    <figure className={`video-figure${className ? ` ${className}` : ""}`}>
      <video
        controls
        playsInline
        preload="none"
        poster={asset(video.poster)}
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
