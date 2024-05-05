import React, { useState } from "react";

const Textform = (props) => {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase!", "success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase!", "success");
  };
  const handleClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("clear text", "success");
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copy to clipboard", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove extra spaces", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>

        <textarea
          className="form-control"
          style={{
            backgroundColor: props.mode === "dark" ? "#0d23a1b9" : "#ededed",
            color: props.mode === "dark" ? "white" : "black",
            borderRadius: "10px",
          }}
          onChange={handleOnChange}
          value={text}
          id="mybox"
          rows="12"
        ></textarea>

        <button
          disabled={text.length === 0}
          className={`btn btn-${
            props.mode === "dark" ? "dark" : "light"
          } mt-3 mx-1`}
          style={{
            backgroundColor: props.mode === "dark" ? "#080d29" : " #bdbdbd",
          }}
          onClick={handleUpClick}
        >
          Convert to upper case
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${
            props.mode === "dark" ? "dark" : "light"
          } mt-3 mx-1`}
          style={{
            backgroundColor: props.mode === "dark" ? "#080d29" : " #bdbdbd",
          }}
          onClick={handleLowClick}
        >
          Convert to lower case
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${
            props.mode === "dark" ? "dark" : "light"
          } mt-3 mx-1`}
          style={{
            backgroundColor: props.mode === "dark" ? "#080d29" : " #bdbdbd",
          }}
          onClick={handleClearText}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${
            props.mode === "dark" ? "dark" : "light"
          } mt-3 mx-1`}
          style={{
            backgroundColor: props.mode === "dark" ? "#080d29" : " #bdbdbd",
          }}
          onClick={handleCopyText}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${
            props.mode === "dark" ? "dark" : "light"
          } mt-3 mx-1`}
          style={{
            backgroundColor: props.mode === "dark" ? "#080d29" : " #bdbdbd",
          }}
          onClick={handleExtraSpaces}
        >
          Remove Text
        </button>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>Your text summary</h3>

        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words & {text.length} Characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes read
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to Preview!"}</p>
      </div>
    </>
  );
};

export default Textform;
