import Header from "@/components/header";
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react";

export default function Home() {
  return (
    <main>
      <div>
        <Header/>
      </div>
      <div>
      <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none lg:text-6xl/none">
                Felype Moura
              </h1>
              <p className="text-gray-500 dark:text-gray-400">Front-end Engineer</p>
            </div>
            <div className="mx-auto w-full max-w-prose space-y-4">
              <p className="text-gray-500 dark:text-gray-400">
                I build accessible and performant web experiences. I love creating beautiful UIs with a focus on user
                experience. Let's make the web a better place together.
              </p>
              <Button variant="outline">
                <Link href="/">
                  Contact me
                </Link>
              </Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t" id="skils">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                I'm experienced with modern front-end technologies and frameworks.
              </p>
            </div>
            <div className="mx-auto grid max-w-sm grid-cols-2 max-sm:grid-cols-2 items-center justify-center gap-4">
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <img
                  alt="Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  height="70"
                  src="https://img.icons8.com/color/48/html-5--v1.png"
                  width="140"
                />
              </div>
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <img
                  alt="Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  height="70"
                  src="https://img.icons8.com/color/48/css3.png"
                  width="140"
                />
              </div>
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <img
                  alt="Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  height="70"
                  src="https://img.icons8.com/fluency/48/javascript.png"
                  width="140"
                />
              </div>
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <img
                  alt="Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  height="70"
                  src="https://img.icons8.com/plasticine/100/react.png"
                  width="140"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t" id="projects">
          <header className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Explore a selection of my latest web development projects, showcasing my skills and creativity.
                </p>
          </header>
          <div className="text-center ">
            <h2 className="text-3xl pt-16 font-semibold">coming soon...</h2>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Acme Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
      </div>
    </main>
  );
}

function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}