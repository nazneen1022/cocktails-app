import React from "react";
import { NavLink } from "react-router-dom";

export default function () {
  return (
    <div
      style={{
        margin: "10px",
        padding: "10px",
        border: "1px solid",
      }}
    >
      <NavLink
        style={{
          fontWeight: "bold",
          display: "inline",
          fontSize: "20px",
          color: "black",
          margin: "40px",
          padding: "40px",
        }}
        exact={true}
        to="/Cocktails"
      >
        <u>Home</u>
      </NavLink>

      <NavLink
        style={{
          fontWeight: "bold",
          display: "inline",
          margin: "40px",
          padding: "40px",
        }}
        to="/Cocktails/searchByName"
      >
        <u>Search</u>
      </NavLink>
    </div>
  );
}
