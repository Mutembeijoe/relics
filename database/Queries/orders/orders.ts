import { Order, OrderItem } from "./interface";
import knex from "../../knex";

export async function createOrder(
  order: Order,
  orderItems: OrderItem[]
): Promise<number> {
  // Does not start a transaction yet
  const trxProvider = knex.transactionProvider();

  const trx = await trxProvider();

  try {
    const ids = await trx("orders").insert({ ...order }, "id");

    orderItems.forEach((item) => (item.order_id = ids[0]));

    const order_id = await trx("order_items").insert(orderItems, "order_id");

    await trx.commit();

    return order_id[0];
  } catch (error) {
    await trx.rollback(error);
  }
}

export async function verifyPayment(orderId: number) {
  return await knex("orders")
    .update({
      payment_status: "verified",
    })
    .where("id", orderId)
    .returning("id");
}

export async function getAllUserOrders(userId: number) {
  return await knex("orders")
    .select("id", "first_name", "address", "created_at", "phone", "total")
    .where("user_id", userId);
}

export async function getOrderById(orderId: number) {
  return await knex("order_items")
    .join("products", "products.id", "=", "order_items.product_id")
    .join("orders", "orders.id", "=", "order_items.order_id")
    .select(
      "orders.created_at",
      "products.product_name",
      "products.img_url",
      "order_items.quantity",
      "order_items.unit_price",
      "order_items.quantity",
      "orders.total"
    )
    .where("order_items.order_id", orderId);
}
