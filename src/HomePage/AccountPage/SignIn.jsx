import { useContext } from "react";
import signInLottie from "../../assets/signin.json";
import Lottie from "lottie-react";
import AuthContext from "../../Context/AuthContext";
import Swal from "sweetalert2";
const SignIn = () => {
  const { createSignInUser } = useContext(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("signin", email, password);

    createSignInUser(email, password).then((res) => {
      console.log("sign in user", res.user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Sign in Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      e.target.reset();
    });
  };

  return (
    <div
      className="grid max-w-screen-lg grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 
      md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800 lg:border border-lime-500 lg:mt-10"
    >
      <div className="flex flex-col justify-between">
        <div className="space-y-2 lg:ml-20">
          <h2 className="text-4xl font-bold leading-tight text-center  ">
            Please Sign In!
          </h2>
        </div>
        <div className="lg:w-6/6">
          <Lottie animationData={signInLottie} className=""></Lottie>
        </div>
      </div>
      <form onSubmit={handleSignIn} className="">
        <div className="lg:mt-10 space-y-6 ">
          <div>
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 rounded dark:bg-gray-100"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm ">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-3 rounded dark:bg-gray-100"
              required
            />
          </div>
          <div className=" ">
            <button
              type="submit"
              className="btn btn-outline w-full  p-3 text-sm font-bold tracking-wide uppercase rounded"
            >
              Sign In
            </button>
            <div className="divider divider-success mt-4">OR</div>
            {/* <div className="divider mt-4">OR</div> */}
            <button
              type="submit"
              className="btn btn-outline w-full mt-6 p-3 text-sm font-bold tracking-wide uppercase rounded"
            >
              Google
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
