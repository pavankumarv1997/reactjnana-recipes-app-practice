import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import SingleRecipe from "./pages/SingleRecipe";
import Default from "./pages/Default";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/recipes" exact component={Recipes}></Route>
          <Route path="/recipes/:id" exact component={SingleRecipe}></Route>
          <Route component={Default}></Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
