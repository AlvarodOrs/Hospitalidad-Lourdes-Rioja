"use client";
import Link from "next/link";

import { useScrollNav } from "@/hooks/scrollNav";


export default function Nav({ theme }: { theme: string }) {
  useScrollNav();
  return (
    <nav id="main-nav">
      <Link href="/" className="nav-logo">
        <img
          src="/assets/images/icon/LOGOv1.3.png"
          alt="Hospitalidad Logo"
          className="nav-logo-img"
        />
        Hospitalidad · La Rioja
      </Link>
      <div className="nav-right">
        <ul className="nav-links">
          <li><Link href="/Nosotros">Quiénes somos</Link></li>

          <li className="dropdown">
            <a href="#">Actividades</a>
            <ul className="dropdown-menu">
              <li><Link href="/Peregrinacion">Peregrinación</Link></li>
              <li><Link href="/Actividades">Otras Actividades</Link></li>
            </ul>
          </li>

          <li><a href="#saber-mas">Saber más</a></li>
          <li><a href="#revista">Revista</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}