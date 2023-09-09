import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="error-div">
      <h1>{error.status}</h1>
      <h1>Error Found</h1>
      <p>{error.data}</p>
    </div>
  );
};

export default Error;
