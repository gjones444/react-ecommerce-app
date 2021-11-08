import React from "react";
import styled from "styled-components";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import RoomIcon from '@mui/icons-material/Room';

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  flex: 1;
`;

const Desc = styled.p`
  flex: 1;
  margin: 20px;
`;

const SocialContainer = styled.div`
  flex: 1;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const PaymentItem = styled.img`
width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Victory Co.</Logo>
        <Desc>
          No dolore no lorem clita ea kasd sea justo clita lorem, lorem magna
          sadipscing est dolores dolor lorem amet amet. Tempor at kasd clita
          dolore takimata invidunt dolor et. Invidunt ut diam diam aliquyam. Ut
          et erat et clita, lorem dolor labore est dolore voluptua lorem eirmod.
          Labore dolor lorem.Est lorem justo aliquyam consetetur sit voluptua
          elitr tempor, consetetur dolore lorem sed at rebum, eos voluptua et
          gubergren aliquyam.
        </Desc>
        <SocialContainer>
          <SocialIcon color="blue">
            <FacebookIcon></FacebookIcon>
          </SocialIcon>
          <SocialIcon color="blue">
            <InstagramIcon></InstagramIcon>
          </SocialIcon>
          <SocialIcon color="blue">
            <TwitterIcon></TwitterIcon>
          </SocialIcon>
          <SocialIcon color="red">
            <PinterestIcon></PinterestIcon>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Check out our links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Shop</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Wish List</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Terms & Conditions</ListItem>
        </List>
      </Center>
      <Right>
        <Title>
          Contact Us
        </Title>
        <ContactItem>
            <RoomIcon style={{marginRight:"10px"}}></RoomIcon>123 Main St New York, NY 10001
          </ContactItem>
          <ContactItem>
            <PhoneIcon style={{marginRight:"10px"}}></PhoneIcon>(718) 123-1234
          </ContactItem>
          <ContactItem>
            <MailOutlineIcon style={{marginRight:"10px"}}></MailOutlineIcon>info@victoryco.com
          </ContactItem>
          <PaymentItem src="https://i.ibb.co/Qfvn4z6/payment.png"></PaymentItem>
      </Right>
    </Container>
  );
};

export default Footer;
