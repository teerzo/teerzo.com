import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function CmpRoute(props) {

    return (
        <Route path={props.path}> {props.children} </Route>
    );
}