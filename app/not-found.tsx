import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-xl text-muted-foreground mb-8">
                Oohhh buddy buddy buddy!! How did you get here? I probably deleted this page for some reason. You can go back to the home page now.
            </p>
            <Link href="/">
                <Button>Go Back Home</Button>
            </Link>
        </div>
    );
}
