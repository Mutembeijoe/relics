import { NextApiRequest, NextApiResponse } from "next";
import { createOrder } from "../../../database/Queries/orders/orders";
import { sendError } from "../../../utils/api_utils";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "POST":
      try {
        const id = await createOrder(req.body);
        res.json({ id });
        return;
      } catch (error) {
        sendError(res, {
          status: 500,
          // message: "500 -Internal Server Error",
          message: error.message,
        });
        return;
      }
    default:
      res.statusCode = 405;
      res.end(`Method ${req.method} Not Allowed`);
  }
};
