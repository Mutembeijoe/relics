import Table from "react-bootstrap/Table";
import Layout from "../../../components/Layout/layout";
import { useOrder } from "../../../utils/hooks";
import { format } from "date-fns";

export default function Order({ orderId }) {
  const [order] = useOrder(+orderId);

  return (
    <Layout>
      <div className="container my-4">
        {!order ? (
          <div>Loading ....</div>
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
