"use client";
import { SpinnerGap, Trash } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import { getHomepage, updateHomepage } from "./action";
import { HomepageType } from "./type";
import { createClient } from "@/utils/supabase/client";

const HomePage = () => {
  const [count, setCount] = useState<number>(1);
  const [result, setResult] = useState<{ data: string; success: boolean }>();
  const [data, setData] = useState<HomepageType | null>(null);
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  async function getData() {
    setPageLoading(true);
    const supabase = createClient();
    const res = await getHomepage(supabase);
    if (res) {
      const { id, animationList, description, resumeURL } = res[0];
      let parsedAnimationList: string[];

      if (typeof animationList === "string") {
        parsedAnimationList = JSON.parse(animationList);
      } else {
        parsedAnimationList = animationList; // already an array
      }

      setData({
        id,
        animationList: parsedAnimationList,
        description,
        resumeURL,
      });
      setCount(parsedAnimationList.length);
      setPageLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  // Handle Input Changes
  const handleChange = (
    field: keyof HomepageType,
    value: string | string[]
  ) => {
    setData((prev) => (prev ? { ...prev, [field]: value } : null));
  };

  // Handle Form Submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!data) return;
    setLoading(true);
    const res = await updateHomepage(data);
    setResult(res);
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-6">
      {pageLoading ? (
        <div>
          <SpinnerGap size={30} className="animate-spin" />
        </div>
      ) : (
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
          <h2 className="text-2xl font-semibold text-slate-700 mb-6 text-center">
            Edit Homepage
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Animation List */}
            <div>
              <label className="block text-slate-600 font-medium mb-2">
                Animation List
              </label>
              <div className="space-y-2">
                {Array.from({ length: count }).map((_, index) => (
                  <input
                    key={index}
                    name={`animationList${index}`}
                    value={data?.animationList?.[index] || ""}
                    onChange={(e) => {
                      const updatedList = data?.animationList || [];
                      if (typeof updatedList != "string") {
                        updatedList[index] = e.target.value;
                        handleChange("animationList", updatedList);
                      }
                    }}
                    required
                    type="text"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:outline-none"
                    placeholder={`Text ${index + 1}`}
                  />
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-2 mt-2">
                <button
                  type="button"
                  onClick={() => setCount((prev) => prev + 1)}
                  className="bg-slate-500 text-white px-3 py-2 rounded-lg hover:bg-slate-600 transition"
                >
                  +
                </button>
                {count > 1 && (
                  <button
                    type="button"
                    onClick={() => {
                      setCount((prev) => prev - 1);
                      const updatedList = data?.animationList || [];
                      if (typeof updatedList != "string") {
                        if (updatedList[count - 1]) {
                          updatedList.pop(); // Remove last element
                        }
                        handleChange("animationList", updatedList);
                      }
                    }}
                    className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition"
                  >
                    <Trash size={22} />
                  </button>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-slate-600 font-medium mb-2">
                Description
              </label>
              <input
                type="text"
                required
                value={data?.description || ""}
                onChange={(e) => handleChange("description", e.target.value)}
                name="description"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:outline-none"
                placeholder="Enter description..."
              />
            </div>

            {/* Resume URL */}
            <div>
              <label className="block text-slate-600 font-medium mb-2">
                Resume URL
              </label>
              <input
                type="url"
                value={data?.resumeURL || ""}
                required
                onChange={(e) => handleChange("resumeURL", e.target.value)}
                name="resumeURL"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:outline-none"
                placeholder="Enter resume URL..."
              />
            </div>

            {/* Result Message */}
            {result && (
              <div
                className={`w-full flex justify-center items-center p-3 rounded-lg ${
                  result.success ? "bg-green-200" : "bg-red-200"
                }`}
              >
                {result.data}
              </div>
            )}

            {/* Buttons */}
            <div className="w-full flex gap-2">
              <button
                type="reset"
                onClick={() => getData()} // Reset to original data
                className="bg-red-500 w-full text-white py-2 rounded-lg font-medium hover:bg-red-600 transition"
              >
                Reset
              </button>
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-2 rounded-lg font-medium transition ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-slate-500 hover:bg-slate-600 text-white"
                }`}
              >
                {loading ? (
                  <SpinnerGap
                    size={22}
                    className="animate-spin w-full flex justify-center items-center"
                  />
                ) : (
                  "Save Changes"
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default HomePage;
