import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// Agar aapne icons use kiye hain toh:
import { FaGlobeAmericas, FaPhoneAlt, FaCamera, FaRocket } from "react-icons/fa";

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
    
    <div className="w-full">{/* --- FINAL FIXED NAVBAR LOGO HEADER --- */}
{/* --- FINAL BALANCED NAVBAR HEADER --- */}
<motion.div 
  initial={{ opacity: 0, y: -10 }} 
  animate={{ opacity: 1, y: 0 }} 
  className="w-full flex-1 relative z-20"
>
  {/* px-2 ya px-3 add karne se dono taraf barabar margin mil jayega */}
  <div className="bg-white/5 backdrop-blur-md rounded-xl md:rounded-full p-1 border border-white/10 flex items-center shadow-lg px-2 md:px-3">
    
    {/* 1. Left Section: NTPC Logo (Start) */}
    <div className="flex-1 flex items-center gap-1 md:gap-2 justify-start"> 
      <img 
        src="/addmission slip logo/ntpc.jpeg" 
        alt="NTPC" 
        className="h-8 md:h-11 w-auto object-contain" 
        onError={(e) => { e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Placeholder_logo.svg'; }} 
      />
      <span className="hidden lg:block font-black text-white text-[9px] md:text-[11px] uppercase tracking-tighter leading-tight">
        NTPC <br/> Limited
      </span>
    </div>

    {/* 2. Center Section: MAITI (Fixed) */}
    <div className="flex-none flex items-center gap-1.5 md:gap-2 px-2 md:px-6 border-x border-white/10">
      <span className="hidden sm:block font-black text-white text-[9px] md:text-[11px] uppercase tracking-tighter text-right leading-none">
        MAITI <br className="md:hidden" /> Institute
      </span>
      <img 
        src="/addmission slip logo/maiti.png" 
        alt="MAITI" 
        className="h-6 md:h-8 w-auto object-contain rounded-sm" 
        onError={(e) => { e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Placeholder_logo.svg'; }} 
      />
    </div>

    {/* 3. Right Section: Tool Room Logo (End) */}
    <div className="flex-1 flex items-center gap-1 md:gap-2 justify-end">
      <span className="hidden lg:block font-black text-white text-[9px] md:text-[11px] uppercase tracking-tighter leading-tight text-right">
        TOOL <br/> ROOM
      </span>
      <img 
        src="/addmission slip logo/TOOL ROOM.jpeg" 
        alt="TOOL ROOM" 
        className="h-8 md:h-11 w-auto object-contain rounded-sm" 
        onError={(e) => { e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Placeholder_logo.svg'; }} 
      />
    </div>

  </div>
</motion.div>
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