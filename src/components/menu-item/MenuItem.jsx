import React from "react";

import styled from "styled-components";
import {NavLink} from "react-router-dom";

function MenuItem(props) {
    return (
        <Container image={props.imgSrc}>
            <NavLink className='navLink' exact to={`/collections/${props.pagePath}`}>
                {props.menuTitle}
            </NavLink>
        </Container>
    );
}

export default MenuItem;

const Container = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;

  &:nth-child(5) {
    grid-column: span 2;
  }
  
  .navLink{
  font-size: 2.2rem;
  background-color: #e52156;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  letter-spacing: 0.6rem;
  padding: 0.8rem 2.5rem;
  opacity: 0.7;
  transform: scale(0.7);
  transition: all 0.38s ease-in-out;
  }
  

  @media (min-width: 765px) and (max-width: 549px) {
    &:nth-child(5) {
      grid-column: span 2;
    }
  }

  @media screen and (max-width: 548px) {
    &:nth-child(5) {
      grid-column: span 1;
    }
  }

  &:hover {
    .navLink {
      opacity: 1;
      transform: scale(1);
    }
  }
`;