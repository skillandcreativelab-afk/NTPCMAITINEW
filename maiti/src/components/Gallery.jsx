import React, { useState } from "react";

function Gallery() {
  const [language, setLanguage] = useState("hindi"); // 'hindi' or 'english'
  const [filter, setFilter] = useState("All");
  const [selectedImg, setSelectedImg] = useState(null);

  // लोगो का पाथ (सुनिश्चित करें कि यह सही फोल्डर में है)
  const logoSrc = "/maiti logo.png.jpeg"; 

  // कंटेंट डेटा (दोनों भाषाओं में)
  const content = {
    english: {
      title: "Training",
      subtitle: "Gallery",
      viewBtn: "View Full",
      noData: "No photos found in this category.",
      campus: "Our Campus",
      categories: ["All", "Fitter", "Electrician", "Welding", "Safety"]
    },
    hindi: {
      title: "प्रशिक्षण",
      subtitle: "गैलरी",
      viewBtn: "पूरा देखें",
      noData: "इस कैटेगरी में अभी कोई फोटो नहीं है।",
      campus: "हमारा कैंपस",
      categories: ["सभी", "फिटर", "इलेक्ट्रीशियन", "वेल्डिंग", "सुरक्षा"]
    }
  };

  const images = [
    { src: "../gallary/gallary.jpg", category: "Fitter", catHindi: "फिटर", title: "Practical Training" },
    { src: "../gallary/gallary.png", category: "Electrician", catHindi: "इलेक्ट्रीशियन", title: "Wiring Workshop" },
    { src: "../gallary/gallary.jpg", category: "Welding", catHindi: "वेल्डिंग", title: "Arc Welding" },
    { src: "../gallary/gallary.png", category: "Safety", catHindi: "सुरक्षा", title: "Fire Safety" },
  ];

  const t = content[language];

  const filteredImages = filter === "All" || filter === "सभी"
    ? images 
    : images.filter(img => img.category === filter || img.catHindi === filter);

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 md:px-10 font-sans">
      
      {/* --- Top Header: Logo & Language Switcher --- */}
      <div className="max-w-7xl mx-auto flex justify-between items-center mb-10 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
        <div className="flex items-center gap-4">
          <img src={logoSrc} alt="MAITI-ITI Logo" className="h-12 md:h-16 object-contain" />
          <div className="hidden md:block h-10 w-[1px] bg-slate-200 mx-2"></div>
          <span className="hidden md:block font-black text-slate-800 tracking-tighter text-xl">MAITI-ITI</span>
        </div>

        <div className="join border border-primary/20 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <button 
            onClick={() => {setLanguage("hindi"); setFilter("सभी")}}
            className={`join-item btn btn-xs md:btn-sm px-5 ${language === "hindi" ? "btn-primary" : "btn-ghost bg-white"}`}
          >
            हिन्दी
          </button>
          <button 
            onClick={() => {setLanguage("english"); setFilter("All")}}
            className={`join-item btn btn-xs md:btn-sm px-5 ${language === "english" ? "btn-primary" : "btn-ghost bg-white"}`}
          >
            English
          </button>
        </div>
      </div>

      {/* --- Heading Section --- */}
      <div className="text-center mb-16 px-4">
        <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">{t.campus}</span>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          {t.title} <span className="text-red-600">{t.subtitle}</span>
        </h1>
        <div className="w-24 h-2 bg-red-600 mx-auto mt-6 rounded-full shadow-lg shadow-red-200"></div>
        
        {/* Dynamic Description with Styled Institute Name */}
        <p className="text-slate-500 mt-8 max-w-3xl mx-auto text-lg leading-relaxed font-medium">
          {language === "hindi" ? (
            <>
              <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-yellow-500">
                एनटीपीसी माइनिंग औद्योगिक प्रशिक्षण संस्थान (MAITI)
              </span> की अत्याधुनिक वर्कशॉप और प्रैक्टिकल ट्रेनिंग की झलकियाँ।
            </>
          ) : (
            <>
              Glimpses of advanced workshops and practical training at {" "}
              <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-yellow-500 uppercase">
                NTPC MINING AND INDUSTRIAL TRAINING INSTITUTE.
              </span>
            </>
          )}
        </p>
      </div>

      {/* --- Filter Tabs (DaisyUI) --- */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {t.categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`btn btn-sm md:btn-md rounded-full px-8 border-none transition-all duration-300 ${
              filter === cat 
              ? "btn-primary shadow-xl shadow-blue-200 scale-105" 
              : "bg-white text-slate-600 hover:bg-slate-200 shadow-sm"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* --- Gallery Grid --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-2">
        {filteredImages.map((img, index) => (
          <div
            key={index}
            onClick={() => setSelectedImg(img.src)}
            className="group relative cursor-pointer overflow-hidden rounded-[2rem] bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border-8 border-white"
          >
            <div className="h-80 overflow-hidden">
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-2"
              />
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
              <span className="text-red-400 text-xs font-black uppercase tracking-widest mb-2">
                {language === "hindi" ? img.catHindi : img.category}
              </span>
              <h3 className="text-white text-2xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {img.title}
              </h3>
              <div className="w-12 h-1 bg-red-600 mt-4 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></div>
            </div>

            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md text-slate-900 px-4 py-2 rounded-xl text-[10px] font-black uppercase shadow-2xl opacity-0 group-hover:opacity-100 transition-all translate-y-[-10px] group-hover:translate-y-0 duration-500">
              {t.viewBtn}
            </div>
          </div>
        ))}
      </div>

      {/* --- Lightbox Modal --- */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-xl flex items-center justify-center p-6 transition-all duration-500"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-10 right-10 text-white hover:text-red-500 transition-colors bg-white/10 p-4 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <img 
            src={selectedImg} 
            className="max-w-full max-h-[85vh] rounded-3xl shadow-[0_0_80px_rgba(0,0,0,0.5)] border-4 border-white/20 animate-in fade-in zoom-in duration-300"
            alt="Full Preview"
          />
        </div>
      )}

      {/* Empty State */}
      {filteredImages.length === 0 && (
        <div className="text-center py-32 bg-white rounded-[3rem] shadow-inner mt-10 border-2 border-dashed border-slate-100">
          <p className="text-slate-400 font-bold text-2xl italic tracking-tight">{t.noData}</p>
        </div>
      )}

    </div>
  );
}

export default Gallery;