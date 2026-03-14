import { Link } from "react-router-dom";

function About() {
  return (
    <section className="p-6 bg-base-100 rounded-lg shadow-md my-4">
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
                src="/about us.jpeg"
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
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                The institute offers NCVT approved courses such as Electrician,
                Fitter and Welder with strong practical training.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                NTPC MAITI has achieved top rankings among ITIs in the district
                and state.
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
    </section>
  );
}

export default About;