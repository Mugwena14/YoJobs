import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../config/firebase'

const AddJob = () => {

    const [type, setType] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [salary, setSalary] = useState('');
    const [location, setLocation] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyDescription, setCompanyDescription] = useState('');
    const [companyEmail, setCompanyEmail] = useState('');
    const [contactPhone, setContactPhone] = useState('');
    const [applyLink, setApplyLink] = useState('');

    const navigate = useNavigate()

    const now = new Date();

    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    }

    const formattedDate = now.toLocaleString('en-ZA', options);

    const newJob = {
        date: formattedDate,
        title,
        type,
        description,
        location,
        salary,
        companyName,
        companyDescription, 
        companyEmail,
        contactPhone,
        applyLink,
    }

    async function handleSubmit(e){
        e.preventDefault();

        try{
            await addDoc(collection(db, "jobs"), {
                newJob
            });
        }catch(error){
            console.error("Error Listing Job", error)
        }
        navigate('/jobs')
    }

    return (
        <section className="bg-violet-50">
            <div className="container m-auto max-w-2xl py-24">
                <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-2xl border border-teal-200 m-4 md:m-0">
                <form onSubmit={handleSubmit}>
                    <h2 className="text-3xl text-center font-bold mb-6 text-violet-700">
                    Add Job
                    </h2>

                    {/* Job Type */}
                    <div className="mb-4">
                    <label htmlFor="type" className="block text-violet-800 font-semibold mb-2">
                        Job Type
                    </label>
                    <select
                        id="type"
                        name="type"
                        className="border border-violet-200 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        required
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option value="">Select Job Type</option>
                        <option value="Internship">Internship</option>
                        <option value="PartTime">Part-Time</option>
                        <option value="FullTime">Full-Time</option>
                    </select>
                    </div>

                    {/* Job Title */}
                    <div className="mb-4">
                    <label htmlFor="title" className="block text-violet-800 font-semibold mb-2">
                        Job Listing Position
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="border border-violet-200 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        placeholder="eg. Software Developer"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                    <label htmlFor="description" className="block text-violet-800 font-semibold mb-2">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        className="border border-violet-200 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        rows="4"
                        placeholder="Add job duties, expectations, requirements, benefits..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    </div>

                    {/* Salary */}
                    <div className="mb-4">
                    <label htmlFor="salary" className="block text-violet-800 font-semibold mb-2">
                        Salary
                    </label>
                    <select
                        id="salary"
                        name="salary"
                        className="border border-violet-200 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        required
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                    >
                        <option value="">Select salary range</option>
                        <option value="To be discussed">To Be Discussed</option>
                        <option value="R0 - R10000">R0 - R10000</option>
                        <option value="R10000 - R20000">R10000 - R20000</option>
                        <option value="R20000 - R30000">R20000 - R30000</option>
                        <option value="R30000 - R40000">R30000 - R40000</option>
                        <option value="Over R40000">Over R40000</option>
                    </select>
                    </div>

                    {/* Location */}
                    <div className="mb-4">
                    <label htmlFor="location" className="block text-violet-800 font-semibold mb-2">
                        Location
                    </label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        className="border border-violet-200 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        placeholder="Company Location"
                        required
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    </div>

                    {/* Application Link */}
                    <div className="mb-4">
                    <label htmlFor="applyLink" className="block text-violet-800 font-semibold mb-2">
                        Application Link
                    </label>
                    <input
                        type="url"
                        id="applyLink"
                        name="applyLink"
                        className="border border-violet-200 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        placeholder="https://company.com/apply"
                        value={applyLink}
                        onChange={(e) => setApplyLink(e.target.value)}
                    />
                    </div>

                    {/* Company Info */}
                    <h3 className="text-2xl mb-5 text-teal-600 font-bold">Company Info</h3>

                    <div className="mb-4">
                    <label htmlFor="company" className="block text-violet-800 font-semibold mb-2">
                        Company Name
                    </label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        className="border border-violet-200 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        placeholder="Company Name"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                    />
                    </div>

                    <div className="mb-4">
                    <label htmlFor="company_description" className="block text-violet-800 font-semibold mb-2">
                        Company Description
                    </label>
                    <textarea
                        id="company_description"
                        name="company_description"
                        className="border border-violet-200 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        rows="4"
                        placeholder="What does your company do?"
                        value={companyDescription}
                        onChange={(e) => setCompanyDescription(e.target.value)}
                    ></textarea>
                    </div>

                    <div className="mb-4">
                    <label htmlFor="contact_email" className="block text-violet-800 font-semibold mb-2">
                        Contact Email
                    </label>
                    <input
                        type="email"
                        id="contact_email"
                        name="contact_email"
                        className="border border-violet-200 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        placeholder="Company/Recruiter Email address"
                        required
                        value={companyEmail}
                        onChange={(e) => setCompanyEmail(e.target.value)}
                    />
                    </div>

                    <div className="mb-4">
                    <label htmlFor="contact_phone" className="block text-violet-800 font-semibold mb-2">
                        Contact Phone
                    </label>
                    <input
                        type="tel"
                        id="contact_phone"
                        name="contact_phone"
                        className="border border-violet-200 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        placeholder="Company/Recruiter Contact Phone"
                        value={contactPhone}
                        required
                        onChange={(e) => setContactPhone(e.target.value)}
                    />
                    </div>

                    {/* Submit */}
                    <div>
                    <button
                        className="bg-violet-600 hover:bg-teal-500 transition-colors duration-300 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Add Job
                    </button>
                    </div>
                </form>
                </div>
            </div>
        </section>


    )
}

export default AddJob