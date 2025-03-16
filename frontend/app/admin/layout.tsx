import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import SideBar from "../components/navbar/SideBar";
// import { redirect } from "next/navigation";

const handleLogout = async () => {
  "use server";
  const supabase = await createClient();
  console.log("Test");
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.log("Error logout: ", error);
  }
  // redirect("/admin/login");
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    console.log(error);
    // redirect("/admin/login");
  }

  return (
    <div className="min-h-screen" data-theme="light">
      {/* SIDEBAR */}
      <div className="flex">
        <div className="fixed top-0 left-0 w-48 h-screen shadow-md bg-slate-50 z-40">
          <SideBar />
        </div>
      </div>
      {/* CHLIDREN */}
      <div className="bg-white mt-16 ml-48 p-4">{children}</div>
      {/* TOP BAR */}
      <div className="fixed h-16 top-0 left-48 right-0 border-slate-500 flex justify-end items-center bg-slate-50 shadow-md">
        <div className="flex my-3 mr-5">
          {!data.user ? (
            <Link
              className="border-2 rounded-xl border-slate-400 px-4 py-2 hover:bg-slate-100 transition"
              href="/admin/login"
            >
              Login
            </Link>
          ) : (
            <div className="flex items-center space-x-4">
              <span className="text-gray-700 font-medium">
                Welcome, {data.user.email}
              </span>
              <button
                formAction={handleLogout}
                className="border-2 rounded-xl border-slate-400 px-4 py-2 hover:bg-red-500 hover:text-white transition"
              >
                Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
