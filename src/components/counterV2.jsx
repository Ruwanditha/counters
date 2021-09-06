import React, { Component } from 'react';

import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

class CounterV2 extends React.Component {

    state = {
        count : 0,
    };

     // best solution
     handleIncrement = (product) =>{
       // console.log("Product", product);
        this.setState({count : this.state.count+1});
     }
 

     render() {
        return (
          <div>
            <Badge bg={this.getBadgeClasses()} className="m-2">{this.formatCount()}</Badge>
            <Button onClick= {() => this.handleIncrement({ id: 1 })} className="m-2" variant="secondary">Increment</Button>
          </div>
        );
      }

      getBadgeClasses() {
        let classes = "";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { count } = this.state; 
        return count === 0 ? 'Zero' : count; // destructure
  }
}
 
export default CounterV2;