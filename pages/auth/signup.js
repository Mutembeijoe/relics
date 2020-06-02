import Layout from "../../components/Layout/layout";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Link from 'next/link'

const SignUp = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <Form>
              <fieldset>
                <legend>Sign Up</legend>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    className="rounded"
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    className="rounded"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className="rounded"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPasswordRepeat">
                  <Form.Label>Repeat Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Repeat Password"
                    className="rounded"
                  />
                </Form.Group>
                <div className="d-flex justify-content-between">
                  <Button variant="primary" type="submit" className="rounded">
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
