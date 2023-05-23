import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpCkick = () => {
    console.log("Uppercasse was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Convert to UpperCase","success")
  };
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const handleClear = () => {
    setText("");
    props.showAlert("Text Cleared","success")
  };
  const handleLoCkick = () => {
    console.log("LowerCase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Convert to LowerCase","success")
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipbord","success")
  };

  return (
    <>
      <div style={{color:props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
          style={{backgroundColor:props.mode==='light'?'white':'#ffffff24',color:props.mode==='light'?'black':'white'}}
            onChange={handleOnChange}
            value={text}
            className="form-control"
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpCkick}>
          Convert to Uppercase
        </button>
        <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>
          Clear
        </button>
        <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoCkick}>
          Convert to Lowercase
        </button>
        <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy text
        </button>
      </div>
      <div className="cointainer my-2" style={{color:props.mode==='light'?'black':'white'}}>
        <h2>Your text summery</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words,{text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minut Takes to Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to Preview"}</p>
      </div>
    </>
  );
}
