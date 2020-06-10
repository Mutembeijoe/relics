import session, { SessionOptions } from "express-session";
import redis, { RedisClient } from "redis";
import { RedisStoreOptions, RedisStore } from "connect-redis";

const Store: RedisStore = require("connect-redis")(session);
const redisClient: RedisClient = redis.createClient();

const redisStoreOptions: RedisStoreOptions = {
  client: redisClient,
};

// expression sessions
const sessionOptions: SessionOptions = {
  store: new Store(redisStoreOptions),
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
