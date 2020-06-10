import nextConnect from "next-connect";
import { createOrder } from "../../../database/Queries/orders/orders";
import { sendError } from "../../../utils/api_utils";
import middlewares from "../../../utils/middlewares/common";

const handler = nextConnect();

handler.use(middlewares).post(async (req, res) => {
  const user_id = req.session.userId;
  const order = {...req.body, user_id}

  try {
    const id = await createOrder(order);
    res.json({ Success: "OK", id });
    return;
  } catch (error) {
    sendError(res, {
      status: 500,
      // message: "500 -Internal Server Error",
      message: error.message,
    });
    return;
  }
});

export default handler;
