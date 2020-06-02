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
                <legend>Log In</legend>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
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

export default SignUp;
