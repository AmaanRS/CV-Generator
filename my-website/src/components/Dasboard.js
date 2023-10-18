import React from "react";
import { Link } from "react-router-dom";

const Dasboard = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center">
      <div className="logo mx-5"></div>
      <div className="nav flex flex-column flex-md-row justify-content-center align-items-center">
        <ul className="list-inline text-center">
          <Link href={"/"}>
            <li className="list-inline-item p-2">T-shirts</li>
          </Link>
          <Link href={"/"}>
            <li className="list-inline-item p-2">Hoodies</li>
          </Link>
          <Link href={"/"}>
            <li className="list-inline-item p-2">Stickers</li>
          </Link>
          <Link href={"/"}>
            <li className="list-inline-item p-2">Mugs</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Dasboard;
