import React, { Component } from "react";
import { Navbar, Container } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">
            Counter App{" "}
            <Badge pill bg="dark" className="m-2">
              {this.props.totalCounters}
            </Badge>
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
