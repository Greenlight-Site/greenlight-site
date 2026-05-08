import { supabase } from "@/lib/supabase";
import PageShell from "@/components/PageShell";

export const metadata = { title: "How It Works | Greenlight · Mesa, AZ" };

export default async function HowItWorks() {
  const { data: page } = await supabase.from("page_content").select("*").eq("slug","how-it-works").single();
  return <PageShell page={page} />;
}
