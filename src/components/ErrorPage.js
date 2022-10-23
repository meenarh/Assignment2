import React from "react";
import { Link } from "react-router-dom";
import error from "../assets/images/Error-illustration.png";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="error-body">
        <div className="error-info">
          <h1>404</h1>
          <h4>Oops! Page Not Found.</h4>
          <p>
            404 error on the servers of the page you expect to reach on a
            website HTTP status code that means it could not be found.
          </p>
          <Link to="/">
            <button>Home Page</button>
          </Link>
        </div>

        <div className="error-image">
          <img className="error-img" src={error} alt="404: Not found" />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
