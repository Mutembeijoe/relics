import Layout from "../../../components/Layout/layout";
import { MDBDataTable } from "mdbreact";
import { useOrders, useUser } from "../../../utils/hooks";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import { format } from "date-fns";
import Spinner from "react-bootstrap/Spinner";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Orders() {
  const [orders] = useOrders();
  const [user] = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/auth/login");
    }
  }, [user]);

  const generateData = () => {
    const rows = orders.map((order) => {
      return {
        id: order.id,
        date: format(new Date(order.created_at), "yyyy/MM/dd"),
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
            <Link
              href="/users/orders/[id]"
              as={`/users/orders/${row.id}`}
              passHref
            >
              <Button variant="primary" className="rounded btn-sm" key={order}>
                View
              </Button>
            </Link>
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
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ height: "300px" }}
          >
            <Spinner animation="grow" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        )}
      </div>
    </Layout>
  );
}
