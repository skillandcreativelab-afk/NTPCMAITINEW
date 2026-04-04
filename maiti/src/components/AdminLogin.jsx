import { useState } from "react";

function AdminLogin({ onSuccess }) {
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/admin-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        // Sirf password login par isSuperAdmin set hoga
        localStorage.setItem("isSuperAdmin", "true"); 
        onSuccess(); 
      } else {
        alert("Wrong password!");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Server error!");
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
        className="border p-2 mr-2 rounded"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all"
      >
        Submit
      </button>
    </div>
  );
}

export default AdminLogin;