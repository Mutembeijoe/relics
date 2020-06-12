import useSwr from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export const useUser = () => {
  const { data, mutate } = useSwr("/api/users/current", fetcher);

  const user = data && data.user;

  return [user, { mutate }];
};


export const useOrders = () => {
  const {data, mutate} = useSwr("/api/users/orders", fetcher);

  const orders = data && data.orders;

  return [orders, {mutate}];
}