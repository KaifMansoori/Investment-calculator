import { useState } from "react";
import ResultTable from "./components/ResultTable";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 730,
    annualInvestment: 34,
    expectedReturn: 98,
    duration: 7,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleUserInput(inputName, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputName]: +newValue,
      };
    });
  }

  return (
    <>
      <UserInput userInput={userInput} onHandleChange={handleUserInput} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && <ResultTable input={userInput} />}
    </>
  );
}

export default App;
