import { sendError } from "./../../../utils/api_utils";
import nextConnect from "next-connect";
import middlewares from "../../../utils/middlewares/common";
import { logger } from "../../../utils/logger";

const handler = nextConnect();

handler.use(middlewares);

handler.delete((req: any, res) => {
  req.session.destroy((err) => {
    if (err) {
      logger.error(err.message);
      sendError(res, {
        message:
          "Something terrible happend. Its not you its us, try again later",
        status: 500,
      });
    }
    res.setHeader(
      "Set-Cookie",
      `sid="karate";path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT;`
    );

    res.status(200).end();
  });
});

export default handler;
