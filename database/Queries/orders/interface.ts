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
  town: string;
  county: string;
  payment_status?: string;
  user_id: number;
};
