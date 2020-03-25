import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";
import SignInUp from "./pages/SignInUp/Sign-In-Up";

import Winter from "./pages/collections/winter/Winter";
import Summer from "./pages/collections/summer/Summer";
import Spring from "./pages/collections/spring/Spring";
import BabyCollections from "./pages/collections/baby-collections/BabyCollections";
import ManCollections from "./pages/collections/man-collections/ManCollections";

import { auth } from "./firebase/firebase-utils";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Navbar currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signIn" component={SignInUp} />

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
}

export default App;
