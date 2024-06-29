import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { items } from "./Data";
import {FaCartArrowDown} from 'react-icons/fa'

export const Navbar = ({cart, setData }) => {
  const filterByCatagory = (category) => {
    const data = items.filter((product) => product.category === category);
    setData(data);
    console.log(data);
  };
  const filterByMoney = (money) => {
    const data = items.filter((product) => product.price <= money);
    setData(data);
    console.log(data);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };


  const location=useLocation();
  console.log("Location",location);
  return (
    <>
      <header className="sticky-top">
        <div className="nav-bar">
          <Link to={"/"} className="brand">
            E-cart
          </Link>
          <form className="search-bar" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search Products"
              value={searchTerm}
              onChange={changeHandler}
            />
          </form>
          <Link to={"/cart"} className="cart">
            <button type="button" className="btn btn-primary position-relative">
              <FaCartArrowDown/>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>
        </div>

    {
      location.pathname=='/' && <div className="nav-bar-wrapper">
      <div className="items">Filter By -{">"}</div>
      <div className="items" onClick={() => setData(items)}>
        No Filter
      </div>
      <div className="items" onClick={() => filterByCatagory("mobiles")}>
        Mobiles
      </div>
      <div className="items" onClick={() => filterByCatagory("laptops")}>
        Laptops
      </div>
      <div className="items" onClick={() => filterByCatagory("tablets")}>
        Tablets
      </div>
      <div className="items" onClick={() => filterByMoney("29000")}>
        {"<="}29999
      </div>
      <div className="items" onClick={() => filterByMoney("49000")}>
        {"<="}49999
      </div>
      <div className="items" onClick={() => filterByMoney("69000")}>
        {"<="}69999
      </div>
      <div className="items" onClick={() => filterByMoney("89000")}>
        {"<="}89999
      </div>
    </div>
    }
        
      </header>
    </>
  );
};
