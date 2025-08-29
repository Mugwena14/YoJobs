import logo from '../assets/images/logo.png'
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaBriefcase } from "react-icons/fa";
import { MdAddCircleOutline } from "react-icons/md";



const NavBar = () => {

    return (
        <div>
            <nav className="bg-teal-700 border-b border-teal-500">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">
                    <div
                        className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
                    >
                        {/* <!-- Logo --> */}
                        <Link className="flex flex-shrink-0 items-center" to="/home">
                        <img
                            className="h-15 w-auto mt-1"
                            src={logo}
                            alt="YoJobs"
                        />
                        <span
                            className="hidden md:block text-2xl font-bold bg-gradient-to-r from-white to-violet-500 bg-clip-text text-transparent">
                            YoJobs
                        </span>
                        </Link>
                                            
                    <div className="md:ml-auto">
                        <div className="flex space-x-2 flex items-center mt-2">
                            <Link
                            to="/home"
                            className="flex items-center gap-2 text-white transition ease-in-out duration-300 hover:text-violet-600 rounded-md px-3 py-2"
                            >
                            <AiFillHome size={18} />
                            Home
                            </Link>
                            <Link
                            to="/jobs"
                            className="flex items-center gap-2 text-white transition ease-in-out duration-300 hover:text-violet-600 rounded-md px-3 py-2"
                            >
                            <FaBriefcase size={18} />
                            Jobs
                            </Link>
                            <Link
                            to="/add-job"
                            className="flex items-center gap-2 text-white transition ease-in-out duration-300 hover:text-violet-600 rounded-md px-3 py-2"
                            >
                            <MdAddCircleOutline size={20} />
                            Add Job
                            </Link>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar