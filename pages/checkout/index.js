import Table from "react-bootstrap/Table";
import Layout from "../../components/Layout/layout";
import CheckoutForm from "../../components/checkout_form/checkout-form.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { cartItemsSelector, cartTotalPrice } from "../../redux/cart/selectors";
import { userSelector } from "../../redux/user/selectors";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";

const Checkout = ({ cartItems, cartTotal, user }) => {
  const router = useRouter();

  useEffect(() => {
    if (!user.token) {
      router.push("/auth/login");
    }
  });

  return (
    <Layout>
    <Head>
        <title>
          Shipping | Relics{" "}
        </title>
        <meta name="description" content="Fill in the Shipping Details and have Nairobi's finest branded fashion delivered to your door step"/>
      </Head>
      <div className="container my-4">
        <div className="row">
          <div className="col-md-7">
            <CheckoutForm />
          </div>
          <div className="col-md-5 border-left my-4">
            <div className="container">
              <Table hover>
                <thead>
                  <tr>
                    <th className="border-top-0">Product</th>
                    <th className="border-top-0">Qty</th>
                    <th className="border-top-0">Cost</th>
                  </tr>
                </thead>
                <tbody className="border-bottom">
                  {cartItems.map((item) => {
                    return (
                      <tr key={`${item.id}_${item.size}`}>
                        <td className="py-3">
                          <div className="d-flex flex-row">
                            <div style={{ width: "50px", height: "50px" }}>
                              <img
                                src={item.img_url}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                            <div className="px-3 d-flex flex-column">
                              <span>{item.product_name}</span>
                              <div className="d-flex flex-row text-muted">
                                <span className="text-uppercase">
                                  {item.size}
                                </span>
                                <span className="px-2">Ksh {item.price}</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>{item.quantity}</td>
                        <td>{item.quantity * item.price}</td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td colSpan={2} className="text-right font-weight-bold">
                      Subtotal
                    </td>
                    <td>{cartTotal}</td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="text-right font-weight-bold">
                      Shipping
                    </td>
                    <td>200</td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="text-right font-weight-bold">
                      Total
                    </td>
                    <td>KSh {cartTotal + 200}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector,
  cartTotal: cartTotalPrice,
  user: userSelector,
});

export default connect(mapStateToProps)(Checkout);
