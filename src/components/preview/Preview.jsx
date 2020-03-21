import React from "react";

import styled from "styled-components";

function Preview(props) {
  return (
    <Container>
      <Header>{props.title}</Header>
      <ItemContainer>
        {props.contents.map(data => {
          console.log(data);
          return (
            <Content key={data.id}>
              <img src={data.productImg} alt="Product-img" />
              <ProductFooter>
                <ProductName>{data.title}</ProductName>
                <ProductPrice>{data.price}</ProductPrice>
              </ProductFooter>
            </Content>
          );
        })}
      </ItemContainer>
    </Container>
  );
}

export default Preview;

const Container = styled.div`
  padding: 1rem;
  margin: 1.3rem 0.8rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Header = styled.h1`
  text-transform: uppercase;
  font-size: 2.8rem;
  margin-bottom: 0.8rem;
`;

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: auto;
  gap: 1.2rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &::after {
    content: "👆 Add to Cart";
    display: block;
    position: absolute;
    padding: 0.8rem 0.1rem;
    text-align: center;
    text-transform: uppercase;
    background: #eaf0f1;
    color: #222222;
    width: 100%;
    font-size: 1.6rem;
    top: 68%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.85;
  }

  &:hover {
    cursor: pointer;
  }
`;

const ProductFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductName = styled.span`
  background: coral;
  padding: 0.5rem 1.4rem;
  font-size: 13px;
  text-transform: uppercase;
  margin: 1rem 0;
  color: white;
`;

const ProductPrice = styled.span`
  background: #333333;
  color: white;
  padding: 0.3rem 1.5rem;
  font-size: 13px;
  font-weight: bold;
`;
