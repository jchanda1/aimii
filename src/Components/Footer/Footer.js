import { AppBar, Grid } from "@mui/material";
import MyButton from "../MyButton/MyButton";
import { useDispatch } from "react-redux";
import { newEmployeeActions } from "../../store/newEmployeeSlice";

const Footer = () => {
  const dispatch = useDispatch();

  const onClickHandler = (e) => {
    dispatch(newEmployeeActions.toggleIsVisible());
  };

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elvation={0}
      sx={{ top: "auto", bottom: 30 }}
    >
      <Grid container spacing={1}>
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
