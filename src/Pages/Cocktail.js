import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

export default function Cocktail() {
  const [data, setData] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function fetchById(cocktailId) {
      const response = await Axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`
      );
      setData(response.data.drinks[0]);
      console.log("response.data.drinks:", response.data.drinks);
      console.log("{response.data.strIngredient1}:", response.data.drinks[0]);
    }
    fetchById(params.searchById);
  }, []);

  return (
    <div
      style={{
        display: "flex-block",

        alignItems: "left",
      }}
    >
      <img src={data.strDrinkThumb} alt="" width="250px" height="250px" />
      <div>
        <br />
        <b>Ingredients: </b>
        <ul>
          <li>{data.strIngredient1}</li>
          <li>{data.strIngredient2}</li>
        </ul>
      </div>
      <div>
        <b>Instructions :</b>
        <br />
        {data.strInstructions}
      </div>
    </div>
  );
}
