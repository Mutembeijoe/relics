import Layout from "../../components/Layout/layout";
import CheckoutForm from "../../components/checkout_form/checkout-form.component";

const Checkout = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
           <CheckoutForm/>
          </div>
          <div className="col-md-6">Cart</div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
