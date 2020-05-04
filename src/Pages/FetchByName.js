import React, { useState } from "react";
import { Link } from "react-router-dom";

import Axios from "axios";

export default function FetchByName() {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);

  async function fetchData(input) {
    const response = await Axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`
    );

    setData(response.data.drinks);
  }

  return (
    <div>
      <b>
        <h4>List cocktails by Name</h4>
      </b>

      <label>Search for cocktail here: </label>
      <input
        type="text"
        value={searchText}
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
      />
      <span>{"        "}</span>
      <button style={{ padding: "2px" }} onClick={() => fetchData(searchText)}>
        search
      </button>
      <div className="conatainer">
        <div class="row equal">
          {data.map((drink) => {
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
                  {drink.strCategory}
                  <Link
                    to={`/Cocktails/${encodeURIComponent(drink.strCategory)}/${
                      drink.idDrink
                    }`}
                  >
                    Look Up for details
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
