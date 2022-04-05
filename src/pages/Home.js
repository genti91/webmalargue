import React from "react";

import Header from "../components/Header/Header";
import { CardDeck } from "../components/CardDeck/CardDeck";
import { bgHome } from "../assets";
import { BannerHome } from "../components/BannerHome/BannerHome";
import { Novedades } from "../components/Novedades/Novedades";
import { LogoCarousel } from "../components/LogoCarousel/LogoCarousel";
import { Container, Row } from "react-bootstrap";

// import { IoHome } from "react-icons/io5";
const Home = () => {
  return (
    <Row
    >
        <Header
          image={bgHome}
          title={[
            "Envía lo que necesites,",
            "Nosotros te lo llevamos. Puerta a puerta, así de simple!",
          ]}
          page={true}
        />
        <Container>
          <CardDeck />
        </Container>
        <BannerHome />
        <Container>
          <Novedades />
        </Container>
        <LogoCarousel />
    </Row>
  );
};
export default Home;
