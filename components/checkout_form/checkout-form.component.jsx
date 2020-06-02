import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import * as yup from "yup";

const CheckoutForm = () => {
  const schema = yup.object({
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email addreess"),
    phone: yup
      .string()
      .required("Phone is Required")
      .min(10, "Phone Number must be at least 10 digits")
      .max(20, "Phone Number cannot exceed 20 digits"),
    firstName: yup.string().min(3).max(20).required(),
    lastName: yup.string().min(3).max(20).required(),
    address: yup.string().min(3).max(20).required(),
    address2: yup.string().min(3).max(20).notRequired(),
    town: yup.string().min(3).max(20).required(),
    county: yup
      .string()
      .oneOf(["Nairobi", "Kajiado", "Kiambu", "Mombasa", "Nakuru", "Nyeri"])
      .required("You must select a county"),
    terms: yup.boolean().equals(true).required(),
  });
  return (
    <Form>
      {/* Contacts Section */}
      <fieldset className="my-3">
        <legend>Contact Information</legend>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmailAddress">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Email Address"
              className="rounded"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              name="phone"
              placeholder="+254 712..."
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
              name="firstName"
              type="text"
              placeholder="First Name"
              className="rounded"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="lastName"
              type="text"
              placeholder="Last Name"
              className="rounded"
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            name="address"
            placeholder="4th Ngong Avenue"
            className="rounded"
          />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Address 2 (optional)</Form.Label>
          <Form.Control
            name="address2"
            placeholder="Apartment, studio, or floor"
            className="rounded"
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridTown">
            <Form.Label>Town</Form.Label>
            <Form.Control
              name="town"
              placeholder="Thika, Rongai, Naivasha ..."
              className="rounded"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCounty">
            <Form.Label>County</Form.Label>
            <Form.Control
              as="select"
              name="county"
              value="Choose..."
              className="rounded"
            >
              <option>Choose...</option>
              <option>Nairobi</option>
              <option>Kajiado</option>
              <option>Kiambu</option>
              <option>Nakuru</option>
              <option>Nyeri</option>
              <option>Mombasa</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Group id="formGridCheckbox">
          <Form.Check
            name="terms"
            type="checkbox"
            label="Agree to terms and conditions"
          />
        </Form.Group>
      </fieldset>

      <Button variant="primary" type="submit" className="rounded">
        Continue to Payment
      </Button>
    </Form>
  );
};

export default CheckoutForm;
