"use client";

import Image from "next/image";
import { useState } from "react";
import { Icon } from "./site-icon";

const links = [
  ["Visão", "#visao"],
  ["A Fink", "#quem-somos"],
  ["Compromisso", "#compromisso"],
  ["Atuação", "#atuacao"],
  ["Frota", "#frota"],
];

export function Header({ whatsappUrl }: { whatsappUrl: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a href="#inicio" className="wordmark" aria-label="Transportes Fink">
        <Image
          src="/images/logo-transportes-fink.png"
          alt="Transportes Fink"
          width={1400}
          height={585}
          priority
        />
      </a>
      <nav
        className={open ? "navigation navigation-open" : "navigation"}
        aria-label="Navegação principal"
      >
        {links.map(([label, href]) => (
          <a href={href} key={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
      <a href={whatsappUrl} target="_blank" rel="noreferrer" className="nav-quote">
        Contatar <Icon name="arrow" />
      </a>
      <button
        className="nav-toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Abrir menu"
      >
        <span />
        <span />
      </button>
    </header>
  );
}
