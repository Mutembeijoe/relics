import session, { SessionOptions } from "express-session";

// expression sessions
const sessionOptions: SessionOptions = {
    secret: process.env.PRIVATE_KEY,
    name: "sid",
    cookie: {
      maxAge: 1000 * 60 * 30,
      secure: false,
      sameSite: true,
    },
    rolling:true,
    saveUninitialized:false,
    resave:false
  };
  
export default session({ ...sessionOptions })


