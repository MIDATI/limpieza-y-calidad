import React, { useState } from "react";
import "./ShoppingCart.css";
import Product from "./Product";
import Header from "./Header";
import { Link } from "react-router-dom";
function ShoppingCart() {
  const [selectedProducts, setSelectedProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 1000,
      image: "https://picsum.photos/200/100",
    },
    {
      id: 2,
      name: "Product 2",
      price: 2000,
      image: "https://picsum.photos/200/200",
    },
    {
      id: 3,
      name: "Product 3",
      price: 3000,
      image: "https://picsum.photos/200/300",
    },
    {
      id: 4,
      name: "Product 4",
      price: 4000,
      image: "https://picsum.photos/200/400",
    },
    {
      id: 5,
      name: "Product 5",
      price: 5000,
      image: "https://picsum.photos/200/500",
    },
  ]);
  // const [total, setTotal] = useState(0);
  function handleDelete(id) {
    console.log(id);
    setSelectedProducts(
      selectedProducts.filter((product) => product.id !== id)
    );
  }
  function renderProducts(selectedProducts) {
    if (selectedProducts.length === 0) {
      return (
        <p style={{ textAlign: "center", marginTop: "50px" }}>
          Tu Carrito de compras está vacío{" "}
          <Link to="/">
            <p>Regresar al catálogo</p>
          </Link>
        </p>
      );
    }
    return selectedProducts.map((product, idx) => {
      return (
        <Product
          key={idx}
          id={product.id}
          title={product.name}
          price={product.price}
          image={product.image}
          total={1}
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
          Resumen de tu compra ({selectedProducts.length})
        </h1>
      </div>
      <div className="box inline_ wb">
        <p className="mr-30">Precio</p>
        <p className="mr-20">SubTotal</p>
      </div>
      <div>{renderProducts(selectedProducts)}</div>
    </div>
  );
}
export default ShoppingCart;
