import React, { useState } from "react";

function MenuButton({
  showMobileMenu,
  handleShowMobileMenu,
}: {
  showMobileMenu: boolean;
  handleShowMobileMenu: (arg: boolean) => void;
}) {
  return (
    <button
      className="w-12 h-12 flex items-center justify-center"
      onClick={() => handleShowMobileMenu(!showMobileMenu)}
    >
      {showMobileMenu ? (
        <img
          src="/images/icon-menu-close.svg"
          alt="Close Menu"
          width="32"
          height="31"
        />
      ) : (
        <img
          src="/images/icon-menu.svg"
          alt="Open Menu"
          width="40"
          height="17"
        />
      )}
      <span className="sr-only">Menu Button</span>
    </button>
  );
}

function MenuItem({
  href,
  size,
  children,
}: {
  href: string;
  size: "base" | "2xl";
  children: React.ReactNode;
}) {
  let fontSize = "";
  let paddingLeft = "";

  switch (size) {
    case "base": {
      fontSize = "text-base";
      paddingLeft = "pl-0";
      break;
    }
    case "2xl": {
      fontSize = "text-2xl";
      paddingLeft = "pl-5";
      break;
    }
    default: {
      fontSize = "text-base";
      paddingLeft = "pl-0";
      break;
    }
  }

  return (
    <li>
      <a
        href={href}
        className={`${fontSize} w-full inline-flex ${paddingLeft} text-neutral-dark-grayish-blue transition-colors hover:text-primary-soft-red`}
      >
        {children}
      </a>
    </li>
  );
}

function MenuMobile({
  showMobileMenu,
  handleShowMobileMenu,
}: {
  showMobileMenu: boolean;
  handleShowMobileMenu: (arg: boolean) => void;
}) {
  let translateMobileMenu = "";

  if (showMobileMenu) {
    translateMobileMenu = "translate-x-0 opacity-100";
  } else {
    translateMobileMenu = "translate-x-full opacity-0";
  }

  return (
    <div
      className={`h-full w-full fixed inset-0 bg-neutral-dark-grayish-blue bg-opacity-40 flex justify-end transition ${translateMobileMenu}`}
      onClick={e => {
        e.stopPropagation();
        handleShowMobileMenu(!showMobileMenu);
      }}
    >
      <div className="w-4/5 bg-neutral-off-white pt-40">
        <nav className="">
          <ul className="flex flex-col gap-5">
            <MenuItem size="2xl" href="/">
              Home
            </MenuItem>
            <MenuItem size="2xl" href="#">
              New
            </MenuItem>
            <MenuItem size="2xl" href="#">
              Popular
            </MenuItem>
            <MenuItem size="2xl" href="#">
              Trending
            </MenuItem>
            <MenuItem size="2xl" href="#">
              Categories
            </MenuItem>
          </ul>
        </nav>
      </div>
    </div>
  );
}

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  if (showMobileMenu) {
    document.body.style.position = "relative";
  } else {
    document.body.style.position = "static";
  }

  return (
    <>
      <header className="mt-10 mb-10 lg:mt-20">
        <div className="layout flex justify-between items-center">
          <div>
            <a href="/">
              <img src="/images/logo.svg" alt="News Logo" />
              <span className="sr-only">Logo</span>
            </a>
          </div>

          <div className="hidden md:flex">
            <nav>
              <ul className="flex text-neutral-dark-grayish-blue gap-8">
                <MenuItem size="base" href="/">
                  Home
                </MenuItem>
                <MenuItem size="base" href="#">
                  New
                </MenuItem>
                <MenuItem size="base" href="#">
                  Popular
                </MenuItem>
                <MenuItem size="base" href="#">
                  Trending
                </MenuItem>
                <MenuItem size="base" href="#">
                  Categories
                </MenuItem>
              </ul>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-50 ml-auto">
            <MenuButton
              showMobileMenu={showMobileMenu}
              handleShowMobileMenu={setShowMobileMenu}
            />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <MenuMobile
              showMobileMenu={showMobileMenu}
              handleShowMobileMenu={setShowMobileMenu}
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
