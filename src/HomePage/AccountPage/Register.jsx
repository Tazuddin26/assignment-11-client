import { useContext } from "react";
import registerLottie from "../../assets/register.json";
import Lottie from "lottie-react";
import AuthContext from "../../Context/AuthContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const Register = () => {
  const { createRegisterUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log("register Clicked", name, email, password, photo);

    createRegisterUser(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Registration is Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        e.target.reset();
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
            name="photo"
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
        <Link to="/" className="btn btn-info btn-outline w-full p-3 text-sm font-bold tracking-wide uppercase rounded">
          <button
            type="submit"
            
          >
            Register
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Register;
