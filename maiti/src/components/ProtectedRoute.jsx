import { useEffect, useState } from "react";
import AdminLogin from "./AdminLogin";

function ProtectedRoute({ children }) {
  const [isAdmin, setIsAdmin] = useState(null);

  // Security Check Logic
  useEffect(() => {
    fetch("http://localhost:5000/api/check-auth", { credentials: "include" })
      .then(res => res.ok ? setIsAdmin(true) : setIsAdmin(false))
      .catch(() => setIsAdmin(false));
  }, []);

  // Jab tak check ho raha hai
  if (isAdmin === null) return (
    <div className="flex flex-col items-center justify-center p-20">
      <div className="loading loading-spinner loading-lg text-primary"></div>
      <p className="mt-4 font-black text-slate-400 uppercase tracking-widest text-xs">Verifying Access...</p>
    </div>
  );

  // Agar admin nahi hai, toh Login Page dikhao
  if (!isAdmin) {
    // Logic: Login successful hone par setIsAdmin(true) ho jayega
    return <AdminLogin onSuccess={() => setIsAdmin(true)} />;
  }

  // Agar admin hai, toh dashboard (children) dikhao
  return children;
}

export default ProtectedRoute;