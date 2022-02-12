import React, { useState, useContext } from "react";
import "./ShoppingCart.css";
import Product from "./Product";
import Header from "./Header";
import { Link } from "react-router-dom";
import { Context } from "../Store";
function ShoppingCart() {
  const [state, setState] = useContext(Context);

  function handleDelete(id) {
    console.log(id);
    setState({
      shoppingList: state.shoppingList.filter((product) => product.id !== id),
    });
  }
  function renderProducts(shoppingList) {
    if (shoppingList.length === 0) {
      return (
        <>
          <p style={{ textAlign: "center", marginTop: "50px" }}>
            Tu Carrito de compras está vacío
            <br />
            <Link to="/">Regresar al catálogo</Link>
          </p>
        </>
      );
    }
    return state.shoppingList.map((product, idx) => {
      return (
        <Product
          key={idx}
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          selectedCategory={product.selectedCategory}
          handleDelete={handleDelete}
        />
      );
    });
  }

  return (
    <div>
      <Header />
      <div id="main_box" className="box">
        <h1 id="main_title">
          {state.name}
          Resumen de tu compra ({state.shoppingList.length})
        </h1>
      </div>
      <div className="box inline_ wb">
        <p className="mr-30">Precio</p>
        <p className="mr-20">SubTotal</p>
      </div>
      <div>{renderProducts(state.shoppingList)}</div>
    </div>
  );
}
export default ShoppingCart;
