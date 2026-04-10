import { useState } from "react";

function AdminLogin({ onSuccess }) {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/admin-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", 
        body: JSON.stringify({ username: "admin", password: password }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        onSuccess(); 
        window.location.reload(); 
      } else {
        alert(data.error || "Login Failed!");
      }
    } catch (error) {
      alert("Server connect nahi ho raha.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-md bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200 shadow-xl text-center">
        <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tight mb-2">
          Admin <span className="text-blue-600">Login</span>
        </h2>
        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-8">NTPC-MITI Management System</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="password"
            placeholder="Enter Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-6 py-4 rounded-2xl border-2 border-slate-200 outline-none focus:border-blue-500 text-center font-semibold"
            required
          />
          <button type="submit" disabled={loading} className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] text-white transition-all shadow-lg ${loading ? "bg-slate-400" : "bg-blue-600 hover:bg-blue-700"}`}>
            {loading ? "VERIFYING..." : "UNLOCK DASHBOARD"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;