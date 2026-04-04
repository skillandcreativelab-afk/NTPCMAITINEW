import React from 'react';

function IMCChairman() {
 
  const members = [
    {
      name: "Mr. Faiz Taiyab",
      designation: "HOP, NTPC PBCMP",
      role: "Chairman",
      image: "/assets/faiz.jpg", // कृपया अपने 'src/assets' फोल्डर में इमेज का नाम चेक करें
    },
    {
      name: "Shri M.K. Gupta",
      designation: "Principal, JGMTRTC, Ranchi",
      role: "Vice Chairman",
      image: "/assets/mkgupta.jpg",
    },
    {
      name: "Dr. Manish Srivastava",
      designation: "Addl. General Manager (TS)",
      role: "Member",
      image: "/assets/manish.jpg",
    },
    {
      name: "Shri Amit Kumar Asthana",
      designation: "HOD (HR), NTPC, PBCMP",
      role: "Member",
      image: "/assets/asthana.jpg",
    },
    {
      name: "Shri Kamal Kant",
      designation: "HOD (Maintenance), JGMTRTC, Ranchi",
      role: "Member",
      image: "/assets/kamalkant.jpg",
    },
    {
      name: "Shri Pankaj Dhyani",
      designation: "General Manager (LA and R&R), NTPC PBCMP",
      role: "Member Secretary from NTPC for IMC",
      image: "/assets/pankaj.jpg",
    },
    {
      name: "Amarendra Kumar",
      designation: "AGM (SSC FIN), EB",
      role: "Member",
      image: "/assets/amarendra.jpg",
    },
    {
      name: "Shri Ashutosh Mishra",
      designation: "Sr. Admin Officer, JGMTRTC, Ranchi",
      role: "Member Secretary",
      image: "/assets/ashutosh.jpg",
    }
  ];

  return (
    <div className="bg-red-50 min-h-screen font-sans">
      
      {/* --- Top Banner Section (As seen in your screenshot) --- */}
      <div 
        className="relative h-72 flex flex-col items-center justify-center text-white"
        style={{
          // ओवरले के साथ बैकग्राउंड इमेज
          backgroundImage: "linear-gradient(rgba(0, 1, 1, 0.7), rgba(0, 0, 0, 0.7)), url('public/home slide pic/welder.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3 animate-fade-in">
          IMC-Members
        </h1>
        <div className="flex items-center gap-2 text-sm font-medium">
          <span className="text-blue-400 hover:underline cursor-pointer">Home</span> 
          <span className="text-gray-400">/</span> 
          <span>Pages</span> 
          <span className="text-gray-400">/</span> 
          <span className="text-gray-300">IMC-Members</span>
        </div>
      </div>

      {/* --- Members Card Grid --- */}
      <div className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {members.map((member, index) => (
            <div 
              key={index} 
              className="flex flex-col sm:flex-row bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image Section */}
              <div className="w-full sm:w-48 h-56 sm:h-auto overflow-hidden bg-slate-200">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/200x250?text=No+Image"; }}
                />
              </div>

              {/* Info Section */}
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-2xl font-bold text-slate-800 mb-2 border-b pb-2 border-slate-100">
                  {member.name}
                </h2>
                
                <div className="mt-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 block mb-1">
                    Designation
                  </span>
                  <p className="text-sm text-slate-600 font-semibold leading-relaxed">
                    {member.designation}
                  </p>
                </div>

                <div className="mt-auto pt-4 border-t border-dotted border-slate-200">
                  <p className="text-xs text-slate-500 font-medium italic">
                    Member's IMC: <span className="text-slate-900 not-italic font-bold">{member.role}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* --- Professional Bottom Footer Badge --- */}
      <div className="flex justify-center pb-16">
        <div className="bg-white border border-slate-200 px-8 py-3 rounded-full shadow-sm flex items-center gap-3">
          <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
          <p className="text-xs font-bold text-slate-700 uppercase tracking-tighter">
            NTPC Mining Industrial Training Institute (MAITI)
          </p>
        </div>
      </div>

    </div>
  );
}

export default IMCChairman;