import * as yup from "yup";

export const userSchema = yup.object({
  username: yup.string().min(3).max(20).required(),
  password: yup
    .string()
    .matches(
      new RegExp("^[a-zA-Z0-9]{5,30}$"),
      "passwords can only contain lowercase, uppercase letters, numbers and must be at least 5 characters long"
    )
    .required(),
  repeat_password: yup
    .string()
    .oneOf([yup.ref("password")], "passwords do not match")
    .required("Repeat Password is Required"),
  email: yup.string().email().required(),
});
