import "./style/Filters.css";

function Filters(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        ...props.style,
      }}
    >
      <button className="btn">
        <p>Litro</p>
      </button>
      <button className="btn">
        <p>Galón</p>
      </button>
      <button className="btn">
        <p>Garrafa</p>
      </button>
    </div>
  );
}

export default Filters;
