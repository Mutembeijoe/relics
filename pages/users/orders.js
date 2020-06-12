import Layout from "../../components/Layout/layout";
import { MDBDataTable } from "mdbreact";
import { useOrders } from "../../utils/hooks";
// import Link from "next/link";
import Button from "react-bootstrap/Button";

export default function Orders() {
  const [orders] = useOrders();

  const generateData = () => {
    const rows = orders.map((order) => {
      return {
        date: order.created_at,
        name: order.first_name,
        address: order.address,
        phone: order.phone,
        amount: order.total,
        status: `processing`,
      };
    });
    const data = {
      columns: [
        {
          label: "Date",
          field: "date",
          sort: "asc",
          width: 150,
        },
        {
          label: "Name",
          field: "name",
          sort: "asc",
          width: 200,
        },
        {
          label: "Address",
          field: "address",
          sort: "asc",
          width: 270,
        },

        {
          label: "Phone",
          field: "phone",
          sort: "asc",
          width: 100,
        },
        {
          label: "Amount",
          field: "amount",
          sort: "asc",
          width: 150,
        },
        {
          label: "Status",
          field: "status",
          sort: "asc",
          width: 100,
        },
      ],
      rows: rows,
    };

    // return data;

    const allData = {
      columns: [
        ...data.columns,
        {
          label: "View",
          field: "view",
        },
      ],
      rows: [
        ...data.rows.map((row, order) => ({
          ...row,
          view: (
            <Button
              variant="primary"
              className="rounded btn-sm"
              key={order}
              //   searchvalue={order}
            >
              View
            </Button>
          ),
        })),
      ],
    };

    return allData;
  };

  return (
    <Layout>
      <div className="container">
        {orders ? (
          <MDBDataTable bordered hover data={generateData()} />
        ) : (
          <div>Loading....</div>
        )}
      </div>
    </Layout>
  );
}
