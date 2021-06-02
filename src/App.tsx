import { AllTodos, Footer, Header } from "components";
import { Provider } from "react-redux";
import configureStore from "./store";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <AllTodos />
        {/* <Footer /> */}
      </div>
    </Provider>
  );
}

export default App;
