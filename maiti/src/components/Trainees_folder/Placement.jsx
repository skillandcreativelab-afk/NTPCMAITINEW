import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import Pagination from "../common/Pagination";

function Placement() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({});

  const isAdmin = localStorage.getItem("isAdmin") === "true";
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
    if (!isAdmin) return;
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
    localStorage.removeItem("isAdmin");
    window.location.reload();
  };

  return (
    <div className="p-4 md:p-10 bg-slate-50 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header Section with Stats --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="col-span-2 flex flex-col justify-center">
            <h1 className="text-4xl font-extrabold text-slate-800 tracking-tight">
              Placement <span className="text-primary">Dashboard</span>
            </h1>
            <p className="text-primary mt-2 text-lg">NTPC MINING AND INDUSTRIAL TRAINING INSTITUTE</p>
          </div>
          
          <div className="flex items-center justify-end gap-3">
            {isAdmin ? (
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

        {/* --- Quick Stats Bar --- */}
        <div className="stats shadow-sm w-full bg-white mb-10 border border-slate-100">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div className="stat-title">Total Placed</div>
            <div className="stat-value text-primary">{data.length}</div>
            <div className="stat-desc">Students till now</div>
          </div>
          
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
            </div>
            <div className="stat-title">Top Recruiter</div>
            <div className="stat-value text-secondary text-2xl">TATA Motors & IIT Gandhinagar Etc</div>
            <div className="stat-desc">Major hiring partner</div>
          </div>
        </div>

        {/* --- Search & Table Card --- */}
        <div className="card bg-white shadow-xl border border-slate-100 overflow-hidden">
          <div className="p-6 border-b border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-xl font-bold text-slate-700">Placement Records</h2>
            <div className="relative w-full max-w-xs">
              <input
                type="text"
                placeholder="Search anything..."
                className="input input-bordered w-full pl-10 focus:input-primary transition-all"
                value={search}
                onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead className="bg-slate-50">
                <tr className="text-slate-600 uppercase text-xs tracking-widest">
                  <th className="py-5 px-6">Candidate Name</th>
                  <th>Trade Info</th>
                  <th>Company</th>
                  <th>Package (LPA)</th>
                  {isAdmin && <th className="text-center">Manage</th>}
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
                          <td className="text-center"><button className="btn btn-success btn-sm px-6" onClick={()=>setEditIndex(null)}>Save</button></td>
                        </>
                      ) : (
                        <>
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-3">
                              <div className="avatar placeholder">
                                <div className="bg-primary text-primary-content rounded-full w-8 h-8 text-xs">
                                  {item.name?.charAt(0)}
                                </div>
                              </div>
                              <span className="font-bold text-slate-800">{item.name}</span>
                            </div>
                          </td>
                          <td><div className="badge badge-ghost font-medium">{item.trade}</div></td>
                          <td><span className="font-medium text-primary">{item.company}</span></td>
                          <td><span className="font-mono font-bold text-success bg-success/10 px-2 py-1 rounded">{item.package}</span></td>
                          {isAdmin && (
                            <td className="text-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <div className="join shadow-sm border border-slate-200">
                                <button className="btn btn-ghost btn-xs join-item text-info" onClick={() => {setEditIndex(gIndex); setEditData(item)}}>Edit</button>
                                <button className="btn btn-ghost btn-xs join-item text-error" onClick={() => setData(data.filter((_, i) => i !== gIndex))}>Del</button>
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

        {/* --- Pagination --- */}
        <div className="mt-10 flex justify-center pb-10">
          <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
        </div>
      </div>
    </div>
  );
}

export default Placement;