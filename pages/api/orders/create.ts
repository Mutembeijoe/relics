import nextConnect from "next-connect";
import {
  createOrder,
  verifyPayment,
} from "../../../database/Queries/orders/orders";
import { sendError } from "../../../utils/api_utils";
import middlewares from "../../../utils/middlewares/common";

const handler = nextConnect();

handler
  .use(middlewares)
  .post(async (req: any, res) => {
    const user_id = req.session.userId;
    const order = { ...req.body.shipping, user_id };
    const cartItems = req.body.cartItems;

    const orderItems = cartItems.map((item) => {
      return {
        product_id: item.id,
        unit_price: item.price,
        size: item.size,
        quantity: item.quantity,
      };
    });
    try {
      const id = await createOrder(order, orderItems);

      req.session.orderId = id;
      res.json({ Success: "OK", orderId: req.session.orderId});
      return;
    } catch (error) {
      sendError(res, {
        status: 500,
        message: "500 -Internal Server Error",
        // message: error.message,
      });
      return;
    }
  })
  .put(async (req: any, res) => {
    const order_id = req.session.orderId;

    try {
      await verifyPayment(order_id);
      res.status(200).end();
    } catch (err) {
      sendError(res, {
        status: 500,
        message: "500-Internal Server Error",
      });
    }
  });

export default handler;
