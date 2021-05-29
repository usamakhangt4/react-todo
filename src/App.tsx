import { Provider } from "react-redux";
import configureStore from "./store";

import "./App.css";
import Counter from "components/counter";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Counter />
        </header>
      </div>
    </Provider>
  );
}

export default App;
