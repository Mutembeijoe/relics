import Layout from "../../components/Layout/layout";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import cn from "classnames";
import axios from "axios";
import styles from "../../styles/sign_up_page.module.scss";
import { userSchema } from "../../database/Queries/users/schema";
import { Formik } from "formik";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { saveCurrentRoute } from "../../redux/route/actions";
import Head from "next/head";

const SignUp = ({ saveCurrentRoute }) => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  return (
    <Layout>
    <Head>
        <title>
          Sign Up | Relics{" "}
        </title>
        <meta name="description" content="Create a Relics Account and start ordering your cool Branded fashion"/>
      </Head>
      <div className="container">
        <Alert
          variant="danger"
          className={`${cn(styles.alert, {
            [styles.active]: error,
          })} mx-auto text-center`}
        >
          {error}
        </Alert>
        <Alert
          variant="success"
          className={`${cn(styles.alert, {
            [styles.active]: success,
          })} mx-auto text-center`}
        >
          User was successfully registered
        </Alert>
        <div className="row">
          <div className="col-md-5 mx-auto">
            <Formik
              validationSchema={userSchema}
              initialValues={{
                email: "",
                username: "",
                password: "",
                repeat_password: "",
              }}
              onSubmit={async (value, actions) => {
                try {
                  await axios.post("/api/users/register", {
                    ...value,
                  });
                  actions.resetForm();
                  actions.setSubmitting(false);
                  setError(null)
                  setSuccess(true);
                  saveCurrentRoute(router.asPath);
                  setTimeout(() => {
                    router.push("/auth/login");
                  }, 1000);
                } catch (error) {
                  const { label, message } = error.response.data;

                  if (label) {
                    actions.setErrors({ [label]: message });
                    setError(null);
                  } else {
                    setError(message);
                  }
                }
              }}
            >
              {({
                handleSubmit,
                handleChange,
                values,
                errors,
                touched,
                isSubmitting,
              }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <fieldset>
                    <legend>Sign Up</legend>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        name="email"
                        type="email"
                        value={values.email}
                        placeholder="Enter email"
                        className="rounded"
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicUsername">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="text"
                        name="username"
                        value={values.username}
                        placeholder="Enter username"
                        className="rounded"
                        onChange={handleChange}
                        isValid={touched.username && !errors.username}
                        isInvalid={!!errors.username}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        {errors.username}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        value={values.password}
                        placeholder="Password"
                        className="rounded"
                        name="password"
                        onChange={handleChange}
                        isValid={touched.password && !errors.password}
                        isInvalid={!!errors.password}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formBasicPasswordRepeat">
                      <Form.Label>Repeat Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="repeat_password"
                        value={values.repeat_password}
                        placeholder="Repeat Password"
                        className="rounded"
                        onChange={handleChange}
                        isValid={
                          touched.repeat_password && !errors.repeat_password
                        }
                        isInvalid={!!errors.repeat_password}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        {errors.repeat_password}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <div className="d-flex justify-content-between">
                      <Button
                        variant="primary"
                        type="submit"
                        className="rounded"
                        disabled={Object.keys(errors).length !== 0}
                      >
                        Sign Up
                      </Button>

                      <Form.Text className="text-muted">
                        Already Have an Account?
                        <Link href="/auth/login">
                          <a className="font-weight-bold mx-2">Sign In</a>
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

const mapDispatchToProps = (dispatch) => ({
  saveCurrentRoute: (route) => dispatch(saveCurrentRoute(route)),
});

export default connect(null, mapDispatchToProps)(SignUp);
