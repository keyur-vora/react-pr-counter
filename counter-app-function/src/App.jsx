import { useState } from "react";
import Counterapp from "./Counterapp";

function App() {

  const [count, setNo] = useState(0);

  const increment = () => {
    setNo(count + 1);
  };

  const decrement = () => {
    setNo(count - 1 );
  };

  const reset = () => {
    setNo(0);
  };

  return (
    <Counterapp
      cnt={count}
      inc={increment}
      dec={decrement}
      re={reset}
    />
  )
}

export default App
