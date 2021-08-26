import "./styles.css";
import { useState } from "react";

var southList = [
  { food: "biriyani", rating: "3.8/5" },
  { food: "Idli&Sambar", rating: "4.3/5" },
  { food: "Idli&Sambar", rating: "4.3/5" },
  { food: "vada pav", rating: "4.2/5" }
];
var northList = [
  { food: "pav baji", rating: "3.2/5" },
  { food: "vada pav", rating: "4.2/5" },
  { food: "Idli&Sambar", rating: "4.3/5" },
  { food: "vada pav", rating: "4.2/5" }
];
var southEastList = [
  { food: "chicken roast", rating: "4.5/5" },
  { food: "Tomatorice", rating: "4.1/5" },
  { food: "Idli&Sambar", rating: "4.3/5" },
  { food: "vada pav", rating: "4.2/5" }
];
export default function App() {
  var [state, updateState] = useState(southList);

  function sIndia() {
    updateState(southList);
  }
  function nIndia() {
    updateState(northList);
  }
  function neIndia() {
    updateState(southEastList);
  }
  return (
    <div className="App">
      <h1>🧀Delicious Food Items</h1>
      <h2>Hey check out my fav food items</h2>
      <button onClick={sIndia}>South India</button>
      <button onClick={nIndia}>North India</button>
      <button onClick={neIndia}>NorthEast India</button>
      <hr />
      {state.map(function (item) {
        return (
          <div className="itemContainer">
            <h2>{item.food}</h2>
            <h2>{item.rating}</h2>
          </div>
        );
      })}
    </div>
  );
}
