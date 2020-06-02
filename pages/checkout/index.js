import Layout from "../../components/Layout/layout";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const Checkout = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Form>
              {/* Contacts Section */}
              <fieldset className="my-3">
                <legend>Contact Information</legend>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmailAddress">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Email Address"
                      className="rounded"
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      placeholder="Enter Phone Number"
                      className="rounded"
                    />
                  </Form.Group>
                </Form.Row>
              </fieldset>

              {/* Shipping Section */}
              <fieldset>
                <legend>Shipping Information</legend>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      className="rounded"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      className="rounded"
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    placeholder="1234 Main St"
                    className="rounded"
                  />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                  <Form.Label>Address 2 (optional)</Form.Label>
                  <Form.Control
                    placeholder="Apartment, studio, or floor"
                    className="rounded"
                  />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridTown">
                    <Form.Label>Town</Form.Label>
                    <Form.Control
                      placeholder="Thika, Rongai, Naivasha ..."
                      className="rounded"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridCounty">
                    <Form.Label>County</Form.Label>
                    <Form.Control
                      as="select"
                      value="Choose..."
                      className="rounded"
                    >
                      <option>Choose...</option>
                      <option>Nairobi</option>
                      <option>Kajiado</option>
                      <option>Kiambu</option>
                      <option>Machakos</option>
                      <option>Murang'a</option>
                      <option>Nakuru</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>

                <Form.Group id="formGridCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Agree to terms and conditions"
                  />
                </Form.Group>
              </fieldset>

              <Button variant="primary" type="submit" className="rounded">
                Continue to Payment
              </Button>
            </Form>
          </div>
          <div className="col-md-6">Cart</div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
