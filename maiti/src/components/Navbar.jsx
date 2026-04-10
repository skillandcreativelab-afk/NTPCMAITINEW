import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Check login status on load
  useEffect(() => {
    fetch("http://localhost:5000/api/check-auth", {
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) return null;
        return res.json();
      })
      .then((data) => setUser(data))
      .catch(() => setUser(null));
  }, []);

  // --- Naya Logout Logic ---
  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/logout", {
        credentials: "include",
      });

      if (res.ok) {
        setUser(null); // UI se Admin/Logout button turant hat jayega
        alert("Logged out successfully!");
        navigate("/"); // Home page par bhej dega
      }
    } catch (err) {
      console.error("Logout failed", err);
      // Forcefully state clear karein agar network error ho
      setUser(null);
      window.location.href = "/";
    }
  };

  return (
    <div className="w-full">
      <div className="navbar bg-[#0b2a4a] h-20 text-white px-4 md:px-6 shadow-lg">
        {/* Logo Section */}
        <div className="flex-1">
          <Link to="/" className="flex items-center gap-2 md:gap-3">
            <img
              src="/Copilot_20260312_142706-removebg-preview.png"
              alt="NTPC Logo"
              className="h-14 md:h-16 w-auto"
            />
          </Link>
        </div>

        {/* Menu Section */}
        <div className="flex flex-wrap gap-3 md:gap-6 font-semibold items-center text-sm md:text-base">
          <Link className="hover:text-yellow-300 transition" to="/">Home</Link>
          <Link className="hover:text-yellow-300 transition" to="/courses">Courses</Link>

          {/* About Dropdown */}
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="cursor-pointer hover:text-yellow-300">About ▼</label>
            <ul className="dropdown-content menu p-2 shadow-lg bg-white text-black rounded-box w-56 z-50">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/about/imc-chairman">IMC Chairman & Members</Link></li>
              <li><Link to="/about/admission">Admission</Link></li>
              <li><Link to="/about/infrastructure">Infrastructure</Link></li>
              <li><Link to="/about/affiliation">Affiliation & Certificate</Link></li>
              <li><Link to="/about/awards">Awards & Achievements</Link></li>
            </ul>
          </div>

          {/* Our Team Dropdown */}
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="cursor-pointer hover:text-yellow-300">Our Team ▼</label>
            <ul className="dropdown-content menu p-2 shadow-lg bg-white text-black rounded-box w-56 z-50">
              <li><Link to="/our-team/technical-faculty">Technical Faculty</Link></li>
              <li><Link to="/our-team/administrative-staffs">Administrative Staffs</Link></li>
            </ul>
          </div>

          <Link className="hover:text-yellow-300 transition" to="/gallery">Gallery</Link>

          {/* Trainees Dropdown */}
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="cursor-pointer hover:text-yellow-300">Trainees ▼</label>
            <ul className="dropdown-content menu p-2 shadow-lg bg-white text-black rounded-box w-56 z-50">
              <li><Link to="/trainees/yearwise">Yearwise</Link></li>
              <li><Link to="/trainees/placement">Placement</Link></li>
              <li><Link to="/trainees/achievements">Achievements</Link></li>
            </ul>
          </div>

          <Link className="hover:text-yellow-300 transition" to="/notice">Notice</Link>

          {/* Admin Link (Sirf login hone ke baad dikhega) */}
          {user && (
            <Link className="hover:text-yellow-300 transition text-yellow-400 font-bold underline underline-offset-4" to="/trainees/adminpage">
              Admin Panel
            </Link>
          )}

          {/* Apply Button */}
          <Link
            to="/apply"
            className="btn bg-green-600 hover:bg-green-700 text-white font-bold text-sm md:text-base border-none"
          >
            Apply Now
          </Link>

          {/* Logout Button (Login Button hat gaya hai, ab sirf Logout dikhega agar user logged-in hai) */}
          {user && (
            <button 
              onClick={handleLogout}
              className="btn bg-red-600 hover:bg-red-700 text-white font-bold text-sm md:text-base border-none"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;