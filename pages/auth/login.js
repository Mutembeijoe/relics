import Layout from "../../components/Layout/layout";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { login } from "../../redux/user/actions";
import _ from "lodash";
import { useRouter } from "next/router";
import cn from "classnames";
import Alert from "react-bootstrap/Alert";
import styles from "../../styles/sign_up_page.module.scss";
import { Formik } from "formik";
import * as yup from "yup";
import { selectPreviousRoute } from "../../redux/route/selectors";
import { deletePreviousRoute } from "../../redux/route/actions";

const SignIn = ({ loginUser, previousRoute, deletePreviousRoute }) => {
  const router = useRouter();
  console.log(previousRoute);

  const [error, setError] = useState(null);

  const loginSchema = yup.object({
    email: yup.string().email("Invalid email address").required(),
    password: yup.string().required(),
  });

  return (
    <Layout>
      <div className="container">
        <Alert
          variant="danger"
          className={`${cn(styles.alert, {
            [styles.active]: error,
          })} mx-auto text-center`}
        >
          {error}
        </Alert>
        <div className="row">
          <div className="col-md-5 mx-auto">
            <Formik
              validationSchema={loginSchema}
              initialValues={{ email: "", password: "" }}
              onSubmit={async (value, actions) => {
                try {
                  const response = await axios.post("/api/users/login", {
                    ...value,
                  });
                  const user = _.pick(response.data, [
                    "username",
                    "email",
                    "token",
                  ]);
                  // save user to redux state
                  loginUser(user);

                  actions.setSubmitting(false);

                  //redirect user accordingly

                  if (previousRoute === "/auth/signup") {
                    deletePreviousRoute()
                    router.push("/");
                  } else {
                    router.back();
                  }
                } catch (error) {
                  const { message } = error.response.data;
                  setError(message);
                }
              }}
            >
              {({
                handleSubmit,
                handleChange,
                values,
                errors,
                isSubmitting,
              }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <fieldset>
                    <legend>Log In</legend>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="Enter email"
                        className="rounded"
                        isInvalid={!!errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        type="password"
                        placeholder="Password"
                        className="rounded"
                        isInvalid={!!errors.password}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <div className="d-flex justify-content-between">
                      <Button
                        variant="primary"
                        type="submit"
                        className="rounded"
                        disabled={isSubmitting}
                      >
                        Log In
                      </Button>

                      <Form.Text className="text-muted">
                        Don't Have an Account?
                        <Link href="/auth/signup">
                          <a className="font-weight-bold mx-2">Sign Up</a>
                        </Link>
                      </Form.Text>
                    </div>
                  </fieldset>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  previousRoute: selectPreviousRoute(state),
});

const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(login(user)),
  deletePreviousRoute: () => dispatch(deletePreviousRoute())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
