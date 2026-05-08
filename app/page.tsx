import { supabase } from "@/lib/supabase";
import HomeClient from "./HomeClient";

export default async function Home() {
  const { data: page } = await supabase
    .from("page_content")
    .select("*")
    .eq("slug", "home")
    .single();
  return <HomeClient page={page} />;
}
