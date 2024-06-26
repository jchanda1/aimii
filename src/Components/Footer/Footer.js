import { AppBar, Grid } from "@mui/material";
import MyButton from "../MyButton/MyButton";
import NewEmployee from "../NewEmployeeForm/NewEmployee";
import { useDispatch, useSelector } from "react-redux";
import { newEmployeeActions } from "../../store/newEmployeeSlice";

const Footer = () => {
  const dispatch = useDispatch();

  const onClickHandler = (e) => {
    dispatch(newEmployeeActions.toggleIsVisible());
  };

  const formIsVisible = useSelector((state) => state.newEmployee.isVisible);

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{ top: "auto", bottom: "5%" }}
    >
      <Grid container spacing={1}>
        <Grid item xs={3} />
        <Grid item xs={6}>
          {formIsVisible && <NewEmployee />}
        </Grid>
        <Grid item xs={3} />
        <Grid item xs={5} />
        <Grid item xs={2} sx={{ textAlign: "center" }}>
          <MyButton onClickHandler={onClickHandler}>New User+</MyButton>
        </Grid>
        <Grid item xs={5} />
      </Grid>
    </AppBar>
  );
};

export default Footer;
