import { Link } from "react-router-dom";

function About() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-teal-600 tracking-wide">
            ABOUT US
          </h2>

          <div className="w-24 h-1 bg-teal-500 mx-auto mt-3 rounded"></div>
        </div>

        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="overflow-hidden rounded-xl shadow-xl">
            <img
              src="/about us.jpeg"
              alt="Workshop Training"
              className="w-full h-full object-cover hover:scale-110 transition duration-500"
            />
          </div>

          {/* Text */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              About Institute
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>NTPC Ltd.</strong> (A Government of India Undertaking) is
              engaged in establishing and running power generation plants all
              over India to meet the country's growing power requirements. NTPC
              has also entered the coal mining sector to support its energy
              production activities.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              In this context NTPC started the Pakri Barwadih coal mining
              project near Barkagaon, District Hazaribagh, Jharkhand. Under its
              Corporate Social Responsibility (CSR) and Skill Development
              initiatives, NTPC established{" "}
              <strong>
                NTPC Mining and Industrial Training Institute (MAITI)
              </strong>{" "}
              at Dhenga, Barkagaon.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The institute provides technical training to project affected
              people and unemployed youth from nearby areas, creating skilled
              manpower for industries.
            </p>
          </div>
        </div>

        {/* Institute Details */}
        <div
          className="mt-14 bg-white p-10 rounded-xl 
shadow-[0_10px_25px_rgba(220,38,38,0.3)] 
hover:shadow-[0_20px_40px_rgba(220,38,38,0.6)] 
hover:-translate-y-1 transition-all duration-300 
border-t-4 border-red-600"
        >
          <h3 className="text-2xl font-bold text-red-700 mb-6 border-b pb-2">
            Institute Details
          </h3>

          <p className="text-gray-700 leading-relaxed mb-4 hover:text-gray-900 transition">
            As per the rules of the Directorate General of Training (DGT), there
            should be an IMC as the governing body of the institute according to
            the MOU between NTPC and Jharkhand Government Tool Room, Ranchi. The
            IMC committee consists of equal members from NTPC and Jharkhand
            Government Tool Room and is headed by a Chairman nominated by NTPC.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4 hover:text-gray-900 transition">
            The name of the institute is
            <strong>
              {" "}
              “NTPC-MAITI Barkagaon Private Industrial Training Institute”
            </strong>
            located at Barkagaon, Hazaribagh.
          </p>

          <p className="text-gray-700 leading-relaxed hover:text-gray-900 transition">
            The total land area of the institute is
            <strong> 1.36 Acres </strong> with a built-up area of
            <strong> 5400 Sq. meters.</strong>
          </p>
        </div>
        {/* Mission Vision Quality Section */}

        <div className="mt-20">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-teal-600">
              MISSION, VISION & QUALITY POLICY
            </h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto mt-3"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              {/* Mission */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Mission
              </h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                This institute aims to facilitate top-notch technical education
                and develop skilled manpower for industry. The academy focuses
                on quality technical education, intensive classroom teaching,
                technical visits, seminars, workshops and research activities to
                enhance the technical excellence of students.
              </p>

              {/* Vision */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Vision
              </h3>

              <p className="text-gray-700 leading-relaxed">
                To upgrade the institute as a world class premium vocational
                training institute with excellent infrastructure, advanced
                training standards and strong industry partnership, developing
                globally competitive skilled workforce and entrepreneurs.
              </p>
            </div>

            {/* Right Image */}
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="about.jpeg"
                alt="Training Workshop"
                className="w-full hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          {/* Quality Policy */}

          <div className="mt-14 bg-white p-8 rounded-lg shadow">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Quality Policy
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              Growth of skill development is very important for the youth of
              India. As per the present scenario there is huge demand for
              industrial manpower. NTPC MAITI aims to develop highly skilled
              technical manpower through structured training programs.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              NTPC Limited in collaboration with Jharkhand Government Tool Room,
              Ranchi established NTPC-MAITI Barkagaon Private Industrial
              Training Institute at Dhenga, Barkagaon in Hazaribagh district to
              provide industrial training in three trades: Electrician, Welder
              and Fitter.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              To ensure quality training and competency of students, the
              institute follows the standards of NCVT, DGT and QCI accreditation
              framework aligned with international benchmarks.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The accreditation process is based on facilitative and
              consultative mechanisms supported by an online system enabling
              institutes to complete applications, self-assessment and
              infrastructure compliance.
            </p>
          </div>
        </div>

        {/* Trades Section */}
        {/* Trades Section */}

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Trades Offered
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-7 rounded-xl shadow-[0_10px_25px_rgba(220,38,38,0.4)] hover:shadow-[0_15px_35px_rgba(220,38,38,0.7)] hover:-translate-y-2 transition duration-300">
              <h4 className="text-xl font-bold text-red-600 mb-3">
                Electrician Trade
              </h4>

              <p className="text-gray-600 leading-relaxed">
                2 year course with 1+1 unit focused on electrical installation,
                maintenance and industrial electrical systems.
              </p>
            </div>
            <div className="bg-white p-7 rounded-xl shadow-[0_10px_25px_rgba(220,38,38,0.4)] hover:shadow-[0_15px_35px_rgba(220,38,38,0.7)] hover:-translate-y-2 transition duration-300">
              <h4 className="text-xl font-bold text-green-900 mb-3">
                Fitter Trade
              </h4>

              <p className="text-gray-600 leading-relaxed">
                2 year course with 1+1 unit focusing on mechanical fitting and
                industrial maintenance skills.
              </p>
            </div>

            <div className="bg-white p-7 rounded-xl shadow-[0_10px_25px_rgba(220,38,38,0.4)] hover:shadow-[0_15px_35px_rgba(220,38,38,0.7)] hover:-translate-y-2 transition duration-300">
              <h4 className="text-xl font-bold text-blue-600 mb-3">
                Welder Trade
              </h4>

              <p className="text-gray-600 leading-relaxed">
                1 year course with 1+1 unit covering arc welding, gas welding
                and fabrication techniques.
              </p>
            </div>
          </div>
        </div>
        {/* Facilities */}

        {/* Facilities */}

        <div className="mt-20 bg-gray-50 p-10 rounded-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-red-700">
              Training Facilities
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mt-3 rounded"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-[0_10px_25px_rgba(220,38,38,0.4)] hover:shadow-[0_15px_35px_rgba(147,51,234,0.7)] hover:-translate-y-2 transition duration-300 text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                Welding Lab
              </h3>

              <p className="text-gray-600 mt-3">
                Advanced welding machines and practical training facility.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-[0_10px_25px_rgba(220,38,38,0.4)] hover:shadow-[0_15px_35px_rgba(220,38,38,0.7)] hover:-translate-y-2 transition duration-300 text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                Electrical Lab
              </h3>

              <p className="text-gray-600 mt-3">
                Practical electrical training with industrial equipment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-[0_10px_25px_rgba(220,38,38,0.4)] hover:shadow-[0_15px_35px_rgba(220,38,38,0.7)] hover:-translate-y-2 transition duration-300 text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                Mechanical Workshop
              </h3>

              <p className="text-gray-600 mt-3">
                Hands-on mechanical training for fitter trade.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-[0_10px_25px_rgba(220,38,38,0.4)] hover:shadow-[0_15px_35px_rgba(220,38,38,0.7)] hover:-translate-y-2 transition duration-300 text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                Smart Classroom
              </h3>

              <p className="text-gray-600 mt-3">
                Modern classroom with digital learning facilities.
              </p>
            </div>
          </div>
        </div>

       {/* Accreditation */}

<div className="mt-16 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 
text-white p-12 rounded-xl 
shadow-[0_10px_30px_rgba(220,38,38,0.5)] 
hover:shadow-[0_20px_50px_rgba(220,38,38,0.8)] 
transition duration-300 text-center">

  <h3 className="text-3xl font-bold mb-5 tracking-wide">
    Accreditation & Future Growth
  </h3>

  <p className="max-w-3xl mx-auto text-gray-200 leading-relaxed mb-8">
    The institute is currently in the process of accreditation from the
    Directorate General of Training (DGT), Government of India and
    affiliation from NCVT for further upgradation and introduction of
    new skill development courses in the future.
  </p>

  {/* Accreditation Badges */}

  <div className="flex justify-center gap-6 flex-wrap">

    <div className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition">
      DGT Approved Process
    </div>

    <div className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition">
      NCVT Affiliation
    </div>

    <div className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition">
      Future Skill Programs
    </div>

  </div>

</div>
      </div>
    </section>
  );
}

export default About;
