import React, { useState } from "react";
import useWindowDimensions from "./hooks/useWindowDimensions";

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
          aria-label="Close Menu"
          width="32"
          height="31"
        />
      ) : (
        <img
          src="/images/icon-menu.svg"
          alt="Open Menu"
          aria-label="Open Menu"
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
      role="button"
      aria-label="Close Menu"
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
  const { width } = useWindowDimensions();

  let isMobile = (width || 450) < 768 ? true : false;

  if (showMobileMenu) {
    document.body.style.position = "relative";
  } else {
    document.body.style.position = "static";
  }

  return (
    <div className="my-10 lg:my-20">
      <header className="mb-10">
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
      <main className="layout mb-10">
        <section className="grid lg:grid-cols-3 gap-10 lg:gap-8">
          <div className="flex flex-col gap-5 md:gap-8 lg:col-span-2">
            <div>
              {isMobile ? (
                <img
                  src="/images/image-web-3-mobile.jpg"
                  alt="The Bright Future of Web 3.0?"
                  width="1400"
                  height="600"
                />
              ) : (
                <img
                  src="/images/image-web-3-desktop.jpg"
                  alt="The Bright Future of Web 3.0?"
                  width="1400"
                  height="600"
                />
              )}
            </div>
            <div className="flex flex-col gap-5 md:flex-row">
              <div className="w-full md:w-1/2">
                <h1 className="text-5xl text-neutral-very-dark-blue inter-ex-bold">
                  The Bright Future of Web 3.0?
                </h1>
              </div>
              <div className="flex flex-col gap-5 items-start md:justify-between w-full md:w-1/2">
                <p className="text-neutral-dark-grayish-blue">
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>

                <a
                  href="#"
                  className="bg-primary-soft-red text-neutral-off-white uppercase py-3 px-6"
                >
                  read more
                </a>
              </div>
            </div>
          </div>
          <div className="p-5 bg-neutral-very-dark-blue flex flex-col gap-5">
            <h2 className="inter-ex-bold text-primary-soft-orange text-5xl">
              New
            </h2>
            <ul className="flex flex-col justify-around h-full">
              <li className="border-b border-neutral-grayish-blue">
                <a href="#" className="flex flex-col gap-4 py-6">
                  <h4 className="inter-bold text-2xl text-neutral-off-white">
                    Hydrogen VS Electric Car
                  </h4>
                  <p className="text-neutral-grayish-blue">
                    Will hydrogen-fueled cars ever catch up to EVs?
                  </p>
                </a>
              </li>
              <li className="border-b border-neutral-grayish-blue">
                <a href="#" className="flex flex-col gap-4 py-6">
                  <h4 className="inter-bold text-2xl text-neutral-off-white">
                    The Downsides of AI Artistry
                  </h4>
                  <p className="text-neutral-grayish-blue">
                    What are the possible adverse effects of on-demand AI image
                    generation?
                  </p>
                </a>
              </li>
              <li>
                <a href="#" className="flex flex-col gap-4 py-6">
                  <h4 className="inter-bold text-2xl text-neutral-off-white">
                    Is VC Funding Drying Up?
                  </h4>
                  <p className="text-neutral-grayish-blue">
                    Private funding by VC firms is down 50% YOY. We take a look
                    at what that means.
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* TODO */}
        {/* WRAP IMG TAG INTO DIV */}
        <section className="mt-10">
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <li>
              <a href="#" className="flex gap-4 h-[150px]">
                <img
                  src="/images/image-retro-pcs.jpg"
                  alt="Retro PCs"
                  width={200}
                  height={254}
                  className="flex-shrink"
                />
                <div className="flex flex-col justify-between py-2">
                  <p className="inter-ex-bold text-neutral-grayish-blue text-3xl">
                    01
                  </p>
                  <p className="inter-ex-bold text-neutral-very-dark-blue text-xl">
                    Reviving Retro PCs
                  </p>
                  <p className="text-neutral-dark-grayish-blue">
                    What happens when old PCs are given modern upgrades?
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="flex gap-4 h-[150px]">
                <img
                  src="/images/image-top-laptops.jpg"
                  alt="Top Laptops"
                  width={200}
                  height={254}
                  className="flex-shrink"
                />
                <div className="flex flex-col justify-between py-2">
                  <p className="inter-ex-bold text-neutral-grayish-blue text-3xl">
                    02
                  </p>
                  <p className="inter-ex-bold text-neutral-very-dark-blue text-xl">
                    Top 10 Laptops of 2022
                  </p>
                  <p className="text-neutral-dark-grayish-blue">
                    Our best picks for various needs and budgets.
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="flex gap-4 h-[150px]">
                <img
                  src="/images/image-gaming-growth.jpg"
                  alt="The Growth of Gaming"
                  width={200}
                  height={254}
                  className="flex-shrink"
                />
                <div className="flex flex-col justify-between py-2">
                  <p className="inter-ex-bold text-neutral-grayish-blue text-3xl">
                    03
                  </p>
                  <p className="inter-ex-bold text-neutral-very-dark-blue text-xl">
                    The Growth of Gaming
                  </p>
                  <p className="text-neutral-dark-grayish-blue">
                    How the pandemic has sparked fresh opportunities.
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
