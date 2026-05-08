export type Practitioner = {
  id: number;
  name: string;
  credentials: string;
  bio: string;
  specialties: string[];
  slug: string;
  photo_url: string | null;
  order: number;
  active: boolean;
};

export type PageContent = {
  id: number;
  slug: string;
  title: string;
  hero_headline: string;
  hero_subline: string | null;
  hero_body: string;
  meta_title: string;
  meta_description: string;
  updated_at: string;
};

export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  published: boolean;
  published_at: string;
  cover_image: string | null;
};

export type FormSubmission = {
  id: number;
  form_type: "contact" | "partner" | "saft";
  name: string;
  email: string;
  phone: string | null;
  organization: string | null;
  message: string | null;
  created_at: string;
};
