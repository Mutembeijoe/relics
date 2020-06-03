import Layout from "../../components/Layout/layout";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import cn from "classnames";
import axios from "axios";
import styles from "../../styles/sign_up_page.module.scss";

const SignUp = () => {
  const [data, setData] = useState({
    email: "",
    username: "",
    password: "",
    repeat_password: "",
  });

  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.password !== data.repeat_password) {
      setError("Password and Repeat Password do not match!");
      return;
    }
    if (data.username.length < 3) {
      setError("Username has to be at least 3 characters");
      return;
    }
    try {
      const response = await axios.post("/api/users/register", {
        ...data,
      });
      console.log(response);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <Layout>
      <div className="container">
        <Alert
          variant="danger"
          className={`${cn(styles.errorAlert, {
            [styles.active]: error,
          })} mx-auto`}
        >
          {error}
        </Alert>
        <div className="row">
          <div className="col-md-5 mx-auto">
            <Form onSubmit={handleSubmit}>
              <fieldset>
                <legend>Sign Up</legend>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    className="rounded"
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    placeholder="Enter username"
                    className="rounded"
                    onChange={(e) =>
                      setData({ ...data, username: e.target.value })
                    }
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className="rounded"
                    name="password"
                    onChange={(e) =>
                      setData({ ...data, password: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPasswordRepeat">
                  <Form.Label>Repeat Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="repeat_password"
                    placeholder="Repeat Password"
                    className="rounded"
                    onChange={(e) =>
                      setData({ ...data, repeat_password: e.target.value })
                    }
                  />
                </Form.Group>
                <div className="d-flex justify-content-between">
                  <Button
                    variant="primary"
                    type="submit"
                    className="rounded"
                    disabled={
                      (data.email &&
                        data.username &&
                        data.password &&
                        data.repeat_password) === ""
                    }
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
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
