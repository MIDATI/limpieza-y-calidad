import Header from "../components/Header";
import Filters from "../components/Filters";
import Card from "../components/Card";
function Catalog(props) {
  function renderCards(data) {
    console.log(data);

    return data.map((item) => {
      return (
        <Card
          image={item.image}
          title={item.title}
          description={item.description}
        />
      );
    });
  }

  return (
    <div>
      <Header showcart={true} />
      <Filters style={{ marginTop: "85px", marginBottom: "85px" }} />
      <div>{renderCards(props.data)}</div>
    </div>
  );
}
export default Catalog;
