-- ============================================================
-- GREENLIGHT SITE — Supabase Schema
-- Run this in Supabase SQL Editor
-- ============================================================

-- PAGE CONTENT
create table if not exists page_content (
  id bigint primary key generated always as identity,
  slug text unique not null,
  title text not null,
  hero_headline text not null,
  hero_subline text,
  hero_body text not null,
  meta_title text not null,
  meta_description text not null,
  updated_at timestamptz default now()
);

-- PRACTITIONERS
create table if not exists practitioners (
  id bigint primary key generated always as identity,
  name text not null,
  credentials text not null,
  bio text,
  specialties text[] default '{}',
  slug text unique not null,
  photo_url text,
  "order" int default 0,
  active boolean default true
);

-- BLOG POSTS
create table if not exists blog_posts (
  id bigint primary key generated always as identity,
  slug text unique not null,
  title text not null,
  excerpt text,
  body text,
  published boolean default false,
  published_at timestamptz default now(),
  cover_image text
);

-- FORM SUBMISSIONS
create table if not exists form_submissions (
  id bigint primary key generated always as identity,
  form_type text not null check (form_type in ('contact','partner','saft')),
  name text not null,
  email text not null,
  phone text,
  organization text,
  org_type text,
  team_size text,
  message text,
  created_at timestamptz default now()
);

-- ============================================================
-- SEED DATA — Page Content
-- ============================================================
insert into page_content (slug, title, hero_headline, hero_subline, hero_body, meta_title, meta_description) values
(
  'home',
  'Home',
  'Overcome <span style="color:#00c07f">Trauma</span>',
  'Quickly and Effectively',
  'Greenlight uses the ART method — a fast, private, practitioner-guided process that helps you overcome trauma, PTSD, anxiety, and grief. Often in just 1 to 5 sessions. You stay in control the entire time.',
  'Greenlight | Trauma Relief & Recovery · Mesa, AZ',
  'Greenlight uses the ART method to help you overcome trauma, PTSD, anxiety and grief. Fast, private, practitioner-guided sessions in Mesa, AZ.'
),
(
  'how-it-works',
  'How It Works',
  'Finally Feel Like <span style="color:#00c07f">Yourself Again</span>',
  null,
  'Greenlight uses a proven method that helps you access difficult memories, change how they''re stored, and find lasting relief — often in just 1 to 5 sessions.',
  'How It Works | Greenlight · Mesa, AZ',
  'Discover how Greenlight''s ART method uses eye movements and image replacement to help you overcome trauma, PTSD, and anxiety — often in just 1–5 sessions.'
),
(
  'who-it-helps',
  'Who It Helps',
  'Let Go of the Burden of <span style="color:#00c07f">Life''s Challenges</span>',
  null,
  'PTSD, depression, anxiety, trauma, phobias, OCD, addictions, grief, relationship issues — Greenlight has been used to successfully help with all of them.',
  'Who It Helps | Greenlight · Mesa, AZ',
  'Greenlight has helped veterans, first responders, trauma survivors, and many others find lasting relief — often in just 1–5 sessions.'
),
(
  'partners',
  'Partners',
  'Partner with <span style="color:#00c07f">Greenlight</span>',
  'Get your people the help they need.',
  'Reduce costs and increase employee satisfaction with a proven method known for rapid, lasting results — without lengthy commitments or ongoing dependency.',
  'Partners | Greenlight · Mesa, AZ',
  'Partner with Greenlight to get your people the help they need. Reduce costs with a proven method known for rapid results.'
),
(
  'saf-t',
  'SAF-T Training',
  'Transform Crisis Response With <span style="color:#00c07f">SAF-T Training</span>',
  'Help your team safely and effectively de-escalate high-stress situations.',
  'Join the growing number of law enforcement agencies, hospitals, and community organizations revolutionizing crisis intervention through SAF-T.',
  'SAF-T Training | Greenlight · Mesa, AZ',
  'SAF-T training by Greenlight equips professionals with advanced de-escalation tools for law enforcement, healthcare, schools and more.'
),
(
  'about',
  'About Us',
  'We''re <span style="color:#00c07f">Greenlight</span> — and we''re here to help.',
  null,
  'A team of certified practitioners in Mesa, AZ dedicated to helping people overcome trauma, PTSD, anxiety, grief, and more — quickly, privately, and without having to relive the past.',
  'About Us | Greenlight · Mesa, AZ',
  'Meet the Greenlight team — certified ART method practitioners in Mesa, AZ dedicated to helping people overcome trauma, PTSD, anxiety and grief quickly and effectively.'
)
on conflict (slug) do nothing;

-- ============================================================
-- SEED DATA — Practitioners
-- ============================================================
insert into practitioners (name, credentials, bio, specialties, slug, "order") values
('Jill Collicott', 'Masters of Arts · Certified ART Practitioner', null, '{"Trauma","PTSD","Anxiety"}', 'jill-collicott', 1),
('Lynda Lopez', 'Masters of Social Work · Certified ART Practitioner', null, '{"Veterans","Grief","Depression"}', 'lynda-lopez', 2),
('Melony Opheim', 'Masters of Social Work · Certified ART Practitioner', null, '{"First Responders","Addiction"}', 'melony-opheim', 3),
('Mollie Rama', 'Masters of Arts · Certified ART Practitioner', null, '{"Phobias","Relationships"}', 'mollie-rama', 4),
('Robert Yniguez', 'Masters of Education · Certified ART Practitioner', null, '{"OCD","Anxiety"}', 'robert-yniguez', 5)
on conflict (slug) do nothing;

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================
alter table page_content enable row level security;
alter table practitioners enable row level security;
alter table blog_posts enable row level security;
alter table form_submissions enable row level security;

-- Public can read content
create policy "Public read page_content" on page_content for select using (true);
create policy "Public read practitioners" on practitioners for select using (true);
create policy "Public read published posts" on blog_posts for select using (published = true);

-- Anyone can submit forms
create policy "Anyone can submit forms" on form_submissions for insert with check (true);

