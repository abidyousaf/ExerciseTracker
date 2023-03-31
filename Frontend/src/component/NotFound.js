import React from "react";
import { Link } from "react-router-dom";
import { ErrorWrapper } from "./Style1";
//import PageNotFound from "../images/not-found.svg";

export default function NotFound() {
  return (
    <div className="container">
      <ErrorWrapper>
        <div className="mb-3">
        </div>
        <h3 className="title">404</h3>
        <p className="info">Oh! Page not found</p>
        <Link to="/">Home</Link>
      </ErrorWrapper>
    </div>
  );
}