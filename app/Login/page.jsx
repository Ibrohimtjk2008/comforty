import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Login() {
  return (
    <>
      <Header></Header>
      <div className=" mx-15  bg-gray-200 relative h-auto rounded-b-4xl py-5">
        <div className="flex gap-3 px-8 py-10">
          <p className="text-gray-500">Home</p>
          <p className="text-gray-500">Account</p>
          <p className="font-semibold">Sign In</p>
        </div>
        <p className="text-3xl px-8 ">Sign In</p>
      </div>
      <div className="container mx-auto flex justify-center py-20 w-full">
        <div className="flex flex-col gap-3 p-5 rounded-xl shadow-xl  w-1/3">
          <p className="text-3xl px-8 text-center">Sign In</p>
          <input
            type="email"
            placeholder="Email"
            className="bg-gray-300 rounded-sm p-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-gray-300 rounded-sm p-2"
          />
          <div className="flex justify-between">
            <div className="flex gap-1">
              <input type="checkbox" /> <p>Remember me</p>
            </div>
            <p className="text-cyan-500">Forget Password</p>
          </div>
          <button className="rounded-sm bg-cyan-500 text-white p-2">
            <p>Sign In</p>
          </button>
          <div className="flex gap-1 justify-center">
            <p>Don’t have account?</p>
            <Link href={"#"} className="text-cyan-500">
              {" "}
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
