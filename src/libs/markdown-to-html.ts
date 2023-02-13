import { remark } from "remark";
import remarkHtml from "remark-html";

export const markdownToHtml = async (markdownContent: string) => {
  const result = await remark().use(remarkHtml).process(markdownContent);
  return result.toString();
};
