import { useState } from "react";

function ApplyNow() {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    gender: "",
    address: "",
    qualification: "",
    mobile: "",
    studentId: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    await fetch("http://localhost:5000/api/students", {
      method: "POST",
      body: data,
    });
    alert("Student registered successfully!");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
        Student Registration Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          name="fatherName"
          placeholder="Father's Name"
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        />
        <div className="flex gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
              className="mr-2"
            />
            Male
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleChange}
              className="mr-2"
            />
            Female
          </label>
        </div>
        <textarea
          name="address"
          placeholder="Address"
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          name="qualification"
          placeholder="Qualification"
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          name="studentId"
          placeholder="Student ID"
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="file"
          name="photo"
          accept="image/*"
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default ApplyNow;
