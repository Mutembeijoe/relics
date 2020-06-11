import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import * as yup from "yup";
import { Formik } from "formik";
import axios from "axios";
import { connect } from "react-redux";
import { clearCart } from "../../redux/cart/actions";

const CheckoutForm = ({ setError, userEmail, proceedToPayment, clearCart }) => {
  const schema = yup.object({
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email addreess"),
    phone: yup
      .string()
      .required("Phone is Required")
      .length(10, "Phone Number must be exactly 10 digits"),
    first_name: yup.string().min(3).max(20).required(),
    last_name: yup.string().min(3).max(20).required(),
    address: yup.string().min(3).max(20).required(),
    optional_address: yup.string().min(3).max(20).notRequired(),
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
      onSubmit={async (value, actions) => {
        try {
          await axios.post("/api/orders/create", {
            email: value.email,
            phone: value.county,
            first_name: value.first_name,
            last_name: value.last_name,
            address: value.address,
            optional_address: value.optional_address,
            town: value.town,
            county: value.county,
          });

          actions.resetForm();
          actions.setSubmitting(false);
          clearCart()
          proceedToPayment();
        } catch (error) {
          const { message } = error.response.data;
          setError(message);
        }
      }}
      initialValues={{
        email: `${userEmail}`,
        phone: "",
        first_name: "",
        last_name: "",
        address: "",
        optional_address: "",
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
                  placeholder="0710 _ _ _ _ _ _"
                  className="rounded"
                  value={values.phone}
                  maxLength={10}
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
                  name="first_name"
                  type="text"
                  placeholder="First Name"
                  className="rounded"
                  value={values.first_name}
                  onChange={handleChange}
                  isInvalid={!!errors.first_name}
                  isValid={touched.first_name && !errors.first_name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.first_name}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  name="last_name"
                  type="text"
                  placeholder="Last Name"
                  className="rounded"
                  value={values.last_name}
                  onChange={handleChange}
                  isInvalid={!!errors.last_name}
                  isValid={touched.last_name && !errors.last_name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.last_name}
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
                name="optional_address"
                placeholder="Apartment, studio, or floor"
                className="rounded"
                value={values.optional_address}
                onChange={handleChange}
                isInvalid={!!errors.optional_address}
                isValid={touched.optional_address && !errors.optional_address}
              />
              <Form.Control.Feedback type="invalid">
                {errors.optional_address}
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

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

export default connect(null, mapDispatchToProps)(CheckoutForm);
