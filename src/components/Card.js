import React from "react";
import "./style/cards.css";

function Card(props) {
  return (
    <div id="card">
      <div style={{ display: "flex" }}>
        <img alt="" id="jabonrey" src={props.image} />
        <div id="description">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>
      </div>
      <button id="button">Agregar al carrito</button>
    </div>
  );
}
export default Card;
