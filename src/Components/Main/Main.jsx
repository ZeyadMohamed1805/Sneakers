import React from 'react';
import { Product } from '../Product/Product';
import { Info } from '../Info/Info';
import "./MainDesktop.css";
import "./MainMobile.css";

export const Main = (props) => {
  return (
    <main id="main">
        <div id="main-container">
            <Product setDisplay={props.setDisplay} arrow={props.arrow} setArrow={props.setArrow} available={"none"} setDisplayView={props.setDisplayView} />
            <Info product={props.product} count={props.count} setCount={props.setCount} setShow={props.setShow} setHide={props.setHide} setAdd={props.setAdd} />
        </div>
    </main>
  )
}
