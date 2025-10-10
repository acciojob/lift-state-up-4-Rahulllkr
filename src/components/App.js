
import React, { useState } from "react";
import './../styles/App.css';
import Child from "./Child";

const App = () => {
  const [cartItems,setCartItems] = useState([])
  const [text,setText] = useState("")
  const [numInput,setNumInput] = useState()
  const handleInput = () => {

    if(text && numInput){
    setCartItems([...cartItems,{text,numInput}])
    setText("")
    setNumInput("")
    }
  }

  const handleRemove = (index) => {
    const updateItems = cartItems.filter((_,i) => i !== index)
    setCartItems(updateItems);
  }
  return (
    <div className="parent">
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <div>
          <label>Item Name:</label>
          <input id="itemName" type="text" value={text} onChange={(e) => setText(e.target.value)} />
          <label>Item Price:</label>
          <input id="itemPrice" type="number" value={numInput} onChange={(e) => setNumInput(e.target.value)} />
          <button onClick={handleInput}>Add Item</button>
        </div>
        <Child cartItems={cartItems} handleRemove={handleRemove}/>
    </div>
  )
}

export default App
