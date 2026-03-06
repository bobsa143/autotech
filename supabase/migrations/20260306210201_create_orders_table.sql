/*
  # Create Orders Table

  ## Overview
  Creates table for storing customer orders from the store

  ## New Tables

  ### orders
  Stores customer purchase orders
  - `id` (uuid, primary key) - Unique order identifier
  - `customer_name` (text) - Customer's full name
  - `customer_email` (text) - Customer's email address
  - `customer_phone` (text) - Customer's phone number
  - `shipping_address` (text) - Delivery address
  - `items` (jsonb) - Order items with details (JSON array)
  - `total_amount` (numeric) - Total order amount in euros
  - `status` (text) - Order status (pending, confirmed, shipped, delivered, cancelled)
  - `created_at` (timestamptz) - Timestamp of order creation

  ## Security
  - Enable RLS on orders table
  - Allow public insert for customer orders
  - Restrict read/update/delete to authenticated users only (admin access)
*/

CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  customer_email text NOT NULL,
  customer_phone text NOT NULL,
  shipping_address text NOT NULL,
  items jsonb NOT NULL,
  total_amount numeric(10, 2) NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create orders"
  ON orders FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view orders"
  ON orders FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update orders"
  ON orders FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete orders"
  ON orders FOR DELETE
  TO authenticated
  USING (true);
