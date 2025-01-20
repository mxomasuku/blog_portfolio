import { getCategorisedArticles } from "@/lib/articles";
import ArticleItemList from "@/components/ArticleItemList";
import Header from "@/components/Header";

export default function Home() {

  const articles = getCategorisedArticles()

  console.log(articles, "logged")
  return (
<main className="mx-auto w-11/12 md:w-1/2 flex flex-col gap-16 mb-20">
<Header/>

</main>
  );
}




{/* <header className="font-cormorantGaramond font-light text-6xl text-neutral-900 text-center">
  <h1>Welcome to my blog</h1>
</header>
<section className="md:grid md:grid-cols-2 flex flex-col gap-10">

  {articles !== null && Object.keys(articles).map((article) => <ArticleItemList category={article} articles={articles[article]} key={article}/>) }

</section> */}