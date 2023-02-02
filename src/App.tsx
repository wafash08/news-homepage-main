import React, { useEffect } from "react";

function MenuButton() {
  return (
    <button
      className="w-12 h-12 flex items-center justify-center"
      // onClick={() => setShowMobileMenu(!showMobileMenu)}
    >
      {/* {showMobileMenu ? (
            <img src="/images/icon-menu-close.svg" alt="Close Menu" />
          ) : (
            <img src="/images/icon-menu.svg" alt="Open Menu" />
            )} */}
      <img src="/images/icon-menu.svg" alt="Open Menu" />
      <span className="sr-only">Menu Button</span>
    </button>
  );
}

function MenuItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        className="text-2xl w-full inline-flex pl-5 text-neutral-dark-grayish-blue transition-colors hover:text-primary-soft-red"
      >
        {children}
      </a>
    </li>
  );
}

function MenuMobile() {
  return (
    <div className="h-full w-full fixed inset-0 bg-neutral-dark-grayish-blue bg-opacity-40 flex justify-end">
      <div className="w-4/5 bg-neutral-off-white pt-40">
        <nav className="">
          <ul className="flex flex-col gap-5">
            <MenuItem href="/">Home</MenuItem>
            <MenuItem href="#">New</MenuItem>
            <MenuItem href="#">Popular</MenuItem>
            <MenuItem href="#">Trending</MenuItem>
            <MenuItem href="#">Categories</MenuItem>
          </ul>
        </nav>
      </div>
    </div>
  );
}

function App() {
  useEffect(() => {
    document.body.style.position = "relative";
  }, []);

  return (
    <>
      <header className="mt-10 border-debug mb-10 lg:mt-20">
        <div className="layout flex justify-between items-center">
          <div>
            <a href="/">
              <img src="/images/logo.svg" alt="News Logo" />
              <span className="sr-only">Logo</span>
            </a>
          </div>

          <div className="hidden md:flex">
            <nav>
              <ul className="flex text-neutral-dark-grayish-blue gap-8 border-debug">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="#">New</a>
                </li>
                <li>
                  <a href="#">Popular</a>
                </li>
                <li>
                  <a href="#">Trending</a>
                </li>
                <li>
                  <a href="#">Categories</a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-50 ml-auto">
            <MenuButton />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">{/* <MenuMobile /> */}</div>
        </div>
      </header>
    </>
  );
}

export default App;
