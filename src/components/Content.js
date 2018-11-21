import React from "react";

export default class Content extends React.Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }

  render() {
    return (
      <div>
        Už jsi kliknul {this.state.counter}x.
        <br />
        <button onClick={e => this.handleClick(e)}>Click</button>
      </div>
    );
  }

  //funkce se bude vypořádavat s tím c o se stane když nekdo klikne na tlačítko
  handleClick(e) {
    /*   this.getState(previousState => {
      return { counter: previousState.counter + 1 };
    }); //znovu zavolá funkci render a prekresli stranku na ty hodnoty ktere tam máme
  */
    this.setState({ counter: this.state.counter + 1 });
  }
}
