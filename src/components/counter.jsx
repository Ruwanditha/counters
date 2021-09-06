import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

class Counter extends React.Component {
    state = {
        count : 0,
    };

    styles = {
        fontSize : 10,
        fontWeight : 'bold'
    }

    formatZeroStyle = {
        color:"black"
      }

    // solution 01
    constructor(){
        super();
        this.handleIncrementNoArrow = this.handleIncrementNoArrow.bind(this);
    }

    handleIncrementNoArrow(){
        console.log("Increment Clicked", this);
    }

    // best solution
    handleIncrement = () =>{
       // console.log("Increment Clicked", this);
       this.setState({count : this.state.count+1});
    }

  render() {
    return (
      <div>
        <Badge bg={this.getBadgeClasses()} className="m-2">{this.formatCount()}</Badge>
        <Button onClick= {this.handleIncrement} className="m-2" variant="secondary">Increment</Button>
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

export default Counter;
