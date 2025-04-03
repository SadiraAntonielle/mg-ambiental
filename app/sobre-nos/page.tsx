import React from "react";
import Image from "next/image";

import Navbar from "../componets/navbar/NavBar";

export default function SobreNos(): React.ReactNode {
  return (
    <>
      <header className="w-screen p-8">
        <Navbar props="SobreNos" />
      </header>

      <main className="flex gap-3 w-screen h-screen max-h-8/10  px-16 items-center">
        <section className="flex flex-col justify-around items-center bg-emerald-900 h-full w-1/2 rounded-4xl p-8">
          <p className="text-[#9CE2A4] text-xl">
            A empresa MG Ambiental está localizada na cidade de Pouso Alegre e
            atua no mercado nacional desde 05 de junho de 2004. Somos
            especializados em serviços de engenharia ambiental, análises
            ambientais, topografia e georreferenciamento. Já são mais de 3000
            projetos desenvolvidos e mais de 1000 Licenças Ambientais obtidas
            junto aos órgãos municipais, estaduais e federais. Atualmente a
            empresa conta com mais de 200 clientes com trabalhos já
            desenvolvidos e em desenvolvimento nos estados de Minas Gerais,
            Bahia, São Paulo, Pará e Tocantis.
          </p>
          <Image
            src="/mgambiental02.jpg"
            alt=""
            width={1000}
            height={1000}
            className="rounded-xl w-2/3 "
          />
        </section>

        <aside className="flex flex-col justify-around items-center bg-[#97E1A1] h-full w-1/2 rounded-4xl p-8">
          <Image
            src="/placa.jpg"
            alt=""
            width={1000}
            height={1000}
            className="rounded-xl w-2/3 "
          />
          <p className="text-black text-xl">
            Buscamos sempre a excelência na qualidade e agilidade dos serviços e
            assim nos consolidamos como referência em serviços de consultoria
            ambiental. E desta forma, atender às expectativas de nossos
            clientes. Nossa equipe está em constante treinamento e sempre
            adquirindo novos conhecimentos em tecnologias, recursos de
            informática e principalmente na qualificação técnica através de
            cursos, participação em simpósios, congressos e seminários. E assim
            continuamos escrevendo nossa história e nos consolidando no mercado,
            na vanguarda dos serviços de consultoria ambiental.
          </p>
        </aside>
      </main>
    </>
  );
}
