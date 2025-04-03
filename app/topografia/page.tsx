import React from "react";

import Image from "next/image";

import Navbar from "../componets/navbar/NavBar";

export default function Topografia(): React.ReactNode {
  return (
    <>
      <header className="w-screen p-8">
        <Navbar props="top" />
      </header>

      <main className="flex gap-3 w-screen h-screen max-h-8/10  px-16 items-center">
        <section className="flex flex-col gap-2 justify-around items-center bg-[#97E1A1] h-full w-1/2 rounded-4xl p-8">
          <Image
            src="/lab01.png"
            alt=""
            width={1000}
            height={1000}
            className="rounded-xl w-2/3 "
          />
          <p className="text-black text-xl">
            Os trabalhos relacionados à Engenharia de Agrimensura nossa empresa
            conta com um grupo de profissionais experientes. Os trabalhos são
            desenvolvidos por engenheiro florestal especialista em
            georreferenciamento, projetista e equipe de topografia. Utilizamos
            de recursos tecnológicos e equipamentos de vanguarda no segmento,
            como GPS Geodésico RTK, Drone e estação total, devidamente aferidos
            e certificados.
          </p>
        </section>

        <aside className="flex flex-col gap-4 justify-around items-center bg-emerald-900 h-full w-1/2 rounded-4xl p-8">
          <div className="text-[#9CE2A4] font-bold text-base">
            <h3>Dentre os trabalhos que desenvolvemos citamos.</h3>
            <p>
              Georreferenciamento de imóvel rural com certificação junto ao
              INCRA e registro no Cartório de Registro de Imóveis
            </p>
            <p>
              Levantamentos Topográficos (perimétrico, planialtimétrico,
              cadastral)
            </p>
            <p>
              Locação de Obras de Infraestrutura (terraplenagem, estacas de
              fundação, rodovias e drenagens)
            </p>
            <p>
              Levantamento e demarcação de limites e confrontações, Nivelamento
              Geométrico{" "}
            </p>
            <p>
              Retificação de Áreas, Desmembramento e remembramento de matrículas
            </p>
            <p>
              Projetos de Terraplenagem, Projetos de Loteamento e Projetos de
              Acessos Rodoviários
            </p>
          </div>
          <Image
            src="/lab02.png"
            alt=""
            width={1000}
            height={1000}
            className="rounded-xl w-2/3 "
          />
        </aside>
      </main>
    </>
  );
}
