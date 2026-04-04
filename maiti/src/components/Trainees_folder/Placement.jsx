import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import Pagination from "../common/Pagination";

function Placement() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({});

  // CHANGE: Ab ye 'isSuperAdmin' check karega placement manage karne ke liye
  const isSuperAdmin = localStorage.getItem("isSuperAdmin") === "true";
  const itemsPerPage = 15;

  useEffect(() => {
    const savedData = localStorage.getItem("placementData");
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      localStorage.setItem("placementData", JSON.stringify(data));
    }
  }, [data]);

  const handleFileUpload = (e) => {
    if (!isSuperAdmin) return;
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = (event) => {
      const workbook = XLSX.read(event.target.result, { type: "buffer" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const parsedData = XLSX.utils.sheet_to_json(sheet, { defval: "" });

      const formattedData = parsedData.map((item) => {
        const getValue = (keys) => {
          const foundKey = Object.keys(item).find(k => keys.includes(k.trim().toLowerCase()));
          return foundKey ? item[foundKey] : "";
        };
        return {
          name: getValue(["name", "student name", "नाम"]),
          trade: getValue(["trade", "branch", "ट्रेड"]),
          company: getValue(["company", "industry", "कंपनी"]),
          package: getValue(["package", "salary", "पैकेज", "lpa"]),
        };
      });
      setData(formattedData);
      setCurrentPage(1);
    };
  };

  const filteredData = data.filter((item) =>
    Object.values(item).some(val => val.toString().toLowerCase().includes(search.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const handleLogout = () => {
    localStorage.removeItem("isSuperAdmin");
    window.location.reload();
  };

  return (
    <div className="p-4 md:p-10 bg-slate-50 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="col-span-2 flex flex-col justify-center">
            <h1 className="text-4xl font-extrabold text-slate-800 tracking-tight">
              Placement <span className="text-primary">Dashboard</span>
            </h1>
            <p className="text-primary mt-2 text-lg">NTPC MINING AND INDUSTRIAL TRAINING INSTITUTE</p>
          </div>
          
          <div className="flex items-center justify-end gap-3">
            {isSuperAdmin ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-primary shadow-lg gap-2">
                  Admin Tools <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-2xl bg-base-100 rounded-box w-52 mt-2 border border-base-200">
                  <li>
                    <label className="cursor-pointer">
                      Upload Excel
                      <input type="file" className="hidden" accept=".xlsx, .xls" onChange={handleFileUpload} />
                    </label>
                  </li>
                  <li><a onClick={handleLogout} className="text-error">Logout</a></li>
                </ul>
              </div>
            ) : (
              <div className="badge badge-outline p-4 font-medium text-slate-500 italic">Public Access</div>
            )}
            <button className="btn btn-outline btn-secondary" onClick={() => XLSX.writeFile(XLSX.utils.book_new(), "Data.xlsx")}>
              Export
            </button>
          </div>
        </div>

        <div className="stats shadow-sm w-full bg-white mb-10 border border-slate-100">
          <div className="stat">
            <div className="stat-title">Total Placed</div>
            <div className="stat-value text-primary">{data.length}</div>
            <div className="stat-desc">Students till now</div>
          </div>
          <div className="stat">
            <div className="stat-title">Top Recruiter</div>
            <div className="stat-value text-secondary text-2xl">TATA Motors & IIT Gandhinagar</div>
          </div>
        </div>

        <div className="card bg-white shadow-xl border border-slate-100 overflow-hidden">
          <div className="p-6 border-b border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-xl font-bold text-slate-700">Placement Records</h2>
            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered w-full max-w-xs"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
            />
          </div>

          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead className="bg-slate-50">
                <tr className="text-slate-600 uppercase text-xs tracking-widest">
                  <th className="py-5 px-6">Candidate Name</th>
                  <th>Trade Info</th>
                  <th>Company</th>
                  <th>Package (LPA)</th>
                  {isSuperAdmin && <th className="text-center">Manage</th>}
                </tr>
              </thead>
              <tbody className="text-slate-700">
                {currentData.map((item, index) => {
                  const gIndex = startIndex + index;
                  const isEditing = editIndex === gIndex;
                  return (
                    <tr key={gIndex} className="hover:bg-blue-50/50 transition-all group">
                      {isEditing ? (
                        <>
                          <td><input className="input input-bordered input-sm w-full" value={editData.name} onChange={(e)=>setEditData({...editData, name: e.target.value})}/></td>
                          <td><input className="input input-bordered input-sm w-full" value={editData.trade} onChange={(e)=>setEditData({...editData, trade: e.target.value})}/></td>
                          <td><input className="input input-bordered input-sm w-full" value={editData.company} onChange={(e)=>setEditData({...editData, company: e.target.value})}/></td>
                          <td><input className="input input-bordered input-sm w-full" value={editData.package} onChange={(e)=>setEditData({...editData, package: e.target.value})}/></td>
                          <td className="text-center"><button className="btn btn-success btn-sm" onClick={()=>setEditIndex(null)}>Save</button></td>
                        </>
                      ) : (
                        <>
                          <td className="py-4 px-6 font-bold">{item.name}</td>
                          <td><div className="badge badge-ghost">{item.trade}</div></td>
                          <td className="text-primary font-medium">{item.company}</td>
                          <td><span className="font-bold text-success bg-success/10 px-2 py-1 rounded">{item.package}</span></td>
                          {isSuperAdmin && (
                            <td className="text-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <div className="join">
                                <button className="btn btn-ghost btn-xs text-info" onClick={() => {setEditIndex(gIndex); setEditData(item)}}>Edit</button>
                                <button className="btn btn-ghost btn-xs text-error" onClick={() => setData(data.filter((_, i) => i !== gIndex))}>Del</button>
                              </div>
                            </td>
                          )}
                        </>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-10 flex justify-center pb-10">
          <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
        </div>
      </div>
    </div>
  );
}

export default Placement;