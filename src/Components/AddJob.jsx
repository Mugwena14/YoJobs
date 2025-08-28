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

    const newJob = {
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
        <section className="bg-indigo-50">
        <div className="container m-auto max-w-2xl py-24">
            <div
            className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
            >
            <form onSubmit={handleSubmit}>
                <h2 className="text-3xl text-center font-semibold mb-6">Add Job</h2>

                <div className="mb-4">
                <label forhtml="type" className="block text-gray-700 font-bold mb-2"
                    >Job Type</label
                >
                <select
                    id="type"
                    name="type"
                    className="border rounded w-full py-2 px-3"
                    required
                    value={type}
                    onChange={(e) => {
                        setType(e.target.value)
                    }
                    }
                >   
                    <option value="">Select Job Type</option>
                    <option value="Internship">Internship</option>
                    <option value="PartTime">Part-Time</option>
                    <option value="FullTime">Full-Time</option>
                </select>
                </div>

                <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2"
                    >Job Listing Name</label
                >
                <input
                    type="text"
                    id="title"
                    name="title"
                    className="border rounded w-full py-2 px-3 mb-2"
                    placeholder="eg. Beautiful Apartment In Miami"
                    required
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                />
                </div>
                <div className="mb-4">
                <label
                    forhtml="description"
                    className="block text-gray-700 font-bold mb-2"
                    >Description</label
                >
                <textarea
                    id="description"
                    name="description"
                    className="border rounded w-full py-2 px-3"
                    rows="4"
                    placeholder="Add any job duties, expectations, requirements, etc"
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value)
                    }}
                ></textarea>
                </div>

                <div className="mb-4">
                <label forhtml="type" className="block text-gray-700 font-bold mb-2"
                    >Salary</label
                >
                <select
                    id="salary"
                    name="salary"
                    className="border rounded w-full py-2 px-3"
                    required
                    value={salary}
                    onChange={(e) => {
                        setSalary(e.target.value)
                    }}
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

                <div className='mb-4'>
                <label className='block text-gray-700 font-bold mb-2'>
                    Location
                </label>
                <input
                    type='text'
                    id='location'
                    name='location'
                    className='border rounded w-full py-2 px-3 mb-2'
                    placeholder='Company Location'
                    required
                    value={location}
                    onChange={(e) => {
                        setLocation(e.target.value)
                    }}           
                />
                </div>

                <h3 className="text-2xl mb-5">Company Info</h3>

                <div className="mb-4">
                <label forhtml="company" className="block text-gray-700 font-bold mb-2"
                    >Company Name</label
                >
                <input
                    type="text"
                    id="company"
                    name="company"
                    className="border rounded w-full py-2 px-3"
                    placeholder="Company Name"
                    value={companyName}
                    onChange={(e) => {
                        setCompanyName(e.target.value)
                    }}
                />
                </div>

                <div className="mb-4">
                <label
                    forhtml="company_description"
                    className="block text-gray-700 font-bold mb-2"
                    >Company Description</label
                >
                <textarea
                    id="company_description"
                    name="company_description"
                    className="border rounded w-full py-2 px-3"
                    rows="4"
                    placeholder="What does your company do?"
                    value={companyDescription}
                    onChange={(e) => {
                        setCompanyDescription(e.target.value)
                    }}
                ></textarea>
                </div>

                <div className="mb-4">
                <label
                    forhtml="contact_email"
                    className="block text-gray-700 font-bold mb-2"
                    >Contact Email</label
                >
                <input
                    type="email"
                    id="contact_email"
                    name="contact_email"
                    className="border rounded w-full py-2 px-3"
                    placeholder="Email address for applicants"
                    required
                    value={companyEmail}
                    onChange={(e) => {
                        setCompanyEmail(e.target.value)
                    }}
                />
                </div>
                <div className="mb-4">
                <label
                    forhtml="contact_phone"
                    className="block text-gray-700 font-bold mb-2"
                    >Contact Phone</label
                >
                <input
                    type="tel"
                    id="contact_phone"
                    name="contact_phone"
                    className="border rounded w-full py-2 px-3"
                    placeholder="Optional phone for applicants"
                    value={contactPhone}
                    onChange={(e) => {
                        setContactPhone(e.target.value)
                    }}
                />
                </div>

                <div>
                <button
                    className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
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