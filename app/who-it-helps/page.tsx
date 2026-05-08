import { supabase } from "@/lib/supabase";
import PageShell from "@/components/PageShell";

export const metadata = { title: "Who It Helps | Greenlight · Mesa, AZ" };

export default async function WhoItHelps() {
  const { data: page } = await supabase.from("page_content").select("*").eq("slug","who-it-helps").single();
  return <PageShell page={page} />;
}
