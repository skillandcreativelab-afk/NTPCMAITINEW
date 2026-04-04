import React from "react";

function Pagination({ currentPage, totalPages, setCurrentPage }) {
  return (
    <div className="flex justify-center mt-6 gap-2 flex-wrap">

      <button
        className="btn btn-sm"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Prev
      </button>

      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          className={`btn btn-sm ${
            currentPage === i + 1 ? "btn-primary" : ""
          }`}
          onClick={() => setCurrentPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}

      <button
        className="btn btn-sm"
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>

    </div>
  );
}

export default Pagination;