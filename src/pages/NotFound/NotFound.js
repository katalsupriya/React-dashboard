import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./notfound.css";
import NotFoundImage from "../../images/notfound.svg";

export default class NotFound extends Component {
  render() {
    return (
      <section id="notFound">
          <div className="row py-5">
            <div className="col-md-6 align-self-center">
              <img src={NotFoundImage} alt="loading" />
            </div>
            <div className="col-md-6 align-self-center">
              <h1 className="mb-4">404</h1>
              <h2 className="mb-4">UH OH! You're lost.</h2>
              <p className="mb-4">
                The page you are looking for does not exist. How you got here is
                a mystery. But you can click the button below to go back to the
                homepage.
              </p>
              <Link to="/" className="btn btn-primary">
                Back To Home
              </Link>
            </div>
          </div>
      </section>
    );
  }
}
