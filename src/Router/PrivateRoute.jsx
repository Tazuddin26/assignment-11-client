import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <>
        <div className="flex justify-center items-center mt-24">
          <span className="loading loading-spinner text-error"></span>
        </div>
      </>
    );
  }
  if(user){
    return children;
  }
  return <Navigate to='/signIn' state={location?.pathname}></Navigate>;
};

export default PrivateRoute;
