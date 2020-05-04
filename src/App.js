import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import CocktailCategories from "./Pages/CocktailCategories";
import CocktailDetails from "./Pages/CocktailDetails";
import Cocktail from "./Pages/Cocktail";
import FetchByName from "./Pages/FetchByName";

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div>
        <Switch>
          <Route exact path="/Cocktails" component={CocktailCategories}></Route>
          <Route
            exact
            path="/Cocktails/searchByName"
            component={FetchByName}
          ></Route>
          <Route
            exact
            path="/Cocktails/:searchCocktail"
            component={CocktailDetails}
          ></Route>
          <Route
            path="/Cocktails/:searchCocktail/:searchById?"
            component={Cocktail}
          ></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
