import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { getAllSlug } from "libs/get-all-slug";
import { getMarkdown } from "libs/get-markdown";
import { markdownToReactElement } from "libs/markdown-to-react-element";

type BlogDetailPageProps = {
  markdownContent: string;
};

const BlogDetailPage: NextPage<BlogDetailPageProps> = ({ markdownContent }) => {
  return <div className="container">{markdownToReactElement(markdownContent)}</div>;
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    fallback: false,
    paths: getAllSlug("contents").map((slug) => {
      return {
        params: {
          slug,
        },
      };
    }),
  };
};

export const getStaticProps: GetStaticProps<BlogDetailPageProps> = ({ params }) => {
  const slug = params?.slug;

  return {
    props: {
      markdownContent: getMarkdown(`contents/${slug}.md`).content,
    },
  };
};

export default BlogDetailPage;
