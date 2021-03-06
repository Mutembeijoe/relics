import Link from "next/link";
import Card from "react-bootstrap/Card";
import productCardStyles from "./product-card-display.module.scss";

const ProductCardDisplay = ({ item }) => (
  <Link href="/product/[slug]" as={`/product/${item.product_slug}`}>
    <a>
      <Card
        className={`${productCardStyles.card} shadow mx-3 mb-5 bg-white rounded`}
      >
        <div className={`${productCardStyles.cardImgBox}`}>
          <img
            src={item.img_url}
            className={`${productCardStyles.cardImg}`}
            alt={item.product_name}
          />
        </div>

        <Card.Body className={`${productCardStyles.cardBody}`}>
          <Card.Title className="text-primary font-weight-bold">{item.product_name}</Card.Title>
          <div className={productCardStyles.cardFooter}>
            <div className={productCardStyles.price}>
              <span className="text-muted">KSh</span>
              <span className="mx-1 text-primary">{item.price}</span>
            </div>

            <div className={productCardStyles.viewProductDetail}>
              <div className="px-2">
                view details
                <br />& buy <i className="mdi mdi-arrow-right-bold"></i>
              </div>
            </div>
            <div
              className={`${productCardStyles.cart} bg-primary text-warning px-2`}
            >
              <i className="mdi mdi-cart mdi-24px"></i>
            </div>
          </div>
        </Card.Body>
      </Card>
    </a>
  </Link>
);

export default ProductCardDisplay;
