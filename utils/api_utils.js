// add types with Typescript ---to remember
export const sendError = (res, error)=>{
    return res.status(error.status).json({
        message:error.message,
        label: "" || error.label
    });
}