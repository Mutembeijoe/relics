import Layout from "../../components/Layout/layout";
import Head from "next/head";
import styles from "../../styles/payment_page.module.scss";
import PaymentForm from "../../components/payment_form/payment_form.component";

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
            <PaymentForm/>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Payment;
