import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../Assets/assets/promotion/pro.png"

function Section4() {
  return(
    <>
    <section className="promotion_section">
        <Container>
            <Row className="align-items-center">
                <Col lg={6} className="text-center mb-5 mb-lg-0">
                    <img src={PromotionImage} className="img-fluid" alt="Promotion" />
                </Col>
                    <Col lg={6} className="px-5">
                        <h2>Nada une as pessoas como um bom hambúrguer artesanal.</h2>
                        <p>
                            O hambúrguer tradicional oferece praticidade e um sabor mais simples do dia a dia.
                            Já o artesanal traz ingredientes frescos, carne selecionada e temperos exclusivos.
                            O resultado é uma experiência mais intensa, suculenta e cheia de personalidade.
                        </p>
                        <ul>
                            <li>
                            <p>
                              Compartilhar momentos: Comer hambúrguer artesanal com amigos e família transforma
                              a refeição em uma experiência cheia de risadas e conversas.
                            </p>
                            </li>
                            <li>
                             <p>
                                Sabor que conecta: O sabor marcante do artesanal cria um clima especial, deixando
                                o encontro mais gostoso e memorável.</p>
                            </li>
                            <li>
                            <p>
                                Experiência completa: Juntos, cada um descobre combinações e sabores diferentes, 
                                tornando o momento mais divertido do que comer sozinho.
                            </p>
                            </li>
                        </ul>
                    </Col>
            </Row>
        </Container>
    </section>

      {/* BG Parallax Scroll */}
      <section className="bg_parallax_scroll"></section>
    </>
  )  
}

export default Section4
