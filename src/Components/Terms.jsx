import React from 'react'

const Terms = () => {
    return (
        <section className="bg-gradient-to-b from-teal-700 to-[#0A2A26] text-white py-16 px-6 md:px-16">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-white to-violet-400 bg-clip-text text-transparent">
                Terms & Conditions
                </h2>

                <div className="space-y-8 text-gray-200">
                <p>
                    Welcome to <span className="font-semibold">NextHire</span>. By accessing or using our platform, 
                    you agree to the following Terms & Conditions. Please read them carefully before using the site.
                </p>

                <div>
                    <h3 className="text-2xl font-semibold mb-2 text-white">1. Acceptance of Terms</h3>
                    <p>
                    By creating an account or using our services, you acknowledge that you have read, understood, 
                    and agreed to these Terms & Conditions.
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold mb-2 text-white">2. Use of the Platform</h3>
                    <p>
                    You agree to use NextHire only for lawful purposes. You must not misuse the platform, 
                    attempt unauthorized access, or use it in a way that harms others.
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold mb-2 text-white">3. User Accounts</h3>
                    <p>
                    You are responsible for maintaining the confidentiality of your account credentials 
                    and for all activities under your account. Notify us immediately if you suspect unauthorized use.
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold mb-2 text-white">4. Job Listings & Applications</h3>
                    <p>
                    Employers are responsible for the accuracy of job postings. Job seekers are responsible 
                    for the information provided in their applications. NextHire is not responsible for the 
                    outcomes of applications or employment decisions.
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold mb-2 text-white">5. Intellectual Property</h3>
                    <p>
                    All content on this platform, including logos, text, graphics, and software, 
                    is the property of NextHire or its licensors and may not be used without permission.
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold mb-2 text-white">6. Limitation of Liability</h3>
                    <p>
                    NextHire is not liable for any damages resulting from your use of the platform, 
                    including but not limited to lost opportunities or technical issues.
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold mb-2 text-white">7. Termination</h3>
                    <p>
                    We reserve the right to suspend or terminate your account if you violate these Terms & Conditions 
                    or misuse our platform in any way.
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold mb-2 text-white">8. Changes to Terms</h3>
                    <p>
                    We may update these Terms & Conditions at any time. Continued use of the platform 
                    after changes means you accept the updated terms.
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

export default Terms;
