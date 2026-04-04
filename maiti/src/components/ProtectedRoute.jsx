import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import AdminLogin from "./AdminLogin";

function ProtectedRoute({ children }) {
  const [auth, setAuth] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/check-auth", { credentials: "include" })
      .then(res => res.ok ? res.json() : Promise.reject())
      .then(() => setAuth(true))
      .catch(() => setAuth(false));
  }, []);

  if (auth === null) return <div>Loading...</div>;
  if (auth === false) return <Navigate to="/" />;

  // Agar admin password abhi tak nahi diya
  if (!isAdmin) {
    return <AdminLogin onSuccess={() => setIsAdmin(true)} />;
  }

  return children;
}

export default ProtectedRoute;
