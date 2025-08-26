import { useEffect, useState } from "react"
import JobListings from "./JobListings";
import Spinner from "./Spinner";

const JobListing = ({ isHome }) => {

    
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchJobs(){
        const apiUrl =  isHome ? "http://localhost:3001/jobs?_limit=3" : "http://localhost:3001/jobs";
        try{
            const res = await fetch(apiUrl);
            const data = await res.json();
            setJobs(data);
        }catch{
            console.log("Could not Find Data", error);
        }finally{
            setLoading(false);
        }
    }
    fetchJobs();
    }, [])

    return (
        <div>
            {loading ? (<Spinner/>) : 
            <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-violet-500 mb-6 text-center">
                {isHome ? 'Recent Jobs' : 'Browse Jobs'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* <!-- Job Listing 1 --> */}
                {jobs.map((job) => 
                <JobListings key={job.id} job={job}></JobListings>
                )}
                </div>
            </div>
        </section>
            }
        </div>
    )
}

export default JobListing