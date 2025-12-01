import { Container, Row, Col } from "react-bootstrap";
import Dev from "../../Assets/assets/Dev/dev.png";
import { Link } from "react-router-dom";

function Section1() {
    return (
        <section className="hero_section">
            <Container>
                <Row className="align-items-center">
                    <Col lg={7} className="mb-5 mb-lg-0 text-center">
                        <div className="position-relative">
                            <img src={Dev} className="img-fluid dev_img" alt="Hero" />
                        </div>
                    </Col>

                    <Col lg={5}>
                        <div className="hero_text text-center">
                            <h1 className="text-white">Desenvolvedor Front-end</h1>
                            <h2 className="text-white">José Neto</h2>

                            <div className="btn_group">
                                <Link to="/" className="btn order_now">
                                    <i class="bi bi-twitter-x"></i> 
                                </Link>

                                <Link to="/" className="btn order_now">
                                    <i className="bi bi-instagram"></i> 
                                </Link>

                                <Link to="/" className="btn order_now">
                                    <i className="bi bi-linkedin"></i> 
                                </Link>

                                <Link to="/" className="btn order_now">
                                    <i className="bi bi-github"></i> 
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Section1;
