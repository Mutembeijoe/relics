import nextConnect from "next-connect";
import middlewares from "../../../utils/middlewares/common";

const handler = nextConnect();

handler.use(middlewares)

handler.delete((req, res) => {
    console.log(req.session)
    req.session.destroy((err) => {
        if (err) {throw new Error("Errororororo")}
        res.setHeader('Set-Cookie', `sid="karate";path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT;`)

        res.status(200).end()
    })
});


export default handler;