import Image from "next/image";
import { asset, assetSet } from "@/lib/paths";

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
        {avifSet ? <source srcSet={assetSet(avifSet)} type="image/avif" sizes={sizes} /> : null}
        {webpSet ? <source srcSet={assetSet(webpSet)} type="image/webp" sizes={sizes} /> : null}
        <img
          src={asset(src)}
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
      src={asset(src)}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      className={className}
    />
  );
}
