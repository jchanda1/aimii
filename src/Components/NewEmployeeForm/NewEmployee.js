import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { newEmployeeActions } from "../../store/newEmployeeSlice";
import NEForm from "./NEForm";

const NewEmployee = () => {
  const dispatch = useDispatch();
  const formIsVisible = useSelector((state) => state.newEmployee.isVisible);

  const onClickHandler = (e) => {
    dispatch(newEmployeeActions.toggleIsVisible());
  };

  return (
    <>
      {formIsVisible && <NEForm />}
      <Button variant="outlined" onClick={onClickHandler}>
        New Employee
      </Button>
    </>
  );
};

export default NewEmployee;
