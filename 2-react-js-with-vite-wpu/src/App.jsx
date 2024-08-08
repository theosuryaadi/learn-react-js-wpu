import { useState } from "react";
import MyButton from "./components/MyButton";
import MyCounter from "./components/MyCounter";

function App() {
  const [counter, setCounter] = useState(0);
  const [isDisabled] = useState(false);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  function reset() {
    setCounter(0);
  }

  return (
    <div>
      <MyButton
        text={"-"}
        onClick={decrement}
        counter={counter}
        disabled={counter < 0 ? !isDisabled : isDisabled}
      />
      <MyCounter counter={counter == 10 || counter < 0 ? "done!" : counter} />

      <MyButton
        text={"+"}
        onClick={increment}
        counter={counter}
        disabled={counter == 10 ? !isDisabled : isDisabled}
      />
      <MyButton
        text={"Reset!"}
        onClick={reset}
        counter={counter}
        disabled={counter == 0 ? !isDisabled : isDisabled}
      />
    </div>
  );
}

export default App;
