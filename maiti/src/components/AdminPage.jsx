import { useEffect, useState } from "react";
import * as XLSX from 'xlsx';

function AdminPage() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchStudents = async () => {
    setLoading(true);
    try {
      // Backend ke naye route (/api/get-students) ka use aur credentials zaroori hain
      const response = await fetch("http://localhost:5000/api/get-students", {
        credentials: "include" 
      });
      const data = await response.json();
      setStudents(Array.isArray(data) ? data : []);
    } catch (err) {
      setStudents([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchStudents(); }, []);

  // Filter Logic (Aapka logic wahi hai)
  const filteredStudents = students.filter(s => {
    const search = searchTerm.toLowerCase();
    return (s.name || "").toLowerCase().includes(search) || (s.mobile || "").includes(search);
  });

  // Excel Export Logic
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(students);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Students");
    XLSX.writeFile(workbook, "NTPC_MITI_Students.xlsx");
  };

  return (
    <div className="p-6 bg-base-200 min-h-screen">
      <div className="max-w-[1400px] mx-auto space-y-6">
        
        {/* Top Header Card */}
        <div className="card bg-base-100 shadow-xl border border-base-300">
          <div className="card-body flex-row justify-between items-center p-6">
            <div>
              <h2 className="text-3xl font-black tracking-tighter uppercase italic">
                NTPC-MITI <span className="text-primary underline decoration-4 underline-offset-4">Admin</span>
              </h2>
              <div className="badge badge-outline badge-sm mt-1 opacity-60">Management Dashboard v2.0</div>
            </div>
            
            <div className="flex gap-2">
              <button onClick={exportToExcel} className="btn btn-success btn-sm font-bold text-white rounded-xl">EXCEL</button>
              <button onClick={fetchStudents} className={`btn btn-primary btn-sm rounded-xl ${loading ? 'loading' : ''}`}>REFRESH</button>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="stats shadow-xl w-full border border-base-300">
          <div className="stat">
            <div className="stat-title text-xs font-bold uppercase">Total Registered</div>
            <div className="stat-value text-primary">{students.length}</div>
            <div className="stat-desc font-medium">Students in Database</div>
          </div>
          <div className="stat">
            <div className="stat-title text-xs font-bold uppercase">Search Results</div>
            <div className="stat-value text-secondary">{filteredStudents.length}</div>
            <div className="stat-desc font-medium text-secondary">Matching filter</div>
          </div>
        </div>

        {/* Search & Main Table Card */}
        <div className="card bg-base-100 shadow-2xl border border-base-300">
          <div className="p-4 bg-base-100 border-b border-base-300">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search by Name or Mobile..." 
                className="input input-bordered input-primary w-full max-w-md pl-10 rounded-2xl"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <span className="absolute left-3 top-3.5 opacity-40">🔍</span>
            </div>
          </div>

          <div className="overflow-x-auto p-2">
            <table className="table table-zebra w-full">
              <thead className="text-sm font-black uppercase text-base-content/70">
                <tr>
                  <th>Profile</th>
                  <th>Student Name</th>
                  <th>Father's Name</th>
                  <th>Mobile Number</th>
                  <th>Qualification</th>
                  <th>Aadhar / ID</th>
                </tr>
              </thead>
              <tbody className="font-medium">
                {filteredStudents.length > 0 ? (
                  filteredStudents.map((s) => (
                    <tr key={s.id} className="hover:bg-base-200 transition-all">
                      <td>
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={`http://localhost:5000/uploads/${s.photo}`} alt="Student" />
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="font-black text-lg">{s.name}</div>
                        <div className="badge badge-ghost badge-xs uppercase font-bold text-[8px]">{s.gender}</div>
                      </td>
                      <td>{s.fatherName}</td>
                      <td className="font-mono text-primary font-bold">{s.mobile}</td>
                      <td><div className="badge badge-outline font-black">{s.qualification}</div></td>
                      <td className="font-mono text-xs opacity-60">{s.studentId}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-20 opacity-50 font-bold italic">
                      No matching records found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;