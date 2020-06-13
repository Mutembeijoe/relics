import nextConnect from "next-connect";

import { sendError } from "./../../../utils/api_utils";
import middlewares from "../../../utils/middlewares/common";
import { getOrderById } from "../../../database/Queries/orders/orders";
import { logger } from "../../../utils/logger";

const handler = nextConnect();

handler.use(middlewares).get(async (req, res) => {
  try {
    const orderId = req.query.id;

    const response = await getOrderById(+orderId);

    const orderItems = response.map((item) => {
      return {
        id: item.id,
        size: item.size,
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

    res.status(200).json({ order });
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
