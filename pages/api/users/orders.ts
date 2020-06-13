import nextConnect from "next-connect";
import middlewares from "../../../utils/middlewares/common";
import { getAllUserOrders } from "../../../database/Queries/orders/orders";
import { logger } from "../../../utils/logger";

const handler = nextConnect();

handler.use(middlewares).get(async (req:any, res) => {
  let userId = req.session.userId;

  try {
    const orders = await getAllUserOrders(userId);
    res.status(200).json({orders});
    return;
  } catch (error) {
    logger.error(error.message)
    throw new Error(error.message)
  }
});


export default handler;