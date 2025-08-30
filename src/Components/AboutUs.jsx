import React from 'react'

const AboutUs = () => {
    return (
        <section className="bg-gradient-to-b from-teal-700 via-violet-800 to-[#0A2A26] text-white py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-violet-400 bg-clip-text text-transparent">
            About Us
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-gray-200">
            At <span className="font-semibold">NextHire</span>, we believe that the right job can change a life, 
            and the right candidate can transform a company. Our mission is to connect 
            talented individuals with opportunities that inspire growth, innovation, and success.  
            </p>
            <p className="text-lg leading-relaxed mb-8 text-gray-200">
            Whether you’re a job seeker looking to kickstart your career or an employer searching 
            for the perfect fit, YoJobs provides a seamless platform built with simplicity, 
            reliability, and modern technology at its core.  
            </p>
            <p className="text-lg leading-relaxed text-gray-200">
            Together, let’s shape the future of work — one opportunity at a time.
            </p>
        </div>
        </section>
    );
};

export default AboutUs;

