import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SuccessPage from "./pages/SuccessPage";
import OrderPage from "./pages/OrderPage";


const App = () => {
 
  const [order, setOrder] = useState();
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/pizza" component={OrderPage}></Route>
        <Route path="/success" component={SuccessPage}></Route>
      </Switch>
    </>
  );
};
export default App;
