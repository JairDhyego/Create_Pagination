import { useEffect, useState } from "react";
import PaginationComponents from "./components/paginationComponents";
import PaginationSelect from "./components/paginationSelect";

function App() {
  const [itens, setItens] = useState([]);
  const [itensPerPage, setItensPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(itens.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = itens.slice(startIndex, endIndex);

  const fetchData = async () => {
    let result = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    let data = await result.json();
    return setItens(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setCurrentPage(0);
  }, [itensPerPage]);

  return (
    <div className="App">
      <PaginationSelect
        itensPerPage={itensPerPage}
        setItensPerPage={setItensPerPage}
      />

      {currentItens.map((item, i) => (
        <div className="item" key={i}>
          <span>{item.id}</span> <span>{item.title}</span>
        </div>
      ))}

      <PaginationComponents
        currentPage={currentPage}
        pages={pages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
