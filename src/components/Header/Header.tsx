import { useCallback, useEffect, useState } from "react";
import "./Header.css";

type NavLink = { label: string; href: string };

const LINKS: NavLink[] = [
  { label: "Лор", href: "#" },
  { label: "Медиа", href: "#" },
  { label: "Игра", href: "#" },
  { label: "Сообщество", href: "#" },
  { label: "Награды", href: "#" },
  { label: "Контакты", href: "#" },
];

function IconSearch() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M10.5 3a7.5 7.5 0 1 1 4.72 13.33l4.22 4.21a1 1 0 0 1-1.42 1.42l-4.2-4.2A7.5 7.5 0 0 1 10.5 3Zm0 2a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11Z"
      />
    </svg>
  );
}

function IconGlobe() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 1 1 0 20a10 10 0 0 1 0-20Zm7.93 9h-3.14a15.7 15.7 0 0 0-1.16-5.03A8.02 8.02 0 0 1 19.93 11ZM12 4c-.76 0-1.82 1.48-2.5 5h5C13.82 5.48 12.76 4 12 4ZM8.37 5.97A15.7 15.7 0 0 0 7.21 11H4.07a8.02 8.02 0 0 1 4.3-5.03ZM4.07 13h3.14c.22 1.83.7 3.61 1.16 5.03A8.02 8.02 0 0 1 4.07 13ZM12 20c.76 0 1.82-1.48 2.5-5h-5c.68 3.52 1.74 5 2.5 5Zm3.63-1.97c.46-1.42.94-3.2 1.16-5.03h3.14a8.02 8.02 0 0 1-4.3 5.03ZM9.24 13h5.52c-.07 1.92-.36 3.71-.74 5H9.98c-.38-1.29-.67-3.08-.74-5Zm.74-2h4.04c.38 1.29.67 3.08.74 5H9.24c.07-1.92.36-3.71.74-5Z"
      />
    </svg>
  );
}

function IconMenu() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm0 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm1 5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5Z"
      />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M18.3 5.71a1 1 0 0 1 0 1.41L13.41 12l4.89 4.88a1 1 0 1 1-1.41 1.42L12 13.41l-4.88 4.89a1 1 0 0 1-1.42-1.41L10.59 12L5.7 7.12A1 1 0 0 1 7.12 5.7L12 10.59l4.88-4.89a1 1 0 0 1 1.42.01Z"
      />
    </svg>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const focusSearch = useCallback(() => {
    const el = document.getElementById(
      "search-input"
    ) as HTMLInputElement | null;
    if (el) el.focus();
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="header__inner">
        <a href="#" className="header__logo" aria-label="Arcane Crystals">
          {/* public assets лучше подключать от корня: /logo.svg :contentReference[oaicite:1]{index=1} */}
          <img src="/logo.svg" alt="logo" />
        </a>

        <nav className="header__nav" aria-label="Навигация">
          {LINKS.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <input type="text" placeholder="Поиск" disabled />
          <button className="login" type="button">
            Войти
          </button>
          <button className="download" type="button">
            Скачать
          </button>
        </div>

        {/* Мобильные иконки */}
        <div className="header__mobileIcons" aria-label="Мобильные действия">
          <button
            className="header__iconBtn"
            type="button"
            onClick={focusSearch}
            aria-label="Поиск"
          >
            <IconSearch />
          </button>
          <button
            className="header__iconBtn header__iconBtn--ring"
            type="button"
            aria-label="Язык / Регион"
          >
            <IconGlobe />
          </button>
          <button
            className="header__iconBtn"
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Открыть меню"
          >
            <IconMenu />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="header__mobileOverlay"
          role="dialog"
          aria-modal="true"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="header__mobileMenu"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="header__mobileTop">
              <span className="header__mobileTitle">Меню</span>
              <button
                className="header__iconBtn"
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Закрыть меню"
              >
                <IconClose />
              </button>
            </div>

            <nav
              className="header__mobileNav"
              aria-label="Навигация (мобильная)"
            >
              {LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="header__mobileButtons">
              <button className="login" type="button">
                Войти
              </button>
              <button className="download" type="button">
                Скачать
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
