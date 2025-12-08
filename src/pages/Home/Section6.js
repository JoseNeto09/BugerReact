import { Container, Row, Carousel } from "react-bootstrap";
import User1 from "../../Assets/assets/blog/review-author-1.jpg";
import User2 from "../../Assets/assets/blog/review-author-2.jpg";
import User3 from "../../Assets/assets/blog/review-author-3.jpg";

function Section6() {
  return (
    <section className="blog_section">
      <Container>
        <Row>
          <Carousel>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                  <img src={User1} className="img-fluid" alt="User-1" />
                </div>
                <p>
                  "hambúrgueres artesanais preparados com cuidado, sabor que
                  surpreende do primeiro ao último pedaço e um atendimento que
                  faz a gente se sentir em casa."
                </p>
                <div className="item_rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>Jhon Robert</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                  <img src={User2} className="img-fluid" alt="User-2" />
                </div>
                <p>
                  " A Tasty Burger se tornou minha escolha número um porque aqui
                  cada detalhe importa: dos ingredientes sempre frescos ao aroma
                  irresistível."
                </p>
                <div className="item_rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>AMELIE SILVA</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                  <img src={User3} className="img-fluid" alt="User-3" />
                </div>
                <p>
                  “A Tasty Burger é meu lugar favorito porque cada hambúrguer
                  entrega um sabor único que sempre me faz voltar.”
                </p>
                <div className="item_rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>Lucas Neto</h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </section>
  );
}

export default Section6;
