import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaExternalLinkAlt,
  FaBullhorn,
  FaArrowRight,
  FaRocket,
  FaGlobeAmericas,
  FaGraduationCap,
  FaQuoteLeft,
  FaLaptopCode,
} from "react-icons/fa";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Pehle se maujood imports ke saath inhein bhi jodein
import { FaCalendarAlt } from "react-icons/fa";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showMore, setShowMore] = useState(false); // Vision toggle state
  // Home function ke start mein
  const [openLightbox, setOpenLightbox] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const eventGallery = [
    {
      date: "31-03-2024",
      title: "VBU Images Visit",
      img: "/home slide pic/building.jpeg",
    },
    {
      date: "15-04-2024",
      title: "Main Campus View",
      img: "/home slide pic/main building.jpeg",
    },
    {
      date: "20-05-2024",
      title: "Welding Workshop",
      img: "/home slide pic/welder.jpeg",
    },
    {
      date: "12-06-2024",
      title: "Industrial Visit",
      img: "/home slide pic/building.jpeg",
    },
  ];

  const slides = [
    "/home slide pic/building.jpeg",
    "/home slide pic/main building.jpeg",
    "/home slide pic/welder.jpeg",
  ];

  const notices = [
    "Second Merit List for 2026 is Out! Check now.",
    "Annual Sports Meet starting from next Monday.",
    "Placement Drive: NTPC Apprentice hiring soon.",
    "Workshop Maintenance: Labs closed this Sunday.",
    "New AI Course modules added to Fitter Trade.",
    "Uniform and ID Card distribution in Admin Block.",
    "Scholarship portal e-Kalyan is now active.",
  ];

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      offset: 120,
      easing: "ease-out-quart",
    });

    const timer = setTimeout(() => setShowModal(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="bg-[#f8fafc] overflow-hidden font-sans w-full">
      {/* CSS for Vertical Marquee Animation */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee-vertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-vertical {
          animation: marquee-vertical 15s linear infinite;
        }
        .animate-vertical:hover {
          animation-play-state: paused;
        }
        @keyframes marquee-horizontal {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: 200%;
          animation: marquee-horizontal 20s linear infinite;
        }
      `,
        }}
      />

      {/* --- Admission Popup --- */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-blue-100"
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 bg-slate-100 hover:bg-red-500 hover:text-white text-slate-500 p-2 rounded-full transition-all z-10"
            >
              ✕
            </button>
            <div className="bg-gradient-to-br from-blue-700 to-blue-900 p-8 text-center text-white">
              <h2 className="text-2xl font-black uppercase tracking-tight mb-2">
                नामांकन सूचना 2026
              </h2>
              <div className="inline-block px-4 py-1 bg-yellow-400 text-blue-900 text-xs font-black rounded-full uppercase tracking-widest">
                Admission Open
              </div>
            </div>
            <div className="p-8 text-center">
              <p className="text-slate-600 text-lg font-medium mb-6">
                NTPC MAITI में{" "}
                <span className="text-blue-600 font-bold underline decoration-2">
                  फिटर, इलेक्ट्रीशियन एवं वेल्डर
                </span>{" "}
                के आवेदन आमंत्रित हैं।
              </p>
              <Link
                to="/Apply"
                onClick={() => setShowModal(false)}
                className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-xl shadow-xl transition-all text-xl font-bold"
              >
                अभी आवेदन करें <FaArrowRight />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* --- Hero Section --- */}
      <div className="relative w-full h-[400px] md:h-[650px] overflow-hidden shadow-lg">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${i === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
          >
            <img src={s} alt="Slide" className="w-full h-full object-cover" />

            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/30 to-transparent flex items-center px-6 md:px-20">
              <div className="text-white max-w-3xl" data-aos="fade-right">
                <span className="bg-red-600 px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-block">
                  Govt. Certified ITI
                </span>

                <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight uppercase italic tracking-tighter">
                  Skill India <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
                    Mission.
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-xl font-medium">
                  Empowering youth with industry-ready technical skills at NTPC
                  Barkagaon.
                </p>
                <div className="flex gap-4">
                  <Link
                    to="/Apply"
                    className="bg-blue-600 hover:bg-white hover:text-blue-900 px-8 py-4 rounded-xl font-bold transition-all shadow-xl"
                  >
                    {" "}
                    Apply Now{" "}
                  </Link>
                  <Link
                    to="/About"
                    className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 px-8 py-4 rounded-xl font-bold transition-all"
                  >
                    {" "}
                    Learn More{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- Horizontal Marquee --- */}
      <div className="bg-blue-950 py-4 overflow-hidden border-y border-white/10">
        <div className="animate-marquee text-lg font-bold text-white flex gap-20">
          <span className="flex items-center gap-4">
            <span className="text-yellow-400">●</span> WELCOME TO NTPC MITI
            BARKAGAON
          </span>
          <span className="flex items-center gap-4">
            <span className="text-yellow-400">●</span> ADMISSION OPEN FOR
            SESSION 2026-28
          </span>
          <span className="flex items-center gap-4">
            <span className="text-yellow-400">●</span> TOP PLACEMENTS IN MINING
            SECTOR
          </span>
        </div>
      </div>

      {/* --- Job & Training Section --- */}
      {/* --- CAREER PATHWAY HEADER WITH BLURRED BG IMAGE --- */}
      <div className="max-w-8xl mx-auto px-6 py-20 bg-gradient-to-br from-[#0a0642] via-[#c2ebf8] to-[#fecaca] border-y border-red-100 shadow-inner">
        <div
          className="relative lg:mx-[30px] mb-16 rounded-3xl py-12 px-6 border border-white/20 shadow-[0_20px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_rgba(1,0,1,0.1)] transition-all duration-500 text-center group overflow-hidden"
          data-aos="fade-up"
        >
          {/* 1. BLURRED IMAGE LAYER */}
          <div
            className="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-110"
            style={{
              backgroundImage: `url('public/about us.jpeg')`, // Yahan apni image ka path dalein
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(12px)", // Image ko blur karne ke liye
              transform: "scale(1.1)", // Taaki edges white na dikhein
            }}
          ></div>

          {/* 2. SOFT OVERLAY (Taaki text clear dikhe) */}
          <div className="absolute inset-0 bg-white/40 z-0 backdrop-blur-sm"></div>

          {/* 3. CONTENT (Relative z-10 taaki blur ke upar rahe) */}
          <div className="relative z-10">
            <h2 className="text-sm font-black text-blue-700 uppercase tracking-[0.4em] mb-4 drop-shadow-sm">
              Career Pathway
            </h2>
            <h3 className="text-6xl md:text-5xl font-black text-slate-900 uppercase italic tracking-tighter group-hover:text-blue-800 transition-colors drop-shadow-sm">
              Job & Training Portals
            </h3>
            <div className="h-2 w-24 bg-red-600 mx-auto mt-6 rounded-full shadow-md group-hover:w-40 transition-all duration-500"></div>
          </div>
        </div>
        

        {/* --- GRIDS SECTION (SAME AS BEFORE) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Apprenticeship",
              icon: <FaRocket />,
              desc: "NAPS/NATS programs in PSUs like Railways and NTPC.",
              headerColor: "text-blue-900",
              iconBg: "bg-orange-50 text-orange-600",
              accent: "bg-orange-500",
              links: [
                {
                  name: "NAPS Portal",
                  url: "https://www.apprenticeshipindia.gov.in/",
                },
                { name: "NATS Portal", url: "https://nats.education.gov.in/" },
              ],
            },
            {
              title: "Industrial Jobs",
              icon: <FaGlobeAmericas />,
              desc: "Direct placements in Mining and Power sectors.",
              headerColor: "text-blue-900",
              iconBg: "bg-blue-50 text-blue-600",
              accent: "bg-blue-600",
              links: [
                { name: "NCS Portal", url: "https://www.ncs.gov.in/" },
                { name: "NTPC Careers", url: "https://careers.ntpc.co.in/" },
              ],
            },
            {
              title: "Skill Upgradation",
              icon: <FaGraduationCap />,
              desc: "Certifications from Skill India and MSDE programs.",
              headerColor: "text-blue-900",
              iconBg: "bg-emerald-50 text-emerald-600",
              accent: "bg-emerald-600",
              links: [
                {
                  name: "Skill India Digital",
                  url: "https://www.skillindiadigital.gov.in/",
                },
                { name: "MSDE Portal", url: "https://www.msde.gov.in/" },
              ],
            },
          ].map((box, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative bg-white p-10 rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-blue-500 hover:shadow-[0_10px_40px_rgba(15,23,52,0.5)] transition-all duration-500 flex flex-col justify-between group overflow-hidden"
            >
              <div>
                <div
                  className={`w-12 h-1.5 ${box.accent} rounded-full mb-8 opacity-60 group-hover:w-20 transition-all duration-500`}
                ></div>
                <div
                  className={`w-16 h-16 rounded-2xl ${box.iconBg} flex items-center justify-center text-3xl mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500`}
                >
                  {box.icon}
                </div>
                <h3
                  className={`text-2xl font-black ${box.headerColor} mb-4 uppercase tracking-tight group-hover:text-blue-600 transition-colors`}
                >
                  {box.title}
                </h3>
                <p className="text-slate-500 font-medium mb-10 leading-relaxed">
                  {box.desc}
                </p>
              </div>
              <div className="space-y-3 relative z-10">
                {box.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl bg-slate-50 hover:bg-blue-600 text-slate-700 hover:text-white transition-all duration-300 border border-slate-100 font-bold text-sm tracking-wide group/btn shadow-sm"
                  >
                    {link.name}{" "}
                    <FaArrowRight className="text-xs group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>


       {/* --- PROFESSIONAL COMBINED NEWS MARQUEE (ENGLISH) --- */}
{/* --- FIXED NEWS MARQUEE (NO ERROR CODE) --- */}
<div className="max-w-7xl mx-auto px-6 mb-12">
  <div className="relative group overflow-hidden bg-gradient-to-r from-[#002b49] via-[#004e82] to-[#002b49] py-4 rounded-2xl shadow-xl border-l-8 border-yellow-400">
    
    {/* Updates Label */}
    <div className="absolute left-0 top-0 bottom-0 px-5 bg-yellow-400 flex items-center z-20 rounded-r-xl shadow-lg">
      <span className="text-blue-900 font-black italic uppercase tracking-tighter text-xs flex items-center gap-2">
        <span className="w-2 h-2 bg-red-600 rounded-full animate-ping"></span>
        Updates
      </span>
    </div>

    {/* TICKER CONTENT - Fixed with currentTarget */}
    <marquee 
      behavior="scroll" 
      direction="left" 
      scrollamount="7" 
      onMouseOver={(e) => e.currentTarget.stop()} // Fixed: target ki jagah currentTarget
      onMouseOut={(e) => e.currentTarget.start()} // Fixed: target ki jagah currentTarget
      className="cursor-pointer"
    >
      <div className="flex items-center gap-20">
        <span className="text-white font-black uppercase italic tracking-widest text-sm flex items-center gap-4">
          <span className="bg-red-600 text-white px-2 py-0.5 rounded not-italic text-[10px] font-black">LIVE</span>
          🚀 2026 CAREER HUB: Attempt Online Mock Tests, Check Latest Notice Board Results, and Access Quick Links for e-Kalyan & NCVT MIS Portals!
        </span>

        <span className="text-white font-black uppercase italic tracking-widest text-sm flex items-center gap-4">
          <span className="bg-green-500 text-white px-2 py-0.5 rounded not-italic text-[10px] font-black">NEW</span>
          ⚡ STAY UPDATED: All-in-one access for Technical Training, Scholarship Updates, and Government Portals — Click to Explore Below!
        </span>
      </div>
    </marquee>

    <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#002b49] to-transparent z-10 pointer-events-none"></div>
  </div>
</div>
      {/* --- Main Container: Sab kuch iske andar rahega --- */}
      <div className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* 1. Quick Access Box */}
        <div
          className="bg-white rounded-[2.5rem] overflow-hidden border border-red-50 shadow-lg"
          data-aos="fade-up"
        >
          <div className="bg-blue-900 p-6 flex items-center gap-4 text-white">
            <FaExternalLinkAlt className="text-yellow-400" />
            <h2 className="text-xl font-black uppercase tracking-tighter">
              Quick Access
            </h2>
          </div>
          <div className="p-6 space-y-2">
            {[
              { n: "NCVT MIS Portal", u: "https://www.ncvtmis.gov.in/" },
              { n: "BHARAT SKILL", u: "https://bharatskills.gov.in/" },
              { n: "eKalyan Scholarship", u: "https://ekalyan.cgg.gov.in/" },
              { n: "National Scholarship", u: "https://scholarships.gov.in/" },
            ].map((l, i) => (
              <a
                key={i}
                href={l.u}
                target="_blank"
                className="flex items-center justify-between p-4 rounded-xl hover:bg-red-50 text-slate-700 font-bold hover:text-red-700 transition-all"
              >
                {l.n} <FaArrowRight className="text-[10px]" />
              </a>
            ))}
          </div>
        </div>

        {/* 2. Online Mock Test Box */}
        <div
          className="bg-white rounded-[2.5rem] overflow-hidden border border-blue-50 shadow-lg"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="bg-green-700 p-6 flex items-center gap-4 text-white">
            <div className="bg-white/20 p-2 rounded-lg">
              <FaLaptopCode className="text-yellow-400 text-xl" />
            </div>
            <div>
              <h2 className="text-xl font-black uppercase tracking-tighter leading-none">
                Online Mock Test
              </h2>
              <p className="text-[10px] uppercase font-bold opacity-80 mt-1">
                Practice for CBT Exams
              </p>
            </div>
          </div>
          <div className="p-6 space-y-2">
            {[
              {
                n: "NIMI Online Mock Test",
                u: "https://s1.nimimocktest.in/",
                desc: "Official NIMI Platform",
              },
              {
                n: "NCVT Online Mock Test",
                u: "https://www.ncvtonline.com/2020/05/iti-mock-test-all-trade-online-test-in.html",
                desc: "All Trades Practice",
              },
              {
                n: "Bharat Skills Portal",
                u: "https://bharatskills.gov.in/",
                desc: "Study Material & Tests",
              },
              {
                n: "CBT Exam Practice",
                u: "https://www.ncvtmis.gov.in/",
                desc: "Main MIS Portal",
              },
            ].map((test, i) => (
              <a
                key={i}
                href={test.u}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl hover:bg-blue-50 border border-transparent hover:border-blue-100 transition-all duration-300"
              >
                <div className="flex flex-col">
                  <span className="text-slate-800 font-black text-sm group-hover:text-blue-700 transition-colors">
                    {test.n}
                  </span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase">
                    {test.desc}
                  </span>
                </div>
                <div className="bg-slate-100 group-hover:bg-blue-600 group-hover:text-white p-2 rounded-lg transition-all">
                  <FaArrowRight className="text-[10px]" />
                </div>
              </a>
            ))}
          </div>
          <div className="px-6 pb-6">
            <div className="bg-yellow-50 border border-yellow-100 p-3 rounded-xl text-center">
              <p className="text-[11px] font-bold text-yellow-800">
                📢 Students are advised to practice daily!
              </p>
            </div>
          </div>
        </div>

        {/* 3. Notice Board Box */}
        <div
          className="bg-white rounded-[2.5rem] overflow-hidden border border-red-50 shadow-lg group/notice"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Link
            to="/Notice"
            className="bg-red-700 p-6 flex items-center justify-between text-white hover:bg-red-800 transition-colors"
          >
            <div className="flex items-center gap-4">
              <FaBullhorn className="animate-pulse text-yellow-300" />
              <h2 className="text-xl font-black uppercase tracking-tighter items-center">
                Notice Board
              </h2>
            </div>
            <FaArrowRight className="text-sm" />
          </Link>
          <div className="p-6 h-[280px] overflow-hidden relative bg-gradient-to-b from-red-50/20 to-transparent cursor-pointer">
            <div className="animate-vertical space-y-4">
              {[...notices, ...notices].map((n, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-xl border-l-4 border-red-600 shadow-sm font-bold text-slate-800 text-sm hover:bg-red-50 transition-colors"
                >
                  {n}
                </div>
              ))}
            </div>
          </div>
          
        </div>
       

        {/* 4. Stats Box (Yeh automatically niche aayega agar 3 se zyada boxes hain) */}
        <div
          className="bg-slate-900 rounded-[2.5rem] p-10 text-white flex flex-col justify-center shadow-xl relative overflow-hidden lg:col-span-3"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h2 className="text-center text-red-500 font-black uppercase text-xs tracking-[0.4em] mb-10">
            NTPC MAITI STATUS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 relative z-10 text-center">
            {[
              { n: "1.2k+", t: "Graduates" },
              { n: "15+", t: "Workshops" },
              { n: "30+", t: "Partners" },
              { n: "95%", t: "Placement" },
            ].map((s, i) => (
              <div key={i}>
                <h4 className="text-3xl font-black">{s.n}</h4>
                <p className="text-[10px] text-slate-400 uppercase font-black">
                  {s.t}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- Chairman Message Section --- */}
      <div className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Leadership Vision Card */}
          <div data-aos="fade-up" className="h-full">
            <h2 className="text-4xl font-black text-slate-900 mb-8 uppercase italic tracking-tighter">
              Leadership Vision.
            </h2>
            <div className="bg-slate-50 p-8 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col h-full">
              <div className="flex flex-col md:flex-row gap-8 items-center mb-6">
                <img
                  src="/home slide pic/faiz taiyab.jpeg"
                  alt="Chairman"
                  className="w-40 h-40 rounded-3xl object-cover shadow-lg border-4 border-white"
                />
                <div>
                  <FaQuoteLeft className="text-blue-600/20 text-4xl mb-3" />
                  <p className="text-slate-600 font-medium italic mb-4 leading-relaxed">
                    "Transforming youth into skilled industrial professionals."
                  </p>
                  <h4 className="text-xl font-black text-blue-900 uppercase">
                    Faiz Taiyab
                  </h4>
                  <p className="text-red-600 font-black text-xs uppercase tracking-widest">
                    HOP, NTPC Barkagaon
                  </p>
                </div>
                <p></p>
              </div>
              NTPC Barkagaon is committed to excellence in technical education.
              Our vision is to empower students with practical knowledge and
              industrial ethics. NTPC Barkagaon is committed to excellence in
              technical education. Our vision is to empower students with
              practical knowledge and industrial ethics.
              <motion.div
                initial={false}
                animate={{
                  height: showMore ? "auto" : 0,
                  opacity: showMore ? 1 : 0,
                }}
                className="overflow-hidden"
              >
                <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-200 pt-4">
                  Greetings and a very warm welcome to NTPC MAITI ITI’s website
                  In this era of Globalization of education the obvious focus is
                  on the quality of education. There is no single yardstick of
                  quality. A good educational institution strives continuously
                  for sustenance and enhancement of quality in every field of
                  its activity. As NTPC MAITI works diligently to realise its
                  mission of providing the best learning opportunities for
                  academic excellence to students, it continues to provide
                  students with the basics of technical knowledge coupled with
                  high values to achieve given below objectives : To upgrade the
                  skill level of youths of Project affected area to enhance
                  their employability. To create opportunities for
                  self-employment. To prepare the youth for upcoming industries
                  in Jharkhand State as well as in the country. To inculcate
                  industrial work culture among the trainees. To develop
                  trainees to become catalysts in bringing a positive change in
                  their societies. NTPC recreated a culture of learn with joy,
                  and enable students to acquire skills in trades such as
                  electrician, fitter and welder that provide a foundation for
                  the next phases of their careers and lives. NTPC MAITI stands
                  committed to the practice of academic excellence and
                  encourages , Innovation and learning’s Mr. Faiz Taiyab, HOP,
                  NTPC PBCMP
                </p>
              </motion.div>
              <button
                onClick={() => setShowMore(!showMore)}
                className="mt-6 text-blue-600 font-black uppercase text-xs tracking-widest flex items-center gap-2 group"
              >
                {showMore ? "Show Less" : "Read Full Vision"}
                <FaArrowRight
                  className={`transition-transform ${showMore ? "-rotate-90" : "group-hover:translate-x-1"}`}
                />
              </button>
            </div>
          </div>

          {/* HR Excellence Card */}
          <div
            className="relative rounded-[2.5rem] p-10 text-white shadow-xl flex flex-col justify-between h-full lg:mt-20 overflow-hidden group"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
              <img
                src="public\ISTD\ISTD  National Conference 2026 Brochure_page-0001.jpg" // Yahan apni ISTD wali image ka sahi path dalein
                alt="ISTD Training"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Dark Overlay taaki text clear dikhe */}
              <div className="absolute inset-0 bg-blue-650/80 backdrop-blur-[2px]"></div>
            </div>

            {/* Content Layer (z-10 ensures text stays on top) */}
            <div className="relative z-10 bg-gradient-to-br from-slate-900 via-blue-900 to-black border-2 border-rose-500/50 rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(225,29,72,0.2)] backdrop-blur-sm transition-all duration-500 hover:shadow-rose-500/30">
              <h3 className="text-2xl font-black mb-4 text-yellow-400 uppercase italic">
                ISTD<br></br>
                HR Excellence
              </h3>
              <p className="text-blue-50 text-lg mb-8 leading-relaxed font-medium ">
                We follow the highest standards of ISTD and industrial training
                to ensure global readiness.
              </p>
            </div>

            <div className="relative z-10">
              <Link
                to="/Istdpdf"
                className="inline-flex items-center gap-3 bg-white text-blue-900 px-8 py-3 rounded-xl font-black uppercase tracking-widest hover:bg-yellow-400 transition-all shadow-lg text-sm w-fit"
              >
                Read More <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* ======================================================== */}
      {/* NEW SECTION: VICE CHAIRMAN'S MESSAGE (Top Trades ke Uper) */}
      {/* ======================================================== */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div
          className="bg-gradient-to-br from-[#0f172a] via-[#cce2f7] to-[#1b3f14] rounded-[3rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-slate-700/50 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden group"
          data-aos="fade-up"
        >
          <div className="w-full lg:w-1/3 flex flex-col items-center">
            <div className="relative group">
              <img
                src="/home slide pic/faiz taiyab.jpeg" // Yahan Vice Chairman ki image ka path dalein
                alt="Vice Chairman"
                className="w-64 h-80 rounded-3xl object-cover shadow-2xl border-8 border-white"
              />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-xl font-bold shadow-xl whitespace-nowrap">
                Vice Chairman
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase italic tracking-tighter border-l-8 border-red-600 pl-6">
              Vice Chairman's Message
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8 italic">
              "I deem it to be a matter of immense pleasure and honour for me to
              address you all through the website of NTPC Mining and industrial
              Training Institute..."
            </p>

            {/* DaisyUI Modal Trigger Button */}
            <label
              htmlFor="vc_message_modal"
              className="btn btn-primary bg-green-700 border-none px-10 rounded-2xl text-white font-black uppercase tracking-widest shadow-xl hover:scale-105 transition-all"
            >
              Read Full Message
            </label>
          </div>
        </div>

        {/* --- DAISYUI MODAL (A4 STYLE) --- */}
        <input type="checkbox" id="vc_message_modal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle backdrop-blur-md z-[500]">
          <div className="modal-box w-11/12 max-w-4xl bg-yellow-00 p-0 rounded-3xl overflow-hidden border-none shadow-2xl h-[90vh]">
            {/* Modal Header */}
            <div className="bg-slate-900 p-6 flex justify-between items-center text-white sticky top-0 z-50">
              <h3 className="text-xl font-black uppercase italic tracking-widest">
                Vice Chairman's Message
              </h3>
              <label
                htmlFor="vc_message_modal"
                className="btn btn-sm btn-circle bg-white/20 border-none text-white hover:bg-red-600"
              >
                ✕
              </label>
            </div>

            {/* Modal Body (A4 Style Content) */}
            <div className="p-10 md:p-16 bg-white overflow-y-auto h-full scrollbar-hide">
              <div className="max-w-2xl mx-auto border-t-8 border-blue-600 pt-10">
                {/* Header Image in Content */}
                <div className="flex flex-col md:flex-row gap-10 items-start mb-12">
                  <img
                    src="/home slide pic/faiz taiyab.jpeg"
                    className="w-48 h-56 rounded-2xl object-cover shadow-lg border-4 border-slate-50"
                    alt="VC"
                  />
                  <div>
                    <FaQuoteLeft className="text-blue-100 text-6xl absolute -z-10" />
                    <p className="text-slate-800 font-bold text-xl leading-relaxed mt-6 relative z-10">
                      "Engineering skill is the most powerful tool to bring
                      desirable changes in our personality and society."
                    </p>
                  </div>
                </div>

                {/* Main Text Body */}
                <div className="prose prose-slate max-w-none text-slate-700 text-lg leading-loose space-y-6 text-justify font-medium">
                  <p>
                    I deem it to be a matter of immense pleasure and honour for
                    me to address you all through the website of NTPC Mining and
                    industrial Training Institute. It is indeed very heartening
                    to witness that the ITI has carved a name for itself in the
                    academic scenario of the region. Engineering skill is the
                    most powerful tool to bring desirable changes in our
                    personality and also to bring positive changes in our
                    society.
                  </p>

                  <p>
                    NTPC Mining and Industrial Training Institute (MAITI) is a
                    great initiative of the National Thermal Power Corporation
                    Limited, Government of India Enterprises in collaboration
                    with the “Jharkhand Government Tool Room, Ranchi” a society
                    under Department of Industries Government of Jharkhand.
                    Which has been launched to empower the local youth of the
                    Project affected area of Barkagaon with skill sets which
                    make them more employable and more productive in their work
                    environment. Our NTPC MAITI is chaired by the Head of
                    project of NTPC Coal mining project barkagaon.
                  </p>

                  <p>
                    The NTPC MAITI has incredible training infrastructure among
                    the other ITIs of Jharkhand. The expert officials of
                    Jharkhand Government Tool Room, Ranchi has constantly
                    reviewed, examine, support and developing the training
                    infrastructure up to the higher standards. Through this
                    skill development centre ITI management want to fulfill
                    dreams of people & we want to do it in a structured way,
                    taking all youth together.
                  </p>

                  <p>
                    NTPC MAITI is working with full dedication towards
                    fulfilling the prime vision of Ministry of skill development
                    and entrepreneurship to providing skilled manpower to our
                    country for the development of domestic growth as well as
                    for the self-employment. ITI management has to create
                    structures and mechanisms to nurture youngsters, enabling
                    them to find employment. This initiative is not merely to
                    fill gap of skill development in far flung area of
                    Jharkhand, but to bring a sense of self-confidence among the
                    youth of Jharkhand.
                  </p>

                  <p className="pb-10 font-bold border-b border-slate-100">
                    I earnestly hope and trust that, my esteemed academicians
                    and budding technocrats will work with sincerity, honesty
                    and dedication and thereby contribute to make this world a
                    better place to live in.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <label className="modal-backdrop" htmlFor="vc_message_modal">
            Close
          </label>
        </div>
      </div>
      {/* --- END NEW SECTION --- */}
      {/* --- 5. LATEST EVENTS GALLERY SECTION --- */}
      {/* --- 5. LATEST EVENTS GALLERY SECTION (FULL WIDTH SKY BG) --- */}
      {/* --- 5. LATEST EVENTS GALLERY SECTION (FULL WIDTH SKY BG) --- */}
      <section
        className="relative w-full py-20 overflow-hidden"
        style={{
          background: `linear-gradient(to bottom, #74b9ff 0%, #b3e0ff 70%, #f8fafc 100%)`,
        }}
      >
        {/* --- REALISTIC CLOUDS LAYER --- */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-[10%] left-[-5%] w-[400px] h-[120px] bg-white rounded-full blur-[80px] opacity-60 shadow-[200px_50px_100px_white]"></div>
          <div className="absolute top-[15%] right-[-5%] w-[500px] h-[150px] bg-white rounded-full blur-[90px] opacity-50 shadow-[-150px_40px_100px_white]"></div>
          <div className="absolute bottom-[20%] left-[30%] w-[600px] h-[100px] bg-white rounded-full blur-[100px] opacity-40"></div>
        </div>

        <div className="relative z-5 max-w-7x2 mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase italic tracking-tighter drop-shadow-md">
              Latest <span className="text-blue-900">Events.</span>
            </h2>
            <div className="w-24 h-2 bg-blue-900 mx-auto mt-4 rounded-full shadow-lg"></div>
          </div>

          <div className="relative group">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              navigation={{ nextEl: ".gallery-next", prevEl: ".gallery-prev" }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="!pb-16"
            >
              {eventGallery.map((event, i) => (
                <SwiperSlide key={i}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer group/card border border-white/40"
                    // YAHAN CLICK KA FUNCTION HAI
                    onClick={() => {
                      setPhotoIndex(i);
                      setOpenLightbox(true);
                    }}
                  >
                    <img
                      src={event.img}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                    />

                    <div className="absolute bottom-0 left-0 w-full h-[100px] bg-[#002b49]/95 flex flex-col justify-center px-8 transition-all duration-500 ease-in-out group-hover/card:h-full group-hover/card:bg-[#002b49]/85 group-hover/card:items-center group-hover/card:text-center">
                      <div className="flex items-center gap-1 mb-2 group-hover/card:justify-center">
                        <FaCalendarAlt className="text-yellow-400 text-xs" />
                        <span className="text-white/70 font-black text-[10px] uppercase tracking-widest">
                          {event.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-black text-white uppercase leading-tight group-hover/card:text-2xl group-hover/card:text-yellow-400 transition-colors">
                        {event.title}
                      </h3>
                      <div className="mt-6 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500">
                        <span className="px-6 py-2 border-2 border-white/20 text-white text-xs font-black uppercase tracking-tighter hover:bg-white hover:text-blue-900 rounded-lg whitespace-nowrap">
                          View Full Image
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button className="gallery-prev absolute left-[-15px] top-1/2 -translate-y-1/2 z-30 bg-white shadow-2xl p-4 rounded-full text-blue-950 hover:bg-blue-950 hover:text-white transition-all hidden xl:block">
              <FaArrowRight className="rotate-180" />
            </button>
            <button className="gallery-next absolute right-[-15px] top-1/2 -translate-y-1/2 z-30 bg-white shadow-2xl p-4 rounded-full text-blue-950 hover:bg-blue-950 hover:text-white transition-all hidden xl:block">
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* --- YE LIGHTBOX COMPONENT HONA ZAROORI HAI --- */}
        {openLightbox && (
          <Lightbox
            open={openLightbox}
            close={() => setOpenLightbox(false)}
            index={photoIndex}
            slides={eventGallery.map((e) => ({ src: e.img }))}
          />
        )}
      </section>

      {/* ======================================================== */}
      {/* NEW SECTION: WELCOME TO NTPC MAITI (Just below VC Message) */}
      {/* ======================================================== */}
      <div className="bg-slate-50 py-24 px-6 border-t border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Side: Workshop Image */}
          <div className="w-full lg:w-1/2" data-aos="fade-right">
            <div className="relative group">
              <img
                src="/home slide pic/welder.jpeg" // Aap apni image path yahan dalein (e.g., workshop image)
                alt="NTPC MITI Workshop"
                className="w-full h-[500px] object-cover rounded-[3rem] shadow-2xl border-4 border-white transition-transform duration-500 group-hover:scale-[1.02]"
              />
              {/* Badge Overlay */}
              <div className="absolute top-8 left-8 bg-blue-600 text-white px-6 py-3 rounded-2xl font-black uppercase tracking-tighter shadow-xl">
                Skill Excellence
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 uppercase italic tracking-tighter leading-tight">
              Welcome to <br />
              <span className="text-blue-600">NTPC MAITI</span>
            </h2>

            <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed">
              <p>
                NTPC Ltd. (A government of India Undertaking), engaged in
                establishing, running power generation plants all over India to
                cater to the needs of power requirement of the total installed
                capacity...
              </p>

              <div className="bg-white p-6 rounded-2xl border-l-8 border-yellow-400 shadow-sm">
                <p className="text-slate-800 font-bold italic">
                  "The NTPC MAITI is awarded with 3.04 star rating by
                  Directorate General of Training New Delhi."
                </p>
              </div>

              <p>
                We offer one year and two year NCVT approved courses since 2015
                in Fitter, Welder and Electrician with 100% placement records.
              </p>
            </div>

            {/* Read More Button leading to About Page */}
            <div className="mt-12">
              <Link
                to="/About"
                className="inline-flex items-center gap-4 bg-cyan-500 hover:bg-cyan-600 text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest transition-all shadow-[0_10px_20px_rgba(6,182,212,0.3)] hover:scale-105 active:scale-95"
              >
                Read More <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* --- END WELCOME SECTION --- */}

      {/* --- Top Trades --- */}
      {/* --- OUR TOP TRADES SECTION (FIXED WITH LINK) --- */}
      <section
        className="relative w-full py-12 overflow-hidden"
        style={{
          background: `linear-gradient(to bottom, #e0f2fe 0%, #ffffff 100%)`,
        }}
      >
        {/* BACKGROUND CLOUDS */}
        <div className="absolute top-0 left-0 w-full h-40 pointer-events-none z-0">
          <div className="absolute top-[-20px] left-[10%] w-[300px] h-[100px] bg-white rounded-full blur-[60px] opacity-80"></div>
          <div className="absolute top-[-10px] right-[5%] w-[400px] h-[120px] bg-white rounded-full blur-[80px] opacity-70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-10" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 uppercase italic tracking-tighter">
              Our <span className="text-blue-700">Top Trades.</span>
            </h2>
            <div className="w-16 h-1.5 bg-blue-700 mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                t: "Electrician",
                img: "/trade_picture/electrician.jpeg",
                dur: "2 Years NCVT",
              },
              {
                t: "Fitter",
                img: "/trade_picture/fitter.jpeg",
                dur: "2 Years NCVT",
              },
              {
                t: "Welder",
                img: "/trade_picture/welder.jpeg",
                dur: "1 Year NCVT",
              },
            ].map((course, i) => (
              // AB YE LINK BAN GAYA HAI, YE ZAROOR KAAM KAREGA
              <Link to="/courses" key={i} className="block group">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="relative h-[420px] rounded-[2.5rem] overflow-hidden shadow-lg cursor-pointer border border-white/60"
                >
                  {/* Trade Image */}
                  <img
                    src={course.img}
                    alt={course.t}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* BLUE OVERLAY */}
                  <div className="absolute bottom-0 left-0 w-full h-[90px] bg-[#002b49]/95 flex flex-col justify-center px-6 transition-all duration-500 ease-in-out group-hover:h-full group-hover:bg-[#002b49]/85 group-hover:items-center group-hover:text-center">
                    <span className="text-yellow-400 font-bold text-[10px] uppercase tracking-widest mb-1">
                      {course.dur}
                    </span>

                    <h3 className="text-xl font-black text-white uppercase leading-tight group-hover:text-2xl group-hover:text-yellow-400 transition-colors italic">
                      {course.t}
                    </h3>

                    {/* View Info Button */}
                    <div className="mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 w-full max-w-[200px]">
                      <div className="py-2 border border-white/30 text-white text-[10px] font-black uppercase tracking-widest rounded-xl text-center">
                        Click to View Details
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;
