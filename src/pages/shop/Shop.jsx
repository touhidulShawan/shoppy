import React, { Component } from "react";

import HatsData from "./data/HatsData";
import JacketsData from "./data/JacketsData";
import ShoesData from "./data/ShoesData";

import Preview from "../../components/preview/Preview";

class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hatsCollections: HatsData,
      JacketCollections: JacketsData,
      ShoeCollections: ShoesData
    };
  }

  render() {
    return (
      <div>
        <Preview title="Hats" contents={this.state.hatsCollections} />
        <Preview title="Jackets" contents={this.state.JacketCollections} />
        <Preview title="Shoes" contents={this.state.ShoeCollections} />
      </div>
    );
  }
}

export default Shop;
