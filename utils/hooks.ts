import useSwr from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export const useUser = () => {
  const { data, error } = useSwr("/api/users/current", fetcher);

  const user = data && data.user;

  return user;
};
