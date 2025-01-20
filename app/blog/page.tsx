import ArticleItemList from "@/components/ArticleItemList";
import PageHeader from "@/components/PageHeader";
import { getCategorisedArticles } from "@/lib/articles";

const Blog = () => {

    const articles = getCategorisedArticles()  
    const pageTitle = "Welcome to my blog"
    
    
  return (
    <>
    <PageHeader pageTitle={pageTitle} />


<section className="md:grid md:grid-cols-2 flex flex-col gap-10">

  {articles !== null && Object.keys(articles).map((article) => <ArticleItemList category={article} articles={articles[article]} key={article}/>) }

</section> 
    </>

  )
}

export default Blog