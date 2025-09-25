import { Link } from "react-router-dom"
import { useState } from "react"
import { CiLocationOn } from "react-icons/ci";

const JobListings = ({ job }) => {

    const [showFull, setShowFull] = useState(false);
    
    let description = job.newJob.description;
    
    showFull ? description = description :
        description = description.substring(0, 120) + '...';

    function handleShow(){
        setShowFull(prevState => !prevState)
    }

    return (
        <div>
            <div className="bg-white rounded-xl shadow-md relative">
                <div className="p-4">
                    <div className="mb-6">
                        <div>
                            <p className="inline-block px-3 py-1 text-xs font-semibold text-teal-700 bg-teal-100 rounded-full">
                                {job.newJob.type}
                            </p> 
                                <span className="text-sm text-teal-700 ml-1">{job.newJob.date}</span>
                        </div>
                        <h3 className="mt-3 text-xl font-bold text-gray-700">{job.newJob.title}</h3>
                    </div>

                    <div className="mt-2 text-sm text-gray-600">
                    </div>

                    <button
                        className="mt-2 text-sm text-teal-600 font-medium hover:underline"
                        onClick={() => handleShow()}>
                        {showFull ? 'Less' : 'More'}
                    </button>

                    <div className="border border-gray-100 mb-5"></div>

                    <div className="mt-4 flex items-center justify-between text-sm">
                        <p className="text-teal-700 font-semibold">Salary : {job.newJob.salary}</p>
                        <p className="text-violet-600 font-medium">
                            <CiLocationOn size={14} className="inline-block mb-1 mr-0.5 text-violet text-lg" />
                            {job.newJob.location}
                        </p>
                    </div>

                    <Link to={`/job/${job.id}`}>
                        <button className="mt-6 w-full bg-teal-600 hover:bg-violet-600 text-white font-medium py-2 px-4 rounded-lg transition ease-in-out duration-200">
                            View Job
                        </button>
                    </Link>

                    {/* <div className="flex flex-col lg:flex-row justify-between mb-4">
                        <div className="text-orange-700 mb-3">
                        <i className="fa-solid fa-location-dot text-lg"></i>
                        {job.location}
                        </div>
                        <Link
                        to={`/job/${job.id}`}
                        className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                        >
                        Read More
                        </Link>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default JobListings