import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";

const Job = ({ DeleteJob }) => {

    const {id} =useParams();
    const [job, setJob] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        async function getJob(){
            try{
                const res = await fetch(`http://localhost:3001/jobs/${id}`);
                const data = await res.json();
                setJob(data);
            }catch{
                console.log('Could not Get Job', error)
            }finally{
                setLoading(false);
            }
        }
        getJob();
    }, [])

    function handleDelete(jobId){
        DeleteJob(jobId);
        navigate('/jobs')
    }

    return (
            <div>
                {loading ? (
                    <Spinner loading={loading} />
                ) : (
                    <>
                    <section className="bg-teal-50">
                        <div className="container m-auto py-10 px-6">
                            <div className="grid grid-cols-1 md:grid-cols-[65%_35%] gap-6">
                                {/* Job Details */}
                                <main>
                                <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
                                    {/* Header */}
                                    <div className="flex items-center justify-between">
                                    <Link
                                        to={`/jobs/${job.id}`}
                                        className="flex items-center text-sm font-medium text-violet-600 hover:text-teal-700 transition"
                                    >
                                        <i className="fas fa-arrow-left mr-2"></i> Back
                                    </Link>
                                    <span className="px-3 py-1 text-xs font-semibold text-teal-700 bg-teal-100 rounded-full">
                                        {job.type}
                                    </span>
                                    </div>

                                    {/* Title*/}
                                    <div>
                                    <h1 className="text-2xl font-bold text-gray-900">{job.title}</h1>
                                    </div>

                                    {/* Description */}
                                    <div>
                                    <h3 className="text-teal-700 font-semibold mb-1">Job Description</h3>
                                    <p className="text-gray-700 text-sm">{job.description}</p>
                                    </div>

                                    {/* Location */}
                                    <h3 className="text-teal-700 font-semibold mb-1">Job Location</h3>
                                    <div className="flex items-center mt-1 text-sm text-violet-600">
                                        <CiLocationOn size={14} className="inline-block mr-0.5 text-violet text-lg" />
                                        {job.location}
                                    </div>

                                    {/* Salary */}
                                    <div>
                                    <h3 className="text-teal-700 font-semibold mb-1">Salary</h3>
                                    <p className="text-violet-600 font-medium text-sm">
                                        {job.salary} / Year
                                    </p>
                                    </div>

                                    {/* Apply Button */}
                                    <div className="pt-4">
                                        <button
                                            onClick={() => console.log("Apply clicked")}
                                            className="w-full bg-teal-600 hover:bg-violet-600 text-white font-medium py-2 px-4 rounded-lg transition ease-in-out duration-200">
                                            Apply Now
                                        </button>
                                    </div>

                                </div>
                                </main>

                                {/* Sidebar (Company + Manage merged) */}
                                <aside>
                                <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
                                    {/* Company Info */}
                                    <div>
                                    <h2 className="text-xl font-semibold text-teal-700">
                                        {job.company.name}
                                    </h2>
                                    <p className="text-gray-600 text-sm mt-1">
                                        {job.company.description}
                                    </p>
                                    </div>

                                    {/* Contact Info */}
                                    <div className="space-y-2">
                                    <div>
                                        <p className="bg-teal-50 text-teal-700 p-2 rounded text-sm font-medium">
                                        {job.company.contactEmail}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="bg-violet-50 text-violet-700 p-2 rounded text-sm font-medium">
                                        {job.company.contactPhone}
                                        </p>
                                    </div>
                                    </div>

                                    {/* Manage Actions */}
                                    <div className="flex flex-col md:flex-row gap-3 pt-2">
                                    <Link
                                        to="/add-job"
                                        className="bg-green-400 hover:bg-teal-600 text-white text-center text-sm font-medium py-2 px-4 rounded-lg transition w-full md:w-1/2"
                                    >
                                        Edit Job
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(job.id)}
                                        className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition w-full md:w-1/2"
                                    >
                                        Delete Job
                                    </button>
                                    </div>
                                </div>
                                </aside>
                            </div>
                        </div>
                    </section>
                    </>
                )}
</div>


    )
}

export default Job