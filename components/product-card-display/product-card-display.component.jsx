import Card from "react-bootstrap/Card"
import productCardStyles from './product-card-display.module.scss'

const ProductCardDisplay = ({item}) => (
  <Card
    className={`${productCardStyles.card} shadow mx-3 mb-5 bg-white rounded`}
    
  >
    <div className={`${productCardStyles.cardImgBox}`}>
      <img src={item.imageUrl}  className={`${productCardStyles.cardImg}`} alt={item.product_name}/>
    </div>

    <Card.Body className={`${productCardStyles.cardBody}`}>
      <Card.Title className="text-primary">{item.product_name}</Card.Title>
      <div className={productCardStyles.cardFooter}>
        <div className={productCardStyles.price}>
          <span className="text-muted">KSh</span>
          <span className="mx-1 text-primary">{item.price}</span>
        </div>
        <div className={productCardStyles.viewProductDetail}>
          <div className="px-2">
            view details
            <br></br>& buy <i className="mdi mdi-arrow-right-bold"></i>
          </div>
        </div>
      </div>
      <div
        className={`${productCardStyles.cart} bg-primary text-warning px-2`}
      >
        <i className="mdi mdi-cart mdi-24px"></i>
      </div>
    </Card.Body>
  </Card>
)

export default ProductCardDisplay
