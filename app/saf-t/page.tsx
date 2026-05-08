import { supabase } from "@/lib/supabase";
import PageShell from "@/components/PageShell";

export const metadata = { title: "SAF-T Training | Greenlight · Mesa, AZ" };

export default async function SAFT() {
  const { data: page } = await supabase.from("page_content").select("*").eq("slug","saf-t").single();
  return <PageShell page={page} />;
}
