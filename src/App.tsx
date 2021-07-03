import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import Index from "./routes/Index";
import CppTuts from "./routes/CppTuts";

export default function App() {
  return <Router>
    <Switch>
      <Route path="/cpptuts" component={CppTuts} />
      <Route path="/cpptuts/index.html" exact component={CppTuts} />
      <Route path="/" exact component={Index} />
    </Switch>
  </Router>;
}
