import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
export default class Default extends Component {
  render() {
    return (
      <Header title="404" cssStyles="default-hero">
        <h2 className="text-light letter-spacing text-uppercase text-slanted">
          You are in the wrong place{" "}
        </h2>
        <Link to="/" className="btn btn-secondary text-uppercase btn-lg mt-3 ">
          Back To Home
        </Link>
      </Header>
    );
  }
}
