import React from "react";
import LanguageSelector from "@/components/LanguageSelector";
import Clock from "@/components/Clock";
import "./style.scss";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header-content">
          <Clock className="header-clock" />
          <LanguageSelector />
        </div>
      </div>
    );
  }
}

export default Header;
