import React from "react";
{
  /* import Image from "next/image"; */
}
import Link from "next/link";

const Navbar = (): React.ReactNode => {
  return (
    <nav className="w-full rounded-full flex justify-around !p-4 bg-[#181818]">
      <div className="flex shrink-0 gap-1">
        {/* <Image "/mgambiental02.jpg""" width={100} height={100} alt="Logo" /> */}
        <h1 className="text-white font-black">MG Ambiental</h1>
      </div>

      <ul className="flex gap-3 text-white">
        <li className="text-emerald-600 font-bold hover:text-emerald-600">
          <Link href="">Inicio</Link>
        </li>
        <li className="font-bold hover:text-emerald-600">
          <Link href="">Sobre nós</Link>
        </li>
        <li className="font-bold hover:text-emerald-600">
          <Link href="">Laboratório de Análises Ambientais</Link>
        </li>
        <li className="font-bold hover:text-emerald-600">
          <Link href="">Engenharia Ambiental</Link>
        </li>
        <li className="font-bold hover:text-emerald-600">
          <Link href="">Entre em Contato</Link>
        </li>
        <li className="font-bold hover:text-emerald-600">
          <Link href="">Parceiros</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
