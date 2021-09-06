import React, { Component } from 'react';

import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

class CounterV4 extends React.Component {
  
     render() {
        return (
          <div>
            <Badge bg={this.getBadgeClasses()} className="m-2">{this.formatCount()}</Badge>
            <Button onClick= {() => this.props.onIncrement(this.props.counter)} className="m-2" variant="secondary">Increment</Button>
            <Button onClick= {() => this.props.onDelete(this.props.counter.id)} className="m-2" variant="danger" size="sm">Delete</Button>
          </div>
        );
      }

      getBadgeClasses() {
        let classes = "";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value: count } = this.props.counter; 
        return count === 0 ? 'Zero' : count; // destructure
  }
}
 
export default CounterV4;