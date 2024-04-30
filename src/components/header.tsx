import Link from "next/link";
import { ModeToggle } from "./modeTogle";

export default function Header() {
    return (
      <main className="flex justify-around items-center py-4">
        <div>
            <img className="h-10 rounded-md" src="https://github.com/lypekjkj.png" />
        </div>
        <div className="flex items-center gap-4 sm:gap-6">
            <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                Projects
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                About
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                Contact
            </Link>
            </nav>
            <ModeToggle/>
        </div>
      </main>
    );
  }
  