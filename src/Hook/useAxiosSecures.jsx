import axios from "axios";
import { useContext, useEffect } from "react";
import AuthContext from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
  withCredentials: true,
});

const UseAxiosSecures = () => {
  const { createSignOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log("Error Caught in Interceptor", error);

        if (error.response?.status === 401 || error.response?.statuss === 403) {
          console.log("need to logout the user");
          createSignOutUser()
            .then(() => {
              console.log("Logout user");
              navigate("/signIn");
            })
            .catch((error) => console.log(error));
        }

        return Promise.reject(error);
      }
    );
  }, []);

  return axiosInstance;
};

export default UseAxiosSecures;
