import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text Here");
  const handleUpCkick = () => {
    console.log("Uppercasse was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const handleClear = () => {
    setText("");
  };
  const handleLoCkick = () => {
    console.log("LowerCase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };

  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            onChange={handleOnChange}
            value={text}
            className="form-control"
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpCkick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>
          Clear
        </button>
        <button className="btn btn-primary mx-0.6" onClick={handleLoCkick}>
          Convert to Lowercase
        </button>
      </div>
      <div className="cointainer my-2">
        <h2>Your text summery</h2>
        <p>
          {text.split(" ").length} Words,{text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minut Takes to Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
