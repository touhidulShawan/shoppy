import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";
import Winter from "./pages/collections/winter/Winter";
import Summer from "./pages/collections/summmer/Summer";
import Spring from "./pages/collections/spring/Spring";
import BabyCollections from "./pages/collections/baby-collections/BabyCollections";
import ManCollections from "./pages/collections/man-collections/ManCollections";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/collections/winter" component={Winter} />
        <Route exact path="/collections/spring" component={Spring} />
        <Route exact path="/collections/summer" component={Summer} />
        <Route
          exact
          path="/collections/baby-collections"
          component={BabyCollections}
        />
        <Route
          exact
          path="/collections/man-collections"
          component={ManCollections}
        />
      </Switch>
    </div>
  );
}

export default App;
