import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="font-nunito">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;