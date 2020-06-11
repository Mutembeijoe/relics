import { Order } from "./interface";
import knex from "../../knex";

export async function createOrder(order: Order) {
  return await knex("orders")
    .insert({
      ...order,
    })
    .returning("id");
}

export async function verifyPayment(orderId: number) {
  return await knex("orders")
    .update({
      payment_status: "verified",
    })
    .where("id", orderId)
    .returning("id");
}
