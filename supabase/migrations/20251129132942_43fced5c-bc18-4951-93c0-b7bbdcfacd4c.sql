-- Create beta_signups table
CREATE TABLE public.beta_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.beta_signups ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public signup form)
CREATE POLICY "Anyone can sign up for beta"
ON public.beta_signups
FOR INSERT
TO anon
WITH CHECK (true);

-- Only authenticated users can view signups (for future admin access)
CREATE POLICY "Authenticated users can view signups"
ON public.beta_signups
FOR SELECT
TO authenticated
USING (true);