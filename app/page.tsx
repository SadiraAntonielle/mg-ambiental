import React from "react";
import Image from "next/image";
import Link from "next/link";

import Navbar from "./componets/navbar/NavBar";

export default function Home(): React.ReactNode {
  return (
    <>
      <header className="w-screen p-8">
        <Navbar />
      </header>
      <main className="flex gap-3 w-screen h-screen max-h-2/3 py-8 px-16 items-center">
        <section className="max-w-1/2 w-full p-2">
          <h1 className="font-bold text-8xl">Ma Ambiental</h1>
          <h3 className="text-3xl">
            Bem-vindo à maior empresa de consultoria ambiental do Sul de Minas
            Gerais.
          </h3>

          <nav className="flex justify-center gap-3 mt-10 text-white">
            <Link
              className="bg-emerald-800 p-4 rounded-2xl font-black hover:bg-emerald-900 text-center"
              href="*"
            >
              Laboratório de Análises Ambientais
            </Link>
            <Link
              className="bg-emerald-800 p-4 rounded-2xl font-black hover:bg-emerald-900 text-center"
              href="*"
            >
              Engenharia Ambiental
            </Link>
            <Link
              className="bg-emerald-800 p-4 rounded-2xl font-black hover:bg-emerald-900 text-center"
              href="*"
            >
              Topografia e Georreferenciamento
            </Link>
          </nav>
        </section>

        <aside className="max-w-1/2 w-full h-full grid grid-cols-2 gap-6 p-2">
          <Image
            src="/mgambiental02.jpg"
            alt=""
            width={1000}
            height={1000}
            className="rounded-xl w-2/3 h-full justify-self-end self-end"
          />
          <Image
            src="/lab01.png"
            alt=""
            width={1000}
            height={1000}
            className="rounded-xl w-full h-2/3 justify-self-stretch self-center"
          />
          <Image
            src="/placa.jpg"
            alt=""
            width={1000}
            height={1000}
            className="rounded-xl border"
          />
          <Image
            src="/topgrafia.png"
            alt=""
            width={1000}
            height={1000}
            className="rounded-xl w-1/2 h-1/2 justify-self-start self-start"
          />
        </aside>
      </main>
    </>
  );
}
