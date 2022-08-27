import React from "react";
import Book from "../assets/images/book.jpg";
const Card = () => {
  return (
    <>
      <div className="card">
        <img src={Book} alt="" />
        <div className="bottom">
          <h3 className="title">React Js</h3>
          <p className="amount">$100</p>
        </div>
      </div>
    </>
  );
};

export default Card;
