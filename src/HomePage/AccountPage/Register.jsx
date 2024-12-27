import { useContext, useState } from "react";
import registerLottie from "../../assets/register.json";
import Lottie from "lottie-react";
import AuthContext from "../../Context/AuthContext";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
const Register = () => {
  const { createRegisterUser, profileManage } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleRegister = (e) => {
    setError("");
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;
    const password = form.password.value;

    if (password.length < 6) {
      setError("Password Length must be at least 6 character");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Must have a Lowercase letter in the password ");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Must have an Uppercase letter in the password ");
      return;
    }

    createRegisterUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Successfully Registration !", {
          position: "top-center",
          autoClose: 3000,
        });
        e.target.reset();
        profileManage(name, image);
        navigate("/");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div
      className="grid lg:my-10 shadow-xl bg-green-50 max-w-screen-lg grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 
    md:px-12 lg:px-16 xl:px-32 text-stone-950 lg:border lg:mt-10"
    >
      <div className="flex flex-col justify-between">
        <div className="w-full">
          <Lottie animationData={registerLottie} className=""></Lottie>
        </div>
      </div>

      <form onSubmit={handleRegister} className="space-y-6 ">
        <h2 className="text-3xl font-bold leading-tight text-center w-full ">
          Please Create an Account with NewDay!
        </h2>
        <div>
          <label htmlFor="name" className="text-sm">
            Full name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-3 rounded dark:bg-gray-100"
            required
          />
        </div>
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
          <label htmlFor="photo" className="text-sm">
            Photo URL
          </label>
          <input
            type="url"
            name="image"
            placeholder="Please Enter Photo url"
            className="w-full p-3 rounded dark:bg-gray-100"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="text-sm ">
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
        {/* <p>Already have an account ? Login.</p> */}
        <p className="mx-auto text-red-600 text-sm">{error}</p>
        <button
          className="btn btn-info btn-outline w-full p-3 text-sm font-bold tracking-wide uppercase rounded"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
