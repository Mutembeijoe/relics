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
import cn from 'classnames'
import styles from "../../styles/login_page.module.scss";

const SignIn = ({ loginUser }) => {
  const router = useRouter();

  const [form, setInputs] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/users/login", {
        email: form.email,
        password: form.password,
      });
      const user = _.pick(response.data, ["username", "email", "token"]);
      loginUser(user);
      router.back();
    } catch (err) {
      const { error } = err.response.data;
      setError(error);
    }
  };

  return (
    <Layout>
      <div className="container">
        <div className={cn(styles.invalidResponse, {[styles.active]:error})}>{error}</div>
        <div className="row">
          <div className="col-md-5 mx-auto" >
            <Form onSubmit={handleSubmit}>
              <fieldset>
                <legend>Log In</legend>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    value={form.email}
                    onChange={(e) =>
                      setInputs({ ...form, email: e.target.value })
                    }
                    type="email"
                    placeholder="Enter email"
                    className="rounded"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    value={form.password}
                    onChange={(e) =>
                      setInputs({ ...form, password: e.target.value })
                    }
                    type="password"
                    placeholder="Password"
                    className="rounded"
                  />
                </Form.Group>
                <div className="d-flex justify-content-between">
                  <Button variant="primary" type="submit" className="rounded">
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
          </div>
        </div>
      </div>
    </Layout>
  );
};

const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(login(user)),
});

export default connect(null, mapDispatchToProps)(SignIn);
