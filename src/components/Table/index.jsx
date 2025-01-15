import { ChevronLeft, ChevronRight } from "lucide-react";
import "./styles.css";

const Table = ({
  columns = [],
  rows = [],
  page = 1,
  size = 10,
  totalItems = 0,
  onPaginate,
}) => {
  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            {columns?.map((column, index) => (
              <th key={index}>{column?.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows?.map((row, index) => (
            <tr key={index}>
              {columns?.map((column, columnIndex) => (
                <td key={columnIndex}>{row?.[column?.name]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {onPaginate && (
        <div className="pagination">
          <button onClick={() => onPaginate(page - 1)} disabled={page <= 1}>
            <ChevronLeft />
          </button>

          {Array.from({ length: Math.ceil(totalItems / size) }, (_, i) => (
            <button
              key={i}
              className={page === i + 1 ? "currentPageButton" : ""}
              onClick={() => onPaginate(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => onPaginate(page + 1)}
            disabled={page >= Math.ceil(totalItems / size)}
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Table;
