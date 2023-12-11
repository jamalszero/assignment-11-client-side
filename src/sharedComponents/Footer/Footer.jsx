import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="w-[95%] lg:w-full mx-auto mt-10 py-5 border-t border-slate-700 flex justify-between items-center flex-col lg:flex-row gap-2 h-12">
            <Link>
                <img src="https://i.ibb.co/QkM1yqv/e-school-logo-removebg-preview.png" alt="logo" className="w-40" />
            </Link>
            <div className="flex gap-4 text-slate-400 font-bold text-sm">
                <Link>Facebook</Link>
                <Link>Instagram</Link>
                <Link>Twitter</Link>
                <Link>YouTube</Link>
            </div>
        </footer>
    );
};

export default Footer;