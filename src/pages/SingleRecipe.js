import React, { Component } from "react";
import { recipeData } from "../data/tempDetails";
import { Link } from "react-router-dom";
export default class SingleRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: recipeData,
      id: this.props.match.params.id,
      loading: false,
    };
  }
  render() {
    const {
      image_url,
      recipe_id,
      publisher,
      ingredients,
      source_url,
      publisher_url,
      title,
    } = this.state.recipes;
    if (this.state.loading) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-10 col-md-6 mx-auto my-3">
              <h3 className="text-orange text-center text-slanted">
                Loading Recipe...
              </h3>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <Link to="/recipes" className="btn btn-warning">
              Back to Recipe List
            </Link>
            <img
              src={image_url}
              alt={title}
              className="d-block w-100 mt-5"
              style={{ maxheight: "30rem" }}
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <h5 className="text-uppercase">{title}</h5>
            <h6 className="text-warning text-slanted mt-3 text-capitalize  ">
              {publisher}
            </h6>
            <a
              href={publisher_url}
              target="_blank"
              className="btn btn-success mx-2 text-capitalize"
            >
              publisher webpage
            </a>
            <a
              href={source_url}
              target="_blank"
              className="btn btn-warning mx-2 text-capitalize"
            >
              recipe url
            </a>
            <ul className="list-group mt-3">
              {ingredients.map((ingredient, index) => (
                <li key={index} className="list-group-item">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
