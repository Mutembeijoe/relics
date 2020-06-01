import { userSchema } from "../../../database/Queries/users/schema"
import { createUser } from "../../../database/Queries/users/users";

export default (req, res) => {

    const {error, value} = userSchema.validate(req.body);

    if (error){return res.status(400).json(error)}
    

    // createUser(value)
    res.status(200).json({
        success:"OK",
        value
    })
}