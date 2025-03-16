import { login, signup } from "./actions";

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form className="flex flex-col">
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="xyz@mail.com"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              required
              placeholder="***********"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
          </div>
          <button
            formAction={login}
            className="w-full bg-slate-600 text-white py-2 rounded-lg hover:bg-slate-700 transition"
          >
            Login
          </button>
          <p className="text-sm text-center text-gray-600 mt-4">
            Don't have an account?{" "}
            <button
              formAction={signup}
              className="text-blue-500 hover:underline"
            >
              Sign up
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Page;
