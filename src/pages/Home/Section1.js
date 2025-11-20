import { Container, Row, Col } from "react-bootstrap";
import Burguer from "../../Assets/assets/hero/hero-2.png";
import { Link } from "react-router-dom";


function Section1(){
    return(
       <section className="hero_section">   
        <Container>
            <Row>
                <Col lg={7} className="mb-5 mb-lg-0">
                    <div className="position-relative">
                        <img src={Burguer} className="img-fluid" alt="Hero" />
                        <div className="price_badge">
                            <div className="badge_text">
                                <h4 className="h4_xs">Apenas</h4>
                                <h3 className="h3_lg">R$26,99</h3>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={5}>
                    <div className="hero_text text-center">
                        <h1 className="text-white">Novo Burguer</h1>
                        <h2 className="text-white">Aneis acebolados</h2>
                        <p className="text-white pt-2">Hambúrguer Artesanal de Cebola, preparado com carne selecionada, pão brioche macio e cebolas caramelizadas no ponto perfeito.
Uma combinação suculenta, saborosa e irresistível para quem busca um verdadeiro gourmet. </p>
                         <Link to="/" className="btn order_now">
                            Pedir agora
                         </Link>
                    </div>
                </Col>
            </Row>
        </Container>
       </section>
    )
}

export default Section1;