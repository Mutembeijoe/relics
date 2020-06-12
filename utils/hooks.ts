import useSwr from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export const useUser = () => {
  const { data, mutate } = useSwr("/api/users/current", fetcher);

  const user = data && data.user;

  return [user, { mutate }];
};

export const useOrders = () => {
  const { data } = useSwr("/api/users/orders", fetcher);

  const orders = data && data.orders;

  return [orders];
};

export const useOrder = () => {
  const { data } = useSwr("/api/orders/:id", fetcher);

  const order = data && data.order;

  return [order];
};
