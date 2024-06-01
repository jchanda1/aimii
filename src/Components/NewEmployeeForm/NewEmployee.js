import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { newEmployeeActions } from "../../store/newEmployeeSlice";
import NEForm from "./NEForm";
import { Grid } from "@mui/material";
import MyButton from "../MyButton/MyButton";

const NewEmployee = () => {
  const dispatch = useDispatch();
  const formIsVisible = useSelector((state) => state.newEmployee.isVisible);
  const onClickHandler = (e) => {
    dispatch(newEmployeeActions.toggleIsVisible());
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        {formIsVisible && <NEForm />}
      </Grid>
      <Grid item xs={5} />
      <Grid item xs={2}>
        <MyButton onClickHandler={onClickHandler}>New User+</MyButton>
      </Grid>
      <Grid item xs={5} />
    </Grid>
  );
};

export default NewEmployee;
