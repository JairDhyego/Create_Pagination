import React from "react";

// import { Container } from './styles';

function PaginationComponents({ pages, currentPage, setCurrentPage }) {
  return (
    <div id="btnContainer">
      {Array.from(Array(pages), (_, index) => {
        return (
          <button
            style={index === currentPage ? { backgroundColor: "green" } : null}
            id="btnpag"
            value={index}
            onClick={(e) => setCurrentPage(Number(e.target.value))}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
}

export default PaginationComponents;
