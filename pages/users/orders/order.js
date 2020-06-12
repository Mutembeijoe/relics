import Layout from "../../../components/Layout/layout";

export default function Order() {
  return (
    <Layout>
      <div className="container my-4">
        <div>
          <div>
            <span>Date Ordered</span>
            <span>04/09/2020</span>
          </div>
          <div>
            <span>Items Ordered</span>
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
                {orderItems.map((item) => {
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
                            ayment <span>{item.product_name}</span>
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
    </Layout>
  );
}
