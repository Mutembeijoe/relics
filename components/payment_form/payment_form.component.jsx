import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Formik } from "formik";
import * as yup from "yup";
import { connect } from "react-redux";
import axios from "axios";

import { cartTotalPrice } from "../../redux/cart/selectors";

const PaymentForm = ({ cartTotal, setSuccess, headHome }) => {
  const schema = yup.object({
    phone: yup
      .string()
      .required()
      .length(10, "Phone Number must be exactly 10 digits"),
  });
  return (
    <Formik
      initialValues={{ phone: "" }}
      validationSchema={schema}
      onSubmit={async (value, actions) => {
        try {
          await axios.put("/api/orders/create", {
            payment_amount: value,
          });
          actions.setSubmitting(false);
          actions.resetForm();
          setSuccess(true);
          headHome();
        } catch (err) {
          console.log(err);
        }
      }}
    >
      {({
        handleChange,
        values,
        handleSubmit,
        errors,
        touched,
        isValid,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formGroupAmount">
            <Form.Label>Amount</Form.Label>
            <Form.Control type="text" placeholder={cartTotal + 200} readOnly />
          </Form.Group>
          <Form.Group controlId="formGroupPhoneNumber">
            <Form.Label>Phone Number </Form.Label>
            <Form.Control
              type="text"
              name="phone"
              onChange={handleChange}
              value={values.phone}
              maxLength={10}
              placeholder="0710 _ _ _ _ _ _"
              isInvalid={!!errors.phone}
              isValid={touched.phone && !errors.phone}
            />
            <Form.Control.Feedback type="invalid">
              {errors.phone}
            </Form.Control.Feedback>
          </Form.Group>
          <div className="my-4 text-danger">
            ** This is a <b>dummy</b> payment, just fill in a number and Place
            Order **
          </div>
          <Button
            variant="primary"
            type="submit"
            className="rounded"
            disabled={isSubmitting || Object.keys(errors).length !== 0}
          >
            Place Order
          </Button>
        </Form>
      )}
    </Formik>
  );
};

const mapStateToProps = (state) => ({
  cartTotal: cartTotalPrice(state),
});

export default connect(mapStateToProps)(PaymentForm);
