import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { SearchBar } from "./Components/SearchBar/SearchBar";
import ResultGrid from "./Components/ResultGrid/ResultGrid";
import NewEmployee from "./Components/NewEmployeeForm/NewEmployee";
import NEForm from "./Components/NewEmployeeForm/NEForm";

function App() {
  return (
    <Provider store={store}>
      <SearchBar />
      <ResultGrid />
      <NewEmployee />
    </Provider>
  );
}

export default App;
