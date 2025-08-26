import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-[#0A2A26] text-gray-300 py-10 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo & Description */}
                <div>
                <div className="flex items-center space-x-2">
                    {/* Logo placeholder */}
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">Y</span>
                    </div>
                    <h1 className="text-white font-semibold text-lg">YoJobs</h1>
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
                    <li><a href="#" className="hover:text-white">List Jobs</a></li>
                    <li><a href="#" className="hover:text-white">View Jobs</a></li>
                    <li><a href="#" className="hover:text-white">Apply to Jobs</a></li>
                </ul>
                </div>

                {/* Product */}
                <div>
                <h2 className="text-white font-medium mb-3">Product</h2>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-white">Home</a></li>
                    <li><a href="#" className="hover:text-white">About Us</a></li>
                    <li><a href="#" className="hover:text-white">Get Started</a></li>
                </ul>
                </div>

                {/* Policy */}
                <div>
                <h2 className="text-white font-medium mb-3">Policy</h2>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer