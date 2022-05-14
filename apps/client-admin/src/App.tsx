import { useMachine } from "@xstate/react";
import { UIButton } from "ui";

import "./App.css";
import { counterMachine } from "machines";

function App() {
  const [state, send] = useMachine(counterMachine);

  const getCustomer = async () => {
    const res = await (await fetch("http://localhost:5000/customers")).json();

    console.log(res);
  };

  return (
    <div className="App">
      <UIButton onClick={() => getCustomer()} />
      <section>
        <output>{state.context.count}</output>
        <button onClick={() => send("INCREMENT")}> Count</button>
      </section>
    </div>
  );
}

export default App;
