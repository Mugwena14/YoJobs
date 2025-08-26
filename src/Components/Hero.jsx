import Cards from "./Cards"

const Hero = () => {
    return (
        <div>
            {/* <!-- Hero --> */}
        <section className="bg-teal-700 text-transparent py-20 mb-4"
        >
            <div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
            >
                <div className="text-center">
                <h1
                    className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
                    
                >
                    Secure your dream job
                </h1>
                <p className="my-4 text-xl text-white">
                    Find work you love. Connect, Apply & Grow.
                </p>
                </div>
            </div>
        </section>
        <Cards/>
        
        </div>
    )
}

export default Hero