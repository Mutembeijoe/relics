export type Order = {
  id?: number;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  first_name: string;
  last_name: string;
  email: string;
  address: string;
  optional_address?: string;
  phone:string;
  town: string;
  county: string;
  payment_status?: string;
  user_id: number;
  total: number;
};

export type OrderItem = {
  order_id?: number;
  product_id: number;
  unit_price: number;
  size: string;
  quantity:number;
};
