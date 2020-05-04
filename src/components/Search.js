import React, { Component } from "react";

export default class Search extends Component {
  render() {
    const { search, handleChange, handleSubmit } = this.props;
    return (
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col mx-auto col-md-8">
              <h2 className="text-slanted text-center my-3 ">
                Search Recipes with{" "}
                <strong className="text-orange text-capitalize">
                  food2fork
                </strong>
              </h2>
              <form onSubmit={handleSubmit}>
                <label htmlFor="search" className="text-capitalize">
                  Type recipes separated by commas
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search caroot,beetroot"
                    value={search}
                    onChange={handleChange}
                  />
                  <div className="input-group-append">
                    <button type="submit" className=" btn  btn-primary ">
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
