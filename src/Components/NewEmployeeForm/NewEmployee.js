import { useSelector } from "react-redux";
import NEForm from "./NEForm";
import { Grid } from "@mui/material";

const NewEmployee = () => {
  const formIsVisible = useSelector((state) => state.newEmployee.isVisible);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        {formIsVisible && <NEForm />}
      </Grid>
    </Grid>
  );
};

export default NewEmployee;
