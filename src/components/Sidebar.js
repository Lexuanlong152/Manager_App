import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Sidebar() {
  return (
    <div>
      <div className="bg-dark col-md-2 min-vh-100">
        <a className="text-decoration-none text-white d-flex align-itemcenter ms-5 ">
          <i className="fs-4 bi bi-speedometer"></i>
          <span className="ms-1 fs-4">Brand</span>
        </a>
        <hr className="text-secondary" />
        <ul className="nav nav-pills flex-column  ">
          <li className="nav-item text-white fs-4 my-1 mx-4">
            <a
              href="#"
              className="nav-link text-white "
              aria-current="page"
            ></a>
            <i className=" bi bi-speedometer2"></i>
            <span className="ms-2">Dashboard</span>
          </li>
          <li className="nav-item text-white fs-4 my-1 mx-4">
            <a
              href="#"
              className="nav-link text-white fs-5"
              aria-current="page"
            ></a>
            <i className=" bi bi-house"></i>
            <span className="ms-2 ">Home</span>
          </li>
          <li className="nav-item text-white fs-4 my-1 mx-4">
            <a
              href="#"
              className="nav-link text-white fs-5"
              aria-current="page"
            ></a>
            <i className=" bi bi-table"></i>
            <span className="ms-2 ">Order</span>
          </li>
          <li className="nav-item text-white fs-4 my-1 mx-4">
            <a
              href="#"
              className="nav-link text-white fs-5"
              aria-current="page"
            ></a>
            <i className=" bi bi-grid"></i>
            <span className="ms-2 ">Product</span>
          </li>
          <li className="nav-item text-white fs-4 my-1 mx-4">
            <a
              href="#"
              className="nav-link text-white fs-5"
              aria-current="page"
            ></a>
            <i className=" bi bi-people"></i>
            <span className="ms-2 ">Customers</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
