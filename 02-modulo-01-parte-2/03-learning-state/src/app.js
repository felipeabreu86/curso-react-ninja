"use strict";

import React, { Component } from "react";
import Button from "./button";

const NOME = "Felipe";
let contador = 0;

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: NOME,
    };
  }

  render() {
    return (
      <div>
        <div
          className="container"
          onClick={() =>
            this.setState({
              text:
                NOME +
                " - Você clicou aqui " +
                ++contador +
                (contador == 1 ? " vez!" : " vezes!"),
            })
          }
        >
          {this.state.text}
        </div>
        <div>
          <Button handleClick={() => {}}>Clique em mim</Button>
        </div>
      </div>
    );
  }
}

export default App;
