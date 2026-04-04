import React from "react";
import { Link } from "react-router-dom"; // Ensure react-router-dom is installed

function Admission() {
  const feeDetails = [
    { sl: 1, trade: "Fitter, Electrician", duration: "02 Years", category: "GEN & OBC", pap: "PAP", trainingFee: "2750.00", caution: "250.00", total: "3000.00" },
    { sl: 2, trade: "Fitter, Electrician", duration: "02 Years", category: "SC, ST, Women & PH", pap: "PAP", trainingFee: "350.00", caution: "250.00", total: "600.00" },
    { sl: 3, trade: "Fitter, Electrician", duration: "02 Years", category: "GEN & OBC", pap: "Non PAP", trainingFee: "27000.00", caution: "1000.00", total: "30000.00" },
    { sl: 4, trade: "Fitter", duration: "02 Years", category: "SC, ST, Women & PH", pap: "Non PAP", trainingFee: "25500.00", caution: "1000.00", total: "26500.00" },
    { sl: 5, trade: "Welder", duration: "01 Year", category: "GEN & OBC", pap: "PAP", trainingFee: "1375.00", caution: "250.00", total: "1625.00" },
    { sl: 6, trade: "Welder", duration: "01 Year", category: "SC, ST, Women & PH", pap: "PAP", trainingFee: "175.00", caution: "250.00", total: "425.00" },
    { sl: 7, trade: "Welder", duration: "01 Year", category: "GEN & OBC", pap: "Non PAP", trainingFee: "13065.00", caution: "1000.00", total: "14065.00" },
    { sl: 8, trade: "Welder", duration: "01 Year", category: "SC, ST, Women & PH", pap: "Non PAP", trainingFee: "12765.00", caution: "1000.00", total: "13765.00" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* --- Top Hero Banner --- */}
      <div 
        className="relative h-64 flex flex-col items-center justify-center text-white text-center px-4"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/assets/admission-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2">Admission</h1>
        <div className="flex items-center gap-2 text-sm font-medium opacity-80">
          <Link to="/" className="hover:text-cyan-400 transition">Home</Link> / <span>Pages</span> / <span className="text-cyan-400">Admission</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-12 px-6">
        
        {/* --- Instructions Section --- */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-10 border border-slate-100">
          <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-4">
            <div className="w-2 h-8 bg-cyan-500 rounded-full"></div>
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tight">Admission Guidelines (नामांकन निर्देश)</h2>
          </div>

          <div className="space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
            <p className="font-semibold text-slate-800">
              1. NTPC MAITI बड़कागांव निजी औद्योगिक प्रशिक्षण संस्थान का संचालन झारखंड सरकार टूल रूम रांची द्वारा किया जाता है। 
            </p>
            <ul className="list-disc ml-6 space-y-3">
              <li>NCVT पाठ्यक्रम के अंतर्गत ITI प्रशिक्षण हेतु इलेक्ट्रीशियन (20 सीट), फिटर (20 सीट) एवं वेल्डर (40 सीट) में नामांकन हेतु ऑनलाइन आवेदन स्वीकार किए जाते हैं।</li>
              <li>NTPC परियोजना प्रभावित क्षेत्र के योग्य इच्छुक महिला एवं पुरुष उम्मीदवार ऑनलाइन आवेदन संस्थान की वेबसाइट <span className="text-cyan-600 font-bold underline">www.maitibarkagaon.in</span> पर कर सकते हैं।</li>
              <li><span className="font-bold text-slate-800">शैक्षणिक योग्यता:</span> मैट्रिक (10th) पास। </li>
              <li><span className="font-bold text-slate-800">आयु सीमा:</span> न्यूनतम 14 वर्ष एवं अधिकतम 40 वर्ष।</li>
            </ul>

            <div className="bg-cyan-50 p-6 rounded-2xl border border-cyan-100">
              <h3 className="font-bold text-cyan-800 mb-4">ऑनलाइन आवेदन के समय आवश्यक दस्तावेज (Scanned Documents):</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 text-sm">
                <div className="flex items-center gap-2"><span>•</span> पासपोर्ट साइज रंगीन फोटो</div>
                <div className="flex items-center gap-2"><span>•</span> मैट्रिक अंक पत्र एवं प्रमाण पत्र</div>
                <div className="flex items-center gap-2"><span>•</span> आवासीय प्रमाण पत्र (Residential Certificate)</div>
                <div className="flex items-center gap-2"><span>•</span> जाति प्रमाण पत्र (Caste Certificate)</div>
                <div className="flex items-center gap-2"><span>•</span> आधार कार्ड की प्रति</div>
                <div className="flex items-center gap-2"><span>•</span> PAP प्रमाण पत्र (यदि लागू हो)</div>
              </div>
            </div>
          </div>
          
          {/* Apply Now Button */}
          <div className="mt-8 flex justify-center md:justify-start">
            <Link to="/apply" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-full font-bold uppercase tracking-wide transition-all shadow-lg hover:shadow-cyan-200 active:scale-95">
              Apply Now (अभी आवेदन करें)
            </Link>
          </div>
        </div>

        {/* --- Fee Structure Table --- */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="bg-cyan-600 p-6 text-white flex flex-col sm:flex-row justify-between items-center gap-4">
            <h2 className="text-xl font-bold tracking-tight">Fee Details (शुल्क विवरण)</h2>
            <div className="bg-white/20 px-3 py-1 rounded-full border border-white/30 uppercase text-[10px] font-bold">Academic Year 2026-27</div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-cyan-50 text-cyan-800 uppercase text-[11px] font-black">
                <tr>
                  <th className="p-4 border-b">Sl.</th>
                  <th className="p-4 border-b">Trade</th>
                  <th className="p-4 border-b">Duration</th>
                  <th className="p-4 border-b">Category</th>
                  <th className="p-4 border-b">PAP Status</th>
                  <th className="p-4 border-b">Training Fee</th>
                  <th className="p-4 border-b">Caution Money</th>
                  <th className="p-4 border-b text-cyan-700 bg-cyan-100/50">Total</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                {feeDetails.map((fee) => (
                  <tr key={fee.sl} className="hover:bg-slate-50 transition-colors border-b border-slate-50">
                    <td className="p-4 font-bold">{fee.sl}.</td>
                    <td className="p-4 font-bold text-slate-900">{fee.trade}</td>
                    <td className="p-4">{fee.duration}</td>
                    <td className="p-4">
                        <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-semibold whitespace-nowrap">
                            {fee.category}
                        </span>
                    </td>
                    <td className="p-4 font-semibold">{fee.pap}</td>
                    <td className="p-4">₹{fee.trainingFee}</td>
                    <td className="p-4">₹{fee.caution}</td>
                    <td className="p-4 font-black text-cyan-700 bg-cyan-50/30 font-mono italic">₹{fee.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* --- Contact Footer --- */}
        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-slate-200">
             <span className="text-cyan-600 font-bold text-sm">Email:</span>
             <a href="mailto:ntpcmaiti@gmail.com" className="text-slate-600 text-sm hover:text-cyan-600">ntpcmaiti@gmail.com</a>
          </div>
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-slate-200">
             <span className="text-cyan-600 font-bold text-sm">Phone:</span>
             <a href="tel:06531299950" className="text-slate-600 text-sm hover:text-cyan-600">06531-299950</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admission;