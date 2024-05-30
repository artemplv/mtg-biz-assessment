import React from "react";
import LanguageSelector from "@/components/LanguageSelector";
import Clock from "@/components/Clock";
import "./style.scss";

import logo from "@/assets/images/logo.png";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header-content">
          <img src={logo} alt="logo image" width={50} />
          <Clock className="header-clock" />
          <LanguageSelector />
        </div>
      </div>
    );
  }
}

export default Header;
