import React, { Component, Fragment } from "react";
import { NavLink,HashRouter,Route,Switch } from "react-router-dom";
import Home from "./home/Home";
import Transition from "./Transition";
import CSSTransition from "./CSSTransition";
import "./app.less"

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "min"
        }
    }

    render() {
        return(
            <Fragment>
                <HashRouter>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/transition" component={Transition}/>
                        <Route path="/cssTransition" component={CSSTransition}/>
                    </Switch>
                </HashRouter>
            </Fragment>
        )
    }
}

export default App


