import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function CardsCombo({ image, rating, title, paragraph, price, renderRatingIcons }) {
  const { addToCart } = useCart();

  return (
    <Col sm={6} lg={4} xl={4} className="mb-4">
      <Card className="overflow-hidden">
        <div className="overflow-hidden">
          <Card.Img variant="top" src={image} />
        </div>

        <Card.Body>
          <div className="d-flex align-items-center justify-content-between">
            <div className="item_rating">{renderRatingIcons(rating)}</div>
            <div className="wishlist">
              <i className="bi bi-heart"></i>
            </div>
          </div>

          <Card.Title>{title}</Card.Title>
          <Card.Text>{paragraph}</Card.Text>

          <div className="d-flex align-items-center justify-content-between">
            <div className="add_to_card">
              <Link to="/" onClick={addToCart}>
                <i className="bi bi-bag me-2"></i>
                Adicionar
              </Link>
            </div>
            <div className="menu_price">
              <h5 className="mb-0">R${price}</h5>
            </div>
          </div>
        </Card.Body>

      </Card>
    </Col>
  );
}

export default CardsCombo;
