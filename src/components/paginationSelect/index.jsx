import React from "react";

// import { Container } from './styles';

function PaginationSelect({ itensPerPage, setItensPerPage }) {
  return (
    <div>
      Itens por pagina:
      <select
        value={itensPerPage}
        onChange={(e) => setItensPerPage(Number(e.target.value))}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={25}>25</option>
      </select>
    </div>
  );
}

export default PaginationSelect;
