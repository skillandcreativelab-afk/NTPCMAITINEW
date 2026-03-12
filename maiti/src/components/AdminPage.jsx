import { useEffect, useState } from "react";

function AdminPage() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/students")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
        Registered Students
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Father Name</th>
              <th className="px-4 py-2 border">Gender</th>
              <th className="px-4 py-2 border">Address</th>
              <th className="px-4 py-2 border">Qualification</th>
              <th className="px-4 py-2 border">Mobile</th>
              <th className="px-4 py-2 border">Student ID</th>
              <th className="px-4 py-2 border">Photo</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border">{student.id}</td>
                <td className="px-4 py-2 border">{student.name}</td>
                <td className="px-4 py-2 border">{student.fatherName}</td>
                <td className="px-4 py-2 border">{student.gender}</td>
                <td className="px-4 py-2 border">{student.address}</td>
                <td className="px-4 py-2 border">{student.qualification}</td>
                <td className="px-4 py-2 border">{student.mobile}</td>
                <td className="px-4 py-2 border">{student.studentId}</td>
                <td className="px-4 py-2 border">
                  {student.photo ? (
                    <img
                      src={`http://localhost:5000/uploads/${student.photo}`}
                      alt="Student"
                      className="w-16 h-16 object-cover rounded-full mx-auto"
                    />
                  ) : (
                    "No Photo"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminPage;
