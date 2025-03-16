import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-slate-700 mb-6 text-center">
          Edit About Page
        </h2>
        <form className="space-y-4">
          {/* Description */}
          <div>
            <label className="block text-slate-600 font-medium mb-1">
              Description
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:outline-none"
              placeholder="Enter description..."
            />
          </div>

          {/* Description List */}
          <div>
            <label className="block text-slate-600 font-medium mb-1">
              Description List
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:outline-none"
              placeholder="Enter description list..."
            />
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
    </div>
  );
};

export default AboutPage;
