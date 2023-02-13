import { Fragment, createElement, ReactElement } from "react";
import rehypeRaw from "rehype-raw";
import rehypeReact from "rehype-react";
import { remark } from "remark";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";

import CustomLink from "components/CustomLink";

export const markdownToReactElement = (markdownContent: string): ReactElement => {
  return remark()
    .use(remarkGfm)
    .use(remarkBreaks)
    .use(remarkRehype, {
      allowDangerousHtml: true,
    })
    .use(rehypeRaw)
    .use(rehypeReact, {
      Fragment,
      components: {
        a: CustomLink,
      },
      createElement,
    })
    .processSync(markdownContent).result;
};
