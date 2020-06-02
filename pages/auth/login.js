import Layout from "../../components/Layout/layout";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import { useState } from "react";

const SignIn = () => {
  const [form, setInputs] = useState({
    email:"",
    password:""
  });

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <Form>
              <fieldset>
                <legend>Log In</legend>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    value={form.email}
                    onChange={(e)=> setInputs({...form,email:e.target.value})}
                    type="email"
                    placeholder="Enter email"
                    className="rounded"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    value={form.password}
                    onChange={(e)=> setInputs({...form,password:e.target.value})}
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

export default SignIn;
