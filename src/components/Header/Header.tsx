import React from "react";
import LanguageSelector from "@/components/LanguageSelector";
import Clock from "@/components/Clock";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Clock />
        <LanguageSelector />
      </div>
    );
  }
}

export default Header;
