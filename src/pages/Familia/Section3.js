import { Container, Row, Col } from "react-bootstrap";
import Image1 from "../../Assets/assets/menu/combohero11.png";
import Image2 from "../../Assets/assets/menu/combohero12.png";
import Image3 from "../../Assets/assets/menu/combohero13.png";

import CardsCombo from "../../components/Layouts/CardsCombo";
import { Link } from "react-router-dom";

const mockData = [
  {
    id: "0001",
    image: Image1,
    title: "3x Crispy Chickens",
    paragraph: "Peito de frango, molho de pimenta, tomates, picles, salada, Batata da grande",
    rating: 3,
    price: 140.55,
  },
  {
    id: "0002",
    image: Image2,
    title: "Ultimate Bacon & Crispy Chickens",
    paragraph: "Hambúrguer da casa, queijo cheddar, bacon, cebola, Batata da grande.",
    rating: 4.5,
    price: 90.99,
  },
  {
    id: "0003",
    image: Image3,
    title: "2x Black Sheep",
    paragraph: "Queijo americano, molho de tomate, abacate, Salada, Batata da grande",
    rating: 4,
    price: 98.15,
  },
];

// Rating Logical Data
const renderRatingIcons = (rating) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (rating > 0.5) {
      stars.push(<i key={i} className="bi bi-star-fill"></i>);
      rating--;
    } else if (rating > 0 && rating < 1) {
      stars.push(<i key={"half"} className="bi bi-star-half"></i>);
      rating--;
    } else {
      stars.push(<i key={`empty${i}`} className="bi bi-star"></i>);
    }
  }
  return stars;
};

function Section3() {
  return (
    <section className="menu_section">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
            <h2>Bateu aquela fome monstra?</h2>
            <p className="para">
             Escolha o combo e transforme sua fome em satisfação completa — mais sabor, mais economia, mais felicidade!
            </p>
          </Col>
        </Row>
        <Row>
          {mockData.map((cardData, index) => (
            <CardsCombo
              key={index}
              image={cardData.image}
              rating={cardData.rating}
              title={cardData.title}
              paragraph={cardData.paragraph}
              price={cardData.price}
              renderRatingIcons={renderRatingIcons}
            />
          ))}
        </Row>

        <Row className="pt-5">
          <Col sm={6} lg={5}>
            <div className="ads_box ads_img1 mb-5 mb-md-0">
              <h4 className="mb-0">Primeira Compra?</h4>
              <h5>BATATAS FRITAS COM QUEIJO GRÁTIS</h5>
              <Link to="/" className="btn btn_red px-4 rounded-0">
                Saiba mais
              </Link>
            </div>
          </Col>
          <Col sm={6} lg={7}>
            <div className="ads_box ads_img2">
              <h4 className="mb-0">Burguer Duplo</h4>
              <h5>Compre um combo familia Ganhe um burger a mais</h5>
              <Link to="/" className="btn btn_red px-4 rounded-0">
                Saiba mais
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section3;