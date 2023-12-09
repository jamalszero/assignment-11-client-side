import { Link } from "react-router-dom";
import Footer from "../../../sharedComponents/Footer/Footer";
import NavBar from "../../../sharedComponents/NavBar/NavBar";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useContext, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";
import { auth } from "../../../firebase/firebase.config";

const Register = () => {
    const [showPass, setShowPass] = useState(false);
    const { googleSignIn, register } = useContext(AuthContext);

    const handlePassVisibility = () => {
        if (!showPass) {
            setShowPass(true);
        } else {
            setShowPass(false);
        }
    };

    const notify = (message, type) => type(message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
    });




    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                console.log(res.user);
                if (res.user.email) {
                    return notify('Login Successful!', toast.success);
                }
            })
            .catch(error => {
                return notify(error.message, toast.error)
            });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo_url.value;
        const email = form.email.value;
        const password = form.password.value;
        const userInfo = { name, photo, email, password };
        console.log(userInfo);
        register(email, password)
            .then(res => {
                if (res.user.email) {
                    updateProfile(auth.currentUser, {
                        displayName: name,
                        photoURL: photo
                      });

                    return notify('Registration Successful!', toast.success);
                }
            })
            .catch(error => {
                return notify(error.message, toast.error);
            });

    };

    return (
        <div className="container mx-auto">
            <NavBar></NavBar>
            <ToastContainer ></ToastContainer>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
                <div className="mx-auto max-w-lg">
                    <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Get started today!</h1>
                    <form onSubmit={handleRegister} className="mb-0 mt-6 space-y-4 rounded-lg p-3 shadow-lg sm:p-6 lg:p-8 border border-slate-500">
                        <p className="text-center text-lg font-medium text-slate-200">Please create a account</p>

                        <div>
                            <label className="text-sm py-1 text-slate-300">Name</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full rounded-lg p-3 pe-12 text-sm "
                                    placeholder="Enter name"
                                />

                            </div>
                        </div>

                        <div>
                            <label className="text-sm py-1 text-slate-300">Photo URL</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="photo_url"
                                    className="w-full rounded-lg  p-3 pe-12 text-sm "
                                    placeholder="Enter photo url"
                                />

                            </div>
                        </div>

                        <div>
                            <label className="text-sm py-1 text-slate-300">Email</label>
                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full rounded-lg  p-3 pe-12 text-sm "
                                    placeholder="Enter email"
                                />

                            </div>
                        </div>

                        <div>
                            <label className="text-sm py-1 text-slate-300">Password</label>
                            <div className="relative">
                                <input
                                    type={showPass ? 'text' : 'password'}
                                    name="password"
                                    className="w-full rounded-lg  p-3 pe-12 text-sm "
                                    placeholder="Enter password"
                                />
                                {
                                    !showPass ? <IoEye onClick={handlePassVisibility} className="absolute top-[35%] bottom-[35%] right-2 text-gray-300 text-lg" /> : <IoEyeOff onClick={handlePassVisibility} className="absolute top-[35%] bottom-[35%] right-2 text-gray-300 text-lg" />
                                }
                            </div>
                        </div>

                        <button type="submit" className="block w-full rounded-lg px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-800 to-fuchsia-700">Register</button>

                        <p className="text-center text-sm text-gray-400">
                            <Link to="/login" className="underline" href=""> Login</Link>
                            <span> Or</span>
                            <span> <Link onClick={handleGoogleSignIn} className="underline">Login in with Google</Link></span>
                        </p>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;