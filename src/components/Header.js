import React from "react";
import {Navbar,Nav,NavItem} from "react-bootstrap";

 export class Header extends React.Component{
    render(){
      return(
        <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="Home">React-Bootstrap</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem  href="Home">Home</NavItem>
          <NavItem  href="About">About</NavItem>
          <NavItem  href="Terms">Terms</NavItem>
        </Nav>
        </Navbar>
      );
    }
}
