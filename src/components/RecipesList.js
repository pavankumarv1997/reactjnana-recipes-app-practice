import React, { Component } from "react";
import Recipe from "./Recipe";
export default class RecipeList extends Component {
  render() {
    return (
      <div>
        <h2>Hello from Recipes List</h2>
        <Recipe />
      </div>
    );
  }
}
