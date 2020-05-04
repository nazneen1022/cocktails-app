import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Axios from "axios";

export default function CocktailCategories() {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await Axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
      );

      setCocktails(response.data.drinks);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h4>
        <b>Cocktails Home.</b>
      </h4>
      List of Cocktail Categories :
      <ol>
        {cocktails.map((cocktail) => {
          return (
            <NavLink
              to={`/Cocktails/${encodeURIComponent(cocktail.strCategory)}`}
            >
              <li>{cocktail.strCategory}</li>
            </NavLink>
          );
        })}
      </ol>
    </div>
  );
}
