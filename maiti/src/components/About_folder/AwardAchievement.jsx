import React from 'react';

const AwardAchievement = () => {
  const internationalPlacements = [
    { name: "Arun Raj", position: "Technical Trainee", company: "Jindal Saw Gulf LLC (UAE)", salary: "1200 UAE Dirham/month", img: "/trainees/arun.jpg" },
    { name: "Gopal Kr. Dangi", position: "Technical Trainee", company: "Jindal Saw Gulf LLC (UAE)", salary: "1100 UAE Dirham/month", img: "/trainees/gopal.jpg" },
    { name: "Sumit Kumar", position: "Technical Trainee", company: "Jindal Saw Gulf LLC (UAE)", salary: "1100 UAE Dirham/month", img: "/trainees/sumit.jpg" },
    { name: "Sandip Kumar", position: "Technical Trainee", company: "Jindal Saw Gulf LLC (UAE)", salary: "1100 UAE Dirham/month", img: "/trainees/sandip.jpg" },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans pb-20">
      {/* 1. HERO SECTION */}
      <div className="relative h-[350px] bg-slate-900 flex items-center justify-center overflow-hidden">
        <img 
          src="/about.jpeg" 
          className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale" 
          alt="Campus"
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-[1000] text-white tracking-tighter uppercase italic">
            Hall of <span className="text-blue-500 text-glow">Fame</span>
          </h1>
          <p className="text-slate-400 mt-4 font-bold tracking-[0.3em] uppercase">Honoring Excellence & Global Success</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        
        {/* 2. DGT STAR RANKING CARD */}
        <section className="bg-white rounded-[2.5rem] shadow-2xl border border-blue-100 p-8 md:p-12 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 bg-blue-600 rounded-3xl flex items-center justify-center text-white text-5xl shadow-xl shadow-blue-200">
              ⭐
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-4">DGT Star Ranking</h2>
              <p className="text-slate-600 leading-relaxed text-lg italic">
                Director General of Training (DGT) has Conducted Grading Of Total 12,352 ITIs across India. 
                <span className="text-blue-600 font-black px-2">NTPC-MITI Barkagaon</span> 
                scored <strong className="text-slate-900 underline decoration-blue-500 underline-offset-4">3.34 out of 5 points</strong>, 
                securing the <strong className="text-slate-900">7th Rank in Jharkhand</strong> out of 250 ITIs.
              </p>
            </div>
          </div>
        </section>

        {/* 3. INTERNATIONAL PLACEMENTS (Horizontal Grid) */}
        <div className="mb-12 flex justify-between items-end px-4">
          <div>
            <h3 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Global <span className="text-blue-600">Impact</span></h3>
            <p className="text-slate-400 font-bold uppercase text-xs tracking-widest mt-2">Placement in Foreign Countries</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {internationalPlacements.map((trainee, idx) => (
            <div key={idx} className="group bg-white rounded-3xl border border-slate-200 p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-400">
              <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700">
                <img src={trainee.img} alt={trainee.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="text-xl font-black text-slate-800 uppercase">{trainee.name}</h4>
              <p className="text-blue-600 text-xs font-bold uppercase mb-4 tracking-wider">{trainee.company}</p>
              <div className="pt-4 border-t border-slate-100 flex flex-col gap-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Annual Package</span>
                <span className="text-sm font-black text-slate-700">{trainee.salary}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 4. CHAMPION SECTION (Modern Split Layout) */}
        <section className="bg-slate-900 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          <div className="lg:w-1/3 bg-blue-600 p-12 flex flex-col justify-center text-white">
            <span className="text-xs font-black tracking-[0.3em] uppercase opacity-70 mb-2">Trade Achiever</span>
            <h3 className="text-4xl font-black uppercase leading-none mb-6 italic">Champion of MITI</h3>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <p className="text-2xl font-black">Rahul Kumar Vishwakarma</p>
              <p className="opacity-80 font-bold uppercase text-xs tracking-widest mt-1">Trade: Welder | Session: 2019-20</p>
            </div>
          </div>
          
          <div className="lg:w-2/3 p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
            <div className="bg-white rounded-2xl p-4 shadow-xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <img src="/news_cutout.jpg" className="w-full rounded-lg" alt="News Achievement" />
              <p className="mt-4 text-center text-slate-400 text-[10px] font-bold uppercase">Featured in Dainik Bhaskar</p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-xl -rotate-3 hover:rotate-0 transition-transform duration-500">
              <img src="/certificate.jpg" className="w-full rounded-lg" alt="Certificate" />
              <p className="mt-4 text-center text-slate-400 text-[10px] font-bold uppercase">Official Certification</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AwardAchievement;