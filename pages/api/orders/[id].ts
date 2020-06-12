import nextConnect from "next-connect";
import middlewares from "../../../utils/middlewares/common";
import { getOrderById } from "../../../database/Queries/orders/orders";

const handler = nextConnect();

handler.use(middlewares).get(async (req, res) => {
  const orderId = req.query.id;

  const order = await getOrderById(+orderId);

  res.status(200).json(order);
});

export default handler;
