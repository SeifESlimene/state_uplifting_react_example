import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ setDark }) => {
  const [darkTheme, SetDarkTheme] = useState(true);
  return (
    <header className={
      setDark ? "" : "light-header"
    }>
      <div className="logo">
        <i
          className={
            setDark ? "fas fa-archway fa-4x" : "fas fa-archway fa-4x fas-light"
          }
        ></i>
        <span className={setDark ? "" : "fas-light"}>Seif E. Slimene</span>
      </div>
      <div           className={
            setDark ? "menu" : "menu menu-light"
          }>
        <ul>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="">Portfolio</Link>
          </li>
          <li>
            <Link to="">About</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
