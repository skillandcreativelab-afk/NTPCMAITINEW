import { useEffect, useState } from "react";
import React from "react"; // React import karein Fragments ke liye
import { FaDownload, FaChevronDown, FaChevronUp, FaEnvelope, FaChalkboardTeacher } from "react-icons/fa";

export default function Courses() {
  const slides = [
    { id: 1, img: "/home slide pic/courses slide image/2.jpg", alt: "Campus View" },
    { id: 2, img: "/home slide pic/courses slide image/7.jpeg", alt: "Workshop" },
    { id: 3, img: "/home slide pic/courses slide image/i.jpeg", alt: "Students Training" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [openTrade, setOpenTrade] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const trades = [
    { name: "Electrician", description: "Comprehensive training in electrical systems, home & industrial wiring.", incharge: "Mr. Mukesh Kumar", syllabus: "/syllabus/electrician.pdf" },
    { name: "Fitter", description: "Precision fitting, industrial machine maintenance and assembly.", incharge: "Mr. Amresh Kumar", syllabus: "/syllabus/fitter.pdf" },
    { name: "Welder", description: "Advanced welding techniques including Gas, MIG, and TIG.", incharge: "Mr. Vikash Chaurasiya", syllabus: "/syllabus/welder.pdf" },
  ];

  const shortCourses = [
    { name: "Computer Basics", description: "Digital literacy, MS Office, and Internet fundamentals.", incharge: "Dablu Kumar Paswan", syllabus: "/syllabus/computer-basics.pdf" },
    { name: "Safety & First Aid", description: "Industrial safety protocols and emergency response.", incharge: "Shree Nath Shree", syllabus: "/syllabus/safety.pdf" },
    { name: "Soft Skills", description: "Personality development and professional communication.", incharge: "Shree Nath Shree", syllabus: "/syllabus/soft-skills.pdf" },
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      
      {/* 1. Hero Carousel Section */}
      <div className="relative h-[450px] w-full overflow-hidden shadow-2xl">
        {slides.map((slide, index) => (
          <div key={slide.id} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"}`}>
            <img src={slide.img} alt={slide.alt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-12">
              <h2 className="text-white text-4xl font-black tracking-tight">{slide.alt}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto py-16 px-6">
        
        {/* 2. Trade Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {trades.map((trade, index) => (
            <div key={`highlight-${index}`} className="group relative rounded-3xl overflow-hidden shadow-xl h-64 cursor-pointer">
              <img src="/home slide pic/courses slide image/3.jpg" alt={trade.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white uppercase">{trade.name}</h3>
                <div className="w-10 h-1 bg-red-500 mt-2 transition-all group-hover:w-20"></div>
              </div>
            </div>
          ))}
        </div>

        {/* 3. ITI Trades Table Section */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-200"><FaChalkboardTeacher size={24}/></div>
            <h2 className="text-3xl font-black text-slate-800">Regular ITI Trades</h2>
          </div>
          
          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-50 text-slate-500 uppercase text-xs font-bold">
                  <tr>
                    <th className="px-6 py-4">Trade Name</th>
                    <th className="px-6 py-4">Incharge</th>
                    <th className="px-6 py-4">Syllabus</th>
                    <th className="px-6 py-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {trades.map((trade, index) => (
                    // FIXED: Yahan React.Fragment use kiya hai taaki key sahi se kaam kare
                    <React.Fragment key={`trade-row-${index}`}>
                      <tr className="hover:bg-blue-50/50 transition-colors">
                        <td className="px-6 py-5 font-bold text-slate-700">{trade.name}</td>
                        <td className="px-6 py-5 text-slate-600 font-medium">{trade.incharge}</td>
                        <td className="px-6 py-5">
                          <a href={trade.syllabus} download className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800">
                            <FaDownload size={14}/> PDF
                          </a>
                        </td>
                        <td className="px-6 py-5 text-center">
                          <button onClick={() => setOpenTrade(openTrade === index ? null : index)} className="p-2 rounded-full hover:bg-white shadow-sm transition-all text-blue-600 border border-slate-200">
                            {openTrade === index ? <FaChevronUp/> : <FaChevronDown/>}
                          </button>
                        </td>
                      </tr>
                      {openTrade === index && (
                        <tr>
                          <td colSpan="4" className="bg-slate-50/50 p-6">
                            <div className="flex flex-col md:flex-row gap-8 items-center bg-white p-6 rounded-2xl shadow-sm border border-blue-100">
                              <img src="/assets/trades/training-collage.png" alt="Training" className="w-full md:w-64 h-48 object-cover rounded-xl" />
                              <div className="flex-1">
                                <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">Trade Description</span>
                                <p className="text-slate-600 mt-2 mb-4 leading-relaxed">{trade.description}</p>
                                <button className="bg-blue-600 text-white px-6 py-2 rounded-xl text-sm font-bold shadow-lg shadow-blue-100 hover:bg-blue-700">Admission Open</button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 4. Short Term Courses Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-black text-slate-800 mb-8 flex items-center gap-4">
            <span className="w-10 h-1 bg-red-600 inline-block"></span> Short Term Training
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {shortCourses.map((course, index) => (
              <div key={`short-${index}`} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl hover:shadow-blue-100 transition-all border-b-4 border-b-blue-600">
                <h3 className="text-xl font-bold text-slate-800 mb-3">{course.name}</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">{course.description}</p>
                <div className="flex items-center justify-between border-t pt-4 border-slate-50">
                   <div className="text-[10px] uppercase font-black text-slate-400">Incharge: {course.incharge}</div>
                   <a href={course.syllabus} download className="text-blue-600 hover:scale-110 transition-transform"><FaDownload/></a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Admission Incharge Section */}
        <section className="relative overflow-hidden bg-blue-900 rounded-[3rem] p-10 md:p-16 text-white shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-[2rem] overflow-hidden border-4 border-white/20 rotate-3 shadow-2xl">
              <img src="/assets/admission/admission-incharge.jpg" alt="Incharge" className="w-full h-full object-cover" />
            </div>
            <div className="text-center md:text-left">
              <span className="bg-red-600 text-[10px] font-black tracking-widest px-4 py-1 rounded-full uppercase">Contact Person</span>
              <h2 className="text-4xl md:text-5xl font-black mt-4 mb-2 tracking-tight">Shree Nath Shree</h2>
              <p className="text-blue-200 text-xl font-medium mb-6">Head of Admissions & Training Coordinator</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a href="mailto:maitiaddmision@gmail.com" className="flex items-center gap-3 bg-white text-blue-900 px-6 py-3 rounded-2xl font-bold hover:bg-blue-50 transition-all">
                  <FaEnvelope/> maitiaddmision@gmail.com
                </a>
                <button className="bg-blue-800 border border-white/20 text-white px-8 py-3 rounded-2xl font-bold hover:bg-blue-700 transition-all">
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}