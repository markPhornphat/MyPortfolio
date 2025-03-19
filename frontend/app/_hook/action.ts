import { createClient } from "@/utils/supabase/client";
import { SupabaseClient } from "@supabase/supabase-js";

export async function getData({
  supabase,
  tableName,
}: {
  supabase:
    | SupabaseClient<any, "public", any>
    | Promise<SupabaseClient<any, "public", any>>;
  tableName: string;
}) {
  let { data: response, error } = await (await supabase)
    .from(`"${tableName}"`)
    .select("*");

  if (error) {
    console.error("Error while fetching homepage:", error);
    return null;
  }

  return response;
}

// export async function updateHomepage(
//   data: HomepageType
// ): Promise<{ data: string; success: boolean }> {
//   const supabase = createClient();

//   //Delete data
//   const { error: errorDelete } = await supabase
//     .from("Homepage")
//     .delete()
//     .eq("id", data.id);

//   if (errorDelete) {
//     return { data: "Update failed!", success: false };
//   }

//   //Delete id key because it is PK
//   delete (data as any).id;

//   //Insert data
//   const { error } = await supabase.from("Homepage").insert([data]);

//   if (error) {
//     console.error("Error while inserting homepage: ", error);
//     return { data: error.message, success: false };
//   }

//   return { data: "Update successful!", success: true };
// }
