import React, { Component } from "react";
//import CounterV3 from "./counterV3";
import CounterV4 from "./counterV4";
import Button from "react-bootstrap/Button";

class Counters extends React.Component {
  

  render() {
    return (
      <div>
        <Button
          onClick={this.props.onReset}
          className="m-2"
          variant="primary"
        >
          Reset
        </Button>
        <Button
          onClick={this.props.onAddNew}
          className="m-2"
          variant="info"
        >
          Add New
        </Button>
        {this.props.counters.map((counter) => (
          //   <CounterV3 key={counter.id} onDelete={this.handleDelete} id={counter.id} value={counter.value} selected={true} />
          <CounterV4
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
            selected={true}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
