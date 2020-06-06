import { Order } from "./interface";
import knex from "../../knex";

export async function createOrder(order: Order) {
  return await knex("orders")
    .insert({
      ...order,
    })
    .returning("id");
}
