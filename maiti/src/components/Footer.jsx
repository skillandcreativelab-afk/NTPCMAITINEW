import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">NTPC Site</h3>
          <p className="text-sm leading-relaxed">
            Empowering education and innovation. We provide quality learning resources and support for students and professionals.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-400 transition">About Us</Link></li>
            <li><Link to="/courses" className="hover:text-blue-400 transition">Courses</Link></li>
            <li><Link to="/gallery" className="hover:text-blue-400 transition">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacy" className="hover:text-blue-400 transition">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-blue-400 transition">Terms of Service</Link></li>
            <li><Link to="/careers" className="hover:text-blue-400 transition">Careers</Link></li>
            <li><Link to="/faq" className="hover:text-blue-400 transition">FAQ</Link></li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm mb-4">
            <li className="flex items-center gap-2"><FaMapMarkerAlt /> Ranchi, Jharkhand, India</li>
            <li className="flex items-center gap-2"><FaPhoneAlt /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><FaEnvelope /> info@ntpcsite.com</li>
          </ul>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="p-2 bg-gray-800 rounded-full hover:bg-blue-400 transition">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn" className="p-2 bg-gray-800 rounded-full hover:bg-blue-700 transition">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Instagram" className="p-2 bg-gray-800 rounded-full hover:bg-pink-500 transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} NTPC Site. All rights reserved. | Designed with ❤️ using TailwindCSS
      </div>
    </footer>
  );
}

export default Footer;
