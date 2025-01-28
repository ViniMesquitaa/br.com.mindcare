import "./styles.css";

const TableSearch = ({ columns = [] }) => {
  return (
    <section className="table-header-search">
      {columns.map((title) =>
        title.name === "details" ? (
          ""
        ) : (
          <section>
            <p>{title.label}</p>
            <input
              type="text"
              name={`input-${title.name}`}
              id={`input-${title.name}`}
            />
          </section>
        )
      )}
      <button type="button">Buscar</button>
    </section>
  );
};

export default TableSearch;
