import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import OrderForm from "./components/OrderForm";
import Success from "./components/Success";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="pizza">
          <OrderForm />
        </Route>
        <Route path="success">
          <Success />
        </Route>
      </Switch>
    </>
  );
};
export default App;
