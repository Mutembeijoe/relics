import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import Layout from "../../../components/Layout/layout";
import { useOrder, useUser } from "../../../utils/hooks";
import { format } from "date-fns";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Order({ orderId }) {
  const [order] = useOrder(+orderId);
  const [user] = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/auth/login");
    }
  }, [user]);

  return (
    <Layout>
      <div className="container my-4">
        {!order ? (
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ height: "300px" }}
          >
            <Spinner animation="grow" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <div>
            {console.log(order)}
            <div>
              <span className="mr-2 font-weight-bold">Date Ordered</span>
              <span>
                {format(new Date(order.created_at), "yyyy/MM/dd - HH:mm")}
              </span>
            </div>
            <div className="mt-4">
              <span className="font-weight-bold">Items Ordered</span>
            </div>
            <div>
              <Table hover>
                <thead>
                  <tr>
                    <th className="border-top-0">Product</th>
                    <th className="border-top-0">Qty</th>
                    <th className="border-top-0">Cost</th>
                  </tr>
                </thead>
                <tbody className="border-bottom">
                  {order.orderItems.map((item) => {
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
                                <span className="px-2">
                                  Ksh {item.unit_price}
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>{item.quantity}</td>
                        <td>{item.unit_price * item.quantity}</td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td colSpan={2} className="text-right font-weight-bold">
                      Subtotal
                    </td>
                    <td>{order.total}</td>
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
                    <td>KSh {+order.total + 200}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { orderId: context.params.id },
  };
}
