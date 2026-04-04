import React from 'react';
import { useNavigate } from 'react-router-dom';

const INFRA_DATA = [
  { id: 'el-w', title: "Electrician Workshop", cat: "Practical", icon: "⚡", img: "/trade_picture/electrician_wrk.jpg", desc: "Advanced power systems and motor-control training center." },
  { id: 'el-t', title: "Electrician Theory", cat: "Theory", icon: "📚", img: "/trade_picture/electrician_theory.jpg", desc: "Smart classroom for electrical engineering fundamentals." },
  { id: 'fi-w', title: "Fitter Workshop", cat: "Practical", icon: "🛠️", img: "/trade_picture/fitter.jpg", desc: "Precision machining and heavy fabrication unit." },
  { id: 'fi-t', title: "Fitter Theory", cat: "Theory", icon: "📐", img: "/trade_picture/fitter_theory.jpg", desc: "Core mechanical engineering and technical drawing center." },
  { id: 'we-w', title: "Welder Shop", cat: "Practical", icon: "🔥", img: "/trade_picture/welder.jpg", desc: "MIG/TIG and Arc welding specialized booths." },
  { id: 'we-t', title: "Welder Theory", cat: "Theory", icon: "🔬", img: "/trade_picture/welder_theory.jpg", desc: "Metallurgy and welding technology study center." },
  { id: 'it-l', title: "ICT / Computer Lab", cat: "IT", icon: "💻", img: "/trade_picture/it_lab.jpg", desc: "High-speed digital literacy and COPA training hub." },
  { id: 'dr-h', title: "Drawing Hall", cat: "Design", icon: "✏️", img: "/trade_picture/drawing.jpg", desc: "Professional engineering drawing and blueprint hall." },
  { id: 'ad-o', title: "Administrative Office", cat: "Admin", icon: "🏛️", img: "/about.jpeg", desc: "The executive hub for NTPC-MITI operations." },
];

const Infrastructure = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F1F5F9] text-slate-900 font-sans selection:bg-blue-100">
      
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        
        <div className="relative z-10">
          <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.2em] text-blue-700 uppercase bg-blue-100/50 rounded-full border border-blue-200">
            NTPC-MAITI Campus
          </div>
          <h1 className="text-5xl md:text-8xl font-[1000] tracking-tighter uppercase leading-none text-slate-900">
            Our <span className="text-blue-600">Facilities</span>
          </h1>
        </div>
      </section>

      {/* 2. ENHANCED CARD GRID */}
      <section className="max-w-[1400px] mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {INFRA_DATA.map((item) => (
            <div 
              key={item.id}
              onClick={() => navigate(`/infrastructure/${item.id}`)}
              className="group relative h-[500px] w-full bg-white rounded-[2.5rem] overflow-hidden cursor-pointer border border-slate-200 hover:border-blue-500 transition-all duration-500 shadow-md hover:shadow-2xl hover:-translate-y-3"
            >
              {/* Top Image Section */}
              <div className="h-[55%] overflow-hidden relative">
                <img 
                  src={item.img} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 rounded-xl bg-white/95 backdrop-blur text-slate-900 text-[10px] font-black uppercase tracking-widest shadow-lg">
                    {item.cat}
                  </span>
                </div>
              </div>

              {/* Bottom Content Section with Background Styling */}
              <div className="h-[45%] p-8 flex flex-col justify-between relative bg-white overflow-hidden">
                
                {/* Subtle Card Background Pattern (Industrial Ghosting) */}
                <div className="absolute -right-4 -bottom-4 opacity-[0.03] text-9xl font-black pointer-events-none italic select-none">
                  {item.id.toUpperCase()}
                </div>

                {/* Light Gradient Overlay for the Content Area */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/30 to-slate-50/50 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-2xl shadow-inner group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-[900] leading-tight tracking-tight uppercase text-slate-800 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="relative z-10 flex items-center justify-between pt-6 border-t border-slate-100">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase">Status</span>
                    <span className="text-xs font-bold text-green-600 flex items-center gap-1">
                       <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Fully Functional
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 shadow-xl shadow-blue-200">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CTA SECTION */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="bg-white border-2 border-slate-200 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-[80px] -mr-32 -mt-32" />
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter text-slate-900">Explore the Campus</h2>
          <p className="text-slate-500 max-w-lg mx-auto mb-10 font-medium">Schedule a visit to see our industrial workshops and smart classrooms in action at NTPC-MITI Barkagaon.</p>
          <button className="px-12 py-4 bg-slate-900 text-white rounded-full font-black hover:bg-blue-600 transition-all uppercase tracking-tighter shadow-xl shadow-slate-200">
            Request a Tour
          </button>
        </div>
      </section>
    </div>
  );
};

export default Infrastructure;