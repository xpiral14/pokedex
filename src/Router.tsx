import React from "react";
import {
  BrowserRouter,
  Route as RouteReactDom,
  RouteProps as ReactDOMRouteProps,
  Switch,
} from "react-router-dom";
import Default from "./layouts/Default";
import Generation from "./pages/Generation";
import Home from "./pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/generation/:id" exact component={Generation} />
      </Switch>
    </BrowserRouter>
  );
};

interface RouteProps extends ReactDOMRouteProps {
  component: React.ComponentType<any>;
}

const Route: React.FC<RouteProps> = ({ component: Component, ...props }) => (
  <RouteReactDom
    render={(renderProps) => (
      <Default>
        <Component {...renderProps} />
      </Default>
    )}
    {...props}
  />
);
export default Router;
