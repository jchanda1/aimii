import { Alert, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { newEmployeeActions } from "../../store/newEmployeeSlice";

const FormSubmitSuccess = () => {
  const dispatch = useDispatch();

  function handleClose(e) {
    dispatch(newEmployeeActions.toggleShowAlert());
  }

  return (
    <Box>
      <Alert
        icon={false}
        onClose={handleClose}
        color="primary"
        variant="filled"
        sx={{
          borderTopLeftRadius: "50px",
          borderBottomLeftRadius: "50px",
          borderTopRightRadius: "50px",
          borderBottomRightRadius: "50px",
          maxWidth: "190px",
          position: "fixed",
          right: 0,
        }}
      >
        New User Added!
      </Alert>
    </Box>
  );
};

export default FormSubmitSuccess;
