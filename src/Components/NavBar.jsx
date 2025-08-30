import { useState } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaBriefcase } from "react-icons/fa";
import { MdAddCircleOutline } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-teal-700 border-b border-teal-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link className="flex items-center" to="/home">
                <img className="h-14 w-auto mt-1" src={logo} alt="Job Mzala" />
                <span className="hidden md:block text-2xl font-bold bg-gradient-to-r from-white to-violet-500 bg-clip-text text-transparent ml-2">
                Job Mzala
                </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:ml-auto space-x-2 items-center">
                <Link
                to="/home"
                className="flex items-center gap-2 text-white transition ease-in-out duration-300 hover:text-violet-400 rounded-md px-3 py-2"
                >
                <AiFillHome size={18} />
                Home
                </Link>
                <Link
                to="/jobs"
                className="flex items-center gap-2 text-white transition ease-in-out duration-300 hover:text-violet-400 rounded-md px-3 py-2"
                >
                <FaBriefcase size={18} />
                Jobs
                </Link>
                <Link
                to="/add-job"
                className="flex items-center gap-2 text-white transition ease-in-out duration-300 hover:text-violet-400 rounded-md px-3 py-2"
                >
                <MdAddCircleOutline size={20} />
                Add Job
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white focus:outline-none"
                >
                {menuOpen ? <IoMdClose size={28} /> : <GiHamburgerMenu size={22} />}
                </button>
            </div>
            </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
            <div className="md:hidden bg-teal-600 border-t border-teal-500 px-4 py-4 space-y-3">
            <Link
                to="/home"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 text-white hover:text-violet-300"
            >
                <AiFillHome size={18} />
                Home
            </Link>
            <Link
                to="/jobs"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 text-white hover:text-violet-300"
            >
                <FaBriefcase size={18} />
                Jobs
            </Link>
            <Link
                to="/add-job"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 text-white hover:text-violet-300"
            >
                <MdAddCircleOutline size={20} />
                Add Job
            </Link>
            </div>
        )}
        </nav>
    );
};

export default NavBar;
