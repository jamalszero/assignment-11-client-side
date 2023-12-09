import { Link } from "react-router-dom";

const AssignmentCard = ({assignment}) => {
    const { title, marks, level, image_url } = assignment;
    return (
        <div className="card card-compact rounded-none border border-slate-400 bg-blue-950">
            <figure><img src={image_url} alt="thumbnail" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Difficulty Level : {level}</p>
                <p>Marks : {marks}</p>
                <div className="card-actions justify-evenly">
                    <Link to="/details" state={assignment} className="btn  bg-gradient-to-r from-blue-600 to-fuchsia-700 rounded-md">View Assignment</Link>
                    <Link to="/updateassignment" state={assignment} className="btn  bg-gradient-to-r from-blue-600 to-fuchsia-700 rounded-md">Update Assignment</Link>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCard;