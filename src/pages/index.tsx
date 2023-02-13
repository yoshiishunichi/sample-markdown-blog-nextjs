import Link from "next/link";

import { getAllSlug } from "libs/get-all-slug";

import type { GetStaticProps, NextPage } from "next";

type HomeProps = {
  slugs: string[];
};

const Home: NextPage<HomeProps> = ({ slugs }) => {
  return (
    <div className="container">
      <h1>記事一覧</h1>
      <ul>
        {slugs.map((slug, i) => {
          return (
            <li key={i}>
              <Link href={`/blogs/${slug}`}>{slug}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = () => {
  return {
    props: {
      slugs: getAllSlug("contents"),
    },
  };
};

export default Home;
