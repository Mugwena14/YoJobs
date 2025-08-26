import { Link } from "react-router-dom"
import { FaArrowDown, FaArrowUp } from 'react-icons/fa6'
import { useState } from "react"

const Cards = ({ cards }) => {

    const [display, setDisplay] = useState(false)

    function displayFull(){
        setDisplay(prev => !prev)
    }

    return (
        <div>
            <section className="py-4">
            <div className="container-xl lg:container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <div className="flex row justify-between">
                        <h2 className="text-2xl font-bold">Job Seekers</h2>
                        {display ? 
                        <>
                        <button>
                            <FaArrowUp 
                            size={18} 
                            onClick={() => displayFull()}
                            className="mt-1"/>
                        </button>
                        </> 
                        : 
                        <>
                        <button>
                            <FaArrowDown 
                            size={18} 
                            onClick={() => displayFull()}
                            className="mt-1"/>
                        </button>
                        </>
                        }
                    </div>
                    {display ? 
                        <>
                            <div>
                                <p className="mt-2 mb-4">
                                    Find your next role and grow your career today.
                                </p>
                                <Link
                                to="/jobs"
                                className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
                                >
                                Browse Jobs
                                </Link>
                            </div>
                        </>
                    : ""}
                </div>
                <div className="bg-indigo-100 p-6 rounded-lg shadow-md">
                    <div className="flex row justify-between">
                        <h2 className="text-2xl font-bold">Employers</h2>
                        {display ? 
                        <>
                        <button>
                            <FaArrowUp 
                            size={18} 
                            onClick={() => displayFull()}
                            className="mt-1"/>
                        </button>
                        </> 
                        : 
                        <>
                        <button>
                            <FaArrowDown 
                            size={18} 
                            onClick={() => displayFull()}
                            className="mt-1"/>
                        </button>
                        </>
                        }
                    </div>                    
                    {display ? 
                    <>
                        <p className="mt-2 mb-4">
                            List your job to find the perfect skills for the role
                        </p>
                        <Link to="/add-job"
                        className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
                        >
                        Add Job
                        </Link>
                    </> : ""}
                </div>
                </div>
            </div>
            </section>
        </div>
    )
}

export default Cards