import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import AdminLogin from "./AdminLogin";

function ProtectedRoute({ children }) {
  const [auth, setAuth] = useState(null);
  
  // Update: Check localStorage so it stays logged in after refresh
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("isSuperAdmin") === "true");

  useEffect(() => {
    fetch("http://localhost:5000/api/check-auth", { credentials: "include" })
      .then(res => res.ok ? res.json() : Promise.reject())
      .then(() => setAuth(true))
      .catch(() => setAuth(false));
  }, []);

  if (auth === null) return <div className="p-10 text-center font-bold">Syncing Records...</div>;
  
  if (auth === false) return <Navigate to="/" />;

  // Agar admin password abhi tak nahi diya (ya isSuperAdmin false hai)
  if (!isAdmin) {
    return (
      <AdminLogin 
        onSuccess={() => {
          // Update: Set isSuperAdmin to true for placement management
          localStorage.setItem("isSuperAdmin", "true");
          setIsAdmin(true);
        }} 
      />
    );
  }

  return children;
}

export default ProtectedRoute;