import { useState } from "react";

function MenuMobile() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      {/* Menu Mobile */}
      {showMobileMenu && (
        <nav className="h-full bg-red-600 w-full">
          <ul className="text-neutral-dark-grayish-blue gap-8 border-debug">
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
      )}

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          className="w-12 h-12 flex items-center justify-center"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? (
            <img src="/images/icon-menu-close.svg" alt="Close Menu" />
          ) : (
            <img src="/images/icon-menu.svg" alt="Open Menu" />
          )}
          <span className="sr-only">Menu Button</span>
        </button>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <header>
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

          <MenuMobile />
        </div>
      </header>
    </>
  );
}

export default App;
