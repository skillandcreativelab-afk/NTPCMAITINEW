import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaUser, FaMapMarkerAlt, FaGraduationCap, 
  FaPhoneAlt, FaIdCard, FaCamera, FaCheckCircle, FaRocket, FaGlobeAmericas, FaPrint
} from "react-icons/fa";

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
    <div className="min-h-screen bg-[#020617] flex items-center justify-center py-16 px-4 relative overflow-hidden">
      {/* Design Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-600 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-600 blur-[120px] rounded-full"></div>
      </div>

      <AnimatePresence>
        {isSubmitted && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-white max-w-md w-full rounded-[2.5rem] p-10 shadow-2xl text-center">
              <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-6" />
              <h2 className="text-2xl font-black text-slate-900 uppercase">Success!</h2>
              <p className="text-slate-500 mb-6 font-bold uppercase text-[10px] tracking-widest">Registration Completed</p>
              <div className="mb-8 bg-slate-900 p-5 rounded-2xl shadow-inner">
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Registration ID</p>
                <p className="text-xl font-black text-indigo-400 font-mono tracking-widest">{regId}</p>
              </div>
              <button onClick={() => setIsSubmitted(false)} className="w-full bg-indigo-600 text-white py-4 rounded-xl font-black text-xs uppercase hover:bg-indigo-700 shadow-lg">Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-6xl w-full relative z-10">
        <div className="bg-white/5 backdrop-blur-xl rounded-[3.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-white/10 p-4">
          
          {/* Left Info Panel */}
          <div className="lg:w-[38%] bg-gradient-to-br from-indigo-600 via-indigo-700 to-blue-800 rounded-[3rem] p-12 text-white flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20 mb-10 shadow-xl">
                 <FaGlobeAmericas className="text-3xl text-cyan-300" />
              </div>
              <h2 className="text-3xl font-black leading-tight mb-6 tracking-tighter uppercase italic">
                NTPC-MINING & INDUSTRIAL <br/> TRAINING INSTITUTE <br/>
                <span className="text-cyan-300">BARKAGAON</span>
              </h2>
              <div className="h-1 w-20 bg-cyan-400 rounded-full"></div>
            </div>
            <div className="mt-12 bg-black/20 p-6 rounded-3xl border border-white/10">
               <p className="text-[10px] text-cyan-300 font-black uppercase mb-2">Support Line</p>
               <p className="text-2xl font-black tracking-tight flex items-center gap-3">
                 <FaPhoneAlt className="text-sm" /> 06531-299950
               </p>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="lg:w-[62%] p-8 md:p-14 bg-white rounded-[3rem]">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <PremiumInput label="Student Name" name="name" value={formData.name} icon={<FaUser/>} placeholder="Full Name" onChange={handleChange} />
                <PremiumInput label="Father's Name" name="fatherName" value={formData.fatherName} icon={<FaUser/>} placeholder="Full Name" onChange={handleChange} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                <div className="space-y-3">
                  <label className="text-[12px] font-bold text-slate-500 uppercase tracking-widest ml-1">Gender</label>
                  <div className="flex bg-slate-50 p-1.5 rounded-2xl border-2 border-slate-100">
                    {["Male", "Female", "Other"].map((g) => (
                      <label key={g} className="flex-1 text-center py-3 rounded-xl cursor-pointer text-[11px] font-black transition-all has-[:checked]:bg-indigo-600 has-[:checked]:text-white text-slate-400 uppercase">
                        <input type="radio" name="gender" value={g} checked={formData.gender === g} onChange={handleChange} className="hidden" required />
                        {g}
                      </label>
                    ))}
                  </div>
                </div>
                <PremiumInput label="Contact Number" name="mobile" value={formData.mobile} type="tel" icon={<FaPhoneAlt/>} placeholder="+91" onChange={handleChange} />
              </div>

              <PremiumInput label="Address" name="address" value={formData.address} icon={<FaMapMarkerAlt/>} placeholder="House No, Village, Block, District" isTextArea onChange={handleChange} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <PremiumInput label="Qualification" name="qualification" value={formData.qualification} icon={<FaGraduationCap/>} placeholder="SSC / ITI" onChange={handleChange} />
                <PremiumInput label="Aadhar ID" name="studentId" value={formData.studentId} icon={<FaIdCard/>} placeholder="0000 0000 0000" onChange={handleChange} />
              </div>

              <div className="relative bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl p-10 flex flex-col items-center justify-center gap-3 group">
                <FaCamera className="text-slate-400 group-hover:text-indigo-600 transition-colors" size={24} />
                <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest">Upload Passport Photo</span>
                <input type="file" name="photo" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleChange} required />
                {formData.photo && <span className="text-green-500 text-[10px] font-bold uppercase tracking-widest">Photo Ready ✓</span>}
              </div>

              <button disabled={loading} className={`w-full py-6 rounded-2xl font-black text-xs uppercase tracking-[0.4em] text-white flex items-center justify-center gap-4 transition-all ${loading ? 'bg-slate-300' : 'bg-gradient-to-r from-indigo-600 to-blue-600 hover:shadow-xl'}`}>
                {loading ? "PROCESSING..." : <>Submit Enrollment <FaRocket className="text-lg" /></>}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}