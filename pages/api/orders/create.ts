import nextConnect from "next-connect";
import {
  createOrder,
  verifyPayment,
} from "../../../database/Queries/orders/orders";
import { sendError } from "../../../utils/api_utils";
import middlewares from "../../../utils/middlewares/common";
import { logger } from "../../../utils/logger";

const handler = nextConnect();

handler
  .use(middlewares)
  .post(async (req: any, res) => {
    try {
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

      const id = await createOrder(order, orderItems);

      req.session.orderId = id;
      res.status(201).json({ orderId: req.session.orderId });
      return;
    } catch (error) {
      logger.error(error.message);
      sendError(res, {
        message:
          "Something terrible happend. Its not you its us, try again later",
        status: 500,
      });
      return;
    }
  })
  .put(async (req: any, res) => {
    try {
      const order_id = req.session.orderId;
      await verifyPayment(order_id);
      res.status(204).end();
    } catch (error) {
      logger.error(error.message);
      sendError(res, {
        message:
          "Something terrible happend. Its not you its us, try again later",
        status: 500,
      });
    }
  });

export default handler;
