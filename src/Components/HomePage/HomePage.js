import { useSelector } from "react-redux";
import { SearchBar } from "../SearchBar/SearchBar";
import { Container, Grid } from "@mui/material";
import ResultGrid from "../ResultGrid/ResultGrid";
import React from "react";
import FormSubmitSuccess from "../NewEmployeeForm/FormSubmitSuccess";
import Footer from "../Footer/Footer";

const HomePage = () => {
  const showAlert = useSelector((state) => state.newEmployee.showAlert);
  console.log(showAlert);

  return (
    <>
      {showAlert && <FormSubmitSuccess />}
      <Container fixed>
        <Grid container spacing={1} sx={{ mt: "20%" }}>
          <Grid item xs={2} />
          <Grid item xs={8}>
            <SearchBar />
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={12}>
            <ResultGrid />
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;
