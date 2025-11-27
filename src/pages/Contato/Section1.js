import { Container, Row, Col } from "react-bootstrap";
import Dev from "../../Assets/assets/Dev/dev.png";
import { Link } from "react-router-dom";


function Section1(){
    return(
       <section className="hero_section">   
        <Container>
            <Row>
                <Col lg={7} className="mb-5 mb-lg-0">
                    <div className="position-relative">
                        <img src={Dev} className="img-fluid" alt="Hero" />
                    </div>
                </Col>
                <Col lg={5}>
                    <div className="hero_text text-center">
                        <h1 className="text-white">Desenvolvedor Front-end</h1>
                        <h2 className="text-white">José Neto</h2>
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