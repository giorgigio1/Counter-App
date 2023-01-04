import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { counters, onReset, onIncrement, onDecrement, onDelete } =
      this.props;
    return (
      <div className="counters">
        <button onClick={onReset} className="btn btn-primary m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
