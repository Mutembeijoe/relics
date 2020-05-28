import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import * as yup from "yup";
import { Formik } from "formik";
import { connect } from "react-redux";
import { addItemTocart } from "../../redux/cart/actions";

const regex = /[\[' \]]/gi;

const AddToCart = ({ product, addToCart }) =>  {
  const options = product.options.sizes.replace(regex, "").split(",");
  const schema = yup.object({
    quantity: yup
      .number()
      .required("Quantity is required")
      .min(1, "Enter a Quantity of one or more"),
    size: yup.string().oneOf(options).required("You must select a size"),
  });
  return (
    <Formik
      validationSchema={schema}
      onSubmit={(value, actions)=>{
        const cartItem = {
          ...product,
          ...value
        }
        addToCart(cartItem)
        actions.setSubmitting(false)
        actions.resetForm()
      }}
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
        <Form noValidate onSubmit={handleSubmit} className="mt-3">
          {/* {console.log(errors)} */}
          <Alert
            variant="danger"
            className="mb-0"
            style={{ visibility: `${!isValid ? "visible" : "hidden"}` }}
          >
            <ul className="mb-0">{Object.keys(errors).map((key) => (<li key={key}>{errors[key]}</li>))}
            </ul>
          </Alert>
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
                value={values.size}
                isValid={touched.size && !errors.size}
                isInvalid={!!errors.size}
                onChange={handleChange}
              >
                <option value="">Select Size</option>
                {options.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Button
            className="rounded"
            variant="primary"
            type="submit"
            size="lg"
            block
            disabled={isSubmitting}
          >
            <span className="font-weight-bold">Add To Cart</span>
            <i className="mdi mdi-cart mx-2"></i>
          </Button>
        </Form>
      )}
    </Formik>
  );
}

const mapDispatchToProps = dispatch => ({
    addToCart : (item) => dispatch(addItemTocart(item))
})

export default connect(null, mapDispatchToProps)(AddToCart);