import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="error-container">
      <h1 className="error-heading">Oops!</h1>
      <p className="error-text">Sorry, an unexpected error has occurred</p>
      <p className="error-type">
        <i>{error.statusText || error.message}</i>
      </p>

      <p className="back-home">
        Go back <Link to="/">Home</Link>
      </p>
    </div>
  );
};

export default Error;
