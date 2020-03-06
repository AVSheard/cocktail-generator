/** @format */

import React from "react";
import "./App.css";
import recipes from "./recipes.js";
import Modal from "react-modal";

const IngredientChoice = function(props) {
  return (
    <div>
      <h1>Cocktail Generator</h1>
      <form>
        <h3>Spirits</h3>
        <label>
          <input
            type="radio"
            name="spirit"
            value="vodka"
            onChange={props.handleChange}
          ></input>
          vodka
        </label>
        <label>
          <input
            type="radio"
            name="spirit"
            value="rum"
            onChange={props.handleChange}
          ></input>
          rum
        </label>
        <label>
          <input
            type="radio"
            name="spirit"
            value="tequila"
            onChange={props.handleChange}
          ></input>
          tequila
        </label>
      </form>
    </div>
  );
};

class App extends React.Component {
  state = {
    userInput: "",
    outputRecipe: "",
    drinkName: "",
    isOpen: false,
    drinks: [
      {
        name: "Appletini",
        spirit: "vodka",
        mixer: "cloudy apple juice",
        extra: "lemon juice",
        recipe: "appletini"
      },
      {
        name: "PiNa Colada",
        spirit: "rum",
        mixer: "pineapple juice",
        extra: "piece of fruit",
        recipe: "pinaColada"
      },
      {
        name: "Tequila Sunrise",
        spirit: "tequila",
        mixer: "orange juice",
        extra: "grenadine",
        recipe: "tequilaSunrise"
      },
      {
        name: "Screwdriver",
        spirit: "vodka",
        mixer: "orange juice",
        extra: "bitter liqueur",
        recipe: "screwdriver"
      },
      {
        name: "Rum Babalu",
        spirit: "rum",
        mixer: "ginger beer",
        extra: "bitter liqueur",
        recipe: "rumBabalu"
      }
    ]
  };
  handleChange = event => {
    this.setState({ userInput: event.target.value });
  };

  closePopup = event => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  generateRecipe = () => {
    this.state.drinks.forEach(drink => {
      if (this.state.userInput === drink.spirit) {
        this.setState({
          outputRecipe: recipes[drink.recipe],
          drinkName: drink.name,
          isOpen: !this.state.isOpen
        });
      }
    });
  };

  render() {
    return (
      <div>
        <IngredientChoice
          drinks={this.state.drinks}
          userInput={this.state.userInput}
          handleChange={this.handleChange}
        />

        <button onClick={this.generateRecipe}>Generate Recipe</button>

        <Modal className="popup" isOpen={this.state.isOpen}>
          <div className="popup__text">
            <h2>{this.state.drinkName}</h2>
            <p>{this.state.outputRecipe}</p>
          </div>
          <button onClick={this.closePopup}>Close</button>
        </Modal>
      </div>
    );
  }
}

export default App;
