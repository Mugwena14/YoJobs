import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

    const today = new Date().getFullYear();

    return (
        <footer className="bg-[#0A2A26] text-gray-300 py-10 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo & Description */}
                <div>
                <div className="flex items-center space-x-2">
                    {/* Logo placeholder */}
                    <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">Y</span>
                    </div>
                    <h1 className="text-white font-semibold text-lg">Jobs</h1>
                </div>
                <p className="mt-3 text-sm leading-relaxed">
                    YoJobs is a free modern job platform that connects employers with talented professionals, 
                    making it easier to find the right job or hire the right candidate.
                </p>
                </div>

                {/* Features */}
                <div>
                <h2 className="text-white font-medium mb-3">Features</h2>
                <ul className="space-y-2 text-sm">
                    <Link to="/add-jobs" className="hover:text-white">List Jobs</Link>
                    <Link to="/jobs" className="hover:text-white">View Jobs</Link>
                    <Link to="/jobs" className="hover:text-white">Apply for Jobs</Link>
                </ul>
                </div>

                {/* Product */}
                <div>
                <h2 className="text-white font-medium mb-3">Product</h2>
                <ul className="space-y-2 text-sm">
                    <Link to="/home" className="hover:text-white">Home</Link>
                    <Link to="/about" className="hover:text-white">About Us</Link>
                    <Link to="/jobs" className="hover:text-white">Get Started</Link>
                </ul>
                </div>

                {/* Policy */}
                <div>
                <h2 className="text-white font-medium mb-3">Policy</h2>
                <ul className="space-y-2 text-sm">
                    <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
                    <Link to="/terms" className="hover:text-white">Terms & Conditions</Link>
                </ul>
                </div>
            </div>
            <div className="border-t border-gray-300 mt-8 text-center pt-5">
                <p>&copy;{today}. All rights reserved | Founder - Makhubele Langavi Clyde</p>
            </div>
        </footer>
    )
}

export default Footer