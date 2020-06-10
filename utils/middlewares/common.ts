import nextConnect from "next-connect";
import session from "./session";

const middlewares = nextConnect();

middlewares.use(session);

export default middlewares;
