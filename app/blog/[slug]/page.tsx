import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { getArticleData } from "@/lib/articles";
import PageHeader from "@/components/PageHeader";

const Article = async ({ params }: { params: { slug: string } }) => {
  const articleData = await getArticleData(params.slug);

  return (
    <section className="mx-auto w-10/12 mt-20 flex flex-col gap-5">
      <div className="flex justify-between font-poppins">
        <Link href="/" className="flex flex-row gap-1 items-center">
          <ArrowLeftIcon width={20} />
          <p>Back to home</p>
        </Link>
        <p>{new Date(articleData.date).toLocaleDateString()}</p>
      </div>
      <PageHeader pageTitle={articleData.title} />
      <article className="article" dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
    </section>
  );
};

export default Article;