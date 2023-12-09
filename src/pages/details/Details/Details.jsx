import { useLocation } from "react-router-dom";
import Footer from "../../../sharedComponents/Footer/Footer";
import NavBar from "../../../sharedComponents/NavBar/NavBar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Details = () => {
    const { state } = useLocation();
    const {_id, title, marks, level, image_url, duedate, description} = state;

    const notify = (message, type) => {
        type(message, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const handleDelete = () => {
        fetch("https://e-school-server-rho.vercel.app/deleteassignment", {
            method: "DELETE",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({id:_id})
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                notify('Assignment successfully deleted!', toast.success) 
            }
        })
        .catch(error => {
            notify(error.message, toast.error)
        });  
    };
 
    return (
        <div className="container mx-auto">
            <NavBar></NavBar>
           
            <div className="min-h-screen flex justify-center items-center">
            <div className="card card-compact w-3/4 lg:w-2/4 mx-auto my-14 rounded-none border border-slate-400">
                <figure><img src={image_url} alt="thumbnail" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Difficulty Level : {level}</p>
                    <p>Marks : {marks}</p>
                    <p>Due Date : {duedate}</p>
                    <p>Description : {description}</p>
                    <div className="card-actions justify-center">
                        <div className="btn  bg-gradient-to-r from-blue-600 to-fuchsia-700 rounded-md">Take Assignment</div>
                        <button onClick={handleDelete} className="btn  bg-red-500 rounded-md">Delete</button>
                    </div>
                </div>
            </div>
            </div>
            <ToastContainer ></ToastContainer>
            <Footer></Footer>
        </div>
    );
};

export default Details;