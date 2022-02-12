import React, { useContext } from "react";
import "./style/cards.css";
import { Context } from "../Store";

function Card(props) {
  const [state, setState] = useContext(Context);
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  if (!props.item.categories[props.selectedCategory]) {
    return null;
  }
  return (
    <div id="card">
      <div style={{ display: "flex" }}>
        <img alt="" id="jabonrey" src={props.image} />
        <div id="description">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>
      </div>
      <button
        className={`button ${
          state.shoppingList.some((it) => it["id"] === props.item.id)
            ? "disabled"
            : ""
        }`}
        onClick={() => {
          if (!props.shoppingList.some((it) => it["id"] === props.item.id))
            props.setShoppingList({
              shoppingList: [
                ...props.shoppingList,
                {
                  ...props.item,
                  price: props.item.categories[props.selectedCategory],
                  selectedCategory: props.selectedCategory,
                },
              ],
            });
        }}
      >
        Agregar al carrito
      </button>

      {capitalize(props.selectedCategory) +
        " " +
        "$" +
        props.item.categories[props.selectedCategory]}
    </div>
  );
}
export default Card;
