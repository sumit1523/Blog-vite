import React from "react";
import logoImg from "../assets/react.svg";
const Logo = ({ width = "100px" }) => {
  return (
    <div>
      <img src={logoImg} alt="Blo-vite"></img>
    </div>
  );
};

export default Logo;
