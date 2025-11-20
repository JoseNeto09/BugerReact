import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pizza from "../../Assets/assets/about/pizza.png";
import Salad from "../../Assets/assets/about/salad.png";
import Delivery from "../../Assets/assets/about/delivery-bike.png";


// Mock Data Cards
const mockData = [
  {
    image: Pizza,
    title: "Original",
    paragraph: `Produtos de alta excelência garantem confiança, trazendo autenticidade total e desempenho superior para todos os clientes.`,
  },
  {
    image: Salad,
    title: "comida de qualidade",
    paragraph: `Cada produto é escolhido com atenção e controle rigoroso, oferecendo frescor, durabilidade e desempenho superior`,
  },
  {
    image: Delivery,
    title: "Entrega Rapida",
    paragraph: `Entrega ágil e totalmente protegida, garantindo que cada pedido chegue em perfeito estado, com máxima eficiência`,
  },
];

export const Section2 = () => {
  return (
    <>
    <section className="about_section">
        <Container>
            <Row>
                <Col lg={{span:8, offset:2}} className="text-center">
                  <h2>O hambúrguer fica mais gostoso quando você come com a sua família.</h2>
                  <p>
                  Aproveite o nosso Combo Família, criado para deixar seus momentos ainda mais especiais.
                   Tire uma foto curtindo o combo, poste no Instagram marcando nossa página e ganhe 20% de
                    desconto na próxima compra. Simples, divertido e perfeito para compartilhar bons momentos!
                  </p>
                  <Link to="/" className="btn order_now btn_red">
                     Menu Família
                  </Link>
                </Col>
            </Row>
        </Container>
    </section>
    <section className="about_wrapper">
      <Container>
        <Row className="Justify-content-mb-center">{mockData.map((cardData, index)=>(
          <Col md={6} lg={4} className="mb-4 mb-d-0" key={index}>
              <div className="about_box text-center">
                <div className="about_icon">
                  <img 
                    src={cardData.image}
                    className="img-fluid"
                    alt="icon"/>
                </div>
                <h4>{cardData.title}</h4>
                <p>{cardData.paragraph}</p>
              </div>
          </Col>
        ))}</Row>
      </Container>
    </section>
    </>
  )
}
