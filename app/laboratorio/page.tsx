import React from "react";

import Image from "next/image";

import Navbar from "../componets/navbar/NavBar";

export default function Laboratorio(): React.ReactNode {
  return (
    <>
      <header className="w-screen p-8">
        <Navbar props="lab" />
      </header>

      <main className="flex gap-3 w-screen h-screen max-h-8/10  px-16 items-center">
        <section className="flex flex-col gap-2 justify-around items-center bg-[#97E1A1] h-full w-1/2 rounded-4xl p-8">
          <Image
            src="/lab01.png"
            alt=""
            width={1000}
            height={1000}
            className="rounded-xl justify-self-center self-center w-2/3 "
          />
          <p className="text-black text-xl">
            O laboratório da MG Ambiental está se estruturando para atender as
            mais variadas demandas em ensaios analíticos no que se refere a
            legislação ambiental vigente. Para tal, estamos fortalecendo nossa
            parte instrumental com equipamentos robustos de marcas líderes no
            mercado (Shimadzu®, Bruker®; Merck Millipore®), a fim de atender
            os mais variados parâmetros futuramente. Nossos colaboradores estão
            em constante capacitação nos melhores e mais atualizados centros de
            ensino e pesquisa brasileiro (USP, UNICAMP e IFSULDEMINAS), pois
            norteamos o aprimoramento em nossa gestão laboratorial.
          </p>
        </section>

        <aside className="flex flex-col justify-around items-center bg-emerald-900 h-full w-1/2 rounded-4xl p-8">
          <p className="text-[#9CE2A4] text-xl">
            Nossa equipe almeja obter nos ensaios realizados um elevado rigor
            analítico que contribuirá para os nossos resultados, obtendo assim a
            confiabilidade. Neste ano passaremos por apreciação da Rede
            Metrológica de Minas Gerais, para isso nossa estrutura e gestão está
            se adaptando para atender a ISO 17025/2017, norma que insere os
            conceitos de imparcialidade, confidencialidade; responsabilidade,
            rastreabilidade e sistema de gestão laboratorial. Em breve teremos
            grandes novidades...
          </p>
          <Image
            src="/lab02.png"
            alt=""
            width={1000}
            height={1000}
            className="rounded-xl justify-self-center self-center w-2/3 "
          />
        </aside>
      </main>
    </>
  );
}
