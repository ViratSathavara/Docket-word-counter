import React, { useState } from "react";

const About = (props) => {
  return (
    <>
      <div
        className="container mt-5 p-3"
        style={{
          backgroundColor: props.mode === "dark" ? "#0d23a1b9" : "#ededed",
          color: props.mode === "dark" ? "white" : "black",
          borderRadius: "10px",
        }}
      >
        <h1 className="my-4" style={{ textAlign: "center" }}>
          About us
        </h1>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                style={{
                  backgroundColor:
                    props.mode === "dark" ? "#0d23a1b9" : "#c6c6c6",
                }}
                className={`accordion-button collapsed  text-${
                  props.mode === "light" ? "black" : "light"
                } `}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                <strong>Analyze your text</strong>
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div
                style={{
                  backgroundColor:
                    props.mode === "dark" ? "#0d23a1b9" : "#c6c6c6",
                }}
                className={`accordion-body  text-${
                  props.mode === "light" ? "black" : "light"
                } `}
              >
                Docket gives you a way to analyze your text quickly and
                efficiently. Be it word count, character count and more.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                style={{
                  backgroundColor:
                    props.mode === "dark" ? "#0d23a1b9" : "#c6c6c6",
                }}
                className={`accordion-button collapsed  text-${
                  props.mode === "light" ? "black" : "light"
                } `}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                <strong> Free to use</strong>
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div
                style={{
                  backgroundColor:
                    props.mode === "dark" ? "#0d23a1b9" : "#c6c6c6",
                }}
                className={`accordion-body  text-${
                  props.mode === "light" ? "black" : "light"
                } `}
              >
                Docket is a free character counter tool that provides instant
                character count & word count statictics for a given text. Docket
                reports the number of words and characters. Thus it is suitable
                for writing text with word/ character limit.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                style={{
                  backgroundColor:
                    props.mode === "dark" ? "#0d23a1b9" : "#c6c6c6",
                }}
                className={`accordion-button collapsed  text-${
                  props.mode === "light" ? "black" : "light"
                } `}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                <strong>Browser Compatible</strong>
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div
                style={{
                  backgroundColor:
                    props.mode === "dark" ? "#0d23a1b9" : "#c6c6c6",
                }}
                className={`accordion-body  text-${
                  props.mode === "light" ? "black" : "light"
                } `}
              >
                This word counter software works in any web browsers such as
                Crome, firefox, Internet Explorer,safari, Opera. It suits to
                count characters in facebook , blog , books, excel document, pdf
                document , essays, etc.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
