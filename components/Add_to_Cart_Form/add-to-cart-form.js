import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import * as yup from "yup";
import { Formik } from "formik";

export default function AddToCart({ options }) {
  const schema = yup.object({
    quantity: yup.number().required().min(1),
    size: yup.string().oneOf(options).required(),
  });
  console.log(options);
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        quantity: 1,
        size: "",
      }}
    >
      {({
        handleSubmit,
        values,
        handleChange,
        touched,
        isValid,
        errors,
        isSubmitting,
      }) => (
        <Form
          noValidate
          onSubmit={handleSubmit}
          style={{ border: "0px solid black" }}
        >
          <Form.Row>
            <Form.Group as={Col} sm={3} controlId="formQuantity">
              <Form.Label column="lg" className="mb-1">
                Qty
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="Qty"
                value={values.quantity}
                min={1}
                onChange={handleChange}
                size="lg"
                name="quantity"
                className="rounded"
                isInvalid={!!errors.quantity}
                isValid={touched.quantity && !errors.quantity}
              />
              <Form.Control.Feedback type="invalid">
                {errors.quantity}
                Hello
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="formSizes">
              <Form.Label column="lg" className="mb-1">
                Size
              </Form.Label>
              <Form.Control
                className="rounded"
                as="select"
                custom
                size="lg"
                required
                name="size"
                isValid={touched.size && !errors.size}
                isInvalid={!!errors.size}
                onChange={handleChange}
              >
                <option value="">Select Value</option>
                {options.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.size}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Button
            className="rounded"
            variant="primary"
            type="submit"
            size="lg"
            block
            // disabled={isSubmitting}
          >
            <span className="font-weight-bold">Add To Cart</span>
            <i className="mdi mdi-cart mx-2"></i>
          </Button>
        </Form>
      )}
    </Formik>
  );
}
