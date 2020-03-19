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
              <img
                width="100%"
                height="100%"
                src={data.productImg}
                alt="Product-img"
              />
              <Title>{data.title}</Title>
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
`;

const Title = styled.h3`
  background: coral;
  padding: 0.5rem 1.4rem;
  font-size: 13px;
  text-transform: uppercase;
  margin: 1rem;
  color: white;
`;
