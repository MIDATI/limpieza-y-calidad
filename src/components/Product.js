import "./Product.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // solid,
  regular,
  // brands,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

function Product(props, { children }) {
  const [total, setTotal] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        // border: "1px black solid",
        borderRadius: "5px",
        width: "96%",
        margin: "5px auto",
        flexDirection: "column",
        borderBottom: "2px solid gray",
        // backgroundColor: "red",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            width: "30%",
            // backgroundColor: "blue",
            textAlign: "center",
          }}
        >
          <p>
            {props.title} ({props.selectedCategory})
          </p>
        </div>
        <div
          style={{
            display: "inline-block",
            width: "70%",
            // backgroundColor: "cyan",
            textAlign: "right",
            paddingTop: "15px",
            paddingBottom: "auto",
            // paddingRight: "30px",
          }}
        >
          <p style={{ display: "inline" }}>${props.price}</p>
          <p
            style={{
              marginRight: "30px",
              marginLeft: "30px",
              display: "inline",
            }}
          >
            ${props.price * total}
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <div
          style={{
            width: "30%",
            // backgroundColor: "green"
          }}
        >
          <img
            alt=""
            src={props.image}
            style={{
              width: "95%",
              height: "100px",
              borderRadius: "20px",
              margin: "0 auto",
            }}
          />
        </div>
        <div
          style={{
            // backgroundColor: "red",
            width: "70%",
            minHeight: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              // backgroundColor: "purple",
              justifyContent: "space-around",

              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "flex-end",
                width: "100px",
                margin: "0 auto",
                height: "30px",
                // backgroundColor: "green",
              }}
            >
              <button
                style={{
                  width: "25px",
                  height: "25px",
                  backgroundColor: "transparent",
                  border: "none",
                }}
                onClick={() => {
                  if (total > 0) {
                    setTotal(total - 1);
                  }
                }}
              >
                <p style={{ marginTop: "-20px", fontSize: "50px" }}>-</p>
              </button>
              <div
                style={{
                  display: "flex",
                  border: "2px solid gray",
                  borderRadius: "8px",
                  width: "25px",
                  height: "25px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p>{total}</p>
              </div>
              <button
                style={{
                  width: "25px",
                  height: "25px",
                  backgroundColor: "transparent",
                  border: "none",
                }}
                onClick={() => {
                  setTotal(total + 1);
                }}
              >
                <p style={{ marginTop: "-5px", fontSize: "30px" }}>+</p>
              </button>
            </div>
            <div style={{ margin: "auto" }}>
              <button
                style={{ backgroundColor: "transparent", border: "none" }}
                onClick={() => {
                  props.handleDelete(props.id);
                }}
              >
                <FontAwesomeIcon
                  style={{ height: "30px" }}
                  icon={regular("trash-can")}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
