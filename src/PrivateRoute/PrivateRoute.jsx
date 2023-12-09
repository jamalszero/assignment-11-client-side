import { useContext } from "react";
import { Navigate} from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = ({ children }) => {
    const {currentUser, loading} = useContext(AuthContext);
  
    if (loading) {
        return <div className="flex justify-center items-center min-h-screen">
            <p className="loading loading-spinner text-primary text-center text-6xl"></p>
        </div>
    }

    if (currentUser?.email) {
        return children;
    }

    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;