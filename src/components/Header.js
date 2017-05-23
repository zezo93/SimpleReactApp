import React from "react";
import {Navbar,Nav,NavItem} from "react-bootstrap";

 export class Header extends React.Component{
    render(){
      return(
        <Navbar className="glicq-header">
        <Navbar.Header>
          <Navbar.Brand>
              <a className="navbar-brand" href="#"><img src="assets/imgs/logo.png" /></a>
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
