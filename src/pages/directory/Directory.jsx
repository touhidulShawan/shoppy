import React, { Component } from "react";

import winterImg from "../../assets/img/winter.jpg";
import springImg from "../../assets/img/spring.jpg";
import summerImg from "../../assets/img/summer.jpg";
import babyImg from "../../assets/img/baby_collection.jpg";
import manImg from "../../assets/img/man_collection.jpg";

import styled from "styled-components";
import MenuItem from "../../components/menu-item/MenuItem";

export default class Directory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuItemData: [
        { id: "#1", title: "winter", image: winterImg },
        { id: "#2", title: "spring", image: springImg },
        { id: "#3", title: "summer", image: summerImg },
        { id: "#4", title: "baby collection", image: babyImg },
        { id: "#5", title: "man collection", image: manImg }
      ]
    };
  }

  render() {
    const menuItems = this.state.menuItemData.map(data => {
      return (
        <MenuItem key={data.id} imgSrc={data.image} menuTitle={data.title} />
      );
    });

    return <Container>{menuItems}</Container>;
  }
}

const Container = styled.div`
  margin: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 250px 300px;
  gap: 1rem;

  @media screen and (max-width: 765px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-template-rows: repeat(3, 300px);
  }
  @media screen and (max-width: 548px) {
    grid-template-rows: repeat(5, 300px);
  }
`;
