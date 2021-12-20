//used when you want custom title, meta-tags, keywords, desc, etc
import ArticleList from "../components/ArticleList";
import { server } from "../config";

//lowercase for pages, and uppercase for components

export default function Home({ articles }) {
  // console.log(articles);

  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  console.log(server);
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

// export const getStaticProps = async () => {
//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/posts?_limit=6"
//   );
//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };
