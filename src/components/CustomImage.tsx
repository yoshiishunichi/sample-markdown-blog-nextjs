import Image from "next/image";
import { FC, ImgHTMLAttributes } from "react";

const CustomImage: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ src, alt, width, height }) => {
  if (!src) return <span>src が指定されていません。</span>;

  return width && height ? (
    <Image alt={alt ?? "alt なし"} height={Number(height)} src={src} width={Number(width)} />
  ) : (
    <img alt={alt ?? "alt なし"} height={height} src={src} width={width} />
  );
};

export default CustomImage;
