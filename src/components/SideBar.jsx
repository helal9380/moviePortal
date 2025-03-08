/** @format */

import React from "react";
import img1 from "../assets/icons/commingSoon.svg";
import img2 from "../assets/icons/favourite.svg";
import img3 from "../assets/icons/newRelease.svg";
import img4 from "../assets/icons/trending.svg";
import img5 from "../assets/icons/watchLater.svg";

const SideBar = () => {
  return (
    <aside>
      <ul className="space-y-2">
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
            href="#">
            <img
              src={img4}
              width="24"
              height="24"
              alt=""
            />
            <span>Trending</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#">
            <img
              src={img3}
              width="24"
              height="24"
              alt=""
            />
            <span>New Releases</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#">
            <img
              src={img1}
              width="24"
              height="24"
              alt=""
            />
            <span>Coming Soon</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#">
            <img
              src={img2}
              width="24"
              height="24"
              alt=""
            />
            <span>Favourites</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#">
            <img
              src={img5}
              width="24"
              height="24"
              alt=""
            />
            <span>Watch Later</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
