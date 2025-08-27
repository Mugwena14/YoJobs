import { useEffect, useState } from "react"
import JobListings from "./JobListings";
import Spinner from "./Spinner";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

const JobListing = ({ isHome }) => {

    
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const querySnapshot = await getDocs(collection(db, "jobs"))
                const filteredData = querySnapshot.docs.map((doc) => (
                    {...doc.data(), id: doc.id}
                ))
                const homeData = filteredData[0].newJob
                console.log(homeData);
            }catch(error){
                console.error("Could not fetch Data", error)
            }finally{
                setLoading(false)
            }
        }
        fetchData();
    }, [])

    return (
        <div>
            {loading ? (<Spinner/>) : 
            <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-violet-600 mb-6 text-center">
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