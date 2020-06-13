import session, { SessionOptions } from "express-session";
import sessionKnex from "connect-session-knex";
import knex from "../../database/knex";

const KnexSessionStore = sessionKnex(session);

// expression sessions
const sessionOptions: SessionOptions = {
  store: new KnexSessionStore({
    knex,
  }),
  secret: process.env.PRIVATE_KEY,
  name: "sid",
  cookie: {
    maxAge: 1000 * 60 * 30,
    secure: false,
    sameSite: true,
  },
  rolling: true,
  saveUninitialized: false,
  resave: false,
};

export default session({ ...sessionOptions });
