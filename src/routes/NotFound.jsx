import React from 'react'
import { useRouteError, Link } from "react-router-dom";

export const NotFound = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 mx-auto text-center">
          <h1 className="display-4">404</h1>
          <p className="lead">Page Not Found</p>
          <p>Sorry, the page you are looking for does not exist.</p>
          <Link to="/" className="btn btn-primary">
            Go Back to Home
          </Link>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </div>
    </div>
  )
}

