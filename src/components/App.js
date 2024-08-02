import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {
  const [isDarkMode, setisDarkMode] = useState(false);

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  // classname (isDarkMode is based on the state variable)
  
  const appClass = isDarkMode ? "App dark" : "App light"

  const handleDarkMode =  () => {setisDarkMode(!isDarkMode)};

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick = {handleDarkMode}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

// 1. Import the statehook from react
// // we initialize the state variable for th darkmode
// set the event handle for changing mode 
