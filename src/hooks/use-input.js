import { useReducer } from "react";

const intialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "Input") {
    return { value: action.value, isTouched: state.isTouched };
  }

  if (action.type === "Blur") {
    return { value: state.value, isTouched: true };
  }

  if (action.type === "RESET") {
    return { isTouched: false, value: "" };
  }

  return inputStateReducer;
};

const useInput = (validatedInput) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    intialInputState
  );

  const valueIsValid = validatedInput(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: "Input", value: event.target.value });
  };

  const inputBlurHandler = (event) => {
    dispatch({ type: "Blur" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
