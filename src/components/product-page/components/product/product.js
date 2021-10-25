/* eslint-disable react/prop-types */
import React from 'react'
import './product.css'

export default function Product({ props }) {
  const price = Number(props.cost)
  return (
    <div id="product-container">
      <div id="img-container">
        <div id="product-name">{props.name}</div>
        <div id="product-img-container">
          <img src={props.image_link} alt="product" id="product-img" />
        </div>
      </div>
      <div id="description-container">
        <div id="price">
          <span>Giá: </span>
          {price}
          &nbsp;
          đồng
        </div>
        <div id="description">
          <h4>Mô tả sản phẩm:</h4>
          <p className="description">
            {props.description}
            Parapen để mô tả sản phẩm giờ
            truyền vào như thế nào ai biết
            làm sao ai biết làm sao như thế
            nào là làm sao
            Parapen để mô tả sản phẩm giờ
            truyền vào như thế nào ai biết
            làm sao ai biết làm sao như thế
            nào là làm sao
            Parapen để mô tả sản phẩm giờ
            truyền vào như thế nào ai biết
            làm sao ai biết làm sao như thế
            nào là làm sao
            Parapen để mô tả sản phẩm giờ
            truyền vào như thế nào ai biết
            làm sao ai biết làm sao như thế
            nào là làm saoParapen để mô tả sản phẩm giờ
            truyền vào như thế nào ai biết
            làm sao ai biết làm sao như thế
            nào là làm saoParapen để mô tả sản phẩm giờ
            truyền vào như thế nào ai biết
            làm sao ai biết làm sao như thế
            nào là làm saoParapen để mô tả sản phẩm giờ
            truyền vào như thế nào ai biết
            làm sao ai biết làm sao như thế
            nào là làm saoParapen để mô tả sản phẩm giờ
            truyền vào như thế nào ai biết
            làm sao ai biết làm sao như thế
            nào là làm saoParapen để mô tả sản phẩm giờ
            truyền vào như thế nào ai biết
          </p>
        </div>
      </div>
    </div>
  )
}
