import Header from "../components/Header";
import Filters from "../components/Filters";
import Card from "../components/Card";
import "./catalog.css";
import React, { useState, useContext, useEffect } from "react";
import { Context } from "../Store";
function Catalog(props) {
  const [state, setState] = useContext(Context);
  useEffect(() => {
    console.log("Cart updated!", state.shoppingList);
  }, [state]);
  const [selectedCategory, setSelectedCategory] = useState("litro");

  function renderCards(data) {
    return data.map((item) => {
      return (
        <Card
          key={item.id}
          image={item.image}
          title={item.title}
          description={item.description}
          setShoppingList={setState}
          item={item}
          selectedCategory={selectedCategory}
          shoppingList={state.shoppingList}
        />
      );
    });
  }

  return (
    <div>
      <Header showcart={true} />
      <Filters
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
        style={{ marginTop: "85px", marginBottom: "85px" }}
      />

      <div id="totalselected">Carrito ({state.shoppingList.length})</div>
      <div>{renderCards(props.data)}</div>
    </div>
  );
}
export default Catalog;
