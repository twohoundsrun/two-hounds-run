"use client";

import { useEffect, useId, useState } from "react";

const CONTACT_HREF = "mailto:collindk94@gmail.com?subject=Two%20Hounds%20Run%20project";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`site-header${open ? " is-menu-open" : ""}`}>
      <a className="brand" href="#top" aria-label="Two Hounds Run home" onClick={close}>
        <img className="brand-mark" src="/images/two-hounds-mark.png" alt="Two Hounds Run" width={512} height={512} />
      </a>
      <nav className="site-nav" aria-label="Main navigation">
        <a href="#services">Services</a>
        <a href="#work">Work</a>
        <a href="#about">About</a>
      </nav>
      <a className="button button-small header-contact" href="#contact">Start a project <span aria-hidden="true">↗</span></a>
      <button
        type="button"
        className="menu-toggle"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="menu-toggle-bars" aria-hidden="true" />
      </button>
      <div id={menuId} className="mobile-menu" hidden={!open}>
        <nav aria-label="Mobile navigation">
          <a href="#services" onClick={close}>Services</a>
          <a href="#work" onClick={close}>Work</a>
          <a href="#about" onClick={close}>About</a>
          <a className="mobile-menu-contact" href={CONTACT_HREF} onClick={close}>Contact</a>
        </nav>
      </div>
    </header>
  );
}
