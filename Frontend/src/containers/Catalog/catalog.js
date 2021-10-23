import React from "react";
import { Card } from "react-bootstrap";

import {
  Container,
  ContainerInline,
  FlexRow,
} from "../../components/CommonComponents";
import Imag1 from "../../shared/hp.jpg";
import Imag2 from "../../shared/rd1.jpg";
import Imag3 from "../../shared/rd2.jpg";
import Imag5 from "../../shared/ac1.jpg";
import Imag6 from "../../shared/ac2.jpg";

export const Catalog = () => {
  return (
    <Container style={{ justifyContent: "center" }}>
      <FlexRow>
        <ContainerInline>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Imag1} />
            <Card.Body>
              <Card.Title>Harry potter</Card.Title>
              <Card.Title>By J.K. ROWLING</Card.Title>
            </Card.Body>
          </Card>
        </ContainerInline>

        <ContainerInline>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Imag2} />
            <Card.Body>
            <Card.Title>Charlie and the chocolate factory</Card.Title>
              <Card.Title>By Roald dhal</Card.Title>
            </Card.Body>
          </Card>
        </ContainerInline>

        <ContainerInline>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Imag3} />
            <Card.Body>
            <Card.Title>Matilda</Card.Title>
              <Card.Title>By Roald dhal</Card.Title>
            </Card.Body>
          </Card>
        </ContainerInline>
        
      </FlexRow>

      <FlexRow>
        <ContainerInline >
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Imag3} />
            <Card.Body>
              <Card.Title>BFG</Card.Title>
              <Card.Title>By Roald dhal</Card.Title>
            </Card.Body>
          </Card>
        </ContainerInline>

        <ContainerInline>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Imag5} />
            <Card.Body>
              <Card.Title>Death on the Nile</Card.Title>
              <Card.Title>By Agatha Christie</Card.Title>
            </Card.Body>
          </Card>
        </ContainerInline>

        <ContainerInline>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Imag6} />
            <Card.Body>
              <Card.Title>ABC Muders</Card.Title>
              <Card.Title>By Agatha Christie</Card.Title>
            </Card.Body>
          </Card>
        </ContainerInline>
      </FlexRow>
    </Container>
  );
};

export default Catalog;
