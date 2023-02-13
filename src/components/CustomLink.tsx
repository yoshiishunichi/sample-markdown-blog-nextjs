import Link from "next/link";
import { AnchorHTMLAttributes, FC } from "react";

const CustomLink: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({ href, children }) => {
  return href?.startsWith("/") ? (
    <Link href={href}>{children}</Link>
  ) : (
    <a href={href} rel="noreferrer" target="_blank">
      {children}
    </a>
  );
};

export default CustomLink;
