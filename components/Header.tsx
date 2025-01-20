import Link from "next/link"
import {Button} from "./ui/button"
import { ModeToggle } from "./ModeToggler"
import Nav from "./Nav"


const Header = () => {
  return (
<header className="py-8 xl:py-12bg-pink-50/20">
<div className="container flex  mx-auto justify-between items-center">
    <Link href={'/'}>
        <h1 className="text-4xl font-semibold">
            Mxo<span className="text-accent">.</span>
        </h1>
    </Link>

    {/* desktop */}
    <div className="hidden md:flex items-center gap-8 ">
<Nav/>
<Link href={"/contact"}>
<Button>Contact Me</Button>


</Link>

<ModeToggle/>
</div>


<div className="md:hidden">
mobile nav
</div>


</div>



</header>

  )
}

export default Header