import nextConnect from "next-connect";
import middlewares from "../../../utils/middlewares/common";
import { getOrderById } from "../../../database/Queries/orders/orders";

const handler = nextConnect();

handler.use(middlewares).get(async (req, res) => {
  const orderId = req.query.id;

  const response = await getOrderById(+orderId);

  const orderItems = response.map((item) => {
    return {
      id:item.id,
      size:item.size,
      quantity: item.quantity,
      unit_price: item.unit_price,
      img_url: item.img_url,
      product_name: item.product_name,
    };
  });

  const order = {
    created_at: response[0].created_at,
    total: response[0].total,
    orderItems: orderItems,
  };

  res.status(200).json({order});
});

export default handler;
