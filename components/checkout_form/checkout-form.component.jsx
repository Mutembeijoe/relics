import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import * as yup from "yup";
import { Formik } from "formik";

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
    terms: yup.boolean().required().equals([true]),
  });
  return (
    <Formik
      validationSchema={schema}
      onSubmit={(value, actions) => {
        console.log(value);
        actions.resetForm();
        actions.setSubmitting(false);
      }}
      initialValues={{
        email: "",
        phone: "",
        firstName: "",
        lastName: "",
        address: "",
        address2: "",
        town: "",
        county: "",
        terms: false,
      }}
    >
      {({
        handleSubmit,
        values,
        handleChange,
        touched,
        errors,
        isValid,
        isSubmitting,
      }) => (
        <Form noValidate onSubmit={handleSubmit} className="mx-2">
          {/* Contacts Section */}
          <fieldset>
            <legend>Contact Information</legend>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmailAddress">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="rounded"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                  isValid={touched.email && !errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  name="phone"
                  placeholder="+254 712..."
                  className="rounded"
                  value={values.phone}
                  onChange={handleChange}
                  isInvalid={!!errors.phone}
                  isValid={touched.phone && !errors.phone}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phone}
                </Form.Control.Feedback>
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
                  value={values.firstName}
                  onChange={handleChange}
                  isInvalid={!!errors.firstName}
                  isValid={touched.firstName && !errors.firstName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.firstName}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  className="rounded"
                  value={values.lastName}
                  onChange={handleChange}
                  isInvalid={!!errors.lastName}
                  isValid={touched.lastName && !errors.lastName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.lastName}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                name="address"
                placeholder="4th Ngong Avenue"
                className="rounded"
                value={values.address}
                onChange={handleChange}
                isInvalid={!!errors.address}
                isValid={touched.address && !errors.address}
              />
              <Form.Control.Feedback type="invalid">
                {errors.address}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Address 2 (optional)</Form.Label>
              <Form.Control
                name="address2"
                placeholder="Apartment, studio, or floor"
                className="rounded"
                value={values.address2}
                onChange={handleChange}
                isInvalid={!!errors.address2}
                isValid={touched.address2 && !errors.address2}
              />
              <Form.Control.Feedback type="invalid">
                {errors.address2}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridTown">
                <Form.Label>Town</Form.Label>
                <Form.Control
                  name="town"
                  placeholder="Thika, Rongai, Naivasha ..."
                  className="rounded"
                  value={values.town}
                  onChange={handleChange}
                  isInvalid={!!errors.town}
                  isValid={touched.town && !errors.town}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.town}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCounty">
                <Form.Label>County</Form.Label>
                <Form.Control
                  as="select"
                  name="county"
                  value="Choose..."
                  className="rounded"
                  value={values.county}
                  onChange={handleChange}
                  isInvalid={!!errors.county}
                  isValid={touched.county && !errors.county}
                >
                  <option value="">Choose...</option>
                  <option value="Nairobi">Nairobi</option>
                  <option value="Kajiado">Kajiado</option>
                  <option value="Kiambu">Kiambu</option>
                  <option value="Nakuru">Nakuru</option>
                  <option value="Nyeri">Nyeri</option>
                  <option value="Mombasa">Mombasa</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.county}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
              <Form.Check
                name="terms"
                type="checkbox"
                label="Agree to terms and conditions"
                value={values.terms}
                onChange={handleChange}
                isInvalid={!!errors.terms}
                isValid={touched.terms && !errors.terms}
              />
            </Form.Group>
          </fieldset>

          <Button
            variant="primary"
            type="submit"
            className="rounded"
            disabled={isSubmitting || Object.keys(errors).length !== 0}
          >
            Continue to Payment
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default CheckoutForm;
