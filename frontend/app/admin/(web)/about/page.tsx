"use client";
import { useFetchData } from "@/app/_hook/action";
import { createClient } from "@/utils/supabase/client";
import { SpinnerGap, Trash } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";

type aboutPageBody = {
  id: number;
  description: string;
  descriptionList: string[];
};

const AboutPage = () => {
  const [count, setCount] = useState<number>(1);
  const [result, setResult] = useState<{ data: string; success: boolean }>();
  const [data, setData] = useState<aboutPageBody[] | null>(null);
  const [aboutData, setAboutData] = useState<aboutPageBody | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  // const supabase = createClient();
  useFetchData(createClient(), "aboutBody", setData, setPageLoading, setError);

  useEffect(() => {
    async function getHomePageBodyData() {
      if (data) {
        const { id, description, descriptionList } = data[0];
        let parsedDescriptionList: string[];

        if (typeof descriptionList === "string") {
          parsedDescriptionList = JSON.parse(descriptionList);
        } else {
          parsedDescriptionList = descriptionList; // already an array
        }

        setAboutData({
          id,
          description,
          descriptionList: parsedDescriptionList,
        });
        setCount(parsedDescriptionList.length);
        setPageLoading(false);
      }
    }

    getHomePageBodyData();
  }, [data]);

  function handleEdit(field: keyof aboutPageBody, value: string | string[]) {
    setAboutData((prev) => (prev ? { ...prev, [field]: value } : null));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(aboutData);
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-6">
      {pageLoading ? (
        <div>
          <SpinnerGap size={30} className="animate-spin" />
        </div>
      ) : (
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
          <h2 className="text-2xl font-semibold text-slate-700 mb-6 text-center">
            Edit About Page
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Description */}
            <div>
              <label className="block text-slate-600 font-medium mb-1">
                Description
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:outline-none"
                placeholder="Enter description..."
                value={aboutData?.description}
                onChange={(e) => {
                  handleEdit("description", e.target.value);
                }}
              />
            </div>

            {/* Description List */}
            <div>
              <label className="block text-slate-600 font-medium mb-1">
                Description List
              </label>
              {Array.from({ length: count }).map((_, index) => (
                <input
                  type="text"
                  className="w-full my-2 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:outline-none"
                  placeholder="Enter description list..."
                  value={aboutData?.descriptionList[index]}
                  onChange={(e) => {
                    const updatedList = aboutData?.descriptionList || [];
                    if (typeof updatedList != "string") {
                      updatedList[index] = e.target.value;
                      handleEdit("descriptionList", updatedList);
                    }
                  }}
                />
              ))}
              {/* ADD and Delete button */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="bg-slate-500 text-white px-3 py-2 rounded-lg hover:bg-slate-600 transition"
                  onClick={() => setCount((prev) => prev + 1)}
                >
                  +
                </button>
                {count > 1 && (
                  <button
                    type="button"
                    className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition"
                    onClick={() => {
                      setCount((prev) => prev - 1);
                      const updateList = aboutData?.descriptionList || [];
                      if (updateList[count - 1]) {
                        updateList.pop();
                      }
                      handleEdit("descriptionList", updateList);
                    }}
                  >
                    <Trash size={22} />
                  </button>
                )}
              </div>
            </div>

            {/* Tab Data */}
            <div>
              <label className="block text-slate-600 font-medium mb-1">
                Tab Data
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:outline-none"
                placeholder="Enter tab data..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-slate-500 text-white py-2 rounded-lg font-medium hover:bg-slate-600 transition"
            >
              Save Changes
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AboutPage;
