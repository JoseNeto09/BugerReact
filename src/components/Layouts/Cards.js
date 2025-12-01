import { Col, Card } from "react-bootstrap";
import { useCart } from "../../context/CartContext"; 

function Cards({ image, rating, title, paragraph, price, renderRatingIcons }) {
  const { addToCart } = useCart(); // função que soma +1

  return (
    <Col sm={6} lg={4} xl={3} className="mb-4">
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
              <button
                onClick={addToCart}
                className="btn btn-link p-0 text-decoration-none"
              >
                <i className="bi bi-bag me-2"></i>
                Adicionar
              </button>
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

export default Cards;
