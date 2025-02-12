import { useContext } from "react";
import signInLottie from "../../assets/signin.json";
import Lottie from "lottie-react";
import AuthContext from "../../Context/AuthContext";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
const SignIn = () => {
  const { createSignInUser, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || "/";

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
      navigate(from);
    });
  };
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        navigate(from);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div
      className="grid max-w-screen-lg grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 
      md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800 bg-green-50 shadow-xl my-10 lg:mt-10"
    >
      <div className="flex flex-col justify-between">
        <div className="hidden lg:block md:block bg-cover lg:w-6/6">
          <Lottie animationData={signInLottie} className=""></Lottie>
        </div>
      </div>

      <form onSubmit={handleSignIn} className="">
        <img
          src="https://i.ibb.co.com/rvQQPst/logo.png"
          alt="NewDay"
          className="w-40 border ml-24 p-2 m-2 rounded-xl bg-lime-400"
        />
        <p className="text-center text-2xl font-fs">Log in Your Account</p>
        <div className="lg:mt-2 space-y-6 font-fs text-xl">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-2 rounded-sm dark:bg-gray-100"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-2 rounded-sm dark:bg-gray-100"
              required
            />
          </div>
          <div className=" ">
            <button
              type="submit"
              className="w-full py-2 font-fs tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-500 rounded-sm hover:bg-green-400 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80"
            >
              Log In
            </button>
            <p className="text-center p-2">
              Don't have an account yet?{" "}
              <Link to="/register" className="text-green-500 hover:underline">
                Register
              </Link>
            </p>
            <div className="divider divider-success mt-4">OR</div>

            <button
              onClick={handleGoogleLogin}
              type="submit"
              className="w-full flex justify-center items-center gap-2 py-2 font-fs tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-500 rounded-sm hover:bg-green-400 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80"
            >
              <FcGoogle size={28} />
              <span>logIn With Google</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
