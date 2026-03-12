import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";


import Home from "./components/Home";
import Courses from "./components/Courses";
import Gallery from "./components/Gallery";
import Download from "./components/Download";
import ApplyNow from "./components/ApplyNow";

// About pages
import About from "./components/About_folder/About";
import IMCChairman from "./components/About_folder/IMCChairman";
import Admission from "./components/About_folder/Admission";
import Infrastructure from "./components/About_folder/Infrastructure";
import AffiliationCertificate from "./components/About_folder/AffiliationCertificate";
import AwardAchievement from "./components/About_folder/AwardAchievement";

// Our Team pages
import TechnicalFaculty from "./components/OurTeam_folder/TechnicalFaculty";
import AdministrativeStaffs from "./components/OurTeam_folder/AdministrativeStaffs";

// Trainees pages
import Yearwise from "./components/Trainees_folder/Yearwise";
import Placement from "./components/Trainees_folder/Placement";
import Achievements from "./components/Trainees_folder/Achievements";
import AdminPage from "./components/AdminPage";
import Footer from "./components/Footer";






function App() {
  return (
    <Router>
      <Navbar />
      
     
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/download" element={<Download />} />
          <Route path="/apply" element={<ApplyNow />} />

          {/* About Dropdown Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/about/imc-chairman" element={<IMCChairman />} />
          <Route path="/about/admission" element={<Admission />} />
          <Route path="/about/infrastructure" element={<Infrastructure />} />
          <Route path="/about/affiliation" element={<AffiliationCertificate />} />
          <Route path="/about/awards" element={<AwardAchievement />} />

          {/* Our Team Dropdown Routes */}
          <Route path="/our-team/technical-faculty" element={<TechnicalFaculty />} />
          <Route path="/our-team/administrative-staffs" element={<AdministrativeStaffs />} />

          {/* Trainees Dropdown Routes */}
          <Route path="/trainees/yearwise" element={<Yearwise />} />
          <Route path="/trainees/placement" element={<Placement />} />
          <Route path="/trainees/achievements" element={<Achievements />} />
          <Route path="/trainees/adminpage" element={<AdminPage />} />
        </Routes>
            
      </div>
      <Footer/>
     
    
    
    </Router>
  );
}

export default App;
