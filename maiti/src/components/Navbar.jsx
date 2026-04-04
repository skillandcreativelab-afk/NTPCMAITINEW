import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/check-auth", {
      credentials: "include",
    })
      .then(res => {
        if (!res.ok) return null;
        return res.json();
      })
      .then(data => setUser(data))
      .catch(() => setUser(null));
  }, []);

  return (
    <div className="w-full">
      {/* --- Nayi Patti (Top Bar) --- */}
<div className="bg-[#f0f3f7] text-[#1182f3] text-center py-3 px-4 border-b-2 border-gray-300 uppercase shadow-inner">
  <h1 className="text-lg md:text-3xl font-extrabold tracking-tighter sm:tracking-normal">
    NTPC MINING AND INDUSTRIAL TRAINING INSTITUTE DHENGA BARKAGAON
  </h1>
</div>

      {/* Aapka Original Navbar (No Changes) */}
      <div className="navbar bg-[#0b2a4a] h-20 text-white px-4 md:px-6 shadow-lg">

        {/* Logo */}
        <div className="flex-1">
          <Link to="/" className="flex items-center gap-2 md:gap-3">
            <img
              src="/Copilot_20260312_142706-removebg-preview.png"
              alt="NTPC Logo"
              className="h-14 md:h-16 w-auto"
            />
            <span className="sr-only">
              NTPC MINING AND INDUSTRIAL TRAINING INSTITUTE
            </span>
          </Link>
        </div>

        {/* Menu */}
        <div className="flex flex-wrap gap-3 md:gap-6 font-semibold items-center text-sm md:text-base">

          <Link className="hover:text-yellow-300 transition" to="/">Home</Link>

          <Link className="hover:text-yellow-300 transition" to="/courses">
            Courses
          </Link>

          {/* About Dropdown */}
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="cursor-pointer hover:text-yellow-300">
              About ▼
            </label>
            <ul className="dropdown-content menu p-2 shadow-lg bg-white text-black rounded-box w-56">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/about/imc-chairman">IMC Chairman & Members</Link></li>
              <li><Link to="/about/admission">Admission</Link></li>
              <li><Link to="/about/infrastructure">Infrastructure</Link></li>
              <li><Link to="/about/affiliation">Affiliation & Certificate</Link></li>
              <li><Link to="/about/awards">Awards & Achievements</Link></li>
            </ul>
          </div>

          {/* Our Team */}
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="cursor-pointer hover:text-yellow-300">
              Our Team ▼
            </label>
            <ul className="dropdown-content menu p-2 shadow-lg bg-white text-black rounded-box w-56">
              <li><Link to="/our-team/technical-faculty">Technical Faculty</Link></li>
              <li><Link to="/our-team/administrative-staffs">Administrative Staffs</Link></li>
            </ul>
          </div>

          <Link className="hover:text-yellow-300 transition" to="/gallery">
            Gallery
          </Link>

          {/* Trainees */}
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="cursor-pointer hover:text-yellow-300">
              Trainees ▼
            </label>
            <ul className="dropdown-content menu p-2 shadow-lg bg-white text-black rounded-box w-56">
              <li><Link to="/trainees/yearwise">Yearwise</Link></li>
              <li><Link to="/trainees/placement">Placement</Link></li>
              <li><Link to="/trainees/achievements">Achievements</Link></li>
            </ul>
          </div>

          <Link className="hover:text-yellow-300 transition" to="/notice">
            Notice
          </Link>

          {user && (
            <Link className="hover:text-yellow-300 transition" to="/trainees/adminpage">
              Admin
            </Link>
          )}

          {/* Apply Button */}
          <Link
            to="/apply"
            className="btn bg-green-600 hover:bg-green-700 text-white font-bold text-sm md:text-base"
          >
            Apply Now
          </Link>

          {/* Login / Logout Button */}
          {user ? (
            <a href="http://localhost:5000/logout">
              <button className="btn bg-red-600 hover:bg-red-700 text-white font-bold text-sm md:text-base">
                Logout
              </button>
            </a>
          ) : (
            <a href="http://localhost:5000/auth/google">
              <button className="btn bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm md:text-base">
                Login
              </button>
            </a>
          )}

        </div>
      </div>
    </div>
  );
}

export default Navbar;