import React, { Component } from 'react';

import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

class CounterV3 extends React.Component {

    state = {
        id : this.props.counter.id,
        value : this.props.counter.value,
    };

     // best solution
     handleIncrement = (product) =>{
       // console.log("Product", product);
        this.setState({value : this.state.value+1});
     }
 

     render() {
        return (
          <div>
            <Badge bg={this.getBadgeClasses()} className="m-2">{this.formatCount()}</Badge>
            <Button onClick= {() => this.handleIncrement({ id: 1 })} className="m-2" variant="secondary">Increment</Button>
            <Button onClick= {() => this.props.onDelete(this.props.counter.id)} className="m-2" variant="danger" size="sm">Delete</Button>
          </div>
        );
      }

      getBadgeClasses() {
        let classes = "";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value: count } = this.state; 
        return count === 0 ? 'Zero' : count; // destructure
  }
}
 
export default CounterV3;