import { Redirect, Route as ReactDOMRoute, RouteProps } from "react-router-dom";
import { ComponentType } from "react";

interface Props extends RouteProps {
  isPrivate?: boolean;
  component: ComponentType<any>;
}

const Route = ({ isPrivate = false, component: Component, ...rest }: Props) => {
  const authToken = localStorage.getItem("@CRUD:Token");
  return (
    <ReactDOMRoute
      {...rest}
      render={() =>
        isPrivate === !!authToken ? (
          <Component></Component>
        ) : (
          <Redirect to={isPrivate ? "/" : "/dashboard"} />
        )
      }
    />
  );
};

export default Route;
