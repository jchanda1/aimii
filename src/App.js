import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { SearchBar } from "./Components/SearchBar/SearchBar";
import ResultGrid from "./Components/ResultGrid/ResultGrid";
import NewEmployee from "./Components/NewEmployeeForm/NewEmployee";
import NEForm from "./Components/NewEmployeeForm/NEForm";
import { Container, Grid } from "@mui/material";

function App() {
  return (
    <Provider store={store}>
      <Container fixed sx={{ border: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={2} />
          <Grid item xs={8}>
            <SearchBar />
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={5} />
          <Grid item xs={2}>
            <NewEmployee />
          </Grid>
          <Grid item xs={5} />
        </Grid>
      </Container>
    </Provider>
  );
}

export default App;
