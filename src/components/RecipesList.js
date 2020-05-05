import React, { Component } from "react";
import Recipe from "./Recipe";
export default class RecipeList extends Component {
  render() {
    const { recipes } = this.props;
    return (
      <>
        <div className="container my-5">
          <div className="row">
            <div className="col-10 mx-auto col-md-10 text-center">
              <h1 className="text-slanted text-uppercase">Recipes List</h1>
            </div>
          </div>
          <div className="row mt-3">
            {recipes.map((recipes) => (
              <Recipe key={recipes.recipe_id} recipes={recipes} />
            ))}
          </div>
        </div>
      </>
    );
  }
}
