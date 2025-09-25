import React from 'react'

const AboutUs = () => {
    return (
        <section className="bg-gradient-to-b from-teal-700 to-[#0A2A26] text-white py-16 px-6 md:px-16">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-violet-400 bg-clip-text text-transparent">
                    About LoopKart
                </h2>
                <p className="text-lg leading-relaxed mb-8 text-gray-200">
                    Welcome to your go-to free marketplace demo — a platform designed to
                    simplify buying and selling between everyday users. Whether you're listing
                    a product you no longer need or browsing for that hidden gem to be passed
                    on, I have made it possible by letting the two parties chat before one
                    commits.
                </p>
                <p className="text-lg leading-relaxed mb-8 text-gray-200">
                    This version is a demo of what's to come. In the upcoming update, we're
                    adding powerful features like product deletion, but not just for anyone.
                    Only the original uploader will have the authority to remove their listed
                    items, ensuring secure and fair control.
                </p>
                <p className="text-lg leading-relaxed text-gray-200">
                    To manage authentication while it's still in development, all listed
                    products will automatically disappear after 30 days. This keeps the
                    platform tidy and protects users as we fine-tune those account-based
                    permissions. <span className="font-semibold">Happy trade!</span>
                </p>
            </div>

        </section>
    );
};

export default AboutUs;

