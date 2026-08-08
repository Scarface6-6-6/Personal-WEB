import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import TopBar from "../TopBar/TopBar";
import SocialRail from "../SocialRail/SocialRail";
import RightMenu from "../RightMenu/RightMenu";
import "./AppLayout.css";

export default function AppLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const menuPinnedOnHome = isHome;
  const [menuOpen, setMenuOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  const clearCloseTimeout = useCallback(() => {
    if (closeTimeoutRef.current) {
      globalThis.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  const openMenu = useCallback(() => {
    clearCloseTimeout();
    setMenuOpen(true);
  }, [clearCloseTimeout]);

  const closeMenu = useCallback(() => {
    clearCloseTimeout();
    closeTimeoutRef.current = globalThis.setTimeout(() => {
      setMenuOpen(false);
    }, 160);
  }, [clearCloseTimeout]);

  const toggleMenu = useCallback(() => {
    clearCloseTimeout();
    setMenuOpen((prev) => !prev);
  }, [clearCloseTimeout]);

  useEffect(() => {
    if (!isHome) {
      setMenuOpen(false);
    }
  }, [isHome, location.pathname]);

  useLayoutEffect(() => {
    resetScrollPosition(document.scrollingElement);
    resetScrollPosition(document.documentElement);
    resetScrollPosition(document.body);
    resetScrollPosition(document.querySelector(".secondary-layout"));
    resetScrollPosition(document.querySelector(".home__layout"));
  }, [location.pathname]);

  useEffect(() => {
    return () => {
      clearCloseTimeout();
    };
  }, [clearCloseTimeout]);

  return (
    <div className="app-shell">
      <TopBar
        isHome={isHome}
        menuOpen={menuPinnedOnHome || menuOpen}
        onMenuEnter={openMenu}
        onMenuLeave={closeMenu}
        onMenuToggle={toggleMenu}
      />

      {isHome ? (
        <div className="home__layout">
          <SocialRail />
          <main className="home__content">
            <Outlet />
          </main>
          <RightMenu open={menuPinnedOnHome || menuOpen} onHoverStart={openMenu} onHoverEnd={closeMenu} />
        </div>
      ) : (
        <>
          <main className="secondary-layout">
            <Outlet />
          </main>
          <RightMenu open={menuOpen} onHoverStart={openMenu} onHoverEnd={closeMenu} />
        </>
      )}
    </div>
  );
}

function resetScrollPosition(element) {
  if (!element) {
    return;
  }

  element.scrollTop = 0;
  element.scrollLeft = 0;
}

