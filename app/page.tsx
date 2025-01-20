import PageHeader from "@/components/PageHeader";
import { getCategorisedArticles } from "@/lib/articles";



export default function Home() {
const pageTitle = "Home Page"



  return (
<main >
<PageHeader pageTitle={pageTitle}/>
</main>
  );
}




