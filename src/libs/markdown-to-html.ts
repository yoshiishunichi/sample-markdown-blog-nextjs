import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

export const markdownToHtml = async (markdownContent: string) => {
  const result = await remark().use(remarkGfm).use(remarkHtml).process(markdownContent);
  return result.toString();
};
