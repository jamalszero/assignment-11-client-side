import { useLoaderData } from "react-router-dom";
import Footer from "../../../sharedComponents/Footer/Footer";
import NavBar from "../../../sharedComponents/NavBar/NavBar";
import AssignmentCard from "../AssignmentCard/AssignmentCard";
import { useState } from "react";

const AllAssignments = () => {


    const allAssignments = useLoaderData();
    const [loadedAssignments, setLoadedAssignments] = useState(allAssignments);

    const filter = (e) => {
        e.preventDefault();
        const form = e.target;
        const level = form.level.value;
        fetch(`https://e-school-server-rho.vercel.app/allassignments/${level}`)
        .then(res => res.json())
        .then(data => setLoadedAssignments(data));
    };

    return (
        <div className="container mx-auto ">
            <NavBar></NavBar>

            <div className="flex justify-center items-center mt-14">
                <div className="join">
                    <form onSubmit={filter}>
                        <select type="text" name="level" className="input w-40 input-bordered join-item bg-slate-200 text-black">
                            <option disabled selected>Select level</option>
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </select>
                        <div className="indicator">
                            <button type="submit" className="btn join-item bg-slate-700">Filter</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 w-[95%] lg:w-full mx-auto">
                {
                    loadedAssignments?.map(assignment => <AssignmentCard key={assignment._id} assignment={assignment}></AssignmentCard>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllAssignments;