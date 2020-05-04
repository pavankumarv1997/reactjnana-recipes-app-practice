import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Recipe extends Component {
  render() {
    const { title, publisher, recipe_id, source_url, image_url } = this.props;

    return (
      <div className="col-10 mx-auto col-md-6 col-lg-4 my-3 ">
        <div className="card" style={{ height: "100%" }}>
          <img
            src={image_url}
            alt={title}
            className="img-card-top"
            style={{ height: "14rem" }}
          />
          <div className="card-body text-capitalize">
            <h6>{title}</h6>
            <h6 className="text-warning text-slanted">{publisher}</h6>
          </div>
          <div className="card-footer">
            <Link to={`recipes/${recipe_id}`} className="btn btn-primary mx-2">
              Details url
            </Link>
            <a
              href={source_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success"
            >
              recipes url
            </a>
          </div>
        </div>
      </div>
    );
  }
}
