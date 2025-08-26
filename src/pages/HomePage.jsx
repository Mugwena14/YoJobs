import Hero from "../Components/Hero"
import JobListing from "../Components/jobListing"

const HomePage = () => {
    return (
        <div>
            <Hero/>
            <JobListing isHome={true}/>
        </div>
    )
}

export default HomePage