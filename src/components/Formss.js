import React, { useState } from "react";
import PropTypes from 'prop-types'

export default function Formss(props) {
  // const [text, setText]= useState('enter text here ');
  const handleUpClick = () => {
    console.log("change to uppercase" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);

    const handleUpClick = () => {
      console.log("change to uppercase" + text);
      let newText = text.toUpperCase();
      setText(newText);
    };
  };
  const handleLowClick = () => {
    console.log("change to lowcase" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const [text, setText] = useState("this is text");

  return (
    <>
      <div
        className="container"
        style={{ Color:props.mode==='dark'?'light':'dark'}}
      >
        <h2>{props.text}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox2"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              Color: props.mode === "dark" ? "white" : "black",
            }}
            rows="3"
          ></textarea>
          <button className="btn btn-primary my-3" onClick={handleUpClick}>
            change to upper case
          </button>
          <button className="btn btn-primary mx-3" onClick={handleLowClick}>
            change to lowercase{" "}
          </button>
        </div>
      </div>
      <div
        className="container my-2 "
        style={{ Color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>This is your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} character
        </p>
        <p> {0.008 * text.split(" ").length} minutes read</p>
        <h3>preview</h3>
        <p>
          <i>{text}</i>
        </p>
      </div>
    </>
  );
}
