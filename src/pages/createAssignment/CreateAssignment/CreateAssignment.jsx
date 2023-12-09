import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Footer from "../../../sharedComponents/Footer/Footer";
import NavBar from "../../../sharedComponents/NavBar/NavBar";
import { useContext, useState } from "react";
import { BsCalendarDate } from "react-icons/bs";
import { AuthContext } from "../../../provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CreateAssignment = () => {
    const [startDate, setStartDate] = useState(new Date());
    const { currentUser } = useContext(AuthContext);

    const notify = (message, type) => type(message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const handleGetAssignmentInfo = (e) => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const marks = form.marks.value;
        const level = form.level.value;
        const image_url = form.image_url.value;
        const duedate = form.duedate.value;
        const description = form.description.value;
        const userEmail = currentUser.email;
        const assignmentInfo = { title, marks, level, image_url, duedate, description, userEmail }
        fetch("https://e-school-server-rho.vercel.app/allassignments", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(assignmentInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    return notify('Assignment successfully created!', toast.success);
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

                    <form onSubmit={handleGetAssignmentInfo} className="mb-0 mt-6 space-y-4  p-3 sm:p-6 lg:p-8 border border-slate-600">
                        <p className="text-center text-lg font-medium text-slate-200">Create assignment</p>

                        <div>
                            <label className="text-sm py-1 text-slate-300">Title</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="title"
                                    className="w-full rounded-sm  p-3 pe-12 text-sm "
                                    placeholder="Enter title"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-sm py-1 text-slate-300">Marks</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="marks"
                                    className="w-full rounded-sm  p-3 pe-12 text-sm "
                                    placeholder="Enter marks"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-sm py-1 text-slate-300">Level</label>
                            <div className="relative">

                                <select type="text" name="level" className="w-full rounded-sm  p-3 pe-12 text-sm">
                                    <option>Easy</option>
                                    <option>Medium</option>
                                    <option>Hard</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="text-sm py-1 text-slate-300">Image URL</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="image_url"
                                    className="w-full rounded-sm  p-3 pe-12 text-sm "
                                    placeholder="Enter image url"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-sm py-1 text-slate-300">Due Date</label>
                            <div className="relative">
                                <ReactDatePicker type="date" name="duedate" className="rounded-sm  p-3 pe-12 text-sm" selected={startDate} onChange={(date) => setStartDate(date)} />
                                <BsCalendarDate className="absolute top-[30%] bottom-[30%] right-2 text-gray-300 text-xl" />
                            </div>
                        </div>

                        <div>
                            <label className="text-sm py-1 text-slate-300">Description</label>
                            <div className="relative">
                                <textarea
                                    type="text"
                                    name="description"
                                    className="w-full rounded-sm  p-3 pe-12 text-sm "
                                    placeholder="Enter description"
                                />
                            </div>
                        </div>

                        <button type="submit" className="block w-full rounded-sm px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-800 to-fuchsia-700">Create</button>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default CreateAssignment;