import NEForm from "./NEForm";
import { Grid } from "@mui/material";

const NewEmployee = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <NEForm />
      </Grid>
    </Grid>
  );
};

export default NewEmployee;
