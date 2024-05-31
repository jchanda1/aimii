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
      <Button
        variant="contained"
        onClick={onClickHandler}
        sx={{
          borderTopLeftRadius: "50px",
          borderBottomLeftRadius: "50px",
          borderTopRightRadius: "50px",
          borderBottomRightRadius: "50px",
          height: "100%",
        }}
      >
        New User+
      </Button>
    </>
  );
};

export default NewEmployee;
