import { useEffect, useState } from "react"
import JobListings from "./JobListings";
import Spinner from "./Spinner";
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../config/firebase';
import { BiJoystickButton } from "react-icons/bi";

const JobListing = () => {

    
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        const productsRef = collection(db, 'products');
        const unsub = onSnapshot(productsRef, (snapshot) => {
        const fetched = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        setJobs(fetched);
        setLoading(false); 
        }, 2000);

        return () => unsub();
    }, []);
    console.log(jobs)

    return (
        <section className="bg-teal-50 min-h-screen py-12 px-6">
            {loading ? <Spinner/> : (
                <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">
            Available Products
            </h2>

            {/* Product Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {jobs.map((job, idx) => (
                <div
                key={idx}
                className="bg-white rounded-2xl shadow-md border border-indigo-100 overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                {/* Product Image */}
                {job.productImage && (
                    <img
                    src={job.productImage}
                    alt={job.productName}
                    className="h-48 w-full object-cover"
                    />
                )}

                {/* Card Content */}
                <div className="p-5">
                    <h3 className="text-lg font-semibold text-indigo-700">
                    {job.productName}
                    </h3>
                    <p className="text-gray-600 mb-3">R{job.productPrice}</p>

                    {/* View Button */}
                    <button
                    onClick={() => setSelected(job)}
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors duration-300"
                    >
                    View
                    </button>
                </div>
                </div>
            ))}
            </div>

            {/* Modal to View More */}
            {selected && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full h-[80vh] overflow-y-auto p-6 relative">
                {/* Close/Back Button */}
                <button
                    className="absolute top-3 right-3 text-gray-500 hover:text-indigo-600 text-lg font-bold"
                    onClick={() => setSelected(null)}
                >
                    ✕
                </button>

                {/* Modal Content */}
                <h3 className="text-2xl font-bold text-indigo-700 mb-3">
                    {selected.productName}
                </h3>

                {selected.productImage && (
                    <img
                    src={selected.productImage}
                    alt={selected.productName}
                    className="rounded-xl mb-4"
                    />
                )}

                <p className="text-gray-700 mb-2">
                    <strong>Price:</strong> {selected.productPrice}
                </p>

                <p className="text-gray-700 mb-4">{selected.productDescription}</p>

                <p className="text-sm text-gray-500">
                    <strong>Seller:</strong> {selected.name} <br />
                    <strong>Location:</strong> {selected.location} <br />
                    <strong>Email:</strong> {selected.email} <br />
                    {selected.phoneNo && (
                    <span>
                        <strong>Phone:</strong> {selected.phoneNo} <br />
                    </span>
                    )}
                    {selected.whatsaapNo && (
                    <span>
                        <strong>WhatsApp:</strong> {selected.whatsaapNo}
                    </span>
                    )}
                </p>

                {/* Back Button at Bottom */}
                <div className="mt-6">
                    <button
                    onClick={() => setSelected(null)}
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors duration-300"
                    >
                    Back
                    </button>
                </div>
                </div>
            </div>
            )}
        </div>
            )}
        </section>
    )
}

export default JobListing