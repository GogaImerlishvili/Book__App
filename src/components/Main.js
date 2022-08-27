import React from "react";
import Books from "../assets/images/bg2.png";
import { FcSearch } from "react-icons/fc";
import Card from "./Card";

const Main = () => {
  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            A room without books is like
            <br /> a body without a soul.
          </h1>
        </div>

        <div className="row2">
          <h2>Find Your Book</h2>
          <div className="search">
            <input type="text" placeholder="Enter Your Book Name" />
            <button>{<FcSearch />}</button>
          </div>
          <img src={Books} alt="books" />
        </div>
      </div>

      <div className="container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Main;
