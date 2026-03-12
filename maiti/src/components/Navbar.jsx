import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-[#800000] py-3] text-white px-6">

      {/* Logo / Home */}
    <div className="flex-1">
  <Link to="/" className=" flex items-center gap-2">
    <img 
      src="Copilot_20260312_142706-removebg-preview.png"   // यहाँ अपनी logo image का path दीजिए (public folder में रखें)
      alt="NTPC Logo" 
      className="kaushal"
    />
    
    <span className="sr-only">NTPC MINING AND INDUSTRIAL TRAINING INSTITUTE</span>
  </Link>
</div>


      {/* Menu Items */}
      <div className="flex gap-4 font-bold">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>

        {/* About Dropdown */}
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="cursor-pointer">About ▼</label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 text-black rounded-box w-52 font-normal">
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
          <label tabIndex={0} className="cursor-pointer">Our Team ▼</label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 text-black rounded-box w-52 font-normal">
            <li><Link to="/our-team/technical-faculty">Technical Faculty</Link></li>
            <li><Link to="/our-team/administrative-staffs">Administrative Staffs</Link></li>
          </ul>
        </div>

        {/* Gallery */}
        <Link to="/gallery">Gallery</Link>

        {/* Trainees Dropdown */}
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="cursor-pointer">Trainees ▼</label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 text-black rounded-box w-52 font-normal">
            <li><Link to="/trainees/yearwise">Yearwise</Link></li>
            <li><Link to="/trainees/placement">Placement</Link></li>
            <li><Link to="/trainees/achievements">Achievements</Link></li>
          </ul>
        </div>

        {/* Download */}
        <Link to="/download">Download</Link>
        <Link to="/trainees/adminpage">Admin</Link>

        {/* Apply Now Button */}
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
