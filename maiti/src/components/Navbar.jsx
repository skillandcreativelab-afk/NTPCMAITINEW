import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-[#0b2a4a] h-20 text-white px-6 shadow-lg">

      {/* Logo */}
      <div className="flex-1">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/Copilot_20260312_142706-removebg-preview.png"
            alt="NTPC Logo"
            className="h-22 w-auto]"
          />

          <span className="sr-only">
            NTPC MINING AND INDUSTRIAL TRAINING INSTITUTE
          </span>
        </Link>
      </div>

      {/* Menu */}
      <div className="flex gap-6 font-semibold items-center">

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

        <Link className="hover:text-yellow-300 transition" to="/download">
          Download
        </Link>

        <Link className="hover:text-yellow-300 transition" to="/trainees/adminpage">
          Admin
        </Link>

        {/* Apply Button */}
        <Link
          to="/apply"
          className="btn bg-green-600 hover:bg-green-700 text-white font-bold"
        >
          Apply Now
        </Link>

      </div>
    </div>
  );
}

export default Navbar;