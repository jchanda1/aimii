import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { newEmployeeActions } from "../../store/newEmployeeSlice";

const NewEmployee = () => {
  const dispatch = useDispatch();
  const formIsVisible = useSelector((state) => state.newEmployee.isVisible);

  const onClickHandler = (e) => {
    dispatch(newEmployeeActions.toggleIsVisible());
  };

  return (
    <>
      {formIsVisible ? <h3>Visible</h3> : <h2>Not Visible</h2>}
      <Button variant="outlined" onClick={onClickHandler}>
        New Employee
      </Button>
    </>
  );
};

export default NewEmployee;
