import React, { Component } from "react";
import Search from "../components/Search";
import RecipesList from "../components/RecipesList";
import { recipeData } from "../data/tempList";
export default class Recipes extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    recipes: recipeData,
    search: "",
  };
  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("page is submitted");
  };
  render() {
    return (
      <div>
        <Search
          search={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <RecipesList />
      </div>
    );
  }
}
