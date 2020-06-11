import nextConnect from "next-connect";
import session from "./session";
import logger from "./logger";

const middlewares = nextConnect();

middlewares.use(session).use(logger)

export default middlewares;
