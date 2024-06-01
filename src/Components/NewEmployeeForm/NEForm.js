import { Box, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { newEmployeeActions } from "../../store/newEmployeeSlice";
import { userData } from "../../Data/Users";
import { convertToSentenceCase } from "../../util/utils";
import MyButton from "../MyButton/MyButton";

const NEForm = () => {
  const dispatch = useDispatch();

  const firstName = useSelector((state) => state.newEmployee.firstName);
  const lastName = useSelector((state) => state.newEmployee.lastName);
  const jobTitle = useSelector((state) => state.newEmployee.jobTitle);
  const email = useSelector((state) => state.newEmployee.email);
  const phone = useSelector((state) => state.newEmployee.phone);

  console.log(userData);
  function submitHandler(e) {
    e.preventDefault();
    const person = {
      firstName: firstName,
      lastName: lastName,
      jobTitle: jobTitle,
      email: email,
      phone: phone,
    };

    dispatch(newEmployeeActions.toggleShowAlert());

    userData.push(person);
  }

  function firstNameChangeHandler(e) {
    const firstName = convertToSentenceCase(e.target.value);
    dispatch(newEmployeeActions.setFirstName(firstName));
  }

  function lastNameChangeHandler(e) {
    const lastName = convertToSentenceCase(e.target.value);
    dispatch(newEmployeeActions.setLastName(lastName));
  }

  function jobTitleChangeHandler(e) {
    dispatch(newEmployeeActions.setJobTitle(e.target.value));
  }

  function emailChangeHandler(e) {
    dispatch(newEmployeeActions.setEmail(e.target.value));
  }

  function phoneChangeHandler(e) {
    dispatch(newEmployeeActions.setPhone(e.target.value));
  }

  return (
    <Box
      width={800}
      sx={{ border: "2px solid grey" }}
      alignItems="center"
      display="flex"
    >
      <form autoComplete="off" noValidate onSubmit={submitHandler}>
        <Box
          sx={{ border: "2px solid blue" }}
          alignItems="center"
          display="flex"
        >
          <TextField
            label="First Name"
            variant="outlined"
            required
            onChange={firstNameChangeHandler}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            required
            onChange={lastNameChangeHandler}
          />
        </Box>
        <Box
          sx={{ border: "2px solid red" }}
          alignItems="center"
          display="flex"
        >
          <TextField
            onChange={jobTitleChangeHandler}
            label="Job Title"
            variant="outlined"
            required
          />
          <TextField
            onChange={phoneChangeHandler}
            label="Phone"
            variant="outlined"
            required
          />
          <TextField
            onChange={emailChangeHandler}
            label="Email"
            variant="outlined"
            required
          />
        </Box>
        <MyButton type="submit">Create</MyButton>
      </form>
    </Box>
  );
};

export default NEForm;
