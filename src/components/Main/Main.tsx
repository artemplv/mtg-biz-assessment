import React from "react";
import Reviews from "@/components/Reviews";
import "./style.scss";

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <Reviews />
      </div>
    );
  }
}

export default Main;
