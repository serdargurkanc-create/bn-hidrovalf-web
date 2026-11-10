import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  priority?: boolean;
  className?: string;
  avif?: string;
  avifSrcSet?: string;
  srcSet?: string;
};

/** Statik AVIF/WebP <picture>; boyutlu srcSet ile mobil indirilen hacmi düşürür. */
export function Pic({
  src,
  alt,
  width,
  height,
  sizes,
  priority = false,
  className,
  avif,
  avifSrcSet,
  srcSet,
}: Props) {
  const avifSet = avifSrcSet || avif;
  const webpSet = srcSet || src;

  if (avifSet || srcSet) {
    return (
      <picture className={className}>
        {avifSet ? <source srcSet={avifSet} type="image/avif" sizes={sizes} /> : null}
        {webpSet ? <source srcSet={webpSet} type="image/webp" sizes={sizes} /> : null}
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          fetchPriority={priority ? "high" : "auto"}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
        />
      </picture>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      className={className}
    />
  );
}
