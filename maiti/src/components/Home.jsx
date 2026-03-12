import { useEffect, useState } from "react";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://fampay.in/blog/content/images/2021/09/image-17.png",
    "https://indiaeducation.net/wp-content/uploads/2023/08/Untitled-design-7-1024x768.jpg",
    "https://wallpaperaccess.com/full/8066764.jpg",
  ];

  // Auto-play effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="">
       <div className="bg-[#FFDAB9] py-3">
  <marquee
    behavior="scroll"
    direction="left"
    scrollamount="8"
    className="text-2xl font-bold text-[#800000] tracking-wide"
  >
    Welcome to NTPC MINING AND INDUSTRIAL TRAINING INSTITUTE  | DHENGA BARKAGAON 825311 ✨
  </marquee>
</div>

      

      {/* Carousel */}
      <div className="relative w-full rounded-lg shadow-lg mb-6">
        <img
          src={slides[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="w-full h-96 object-cover rounded-lg"
        />

        {/* Manual Navigation Buttons */}
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button
            onClick={() =>
              setCurrentSlide((prev) =>
                prev === 0 ? slides.length - 1 : prev - 1
              )
            }
            className="btn btn-circle"
          >
            ❮
          </button>
          <button
            onClick={() =>
              setCurrentSlide((prev) => (prev + 1) % slides.length)
            }
            className="btn btn-circle"
          >
            ❯
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-blue-600" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Dot Background Section with Info Boxes */}
      <div
        className="p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-3 gap-6"
        style={{
          backgroundImage: "radial-gradient(#1e3a8a 1px, transparent 1px)",
          backgroundSize: "10px 10px", // dots पास-पास
        }}
      >
        {/* Box 1 */}
       <div className="bg-gradient-to-r from-blue-900 via-blue-900 to-blue-900 p-4 rounded-lg shadow text-white">
  <h3 className="text-xl font-bold mb-2">About Us</h3>
  <p>
    Learn more about our institution, its mission, and values.
  </p>
</div>
       <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 p-4 rounded-lg shadow text-white">
  <h3 className="text-xl font-bold mb-2">About Us</h3>
  <p>
    Learn more about our institution, its mission, and values.
  </p>
</div>
       <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 p-4 rounded-lg shadow text-white">
  <h3 className="text-xl font-bold mb-2">About Us</h3>
  <p>
    Learn more about our institution, its mission, and values.
  </p>
</div>
       <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 p-4 rounded-lg shadow text-white">
  <h3 className="text-xl font-bold mb-2">About Us</h3>
  <p>
    Learn more about our institution, its mission, and values.
  </p>
</div>


        {/* Box 2 */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">Courses</h3>
          <p>Explore the wide range of technical and professional courses we offer.</p>
        </div>

        {/* Box 3 */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">Gallery</h3>
          <p>View photos of our campus, events, and student activities.</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
