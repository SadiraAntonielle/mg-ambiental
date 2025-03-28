import React from "react";
{
  /* import Image from "next/image"; */
}
import Link from "next/link";

const Navbar = (): React.ReactNode => {
  return (
    <nav className="w-full rounded-3xl flex justify-around !p-4 bg-zinc-900">
      <div className="flex shrink-0 gap-1">
        {/* <Image src="" width={100} height={100} alt="Logo" /> */}
        <h1 className="text-white font-black">MG Ambiental</h1>
      </div>

      <ul className="flex gap-3 text-white">
        <li className="text-emerald-600 font-bold hover:text-emerald-600">
          <Link href="/">Inicio</Link>
        </li>
        <li className="font-bold hover:text-emerald-600">
          <Link href="/sobre-nos">Sobre nós</Link>
        </li>
        <li className="font-bold hover:text-emerald-600">
          <Link href="/laboratorio">Laboratório de Análises Ambientais</Link>
        </li>
        <li className="font-bold hover:text-emerald-600">
          <Link href="/engenharia">Engenharia Ambiental</Link>
        </li>
        <li className="font-bold hover:text-emerald-600">
          <Link href="/contato">Entre em Contato</Link>
        </li>
        <li className="font-bold hover:text-emerald-600">
          <Link href="/parceiros">Parceiros</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
