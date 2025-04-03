import React from "react";

import Image from "next/image";

import Navbar from "../componets/navbar/NavBar";

export default function Engenharia(): React.ReactNode {
  return (
    <>
      <header className="w-screen p-8">
        <Navbar props="eng" />
      </header>

      <main className="flex gap-3 w-screen h-screen max-h-8/10  px-16 items-center">
        <section className="flex flex-col justify-around items-center bg-emerald-900 h-full w-1/2 rounded-4xl p-8">
          <p className="text-[#9CE2A4] text-xl">
            Para o desenvolvimento dos trabalhos relacionados à Engenharia
            Ambiental nossa empresa conta com uma equipe multidisciplinar com
            experiência acumulada desde 2004, como engenheiro ambiental,
            engenheiro de minas, engenheiro florestal, engenheiro químico,
            engenheiro civil, biólogo, gestor ambiental, técnico ambiental,
            projetista e técnico em tecnologia da informação. Estamos
            extremamente aptos a desenvolver os mais diversos trabalhos para
            atendimento ao licenciamento ambiental, mitigação de impactos
            ambientais, medidas de controle ambiental e compensação ambiental,
            onde podemos citar.
          </p>
          <Image
            src="/eng01.jpg"
            alt=""
            width={1000}
            height={1000}
            className="rounded-xl w-2/3 "
          />
        </section>

        <aside className="flex flex-col gap-4 justify-around items-center bg-[#97E1A1] h-full w-1/2 rounded-4xl p-8">
          <Image
            src="/engambiental.png"
            alt=""
            width={1000}
            height={1000}
            className="rounded-xl w-2/3 "
          />
          <div className="text-black font-bold text-base">
            <p>Relatório Ambiental Simplificado (RAS)</p>
            <p>
              Relatório de Controle Ambiental (RCA) e Plano de Controle
              Ambiental (PCA)
            </p>
            <p>Relatório de Desempenho Ambiental (RAD)</p>
            <p>Plano de Recuperação de Áreas Degradadas (PRAD)</p>
            <p>Projetos de Reflorestamento e Reconstituição de Flora (PTRF)</p>
            <p>
              Relatório e Laudo Técnico para Averbação de Reserva Legal Cadastro
              Ambiental Rural (CAR)
            </p>
            <p>
              Orientação e condução de processos de Licenciamento Ambientais
              (LP, LI e LO) junto aos órgãos federais, estaduais e municipais
            </p>
            <p>Projetos de Arborização Urbana </p>
            <p>Levantamento de Passivos Ambientais </p>
            <p>Projetos de Tratamento de Efluentes Líquidos</p>
          </div>
        </aside>
      </main>
    </>
  );
}
