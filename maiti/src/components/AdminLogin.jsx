import { useState } from "react";

function AdminLogin({ onSuccess }) {
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const res = await fetch("http://localhost:5000/api/admin-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ password }),
    });

    const data = await res.json();

    if (res.ok && data.success) {
      localStorage.setItem("isAdmin", "true"); // ✅ बस यही add किया
      onSuccess(); // AdminPage unlock
    } else {
      alert("Wrong password!");
    }
  };

  return (
    <div className="p-6 text-center">
      <h2 className="text-xl font-bold mb-4">Enter Admin Password</h2>

      <input
        type="password"
        placeholder="Admin Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 mr-2"
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </div>
  );
}

export default AdminLogin;