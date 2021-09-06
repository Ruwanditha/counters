import React, { Component } from "react";
//import CounterV3 from "./counterV3";
import CounterV4 from "./counterV4";
import Button from "react-bootstrap/Button";

class Counters extends React.Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  // best solution
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });

    //console.log("counter", counter);
    //this.setState({value : this.state.value+1});
  };

  handleReset = () => {
   const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters })
  };

  handleDelete = (counterId) => {
    console.log("Event Handler Called - Delete", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    console.log(counters);
    this.setState({ counters: counters });
  };

  render() {
    return (
      <div>
        <Button
          onClick={this.handleReset}
          className="m-2"
          variant="primary"
        >
          Reset
        </Button>
        {this.state.counters.map((counter) => (
          //   <CounterV3 key={counter.id} onDelete={this.handleDelete} id={counter.id} value={counter.value} selected={true} />
          <CounterV4
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
            selected={true}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
