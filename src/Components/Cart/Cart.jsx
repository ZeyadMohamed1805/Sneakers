import React from 'react';
import "./CartDesktop.css";
import "./CartMobile.css";

export const Cart = (props) => {
  const thumbnails = props.product.thumbnails;

  return (
    <div id="cart" style={{display: `${props.cart}`}}>
        <p id="cart-header">Cart</p>
        <p id="cart-empty" style={{display: `${props.hide}`}}>Your cart is empty.</p>
        <div id="cart-addition" style={{display: `${props.show}`}}>
          <div id="cart-item">
            <img id="thumbnail" src={require("./image-product-1-thumbnail.jpg")} alt="Item" />
            <div id="item-paragraphs">
              <p>{props.product.header}</p>
              <p>${props.product.originalPrice * (props.product.discount / 100)}.00 x {props.add} <span>${`${(props.product.originalPrice * (props.product.discount / 100)) * props.add}`}.00</span></p>
            </div>
            <img id="delete" src={require("./icon-delete.svg").default} alt="Delete" onClick={() => {{props.setShow("none")} {props.setHide("grid")} {props.setAdd(0)}}} />
          </div>
          <a href="#">Checkout</a>
        </div>
    </div>
  )
}
