//used when you want custom title, meta-tags, keywords, desc, etc
import Head from "next/head";
import ArticleList from "../components/ArticleList";

//lowercase for pages, and uppercase for components

export default function Home({ articles }) {
  // console.log(articles);

  return (
    <div>
      <Head>
        <title>My first NextJS app </title>
        <meta name="keywords" content="NextJS" />
      </Head>
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
