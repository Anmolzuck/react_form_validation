import { useState } from "react";

const SimpleInput = (props) => {
  const [enterdName, setEnterdName] = useState("");
  const [enterdNameTouched, setEnterdNameTouched] = useState(false);

  const isInputValid = enterdName.trim() !== "";
  const nameInputIsinvalid = !isInputValid && enterdNameTouched;

  let formIsValid = false;

  if (isInputValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnterdName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnterdNameTouched(true);
  };

  const onSubmitFormHandler = (event) => {
    event.preventDefault();

    setEnterdNameTouched(true);

    if (!isInputValid) {
      return;
    }

    console.log(enterdName);

    setEnterdName("");
    setEnterdNameTouched(false);
  };

  const nameInputClasses = nameInputIsinvalid
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={onSubmitFormHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          value={enterdName}
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
      </div>
      {nameInputIsinvalid && (
        <p className="error-text">Name must not be empty</p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
