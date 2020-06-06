import Layout from "../../components/Layout/layout";
import Head from "next/head";
import styles from "../../styles/payment_page.module.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Formik } from "formik";
import * as yup from "yup";

const schema = yup.object({
  phone: yup.string().required().trim().max(13).min(13),
});

const CheckoutForm = () => (
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
          <Form.Control type="text" placeholder="KSh 2200" readOnly />
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
          ** This is a <b>test</b> payment via the Africa's Talking Api **
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

const Payment = () => {
  return (
    <Layout>
      <Head>
        <title>Payment | Relics</title>
        <meta name="description" content="Easy Payment with mobile money" />
      </Head>
      <div className="container my-4">
        <div className="row">
          <div className="col-md-5">
            <h2>Payment Method</h2>
            <div className={`${styles.paymentOptions} border my-2 px-2`}>
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  id="customRadio1"
                  name="customRadio"
                  className="custom-control-input"
                  checked
                  readOnly
                />
                <label className="custom-control-label" htmlFor="customRadio1">
                  Mpesa
                </label>
              </div>
              <div className={`${styles.mpesa} my-2`}>
                <img src="/mpesa.png" alt="mpesa" className="img-fluid" />
              </div>
            </div>
            <CheckoutForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Payment;
