import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Product from "./Product";
export default function ProductDetails({cart,setCart}) {
  const { id } = useParams();


  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);
  useEffect(() => {
    const filterProduct = items.filter((product) => product.id == id);
    // console.log("Data",filterProduct);
    //filter return the array so for that reason we use the filter

    setProduct(filterProduct[0]);

    // const realtedData=items.filter((product)=>filterProduct[0].category==product.category);
    //or
    const realtedData = items.filter((p) => p.category == product.category);
    setRelatedProduct(realtedData);
    console.log("Related Product", realtedData);
  }, [id, product.category]);



  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
      id,
      price,
      title,
      description,
      imgSrc,
    };
    setCart([...cart, obj]);
  };
  return (
    <>
      <div className="container con">
        <div className="img">
          <img src={product.imgSrc} alt="Loading.." />
        </div>
        <div className="text-center">
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary mx-3">
            {product.price} {" ₹"}
          </button>
          <button className="btn btn-warning" onClick={()=>addToCart(product.id,product.price,product.title,product.description,product.imgSrc)} >Add To Cart</button>
        </div>
      </div>

      
      <h1 className="text-center mt-9">Related Products</h1>
      <Product items={relatedProduct} cart={cart} setCart={setCart}/>
    </>
  );
}
