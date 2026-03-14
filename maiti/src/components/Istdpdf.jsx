import React from "react";

function Istdpdf() {
  return (
    <div className="flex flex-col items-center bg-gray-200 min-h-screen p-10 gap-10">

      {/* Page 1 */}
      <div className="bg-white shadow-lg w-[794px] h-[1123px] p-2 border">
        <img
          src="/ISTD/ISTD  National Conference 2026 Brochure_page-0001.jpg"
          alt="A4 Brochure"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Page 2 */}
      <div className="bg-white shadow-lg w-[794px] h-[1123px] p-2 border">
        <img
          src="ISTD\ISTD  National Conference 2026 Brochure_page-0002.jpg"
          alt="A4 Brochure"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Page 3 */}
      <div className="bg-white shadow-lg w-[794px] h-[1123px] p-2 border">
        <img
          src="/ISTD/ISTD  National Conference 2026 Brochure_page-0003.jpg"
          alt="A4 Brochure"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Page 4 */}
      <div className="bg-white shadow-lg w-[794px] h-[1123px] p-2 border">
        <img
          src="/ISTD/ISTD  National Conference 2026 Brochure_page-0004.jpg"
          alt="A4 Brochure"
          className="w-full h-full object-contain"
        />
      </div>

    </div>
  );
}

export default Istdpdf;