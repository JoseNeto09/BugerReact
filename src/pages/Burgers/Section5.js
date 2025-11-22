import { Container, Row, Col, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

import StoreIOS from "../../Assets/assets/shop/appstore.png";
import StoreGoogle from "../../Assets/assets/shop/googleplay.png";
import DowloadImage from "../../Assets/assets/shop/e-shop.png";

import Brand1 from "../../Assets/assets/brands/brand-11.png";
import Brand2 from "../../Assets/assets/brands/brand-12.png";
import Brand3 from "../../Assets/assets/brands/brand-13.png";
import Brand4 from "../../Assets/assets/brands/brand-14.png";
import Brand5 from "../../Assets/assets/brands/brand-15.png";
import Brand6 from "../../Assets/assets/brands/brand-16.png";
import Brand7 from "../../Assets/assets/brands/brand-17.png";
import Brand8 from "../../Assets/assets/brands/brand-18.png";

function Section5() {
  return (
    <div>
      {/* SHOP SECTION */}
      <section className="shop_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
              <h4>Dowload mobile App and</h4>
              <h2>save up to 20%</h2>
              <p>
                aliquam a augue suscipit, luctus neque purus ipsam and neque
                dolor primis libero tempus, bandit varius
              </p>

              <Link to={"/"}>
                <img
                  src={StoreIOS}
                  alt="IOS"
                  className="img-fluid store me-3"
                />
              </Link>
              <Link to={"/"}>
                <img
                  src={StoreGoogle}
                  alt="Google Play"
                  className="img-fluid store me-4"
                />
              </Link>
            </Col>

            <Col lg={6} className="text-center">
              <img
                src={DowloadImage}
                alt="shop"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* BRANDS SECTION (CAROUSEL) */}
      <section className="brand_section">
        <Container>
          <Row>
            <Carousel indicators={false} controls={true} interval={2500}>
              {/* SLIDE 1 */}
              <Carousel.Item>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="brand_img">
                    <img src={Brand1} className="img-fluid" alt="brand-1" />
                  </div>
                  <div className="brand_img">
                    <img src={Brand2} className="img-fluid" alt="brand-2" />
                  </div>
                  <div className="brand_img">
                    <img src={Brand3} className="img-fluid" alt="brand-3" />
                  </div>
                  <div className="brand_img">
                    <img src={Brand4} className="img-fluid" alt="brand-4" />
                  </div>
                  <div className="brand_img">
                    <img src={Brand5} className="img-fluid" alt="brand-5" />
                  </div>
                </div>
              </Carousel.Item>
              {/* SLIDE 2 */}
              <Carousel.Item>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="brand_img">
                    <img src={Brand1} className="img-fluid" alt="brand-1" />
                  </div>
                  <div className="brand_img">
                    <img src={Brand6} className="img-fluid" alt="brand-6" />
                  </div>
                  <div className="brand_img">
                    <img src={Brand7} className="img-fluid" alt="brand-7" />
                  </div>
                  <div className="brand_img">
                    <img src={Brand8} className="img-fluid" alt="brand-8" />
                  </div>
                  <div className="brand_img">
                    <img src={Brand5} className="img-fluid" alt="brand-5" />
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Section5;
