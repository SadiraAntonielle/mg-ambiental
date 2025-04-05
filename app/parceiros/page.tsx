import React from "react";

import Image from "next/image";

import Navbar from "../componets/navbar/NavBar";

export default function Parceiros(): React.ReactNode {
  return (
    <>
      <header className="w-screen p-8">
        <Navbar props="parceiros" />
      </header>

      <main className="flex gap-3 w-screen h-screen max-h-8/10  px-16 items-center">
        <section className="flex flex-col gap-2 justify-around items-center bg-[#97E1A1] h-full w-full rounded-4xl p-8">
          <h3 className="text-center text-3xl font-black">Nossos Parceiros</h3>
          <div className="grid grid-rows-3 grid-cols-6 gap-4 w-5/6 h-full p-4 transition-all duration-500">
            <Image
              src="/logos/Logo-graal.jpg"
              alt="Logo Graal"
              width={150}
              height={150}
              className="rounded-xl justify-self-center self-center justify-self-center self-center"
            />
            <Image
              src="/logos/ambientalX3.jpeg"
              alt="Logo Ambiental x3"
              width={150}
              height={150}
              className="rounded-xl justify-self-center self-center justify-self-center self-center"
            />
            <Image
              src="/logos/arteris.png"
              alt="Logo Arteris"
              width={150}
              height={150}
              className="rounded-xl justify-self-center self-center"
            />
            <Image
              src="/logos/biolab.jpg"
              alt="Logo Biolab"
              width={150}
              height={150}
              className="rounded-xl justify-self-center self-center"
            />
            <Image
              src="/logos/flora.jpg"
              alt="Logo Flora"
              width={150}
              height={150}
              className="rounded-xl justify-self-center self-center"
            />
            <Image
              src="/logos/forcaaerea.jpg"
              alt="Logo Força Aérea Brasileira"
              width={150}
              height={150}
              className="rounded-xl justify-self-center self-center"
            />
            <Image
              src="/logos/generalmills.jpg"
              alt="Logo General Mills"
              width={150}
              height={150}
              className="rounded-xl justify-self-center self-center"
            />
            <Image
              src="/logos/cimed.jpg"
              alt="Logo Grupo CIMED"
              width={150}
              height={150}
              className="rounded-xl justify-self-center self-center"
            />

            <Image
              src="/logos/grupoTNN.jpg"
              alt="Logo Grupo TNN"
              width={150}
              height={150}
              className="rounded-xl justify-self-center self-center"
            />
            <Image
              src="/logos/manganes.jpg"
              alt="Logo Mangaês Congonhal"
              width={150}
              height={150}
              className="rounded-xl justify-self-center self-center"
            />
            <Image
              src="/logos/martona.jpg"
              alt="Logo Agropecuária Martona"
              width={150}
              height={150}
              className="rounded-xl justify-self-center self-center"
            />
            <Image
              src="/logos/mirantesantabarara.jpg"
              alt="Logo Mirante Santa Bárbara"
              width={150}
              height={150}
              className="rounded-xl justify-self-center self-center"
            />
            <Image
              src="/logos/uniaoQuimica.png"
              alt="Logo União Química"
              width={150}
              height={150}
              className="rounded-xl justify-self-center self-center"
            />
            <Image
              src="/logos/unilever.png"
              alt="Logo Unilever"
              width={150}
              height={150}
              className="rounded-xl justify-self-center self-center"
            />
            <Image
              src="/logos/valeVerde.png"
              alt="Logo Mineração Vale Verde"
              width={150}
              height={150}
              className="rounded-xl justify-self-center self-center"
            />
          </div>
        </section>
      </main>
    </>
  );
}
