import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Formik } from "formik";
import * as yup from "yup";
import { connect } from "react-redux";
import { cartTotalPrice } from "../../redux/cart/selectors";

const PaymentForm = ({ cartTotal }) => {
  const schema = yup.object({
    phone: yup.string().required().trim().max(13).min(13),
  });
  return (
    <Formik
      initialValues={{ phone: "" }}
      validationSchema={schema}
      onSubmit={console.log}
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
              placeholder="+254 710 _ _ _ _ _ _"
              isInvalid={!!errors.phone}
              isValid={touched.phone && !errors.phone}
            />
            <Form.Control.Feedback type="invalid">
              {errors.phone}
            </Form.Control.Feedback>
          </Form.Group>
          <div className="my-4 text-danger">
            ** This is <b>not</b> a working payment, just fill in a number and Place Order **
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
