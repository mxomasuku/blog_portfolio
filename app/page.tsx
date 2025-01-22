import PageHeader from "@/components/PageHeader";
import Image from "next/image";



export default function Home() {
const pageTitle = "Home Page"



  return (
<main >
<PageHeader pageTitle={pageTitle}/>
<div className={"flex gap-4 justify-between"}>
  <div>Hie, I am a software developer who is making a bit of money. Please hire me so that i can make a bit more to take of my girl.</div>

  <div className="rounded-full overflow-hidden w-48 h-48">
  <Image 
      src="/profile.jpg" 
      alt="Profile Picture" 
      width={200} 
      height={200} 
    />

  </div>


</div>

</main>
  );
}




