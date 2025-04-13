import { createClient } from "@/utils/supabase/client";
import { SupabaseClient } from "@supabase/supabase-js";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function useFetchData(
  supabase:
    | SupabaseClient<any, "public", any>
    | Promise<SupabaseClient<any, "public", any>>,
  tableName: string,
  setData: React.Dispatch<React.SetStateAction<any>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<string>>
) {
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const client = await supabase;
        const { data: response, error } = await client
          .from(tableName)
          .select("*");

        if (error) {
          console.error(`Error while fetching ${tableName}:`, error);
          setError(error.message);
          setData(null);
        } else {
          setData(response);
          setError("");
        }
      } catch (err: any) {
        console.error(`Unexpected error while fetching ${tableName}:`, err);
        setError(err.message || "Unknown error");
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
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
