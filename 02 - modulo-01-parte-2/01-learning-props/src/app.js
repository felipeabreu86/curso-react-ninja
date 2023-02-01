"use strict";

import React, { Component } from "react";
import Square from "./square";
import Title from "./title";

class App extends Component {
  render() {
    return (
      <div>
        <Title name={"Felipe"} lastname={"Abreu"} />
        <div className="container">
          {["blue", "red", "blue"].map((square, index) => (
            <Square key={index} color={square} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
