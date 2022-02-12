import "./style/Filters.css";

function Filters(props) {
  function handleClick(category) {
    props.setSelectedCategory(category);
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        ...props.style,
      }}
    >
      <button
        onClick={() => {
          handleClick("litro");
        }}
        className={`btn ${props.selectedCategory === "litro" ? "active" : ""}`}
      >
        <p>Litro</p>
      </button>
      <button
        onClick={() => {
          handleClick("galon");
        }}
        className={`btn ${props.selectedCategory === "galon" ? "active" : ""}`}
      >
        <p>Galón</p>
      </button>
      <button
        onClick={() => {
          handleClick("garrafa");
        }}
        className={`btn ${
          props.selectedCategory === "garrafa" ? "active" : ""
        }`}
      >
        <p>Garrafa</p>
      </button>
    </div>
  );
}

export default Filters;
