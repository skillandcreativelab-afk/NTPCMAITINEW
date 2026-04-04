import { useEffect, useState } from "react";
import * as XLSX from 'xlsx'; // Excel लाइब्रेरी

function AdminPage() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); // सर्च के लिए स्टेट

  // 1. डेटाबेस से छात्रों की लिस्ट लाना
  const fetchStudents = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/students");
      if (!response.ok) throw new Error("Network error");
      const data = await response.json();
      setStudents(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Fetch Error:", err);
      setStudents([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // 2. EXCEL EXPORT फंक्शन (पूरी लिस्ट डाउनलोड करने के लिए)
  const exportToExcel = () => {
    if (students.length === 0) return alert("No data to export");
    
    // डेटा को क्लीन करना (सिर्फ जरूरी कॉलम्स)
    const excelData = students.map(s => ({
      ID: s.id,
      Name: s.name,
      Father_Name: s.fatherName,
      Gender: s.gender,
      Mobile: s.mobile,
      Qualification: s.qualification,
      Aadhar_ID: s.studentId
    }));

    const ws = XLSX.utils.json_to_sheet(excelData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Students");
    XLSX.writeFile(wb, "NTPC_Student_List_2026.xlsx");
  };

  // 3. DELETE फंक्शन
  const handleDelete = async (id) => {
    if (window.confirm("क्या आप इस छात्र का रिकॉर्ड हमेशा के लिए हटाना चाहते हैं?")) {
      try {
        const response = await fetch(`http://localhost:5000/api/students/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          setStudents(students.filter((s) => s.id !== id));
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  // 4. SEARCH FILTER (नाम, मोबाइल या आधार से ढूंढें)
  const filteredStudents = students.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.mobile.includes(searchTerm) ||
    s.studentId.includes(searchTerm)
  );

  return (
    <div className="w-full max-w-[1400px] mx-auto bg-white p-6 md:p-10 rounded-3xl shadow-2xl mt-10 border border-slate-100">
      
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-10 gap-6">
        <div>
          <h2 className="text-3xl font-black text-slate-800 tracking-tight uppercase">
            Admin <span className="text-blue-600">Dashboard</span>
          </h2>
          <p className="text-slate-500 font-medium text-sm">NTPC-MITI Barkagaon Management System</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 w-full lg:w-auto">
          {/* SEARCH INPUT */}
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search Name / Mobile..." 
              className="pl-4 pr-10 py-2.5 border-2 border-slate-100 rounded-2xl outline-none focus:border-blue-500 text-sm w-64 shadow-sm transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <button onClick={exportToExcel} className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-2xl font-black text-xs tracking-widest transition-all shadow-lg shadow-emerald-200">
            EXPORT EXCEL
          </button>
          
          <button onClick={fetchStudents} className="bg-slate-800 hover:bg-black text-white px-6 py-2.5 rounded-2xl font-black text-xs tracking-widest transition-all shadow-lg">
            REFRESH
          </button>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-50 p-6 rounded-[2rem] border border-blue-100">
          <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Total Registered</p>
          <h4 className="text-3xl font-black text-blue-700">{students.length} Students</h4>
        </div>
        <div className="bg-emerald-50 p-6 rounded-[2rem] border border-emerald-100">
          <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Database Status</p>
          <h4 className="text-3xl font-black text-emerald-700">Online ✅</h4>
        </div>
        <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-200">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Filtered Result</p>
          <h4 className="text-3xl font-black text-slate-700">{filteredStudents.length} Found</h4>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto rounded-[2rem] border border-slate-200 shadow-inner">
        <table className="min-w-full border-collapse bg-white">
          <thead className="bg-slate-50 text-slate-600 text-[11px] uppercase tracking-widest font-black border-b">
            <tr>
              <th className="px-6 py-6">Photo</th>
              <th className="px-6 py-6 text-left">Candidate Detail</th>
              <th className="px-6 py-6 text-left">Mobile</th>
              <th className="px-6 py-6 text-left">Aadhar ID</th>
              <th className="px-6 py-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {loading ? (
              <tr><td colSpan="5" className="py-24 text-center font-black text-slate-300 animate-pulse uppercase tracking-[0.3em]">Syncing Records...</td></tr>
            ) : filteredStudents.length > 0 ? (
              filteredStudents.map((s) => (
                <tr key={s.id} className="hover:bg-blue-50/30 transition-all group">
                  <td className="px-6 py-4">
                    <div className="flex justify-center">
                      {s.photo ? (
                        <img src={`http://localhost:5000/uploads/${s.photo}`} className="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-md" alt="student" />
                      ) : (
                        <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-[10px] text-slate-400 font-bold">NO PIC</div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-black text-slate-800 uppercase text-sm">{s.name}</div>
                    <div className="text-xs text-slate-500 font-medium italic">S/O: {s.fatherName}</div>
                    <div className="text-[10px] mt-1 text-blue-500 font-bold">{s.qualification}</div>
                  </td>
                  <td className="px-6 py-4 font-black text-slate-700">{s.mobile}</td>
                  <td className="px-6 py-4 font-mono text-xs text-slate-500 tracking-tighter">{s.studentId}</td>
                  <td className="px-6 py-4 text-center">
                    <button 
                      onClick={() => handleDelete(s.id)} 
                      className="bg-white border-2 border-red-50 text-red-500 hover:bg-red-500 hover:text-white px-5 py-2 rounded-2xl text-[10px] font-black transition-all shadow-sm"
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr><td colSpan="5" className="py-24 text-center text-slate-300 font-black uppercase tracking-widest">No matching records found</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminPage;