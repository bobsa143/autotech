/*
  # SAID AUTO TECH Database Schema

  ## Overview
  Creates tables for the SAID AUTO TECH automotive platform to handle:
  - Customer appointments
  - Contact form messages
  - Training course enrollments

  ## New Tables

  ### appointments
  Stores customer appointment bookings for automotive services
  - `id` (uuid, primary key) - Unique appointment identifier
  - `customer_name` (text) - Customer's full name
  - `customer_email` (text) - Customer's email address
  - `customer_phone` (text) - Customer's phone number
  - `service_type` (text) - Type of service requested
  - `preferred_date` (date) - Customer's preferred appointment date
  - `preferred_time` (text) - Customer's preferred time slot
  - `message` (text) - Additional notes from customer
  - `status` (text) - Appointment status (pending, confirmed, completed, cancelled)
  - `created_at` (timestamptz) - Timestamp of appointment creation

  ### contact_messages
  Stores messages submitted through the contact form
  - `id` (uuid, primary key) - Unique message identifier
  - `name` (text) - Sender's name
  - `email` (text) - Sender's email address
  - `phone` (text) - Sender's phone number
  - `subject` (text) - Message subject
  - `message` (text) - Message content
  - `created_at` (timestamptz) - Timestamp of message submission

  ### course_enrollments
  Tracks training course enrollments
  - `id` (uuid, primary key) - Unique enrollment identifier
  - `student_name` (text) - Student's full name
  - `student_email` (text) - Student's email address
  - `student_phone` (text) - Student's phone number
  - `course_name` (text) - Name of the course
  - `created_at` (timestamptz) - Timestamp of enrollment

  ## Security
  - Enable RLS on all tables
  - Allow public insert access for customer-facing forms
  - Restrict read/update/delete to authenticated users only (admin access)
*/

-- Create appointments table
CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  customer_email text NOT NULL,
  customer_phone text NOT NULL,
  service_type text NOT NULL,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  message text DEFAULT '',
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create course_enrollments table
CREATE TABLE IF NOT EXISTS course_enrollments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_name text NOT NULL,
  student_email text NOT NULL,
  student_phone text NOT NULL,
  course_name text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE course_enrollments ENABLE ROW LEVEL SECURITY;

-- RLS Policies for appointments
CREATE POLICY "Anyone can create appointments"
  ON appointments FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view appointments"
  ON appointments FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update appointments"
  ON appointments FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete appointments"
  ON appointments FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for contact_messages
CREATE POLICY "Anyone can create contact messages"
  ON contact_messages FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view contact messages"
  ON contact_messages FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can delete contact messages"
  ON contact_messages FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for course_enrollments
CREATE POLICY "Anyone can enroll in courses"
  ON course_enrollments FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view enrollments"
  ON course_enrollments FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can delete enrollments"
  ON course_enrollments FOR DELETE
  TO authenticated
  USING (true);