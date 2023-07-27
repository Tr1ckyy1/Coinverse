import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  return (
    <h1 className="error-message">
      {error.status} {error.message}
    </h1>
  );
}

export default Error;
