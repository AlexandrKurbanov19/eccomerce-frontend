import { Col, Container, Row } from "react-bootstrap";
import CardProduct from "../CardProduct";

const Highlights = () => {
  return (
    <Container>
      <Row>
        <Col>
          <CardProduct
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            alt="example"
            title="Europe Street beat"
            description="www.instagram.com"
            price="1200 руб."
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Highlights;
