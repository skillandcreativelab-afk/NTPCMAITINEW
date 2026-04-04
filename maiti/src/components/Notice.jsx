import React from "react";

function Notice() {

  const notices = [
    {
      title: "Admission Notice 2026",
      date: "10 March 2026",
      file: "/noticeboard/addmission.jpeg",
      new: true
    },
    {
      title: "ITI Semester Examination Notice",
      date: "5 March 2026",
      file: "/notices/exam-notice.pdf",
      new: false
    },
    {
      title: "Holiday Notice (Holi Festival)",
      date: "1 March 2026",
      file: "/notices/holiday-notice.pdf",
      new: false
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-16 px-6">

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 tracking-wide">
          Notice Board
        </h1>
        <div className="w-28 h-1 bg-red-600 mx-auto mt-3"></div>
      </div>

      {/* Notice Table */}
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">

        <table className="w-full">

          {/* Header */}
          <thead className="bg-blue-900 text-white text-lg">
            <tr>
              <th className="py-4 px-6 text-left">Notice</th>
              <th className="py-4 px-6 text-center">Date</th>
              <th className="py-4 px-6 text-center">View</th>
            </tr>
          </thead>

          <tbody>

            {notices.map((item, index) => (
              <tr
                key={index}
                className="border-b hover:bg-blue-50 transition"
              >

                {/* Notice Title */}
                <td className="py-4 px-6 flex items-center gap-3 font-medium text-gray-800">

                  📄 {item.title}

                  {item.new && (
                    <span className="bg-red-600 text-white text-xs px-2 py-1 rounded animate-pulse">
                      NEW
                    </span>
                  )}

                </td>

                {/* Date */}
                <td className="text-center text-gray-600">
                  {item.date}
                </td>

                {/* View Button */}
                <td className="text-center">

                  <a
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
                  >
                    View Notice
                  </a>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Notice;