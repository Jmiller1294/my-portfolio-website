import Link from "next/link";
import Biography from "./components/Biography";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="bg-slate-900 h-auto w-full font-[family-name:var(--font-geist-sans)]">
      <nav className="flex h-auto w-full bg-slate-900 p-4">
        <div>
          <h1 className="font-extrabold">Justin Miller</h1>
        </div>
        <div className="flex flex-row gap-4 ">
          <Link href="/about" className="text-sm hover:text-gray-700">About</Link>
          <Link href="/skills" className="text-sm hover:text-gray-700">Skills</Link>
          <Link href="/projects" className="text-sm hover:text-gray-700">Projects</Link>
          <Link href="/blog" className="text-sm  hover:text-gray-700">Blog</Link>
          <Link href="/contact" className="text-sm  hover:text-gray-700">Contact</Link>
        </div>
      </nav>
      <main className="flex flex-col h-auto w-full">
        <Biography />
        <Skills />
        <Timeline />
        <Projects />
        <Contact />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm text-gray-500">© 2023 Your Name</p>
          <p className="text-sm text-gray-500">All rights reserved.</p>
        </div>
        <div className="flex gap-4">
          <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-700">Privacy Policy</Link>
          <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-700">Terms of Service</Link>
        </div>
      </footer>
    </div>
  );
}
