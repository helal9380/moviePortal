/** @format */

import React, { useContext, useState } from "react";
import moon from "../assets/icons/moon.svg";
import Sun from "../assets/icons/sun.svg";
import logo from "../assets/logo.svg";
import ring from "../assets/ring.svg";
import cart from "../assets/shopping-cart.svg";
import { MovieContext, ThemeContext } from "../context";
import CartDetails from "./CartDetails";
const Header = () => {
  const [showDetails, setShowDetails] = useState(false);
  const { carts } = useContext(MovieContext);
  const { showTheme, setShowTheme } = useContext(ThemeContext);
  return (
    <header>
      {showDetails && <CartDetails onClose={() => setShowDetails(false)} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img
            src={logo}
            width="139"
            height="26"
            alt=""
          />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#">
              <img
                src={ring}
                width="24"
                height="24"
                alt=""
              />
            </a>
          </li>
          <li>
            <a
              onClick={() => setShowTheme((showTheme) => !showTheme)}
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#">
              <img
                src={showTheme ? moon : Sun}
                width="24"
                height="24"
                alt=""
              />
            </a>
          </li>

          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setShowDetails(true)}>
              <img
                src={cart}
                width="24"
                height="24"
                alt="cart"
              />
              {carts.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                  {carts.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
