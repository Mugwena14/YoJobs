import React from 'react'

const Privacy = () => {
    return (
        <section className="bg-gradient-to-b from-teal-700 to-[#0A2A26] text-white py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-white to-violet-400 bg-clip-text text-transparent">
            Privacy Policy
            </h2>

            <div className="space-y-8 text-gray-200">
            <p>
                At <span className="font-semibold">NextHire</span>, your privacy is important to us. 
                This Privacy Policy explains how we collect, use, and protect your personal information 
                when you use our platform.
            </p>

            <div>
                <h3 className="text-2xl font-semibold mb-2 text-white">1. Information We Collect</h3>
                <p>
                We may collect personal details such as your name, email address, contact information, 
                and any other information you provide when creating an account or applying for jobs.
                </p>
            </div>

            <div>
                <h3 className="text-2xl font-semibold mb-2 text-white">2. How We Use Your Information</h3>
                <p>
                Your information is used to provide our services, improve the platform, connect you 
                with employers or job seekers, and send important updates related to your account.
                </p>
            </div>

            <div>
                <h3 className="text-2xl font-semibold mb-2 text-white">3. Sharing of Information</h3>
                <p>
                We do not sell or rent your data. Information may be shared only with employers 
                when you apply for jobs, or as required by law.
                </p>
            </div>

            <div>
                <h3 className="text-2xl font-semibold mb-2 text-white">4. Data Security</h3>
                <p>
                We take appropriate security measures to protect your data. However, no method 
                of transmission over the internet is completely secure, and we cannot guarantee 
                absolute safety.
                </p>
            </div>

            <div>
                <h3 className="text-2xl font-semibold mb-2 text-white">5. Your Rights</h3>
                <p>
                You have the right to access, update, or delete your personal information at any time. 
                Please contact us if you wish to exercise these rights.
                </p>
            </div>

            <div>
                <h3 className="text-2xl font-semibold mb-2 text-white">6. Changes to This Policy</h3>
                <p>
                We may update this Privacy Policy from time to time. Any changes will be reflected 
                on this page with an updated effective date.
                </p>
            </div>

            <p className="text-sm text-gray-300 mt-8">
                Effective Date: {new Date().toLocaleDateString()}
            </p>
            </div>
        </div>
        </section>
    );
};

export default Privacy;
