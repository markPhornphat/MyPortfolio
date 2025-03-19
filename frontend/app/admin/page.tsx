import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    console.log(error);
    redirect("/admin/login");
  } else {
    redirect("admin/home");
  }

  return (
    <div className="min-h-screen">
      {!data.user ? (
        <div className="flex items-center justify-center text-white">
          <div className="bg-slate-500 p-8 rounded-2xl shadow-lg text-center w-96">
            <h2 className="text-2xl font-semibold mb-4">Please Login</h2>
            <p className="text-slate-300">
              You are not logged in. Please proceed to edit the content!
            </p>
          </div>
        </div>
      ) : (
        <div>Welcome</div>
      )}
    </div>
  );
};

export default Page;
