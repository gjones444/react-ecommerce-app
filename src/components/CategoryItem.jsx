import React from "react";
import styled from "styled-components";

const Container = styled.div`
    flex: 1;
    margin: 3;
    height: 70vh;
    position: relative;
`;
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
const Title = styled.h1``;
const Button = styled.button``;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.Image}/>
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
