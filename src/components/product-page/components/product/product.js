/* eslint-disable react/prop-types */
import React from 'react'
import Controller from '../controls/controls'
import './product.css'

export default function Product({ props }) {
  const price = Number(props.cost)
  return (
    <div id="product-image-and-description">
      <div id="product-img-container">
        <img src={props.image_link} alt="product" id="product-img" />
      </div>
      <div id="description-container">
        <div id="product-name">{props.name}</div>
        <div id="price">
          <span>Giá: </span>
          {price}
          <span> đồng</span>
        </div>
        <div id="description">
          <div id="title-info">Mô tả sản phẩm</div>
          <div id="description-text">
            {props.description}
          </div>
        </div>
        <Controller props={props} />
      </div>
    </div>
  )
}
