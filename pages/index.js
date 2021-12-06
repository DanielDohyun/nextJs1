//used when you want custom title, meta-tags, keywords, desc, etc
import Head from "next/head";

//lowercase for pages, and uppercase for components

export default function Home() {
  return (
    <div>
      <Head>
        <title>My first NextJS app </title>
        <meta name="keywords" content="NextJS" />
      </Head>
      <h1>first nextJS app</h1>
    </div>
  );
}
