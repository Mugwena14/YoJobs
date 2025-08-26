import AddJob from "../Components/AddJob"

const AddJobPage = () => {
    
    async function addJob(newJob){
        const res = await fetch('http://localhost:3001/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newJob),
        })
    }
    
    return (
        <div>
            <AddJob SubmitForm={addJob}/>
        </div>
    )
}

export default AddJobPage