import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaUser, FaMapMarkerAlt, FaGraduationCap, 
  FaPhoneAlt, FaIdCard, FaCamera, FaCheckCircle, FaRocket, FaGlobeAmericas, FaPrint
} from "react-icons/fa";

// Logo Paths (Public folder mein ye files honi chahiye)
const ntpcLogo = "/ntpc_logo.png"; 
const maitiLogo = "/maiti_logo.png";

const PremiumInput = ({ label, name, icon, placeholder, isTextArea, type="text", value, onChange }) => (
  <motion.div whileHover={{ y: -2 }} className="space-y-2 w-full group">
    <label className="text-[12px] font-bold text-slate-500 uppercase tracking-[0.15em] ml-1 group-focus-within:text-indigo-600">
      {label}
    </label>
    <div className="relative flex items-center rounded-2xl border-2 border-slate-100 group-focus-within:border-indigo-500 transition-all bg-slate-50/50 backdrop-blur-sm">
      <div className="w-12 h-12 flex items-center justify-center text-slate-400 group-focus-within:text-indigo-600 border-r border-slate-100">
        {icon}
      </div>
      {isTextArea ? (
        <textarea name={name} value={value} placeholder={placeholder} onChange={onChange} rows="2" className="w-full px-4 py-3 bg-transparent outline-none text-sm font-semibold text-slate-900 resize-none" required />
      ) : (
        <input type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} className="w-full px-4 py-3 bg-transparent outline-none text-sm font-semibold text-slate-900" required />
      )}
    </div>
  </motion.div>
);

export default function ApplyNow() {
  const [formData, setFormData] = useState({
    name: "", fatherName: "", gender: "", address: "",
    qualification: "", mobile: "", studentId: "", photo: null,
  });

  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [regId, setRegId] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const generateSuperUniqueId = () => {
    const year = new Date().getFullYear();
    const timePart = Date.now().toString().slice(-5); 
    return `MITI-${year}-${timePart}`;
  };

  // --- PRINT SLIP LOGIC (BINAA LOGIC CHANGE KIYE) ---
  const handlePrintSlip = () => {
    const printWindow = window.open('', '_blank', 'width=800,height=900');
    printWindow.document.write(`
      <html>
        <head>
          <title>Registration Slip - NTPC MAITI</title>
          <style>
            body { font-family: 'Segoe UI', sans-serif; padding: 30px; color: #333; }
            .slip-card { border: 4px double #4f46e5; padding: 40px; border-radius: 20px; max-width: 600px; margin: auto; }
            .header { text-align: center; border-bottom: 2px solid #eee; padding-bottom: 20px; }
            .logo-text { font-size: 24px; font-weight: 900; color: #1e1b4b; margin: 0; }
            .subtitle { font-size: 14px; color: #6366f1; font-weight: bold; margin-top: 5px; }
            .reg-box { background: #f8fafc; border: 2px dashed #cbd5e1; padding: 20px; text-align: center; margin: 25px 0; border-radius: 15px; }
            .reg-label { font-size: 10px; font-weight: bold; color: #64748b; text-transform: uppercase; }
            .reg-value { font-size: 28px; font-weight: 900; color: #4f46e5; font-family: monospace; }
            .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 30px; }
            .info-item { margin-bottom: 15px; }
            .label { font-size: 11px; font-weight: bold; color: #94a3b8; text-transform: uppercase; }
            .value { font-size: 16px; font-weight: bold; color: #1e293b; }
            .footer { margin-top: 50px; text-align: center; font-size: 10px; color: #94a3b8; border-top: 1px solid #eee; padding-top: 20px; }
          </style>
        </head>
        <body>
          <div class="slip-card">
            <div class="header">
              <p class="logo-text">NTPC-MINING & INDUSTRIAL</p>
              <p class="logo-text">TRAINING INSTITUTE</p>
              <p class="subtitle">BARKAGAON, HAZARIBAGH</p>
            </div>
            <div class="reg-box">
              <div class="reg-label">Application Registration ID</div>
              <div class="reg-value">${regId}</div>
            </div>
            <div class="info-grid">
              <div class="info-item"><div class="label">Student Name</div><div class="value">${submittedData?.name}</div></div>
              <div class="info-item"><div class="label">Father's Name</div><div class="value">${submittedData?.fatherName}</div></div>
              <div class="info-item"><div class="label">Contact Number</div><div class="value">${submittedData?.mobile}</div></div>
              <div class="info-item"><div class="label">Qualification</div><div class="value">${submittedData?.qualification}</div></div>
              <div class="info-item" style="grid-column: span 2;"><div class="label">Address</div><div class="value">${submittedData?.address}</div></div>
            </div>
            <div class="footer">
              <p>This is a system generated enrollment slip for NTPC-MITI Barkagaon.</p>
              <p>Date of Issue: ${new Date().toLocaleDateString()}</p>
            </div>
          </div>
          <script>window.print();</script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const newRegId = generateSuperUniqueId();
    const data = new FormData();
    Object.keys(formData).forEach(key => data.append(key, formData[key]));
    data.append("regId", newRegId);

    try {
      const response = await fetch("http://localhost:5000/api/students", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setRegId(newRegId);
        setSubmittedData({ ...formData });
        setIsSubmitted(true);
        setFormData({ name: "", fatherName: "", gender: "", address: "", qualification: "", mobile: "", studentId: "", photo: null });
      } else {
        alert("Server Error!");
      }
    } catch (err) {
      alert("Network Error!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050c2b] flex flex-col items-center justify-center py-16 px-4 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-600 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-600 blur-[120px] rounded-full"></div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-white max-w-md w-full rounded-[2.5rem] p-10 shadow-2xl text-center">
              <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-6" />
              <h2 className="text-2xl font-black text-slate-900 uppercase">Success!</h2>
              <p className="text-slate-500 mb-6 font-bold uppercase text-[10px] tracking-widest">Registration Completed</p>
              
              <div className="mb-8 bg-slate-900 p-5 rounded-2xl shadow-inner text-center">
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Registration ID</p>
                <p className="text-xl font-black text-indigo-400 font-mono tracking-widest">{regId}</p>
              </div>

              <div className="space-y-3">
                <button 
                  onClick={handlePrintSlip}
                  className="w-full bg-emerald-500 text-white py-4 rounded-xl font-black text-xs uppercase hover:bg-emerald-600 shadow-lg flex items-center justify-center gap-3 transition-all active:scale-95"
                >
                  <FaPrint className="text-lg" /> Download / Print Slip
                </button>
                <button 
                  onClick={() => setIsSubmitted(false)} 
                  className="w-full bg-slate-100 text-slate-600 py-4 rounded-xl font-black text-xs uppercase hover:bg-slate-200 transition-all"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. TOP LOGO CONTAINER */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="max-w-6xl w-full mb-8 relative z-20"
      >
        <div className="bg-green-700 backdrop-blur-xl rounded-2xl md:rounded-full p-4 border border-white/10 flex items-center justify-between shadow-2xl">
          <div className="flex items-center gap-3 pl-2">
            <img src={'/addmission slip logo/ntpc.jpeg'} alt="NTPC" className="h-8 md:h-10 w-auto object-contain" onError={(e) => { e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Placeholder_logo.svg'; }} />
            <span className="hidden sm:block font-black text-white text-sm md:text-lg uppercase tracking-tighter">NTPC Limited</span>
          </div>

          <div className="text-center">
            <p className="text-[8px] md:text-[10px] text-cyan-300 font-black uppercase tracking-widest">Admission Enrollment</p>
            <p className="text-[10px] md:text-xs text-white/100 font-bold tracking-tight italic">MAITI BARKAGAON</p>
          </div>

          <div className="flex items-center gap-3 pr-2">
            <span className="hidden sm:block font-black text-white text-sm md:text-lg uppercase tracking-tighter">MAITI</span>
            <img src={'/addmission slip logo/maiti.png'} alt="MAITI" className="h-8 md:h-10 w-auto object-contain rounded-lg" onError={(e) => { e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Placeholder_logo.svg'; }} />
          </div>
        </div>
      </motion.div>

      {/* 2. MAIN FORM BOX */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-6xl w-full relative z-10">
        <div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] md:rounded-[3.5rem] shadow-2x1 overflow-hidden flex flex-col lg:flex-row border border-green-600 p-4">
          
          {/* Left Panel */}
          <div className="lg:w-[38%] bg-gradient-to-br from-indigo-600 via-indigo-700 to-blue-800 rounded-[2rem] md:rounded-[3rem] p-10 md:p-12 text-white flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20 mb-10 shadow-xl">
                 <FaGlobeAmericas className="text-3xl text-cyan-300" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black leading-tight mb-6 tracking-tighter uppercase italic">
                NTPC MINING AND INDUSTRIAL <br/> TRAINING INSTITUTE <br/>
                <span className="text-cyan-300">BARKAGAON</span>
              </h2>
              <div className="h-1 w-20 bg-cyan-400 rounded-full"></div>
            </div>
            <div className="mt-12 bg-black/20 p-6 rounded-3xl border border-white/10">
               <p className="text-[10px] text-cyan-300 font-black uppercase mb-2">Support Line</p>
               <p className="text-xl md:text-2xl font-black tracking-tight flex items-center gap-3">
                 <FaPhoneAlt className="text-sm" /> 06531-299950
               </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:w-[62%] p-6 md:p-14 bg-white rounded-[2rem] md:rounded-[3rem]">
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <PremiumInput label="Student Name" name="name" value={formData.name} icon={<FaUser/>} placeholder="Full Name" onChange={handleChange} />
                <PremiumInput label="Father's Name" name="fatherName" value={formData.fatherName} icon={<FaUser/>} placeholder="Full Name" onChange={handleChange} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-end">
                <div className="space-y-3">
                  <label className="text-[12px] font-bold text-slate-500 uppercase tracking-widest ml-1">Gender</label>
                  <div className="flex bg-slate-50 p-1.5 rounded-2xl border-2 border-slate-100">
                    {["Male", "Female", "Other"].map((g) => (
                      <label key={g} className="flex-1 text-center py-3 rounded-xl cursor-pointer text-[10px] font-black transition-all has-[:checked]:bg-indigo-600 has-[:checked]:text-white text-slate-600 uppercase">
                        <input type="radio" name="gender" value={g} checked={formData.gender === g} onChange={handleChange} className="hidden" required />
                        {g}
                      </label>
                    ))}
                  </div>
                </div>
                <PremiumInput label="Contact Number" name="mobile" value={formData.mobile} type="tel" icon={<FaPhoneAlt/>} placeholder="+91" onChange={handleChange} />
              </div>

              <PremiumInput label="Address" name="address" value={formData.address} icon={<FaMapMarkerAlt/>} placeholder="Village, Block, District" isTextArea onChange={handleChange} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <PremiumInput label="Qualification" name="qualification" value={formData.qualification} icon={<FaGraduationCap/>} placeholder="SSC / ITI" onChange={handleChange} />
                <PremiumInput label="Aadhar ID" name="studentId" value={formData.studentId} icon={<FaIdCard/>} placeholder="0000 0000 0000" onChange={handleChange} />
              </div>

              <div className="relative bg-slate-50 border-2 border-dashed border-green-400 rounded-2xl p-8 flex flex-col items-center justify-center gap-3 group">
                <FaCamera className="text-black-400 group-hover:text-indigo-600 transition-colors" size={24} />
                <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest text-center">Upload Passport Photo</span>
                <input type="file" name="photo" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleChange} required />
                {formData.photo && <span className="text-green-500 text-[10px] font-bold uppercase tracking-widest">Photo Ready ✓</span>}
              </div>

              <button disabled={loading} className={`w-full py-5 md:py-6 rounded-2xl font-black text-xs uppercase tracking-[0.4em] text-white flex items-center justify-center gap-4 transition-all ${loading ? 'bg-slate-300' : 'bg-gradient-to-r from-indigo-600 to-blue-600 hover:shadow-xl active:scale-[0.98]'}`}>
                {loading ? "PROCESSING..." : <>Submit Enrollment <FaRocket className="text-lg" /></>}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}