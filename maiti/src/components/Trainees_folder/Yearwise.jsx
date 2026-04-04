import React, { useState } from "react";

export default function Yearwise() {
  const trainees = [
    { sl: 1, session: "2015-17", trade: "Electrician", duration: "2 years", admitted: 42 },
    { sl: 2, session: "2015-17", trade: "Fitter", duration: "2 years", admitted: 42 },
    { sl: 3, session: "2015-16", trade: "Welder", duration: "1 year", admitted: 42 },
    { sl: 4, session: "2016-17", trade: "Welder", duration: "1 year", admitted: 32 },
    { sl: 5, session: "2017-18", trade: "Welder", duration: "1 year", admitted: 24 },
    { sl: 6, session: "2017-19", trade: "Electrician", duration: "2 years", admitted: 34 },
    { sl: 7, session: "2017-19", trade: "Fitter", duration: "2 years", admitted: 34 },
    { sl: 8, session: "2018-19", trade: "Welder", duration: "1 year", admitted: 34 },
    { sl: 9, session: "2019-21", trade: "Electrician", duration: "2 years", admitted: 20 },
    { sl: 10, session: "2019-21", trade: "Fitter", duration: "2 years", admitted: 20 },
    { sl: 11, session: "2019-20", trade: "Welder", duration: "1 year", admitted: 25 },
    { sl: 12, session: "2020-21", trade: "Welder", duration: "1 year", admitted: 28 },
    { sl: 13, session: "2020-22", trade: "Electrician", duration: "2 years", admitted: 19 },
    { sl: 14, session: "2020-22", trade: "Fitter", duration: "2 years", admitted: 20 },
    { sl: 15, session: "2021-23", trade: "Electrician", duration: "2 years", admitted: 20 },
    { sl: 16, session: "2021-23", trade: "Fitter", duration: "2 years", admitted: 20 },
    { sl: 17, session: "2021-22", trade: "Welder", duration: "1 year", admitted: 40 },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredTrainees = trainees.filter(
    (t) =>
      t.session.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.trade.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const total = filteredTrainees.reduce((sum, t) => sum + t.admitted, 0);

  return (
    <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 min-h-screen py-10 px-6">
      {/* Header Banner */}
      <div className="relative mb-10">
        <img
          src="/assets/trainees/trainees-banner.jpg"
          alt="Trainees Workshop"
          className="w-full h-[300px] object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Trainees Yearwise Data</h1>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search by Session or Trade..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input input-bordered w-full md:w-1/2 shadow-md"
        />
      </div>

      {/* Table Section */}
      <section className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-6">Students: Yearwise</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead className="bg-blue-100">
              <tr>
                <th>SL</th>
                <th>Session</th>
                <th>Trade</th>
                <th>Course Duration</th>
                <th>Admitted No. of Trainees</th>
              </tr>
            </thead>
            <tbody>
              {filteredTrainees.map((t) => (
                <tr key={t.sl} className="hover:bg-blue-50">
                  <td>{t.sl}</td>
                  <td>{t.session}</td>
                  <td>{t.trade}</td>
                  <td>{t.duration}</td>
                  <td className="font-semibold text-blue-700">{t.admitted}</td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-blue-100">
              <tr>
                <td colSpan="4" className="text-right font-bold">Total</td>
                <td className="font-bold text-blue-900">{total}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
    </div>
  );
}
