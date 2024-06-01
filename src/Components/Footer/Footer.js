import { AppBar, Grid } from "@mui/material";
import MyButton from "../MyButton/MyButton";
import { useDispatch } from "react-redux";
import { newEmployeeActions } from "../../store/newEmployeeSlice";

const Footer = () => {
  const dispatch = useDispatch();

  //   const useStyles = makeStyles((theme) => ({
  //     footer: {
  //       position: "fixed",
  //       bottom: 0,
  //       width: "100%",
  //       height: 60,
  //       textAlign: "center",
  //     },
  //   }));

  const onClickHandler = (e) => {
    dispatch(newEmployeeActions.toggleIsVisible());
  };

  //   const classes = useStyles();

  //   return (
  //     <Grid container spacing={1} className={classes.footer}>
  //       <Grid item xs={5} />
  //       <Grid item xs={2}>
  //         <MyButton onClickHandler={onClickHandler}>New User+</MyButton>
  //       </Grid>
  //       <Grid item xs={5} />
  //     </Grid>
  //   );

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
