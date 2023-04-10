import UseEffectAPI from "./component/UseEffectAPI";
import UseEffectEvent from "./component/UseEffectEvent";
import useMount from "./hooks/useMount";

function App() {
  return (
    <div className="App">
      <useMount />
      <UseEffectEvent />
      <UseEffectAPI />
    </div>
  );
}

export default App;
