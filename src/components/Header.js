import React from "react";

export default function Header({ children, title, cssStyles }) {
  return (
    <header>
      <div className="container-fluid">
        <div className={`row align-items-center ${cssStyles}`}>
          <div className="col  text-center">
            <h1 className="text-light letter-spacing text-uppercase display-3 text-slanted">
              {title}
            </h1>
            {children}
          </div>
        </div>
      </div>
    </header>
  );
}
Header.defaultProps = {
  cssStyles: "header-hero",
  title: "Default Title",
};
