import React from 'react';
import "./InfoDesktop.css";
import "./InfoMobile.css";

export const Info = (props) => {

  return (
    <div id="info">
        <h3>SNEAKER COMPANY</h3>
        <h1>{props.product.header}</h1>
        <p>{props.product.description}</p>
        <div id="info-price">
            <div id="info-discount">
                <h2>${props.product.originalPrice * (props.product.discount / 100)}.00</h2>
                <a href="#">{props.product.discount}%</a>
            </div>
            <p>${props.product.originalPrice}.00</p>
        </div>
        <div id="info-cart">
            <div id="counter">
                <img src={require("./icon-minus.svg").default} alt="Minus" onClick={() => { if (props.count > 0) {props.setCount(`${props.count - 1}`)}}}  />
                <h4>{props.count}</h4>
                <img src={require("./icon-plus.svg").default} alt="Plus" onClick={() => props.setCount(`${Number(props.count) + 1}`)} />
            </div>
            <a href="#" onClick={() => { if (props.count > 0) {{props.setHide("none")} {props.setShow("grid")} const number = props.count; {props.setAdd(number)}}}}>
                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#fff" fillRule="nonzero"/></svg>
                Add to cart
            </a>
        </div>
    </div>
  )
}
