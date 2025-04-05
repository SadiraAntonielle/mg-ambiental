import React from "react";
{
  /* import Image from "next/image"; */
}
import Link from "next/link";

const Navbar = ({ props }: { props: string }): React.ReactNode => {
  console.log(props, "props");
  return (
    <nav className="w-full rounded-full flex justify-around !p-4 bg-[#181818]">
      <div className="flex shrink-0 gap-1">
        {/* <Image "/mgambiental02.jpg""" width={100} height={100} alt="Logo" /> */}
        <h1 className="text-white font-black">MG Ambiental</h1>
      </div>

      <ul className="flex gap-3 font-bold text-white">
        <li
          className={
            props === "" ? "text-emerald-600  " : "hover:text-emerald-600"
          }
        >
          <Link href="/">Inicio</Link>
        </li>
        <li
          className={
            props === "SobreNos"
              ? "text-emerald-600  "
              : "hover:text-emerald-600"
          }
        >
          <Link href="sobre-nos">Sobre nós</Link>
        </li>
        <li
          className={
            props === "lab" ? "text-emerald-600  " : "hover:text-emerald-600"
          }
        >
          <Link href="laboratorio">Laboratório de Análises Ambientais</Link>
        </li>
        <li
          className={
            props === "eng" ? "text-emerald-600  " : "hover:text-emerald-600"
          }
        >
          <Link href="engenharia">Engenharia Ambiental</Link>
        </li>
        <li
          className={
            props === "top" ? "text-emerald-600  " : "hover:text-emerald-600"
          }
        >
          <Link href="topografia">Topografia</Link>
        </li>

        <li
          className={
            props === "contato"
              ? "text-emerald-600  "
              : "hover:text-emerald-600"
          }
        >
          <Link href="">Entre em Contato</Link>
        </li>
        <li
          className={
            props === "parceiros"
              ? "text-emerald-600  "
              : "hover:text-emerald-600"
          }
        >
          <Link href="parceiros">Parceiros</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
