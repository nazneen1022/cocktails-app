import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import Axios from "axios";

export default function CocktailDetails() {
  const searchParams = useParams();

  const [drinks, setCocktailDetails] = useState([]);
  // const category = searchParams.searchCocktail;
  // const parsed = category.replace(new RegExp(" ", "g"), "_");
  console.log("searchParams.searchCocktail -->", searchParams.searchCocktail);
  useEffect(() => {
    async function fetchData(searchCocktail) {
      const response = await Axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${searchCocktail}`
      );
      //console.log("response :", response.data.drinks);
      setCocktailDetails(response.data.drinks);
      //console.log("cocktailDetails :", drinks);
    }
    fetchData(searchParams.searchCocktail);
  }, []);
  return (
    <div className="conatainer">
      <div class="row equal">
        {drinks.map((drink) => {
          return (
            <div class="col-md-6 col-lg-4">
              <div class="card card-block center">
                <p>{drink.strDrink}</p>
                <img
                  src={drink.strDrinkThumb}
                  alt=""
                  width="250px"
                  height="250px"
                />
                <Link
                  to={`/Cocktails/${searchParams.searchCocktail}/${drink.idDrink}`}
                >
                  Look Up for details
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
