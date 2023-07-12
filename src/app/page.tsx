import Select from "@/components/Select";
import { Code2, Github, Heart, ImageIcon, WalletCards } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <nav className="sticky flex flex-1 justify-evenly gap-52 border-b  border-b-zinc-800/75 text-sm font-medium">
        <div>
          <ul className="flex h-16 items-center gap-8">
            <li>
              <a href="">Gradients</a>
            </li>
            <li>
              <a href="">Generator</a>
            </li>
            <li>
              <a href="">Mesh</a>
            </li>
            <li>
              <a href="">Grainy</a>
            </li>
            <li>
              <a href="">Favourite</a>
            </li>
            <li>
              <a href="">Flags</a>
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex h-16 items-center gap-8">
            <li>
              <a href="">Jordi</a>
            </li>
            <li>
              <a href="">Mark</a>
            </li>
            <li className="flex h-5 w-5 items-center justify-center rounded-full bg-white">
              <a href="">
                <Github size={15} className="mt-1 text-zinc-900" fill="" />
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <section className="mx-auto flex flex-col px-4 py-16 text-center">
        <h2 className="order-first bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text font-medium tracking-wide text-transparent">
          Gradients for Tailwind CSS
        </h2>
        <h1 className="mt-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text  text-7xl font-extrabold uppercase tracking-tighter text-transparent">
          HYPERCOLOR
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-xl font-medium text-white">
          A curated collection of beautiful Tailwind CSS gradients using the
          full range of Tailwind CSS colors. Easily copy and paste the class
          names, CSS or even save the gradients as an image.
        </p>
      </section>

      <section className="mt-10 justify-center">
        <div className="mx-auto flex max-w-7xl flex-wrap  justify-evenly gap-8 ">
          <article className="relative">
            <button className="absolute right-4 top-4 rounded-full  bg-gray-800 p-2.5 text-white transition-colors  ">
              <Heart fill="white" />
            </button>
            <div className="h-64 w-96 rounded-3xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div>
            <div className="mx1.5 -mt-6 rounded-3xl bg-gray-900 p-6 text-white">
              <p className="font-semibold">HYPER</p>
              <div className="mt-4 flex items-center gap-4">
                <div>
                <Select/>
                </div>
                <div className="flex items-center gap-2">
                  <button className="rounded-xl bg-gray-800/75 p-2.5 transition-colors hover:text-pink-500">
                    <WalletCards size={16} />
                  </button>
                  <button className="rounded-xl bg-gray-800/75 p-2.5 transition-colors hover:text-pink-500">
                    <Code2 size={16} />
                  </button>
                  <button className="rounded-xl bg-gray-800/75 p-2.5 transition-colors hover:text-pink-500">
                    <ImageIcon size={16} />
                  </button>
                </div>
              </div>
            </div>
          </article>
          <article className="relative">
            <button className="absolute right-4 top-4 rounded-full  bg-gray-800 p-2.5 text-white transition-colors  ">
              <Heart fill="white" />
            </button>
            <div className="h-64 w-96 rounded-3xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></div>
            <div className="mx1.5 -mt-6 rounded-3xl bg-gray-900 p-6 text-white">
              <p className="font-semibold">OCEANIC</p>
              <div className="mt-4 flex items-center gap-4">
                <div>
                <Select/>
                </div>
                <div className="flex items-center gap-2">
                  <button className="rounded-xl bg-gray-800/75 p-2.5 transition-colors hover:text-pink-500">
                    <WalletCards size={16} />
                  </button>
                  <button className="rounded-xl bg-gray-800/75 p-2.5 transition-colors hover:text-pink-500">
                    <Code2 size={16} />
                  </button>
                  <button className="rounded-xl bg-gray-800/75 p-2.5 transition-colors hover:text-pink-500">
                    <ImageIcon size={16} />
                  </button>
                </div>
              </div>
            </div>
          </article>
          <article className="relative">
            <button className="absolute right-4 top-4 rounded-full  bg-gray-800 p-2.5 text-white transition-colors  ">
              <Heart fill="white" />
            </button>
            <div className="h-64 w-96 rounded-3xl bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"></div>
            <div className="mx1.5 -mt-6 rounded-3xl bg-gray-900 p-6 text-white">
              <p className="font-semibold">COTTON CANDY</p>
              <div className="mt-4 flex items-center gap-4">
                <div>
                <Select/>
                </div>
                <div className="flex items-center gap-2">
                  <button className="rounded-xl bg-gray-800/75 p-2.5 transition-colors hover:text-pink-500">
                    <WalletCards size={16} />
                  </button>
                  <button className="rounded-xl bg-gray-800/75 p-2.5 transition-colors hover:text-pink-500">
                    <Code2 size={16} />
                  </button>
                  <button className="rounded-xl bg-gray-800/75 p-2.5 transition-colors hover:text-pink-500">
                    <ImageIcon size={16} />
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
