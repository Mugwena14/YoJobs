import Job from "../Components/Job"

const job = () => {

    async function deleting(jobId){
        const res = await fetch(`http://localhost:3001/jobs/${jobId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jobId)
        })
    }

    return (
        <div>
            <Job DeleteJob={deleting}/>
        </div>
    )
}

export default job