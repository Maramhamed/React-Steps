import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "../src/App.module.css";
import "./numbers.css";

function App() {
  const [open, isOpen] = useState(true);
  const [step, setStep] = useState(1);

  function handlePrevious() {
    //   if (step > 1) setStep( steps - 1);
    if (step > 1) setStep((step) => step - 1);
  }

  function handleNext() {
    //Here we update the state
    //   if (step < 3) setStep( steps + 1);
    if (step < 3) setStep((s) => s + 1);
  }

  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  return (
    //This button use to hide the content, and when click again will show it
    <div>
      <button
        className="close"
        onClick={() => {
          isOpen(!open);
        }}
      >
        &times;
      </button>

      {open && (
        <div className={classes.container}>
          <div className={`card ${classes.card}`}>
            <div className="card-header">
              <div className="numbers">
                <div className={step >= 1 ? "active" : ""}>1</div>
                <div className={step >= 2 ? "active" : ""}>2</div>
                <div className={step >= 3 ? "active" : ""}>3</div>
              </div>
            </div>
            <div className="card-body">
              <h5 className={classes.message}>
                Step {step}: {messages[step - 1]}
              </h5>
            </div>
            <div
              className={`card-footer d-flex justify-content-between ${classes.footer}`}
            >
              <button
                className={`btn ${classes.button}`}
                onClick={handlePrevious}
              >
                Previous
              </button>
              <button className={`btn ${classes.button}`} onClick={handleNext}>
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
