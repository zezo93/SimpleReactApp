import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, hashHistory  } from 'react-router-dom'
import { Root } from "../Components/Root";
import { Home } from "../Components/Home";
import { About } from "../Components/About";
import { Terms } from "../Components/Terms";

class Example extends React.Component{
  render() {
    return (

      <BrowserRouter>
      <div>
        <Root/>
        <Route path={"//"} component={Home} />
        <Route path={"/Home"} component={Home} />
        <Route path={"/about"} component={About}/>
        <Route path={"/terms"} component={Terms}/>
        </div>
      </BrowserRouter>
    );
  }
};
render(<Example />, window.document.getElementById("app"));
