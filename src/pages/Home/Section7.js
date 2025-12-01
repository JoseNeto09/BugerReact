import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Section7() {
  return (
    <section className="contact_section">
      <Container>
        <Row className="justify-content-center">
          <Col sm={8} className="text-center">
            <h4>Com duvida?</h4>
            <h2>15 Minutos o Artesanal Chega!</h2>
            <p>
              Entrega ágil e totalmente protegida, garantindo que cada pedido
              chegue em perfeito estado, com máxima eficiência
            </p>
            <Link to="/" className="btn btn_red px-4 py-2 rounded-0">
              Telefone: (83)98109-8868
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section7;
