import Link from "next/link";
import { ModeToggle } from "./modeTogle";
import { Button } from "./ui/button";

export default function Header() {
    return (
      <main className="flex justify-around items-center py-4">
        <div>
            <img className="h-10 rounded-md" src="https://github.com/lypekjkj.png" />
        </div>
        <div className="flex items-center gap-4 sm:gap-6">
            <nav className="ml-auto flex gap-4 sm:gap-6 text-muted-foreground">
                <Link className="text-sm font-medium hover:text-foreground transition-all" href="#projects">
                    Projects
                </Link>
                <Link className="text-sm font-medium hover:text-foreground transition-all" href="#skils">
                    Skils
                </Link>
                <Link className="text-sm font-medium hover:text-foreground transition-all" href="#">
                    Contact
                </Link>
            </nav>
            <ModeToggle/>
        </div>
      </main>
    );
  }
  