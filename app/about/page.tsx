import { supabase } from "@/lib/supabase";
import PageShell from "@/components/PageShell";

export const metadata = { title: "About Us | Greenlight · Mesa, AZ" };

export default async function About() {
  const { data: page } = await supabase.from("page_content").select("*").eq("slug","about").single();
  const { data: practitioners } = await supabase.from("practitioners").select("*").eq("active",true).order("order");
  return <PageShell page={page} practitioners={practitioners} />;
}
