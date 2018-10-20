import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Home from "../pages/home";
// import watchList from "../pages/watchList";

// import '../loyout/style.css';

class Routs extends Component {
    render() {
        return (
       <Route path="/" Component={Home}>Home</Route>
        )
    }
}

export default Routs;