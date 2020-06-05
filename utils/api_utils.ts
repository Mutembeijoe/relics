import { Error } from "./interfaces";

export const sendError = (res, error: Error) => {
  return res.status(error.status).json({
    message: error.message,
    label: "" || error.label,
  });
};
