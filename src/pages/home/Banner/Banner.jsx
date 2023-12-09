import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const Banner = () => {

    const {currentUser} = useContext(AuthContext);

    return (
        <div className="w-[95%] lg:w-full mx-auto mt-7 rounded relative">
            <img src="https://i.ibb.co/WFjmtxv/banner.png" alt="banner" className="rounded w-full h-[300px] lg:h-[460px]" />
            <div className="absolute left-0 right-0 top-[30%] bottom-[30%] flex flex-col justify-center items-center gap-4">
                <div className="mb-7">
                <h1 className="text-3xl lg:text-6xl font-bold text-center px-3">Welcome to E-School</h1>
                </div>
                <Link to="/allassignments" className="btn btn-sm lg:btn-md w-52 bg-gradient-to-r from-blue-600 to-fuchsia-700 rounded-full text-slate-100 border-none font-semibold text-base">See all assignments <span className="text-sm">&#10095;</span></Link>
                {
                !currentUser?.email ?
                <Link to="/register" className="btn btn-sm lg:btn-md w-52 bg-gradient-to-r from-blue-600 to-fuchsia-700 rounded-full  text-slate-100 border-none font-semibold text-base">Become a member <span className="text-sm">&#10095;</span></Link> :
                <Link to="/createassignment" className="btn btn-sm lg:btn-md w-52 bg-gradient-to-r from-blue-600 to-fuchsia-700 rounded-full  text-slate-100 border-none font-semibold text-base">Create Assignment <span className="text-sm">&#10095;</span></Link>
                }
            </div>
        </div>
    );
};

export default Banner;