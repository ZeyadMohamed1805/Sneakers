import React from 'react';
import { useState } from 'react';
import "./ProductDesktop.css";
import "./ProductMobile.css";

export const Product = (props) => {
  const [chosen, setChosen] = useState("./image-product-1.jpg");
  const productPhotos = [
    {id: 1, image: "./image-product-1.jpg", thumbnail: "./image-product-1-thumbnail.jpg"},
    {id: 2, image: "./image-product-2.jpg", thumbnail: "./image-product-2-thumbnail.jpg"},
    {id: 3, image: "./image-product-3.jpg", thumbnail: "./image-product-3-thumbnail.jpg"},
    {id: 4, image: "./image-product-4.jpg", thumbnail: "./image-product-4-thumbnail.jpg"}
  ]

  const switching = (tag) => {
    const current = chosen[16];

    if (tag == "right" && current < 4) {
      setChosen(`./image-product-${Number(current) + 1}.jpg`);
    } else if (tag == "left" && current > 1) {
      setChosen(`./image-product-${Number(current) - 1}.jpg`);
    }
  }

  return (
    <div id="product">
      <i id="back" className="fa-solid fa-angle-left" style={{display: `${props.available}`}} onClick={() => switching("left")}></i>
      <i id="next" className="fa-solid fa-angle-right" style={{display: `${props.available}`}} onClick={() => switching("right")}></i>
      <img id="product-viewed" src={require(`${chosen}`)} alt="Product" onClick={() => { if (window.innerWidth > 1000) { props.setArrow("flex"); props.setDisplayView("flex")}}} />
      <div id="product-images">
        {productPhotos.map(tag => (
          <img key={tag.id} src={require(`${tag.thumbnail}`)} alt="Thumbnail" onClick={() => setChosen(`${tag.image}`)} />
        ))}
      </div>
    </div>
  )
}
