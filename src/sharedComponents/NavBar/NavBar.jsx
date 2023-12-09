import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const NavBar = () => {
    const {currentUser, logOut} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
        .then(() => {
            navigate("/")
        })
    }

    const links = <>
        <NavLink to="/" className="hover:bg-[#1a103d] rounded-lg py-1 pl-2 lg:p-0">Home</NavLink>
        <NavLink to="/allassignments" className="hover:bg-[#1a103d] rounded-lg py-1 pl-2 lg:p-0">All Assignments</NavLink>
        <NavLink to="/myassignments"  className="hover:bg-[#1a103d] rounded-lg py-1 pl-2 lg:p-0">My Assignments</NavLink>
        <NavLink to="/submittedassignments" className="hover:bg-[#1a103d] rounded-lg py-1 pl-2 lg:p-0">Submitted Assignments</NavLink>
        <NavLink to="/createassignment" className="hover:bg-[#1a103d] rounded-lg py-1 pl-2 lg:p-0">Create Assignment</NavLink>
        {
            !currentUser?.email && <NavLink to="/register" className="hover:bg-[#1a103d] rounded-lg py-1 pl-2 lg:p-0">Register</NavLink>
        }
    </>
  

    return (
        <nav className="w-[95%] lg:w-full mx-auto  border-b border-slate-700">
            <div className="navbar justify-between p-0">
                <div className="flex-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="lg:hidden p-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 border menu menu-sm dropdown-content rounded-box w-52 bg-gradient-to-r from-violet-950 to-fuchsia-700 space-y-3 text-sm">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <Link className="hidden  lg:block">
                        <img src="https://i.ibb.co/QkM1yqv/e-school-logo-removebg-preview.png" alt="logo" className="w-40" />
                    </Link>
                </div>

                <div className="flex-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 py-0 space-x-5 text-sm font-md text-slate-200 ">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="flex-end">

                    {
                        !currentUser?.email ?
                            <Link to="/login" className="btn bg-gradient-to-r from-blue-600 to-fuchsia-700 rounded-full btn-sm lg:px-7 text-slate-200 text-sm">Login</Link> :
                            <div className="dropdown dropdown-end"  >
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className=" w-7 lg:w-8 rounded-full">
                                        <img title={currentUser.displayName} alt="user photo" src={currentUser.photoURL} />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 border menu menu-sm dropdown-content rounded-box w-52 bg-gradient-to-r from-violet-950 to-fuchsia-700">
                                    <li><Link to="/#">{currentUser.displayName}</Link></li>
                                    <li><Link onClick={handleLogOut}>Logout</Link></li>
                                </ul>
                            </div>
                    }

                </div>
            </div>
        </nav>
    );
};

export default NavBar;