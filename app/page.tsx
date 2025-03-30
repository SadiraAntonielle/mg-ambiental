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

          <nav className="flex justify-center gap-3 mt-10">
            <Link
              className="bg-emerald-800 p-2 rounded-2xl font-black hover:bg-emerald-900 text-center"
              href="*"
            >
              Laboratório de Análises Ambientais
            </Link>
            <Link
              className="bg-emerald-800 p-2 rounded-2xl font-black hover:bg-emerald-900 text-center"
              href="*"
            >
              Engenharia Ambiental
            </Link>
            <Link
              className="bg-emerald-800 p-2 rounded-2xl font-black hover:bg-emerald-900 text-center"
              href="*"
            >
              Topografia e Georreferenciamento
            </Link>
          </nav>
        </section>

        <aside className="max-w-1/2 w-full h-full grid grid-cols-2 p-2">
          <div className="border border-amber-50 justify-self-end self-end">
            teste 1
          </div>
          <div className="border border-amber-50 justify-self-stretch self-center">
            teste 2
          </div>
          <div className="border border-amber-50">teste 3</div>
          <div className="border border-amber-50 justify-self-start self-start">
            teste 4
          </div>
          <div className="col-start-2 border border-amber-50 justify-self-stretch self-center">
            teste 5
          </div>
        </aside>
      </main>
      <footer></footer>
    </>
  );
}
