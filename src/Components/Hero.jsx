import Cards from "./Cards"

const Hero = () => {
    return (
<div>
  {/* <!-- Hero --> */}
  <section className="relative bg-teal-700 py-32 mb-10 overflow-hidden">
    {/* Background image */}
    

    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-teal-700/80 to-teal-900/95"></div>

    {/* Content */}
    <div className="relative max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
      <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl drop-shadow-lg animate-fadeInUp">
        Discover and sell items digitally
      </h1>
      <p className="mt-6 text-xl text-gray-100 max-w-2xl animate-fadeInUp delay-150">
        All you need. All in one place.
      </p>
    </div>
  </section>

  <Cards />
</div>



    )
}

export default Hero