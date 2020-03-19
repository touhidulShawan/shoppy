import React, { Component } from "react";
import styled from "styled-components";

import MenuItemData from "./MenuData";
import MenuItem from "../../components/menu-item/MenuItem";

export default class Directory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuItemData: MenuItemData
    };
  }

  render() {
    const menuItems = this.state.menuItemData.map(data => {
      return (
        <MenuItem
          key={data.id}
          imgSrc={data.image}
          pagePath={data.pagePath}
          menuTitle={data.title}
        />
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
