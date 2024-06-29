import React from "react";
import { Link } from "react-router-dom";

export default function Cart({ cart, setCart }) {
  return (
    <>
      <div className="container">
        {cart.length != 0 ? (
          <div className="container1 my-5 text-center" style={{ width: "54%" }}>
            {cart.map((product) => {
              return (
                <>
                  <div className="card mb-3 my-5" style={{ width: "700px" }}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={product.imgSrc}
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body text-center">
                          <h5 className="card-title">{product.title}</h5>
                          <p className="card-text">{product.description}</p>

                          <button className="btn btn-primary mx-3">
                            {product.price} {" ₹"}
                          </button>

                          <button
                            className="btn btn-warning"
                            onClick={() =>
                              addToCart(
                                product.id,
                                product.price,
                                product.title,
                                product.description,
                                product.imgSrc
                              )
                            }
                          >
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        ) : (
          <>
            <h1>Cart is Empty</h1>
            <br/>
            <hr/>
            <Link to={"/"} className="btn btn-warning" >
              Continue Shopping...
            </Link>
            
          </>
        )}
      </div>
      {cart.length != 0 && (
        <div className="container text-center my-5">
          <button className="btn btn-warning mx-4">CheckOut</button>
          <button className="btn btn-danger" onClick={() => setCart([])}>
            Clear Cart
          </button>
        </div>
      )}
    </>
  );
}

