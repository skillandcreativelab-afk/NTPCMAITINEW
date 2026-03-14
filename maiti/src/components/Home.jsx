import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaBullhorn } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  const [showViceFull, setShowViceFull] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://fampay.in/blog/content/images/2021/09/image-17.png",
    "https://indiaeducation.net/wp-content/uploads/2023/08/Untitled-design-7-1024x768.jpg",
    "https://wallpaperaccess.com/full/8066764.jpg",
  ];

  // Auto-play effect
  // AOS animation
useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);

// Auto carousel
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
          Welcome to NTPC MINING AND INDUSTRIAL TRAINING INSTITUTE | DHENGA
          BARKAGAON 825311 ✨
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
                prev === 0 ? slides.length - 1 : prev - 1,
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
      ></div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {/* Box 1 */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 p-6 rounded-xl shadow-lg text-white transform hover:-translate-y-2 hover:shadow-2xl transition duration-300 cursor-pointer">
          <h3 className="text-xl font-bold mb-3">About Us</h3>
          <p className="text-sm opacity-90">
            Learn more about our institution, its mission, and values.
          </p>
        </div>

        {/* Box 2 */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 p-6 rounded-xl shadow-lg text-white transform hover:-translate-y-2 hover:shadow-2xl transition duration-300 cursor-pointer">
          <h3 className="text-xl font-bold mb-3">Our Mission</h3>
          <p className="text-sm opacity-90">
            We focus on providing quality technical education and skill
            development.
          </p>
        </div>

        {/* Box 3 */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 p-6 rounded-xl shadow-lg text-white transform hover:-translate-y-2 hover:shadow-2xl transition duration-300 cursor-pointer">
          <h3 className="text-xl font-bold mb-3">Vision</h3>
          <p className="text-sm opacity-90">
            Empowering youth with technical skills for better employment
            opportunities.
          </p>
        </div>
      </div>

      {/* ...................................container of notic and quick................................................... */}

      <div className="flex flex-col md:flex-row w-full gap-12 justify-center items-start mx-auto max-w-6xl mt-10 ">
        {/* Quick Links */}
        <div className="bg-white h-[380px] w-[600px] border rounded-xl hover:shadow-2xl transition duration-300 shadow-[0_10px_25px_rgba(30,64,175,0.6)]">
          <div className="border-b px-4 py-3 bg-blue-900 rounded-t-xl">
            <h2 className="text-xl font-semibold text-white">Quick Links</h2>
          </div>

          <ul className="p-4 space-y-3 text-blue-700">
            <li className="flex items-center justify-between hover:bg-blue-50 p-2 rounded transition cursor-pointer">
              <a
                href="https://xn--o1bna6ezc1cxc.xn--11b7cb3a6a.xn--h2brj9c/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center w-full"
              >
                <span>Directorate General of Training</span>
                <FaExternalLinkAlt />
              </a>
            </li>
            <li className="flex items-center justify-between hover:bg-blue-50 p-2 rounded transition cursor-pointer">
              <a
                href="https://ncvtmis.gov.in/pages/home.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center w-full"
              >
                <span>NCVT MIS Portal</span>
                <FaExternalLinkAlt />
              </a>
            </li>

            <li className="flex items-center justify-between hover:bg-blue-50 p-2 rounded transition cursor-pointer">
              <a
                href="https://bharatskills.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center w-full"
              >
                <span>BHARAT SKILL</span>
                <FaExternalLinkAlt />
              </a>
            </li>

            <li className="flex items-center justify-between hover:bg-blue-50 p-2 rounded transition cursor-pointer">
              <a
                href="https://nimi.gov.in/web/index.php"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center w-full"
              >
                <span>NIMI</span>
                <FaExternalLinkAlt />
              </a>
            </li>

            <li className="flex items-center justify-between hover:bg-blue-50 p-2 rounded transition cursor-pointer">
              <a
                href="https://bharatskills.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center w-full"
              >
                <span>eKalyan</span>
                <FaExternalLinkAlt />
              </a>
            </li>

            <li className="flex items-center justify-between hover:bg-blue-50 p-2 rounded transition cursor-pointer">
              <a
                href="https://scholarships.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center w-full"
              >
                <span>National Scholarship Portal</span>
                <FaExternalLinkAlt />
              </a>
            </li>
          </ul>
        </div>

        {/* Notice Board */}
        <div className="bg-white border rounded-xl md h-[380px] w-[600px] hover:shadow-2xl transition duration-300 shadow-[0_10px_25px_rgba(30,64,175,0.6)]">
          <div className="border-b px-4 py-3 bg-red-800 rounded-t-xl">
            <h2 className="text-xl font-semibold text-white">Notice Board</h2>
          </div>

          <div className="p-4 h-[250px] overflow-hidden">
            <marquee
              direction="up"
              scrollamount="3"
              className="space-y-4 text-gray-700"
            >
              <div className="flex gap-2">
                <FaBullhorn className="text-red-600 mt-1" />
                <p>SECOND MERIT LIST FOR ADMISSION SESSION 2023-24-25.</p>
              </div>

              <div className="flex gap-2">
                <FaBullhorn className="text-red-600 mt-1" />
                <p>Admission form extended till 10.07.2023</p>
              </div>

              <div className="flex gap-2">
                <FaBullhorn className="text-red-600 mt-1" />
                <p>Electrician Trade New Batch Starting Soon</p>
              </div>

              <div className="flex gap-2">
                <FaBullhorn className="text-red-600 mt-1" />
                <p>Practical Training Workshop Updated</p>
              </div>
            </marquee>
          </div>
        </div>
        <div className="bg-blue-900 text-white py-10 flex justify-center border rounded-[5%] shadow-[0_10px_25px_rgba(30,64,175,0.6)] mt-7">
          <div className="w-96 grid grid-cols-2 gap-8 text-center">
            <div>
              <h2 className="text-4xl font-bold">500+</h2>
              <p className="mt-2">Students Trained</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">10+</h2>
              <p className="mt-2">Courses</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">25+</h2>
              <p className="mt-2">Expert Trainers</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">100%</h2>
              <p className="mt-2">Practical Training</p>
            </div>
          </div>
        </div>
      </div>

      {/* ......................................Notice Board................................... */}

      {/* Messages Section */}
      <div className="mt-14 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">
          Messages
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Chairman Message */}
          <div className="bg-white border rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">
              Chairman's Message
            </h3>

            <div className="flex flex-col md:flex-row gap-5 items-start">
              <img
                src="https://as2.ftcdn.net/v2/jpg/03/64/21/11/1000_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                alt="Chairman"
                className="w-40 h-40 object-cover rounded-lg shadow-md transform hover:scale-105 transition duration-300"
              />

              <div className="text-sm leading-relaxed text-gray-700">
                <p>
                  Greetings and a very warm welcome to NTPC MAITI ITI’s website.
                  In this era of globalization of education the obvious focus is
                  on the quality of education. There is no single yardstick of
                  quality.
                </p>

                <ul className="list-disc ml-5 mt-3 space-y-1">
                  <li>Upgrade the skill level of project affected youth.</li>
                  <li>Create opportunities for self-employment.</li>
                  <li>Prepare youth for upcoming industries.</li>
                  <li>Develop industrial work culture among trainees.</li>
                  <li>Bring positive change in society.</li>
                </ul>

                <p className="mt-3">
                  NTPC encourages students to learn with joy and develop
                  technical skills such as electrician, fitter and welding.
                </p>

                <p className="mt-4 font-semibold text-gray-900">
                  Mr. Faiz Taiyab <br />
                  HOP <br />
                  NTPC BCBMP
                </p>
              </div>
            </div>
          </div>

          {/* ISTD Conference Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition duration-300">
            <div className="h-[260px] overflow-hidden">
              <img
                src="/ISTD/ISTD  National Conference 2026 Brochure_page-0001.jpg"
                alt="Conference"
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                ISTD: Conference
              </h3>

              <p className="text-gray-700 text-sm leading-relaxed">
                The top environmental issues are selfishness, greed and apathy
                to deal with them. There is a need for behavioral and cultural
                transformation in the human resource management space.
              </p>

              <Link
                to="/Istdpdf"
                className="inline-block mt-5 bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-900 transition"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Vice Chairman Message */}

      <div className="mt-14 px-6 max-w-7xl mx-auto">
        <div className="border rounded-lg shadow-md bg-gray-50">
          {/* Title */}
          <div className="border-b bg-gray-200 px-4 py-2">
            <h2 className="text-lg font-semibold text-gray-800">
              Vice Chairman's Message
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-6 p-5">
            {/* Text */}
            <div className="text-sm text-gray-700 leading-relaxed flex-1">
              <p>
                I deem it to be a matter of immense pleasure and honor for me to
                address you all through the website of NTPC Mining and
                Industrial Training Institute.
              </p>

              {showViceFull && (
                <>
                  <p className="mt-3">
                    It is indeed very heartening to witness that the ITI has
                    carved a name for itself in the academic scenario of the
                    region. Engineering skill is the most powerful tool to bring
                    desirable changes in our personality and also to bring
                    positive changes in our society.
                  </p>

                  <p className="mt-3">
                    NTPC Mining and Industrial Training Institute (MAITI) is a
                    great initiative of the National Thermal Power Corporation
                    Limited, Government of India Enterprises in collaboration
                    with the Jharkhand Government Tool Room, Ranchi.
                  </p>
                </>
              )}

              {/* Button */}
              <button
                onClick={() => setShowViceFull(!showViceFull)}
                className="mt-4 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-800 transition"
              >
                {showViceFull ? "Read Less" : "Read More..."}
              </button>
            </div>

            {/* Image */}
            <div className="w-40">
              <img
                src="vice chairman.jpeg"
                alt="Vice Chairman"
                className="w-full h-auto border"
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-gray-100 py-16 mt-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-teal-600 tracking-wider">
              ABOUT US
            </h2>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div>
              <img
                src="about us.jpeg"
                alt="Workshop Training"
                className="rounded-lg shadow-lg w-full"
              />
            </div>

            {/* Right Text */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Welcome to NTPC MAITI
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                NTPC Ltd. (A Government of India Undertaking) is engaged in
                establishing and running power generation plants across India.
                NTPC Mining and Industrial Training Institute (MAITI) was
                established to provide skill development and technical training
                to project affected people and unemployed youth of the region.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                The institute offers NCVT approved courses such as Electrician,
                Fitter and Welder with a strong focus on practical training and
                industry skills.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                NTPC MAITI has been recognized for its quality training and has
                achieved top rankings among ITIs in the district and state.
              </p>

              <Link
                to="/about"
                className="bg-teal-500 text-white px-6 py-3 rounded hover:bg-teal-700 transition"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Courses Categories Section */}

      {/* Courses Categories Section */}

     <div className="bg-gray-100 py-20">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <h2 className="text-3xl font-bold text-cyan-600 tracking-widest">
        COURSES CATEGORIES
      </h2>
    </div>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Electrician */}
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1500"
        className="relative group overflow-hidden rounded-xl shadow-xl transform hover:-translate-y-4 transition duration-500"
      >

        <img
          src="/trade_picture/electrician.jpeg"
          alt="Electrician"
          className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500"></div>

        {/* Text + Button */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition duration-500">

          <h3 className="text-white text-3xl font-bold mb-3">
            Electrician
          </h3>

          <p className="text-gray-200 text-sm mb-4">
            2 Year NCVT Course
          </p>

          <button className="bg-cyan-500 hover:bg-cyan-700 text-white px-5 py-2 rounded-md transition">
            View Details
          </button>

        </div>

      </div>


      {/* Fitter */}
      <div
        data-aos="zoom-in-up"
        data-aos-delay="200"
        data-aos-duration="1500"
        className="relative group overflow-hidden rounded-xl shadow-xl transform hover:-translate-y-4 transition duration-500"
      >

        <img
          src="/trade_picture/fitter.jpeg"
          alt="Fitter"
          className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition duration-500">

          <h3 className="text-white text-3xl font-bold mb-3">
            Fitter
          </h3>

          <p className="text-gray-200 text-sm mb-4">
            2 Year NCVT Course
          </p>

          <button className="bg-cyan-500 hover:bg-cyan-700 text-white px-5 py-2 rounded-md transition">
            View Details
          </button>

        </div>

      </div>


      {/* Welder */}
      <div
        data-aos="zoom-in-up"
        data-aos-delay="400"
        data-aos-duration="1500"
        className="relative group overflow-hidden rounded-xl shadow-xl transform hover:-translate-y-4 transition duration-500"
      >

        <img
          src="/trade_picture/welder.jpeg"
          alt="Welder"
          className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition duration-500">

          <h3 className="text-white text-3xl font-bold mb-3">
            Welder
          </h3>

          <p className="text-gray-200 text-sm mb-4">
            1 Year NCVT Course
          </p>

          <button className="bg-cyan-500 hover:bg-cyan-700 text-white px-5 py-2 rounded-md transition">
            View Details
          </button>

        </div>

      </div>

    </div>
  </div>
</div>
    </section>
  );
}

export default Home;
