import { Box, Button, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { newEmployeeActions } from "../../store/newEmployeeSlice";
import { userData } from "../../Data/Users";

const NEForm = () => {
  const formData = useSelector((state) => state.newEmployee);
  const dispatch = useDispatch();

  function convertToTitleCase(str) {
    if (!str) {
      return "";
    }

    return str
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase().concat(word.substr(1));
      })
      .join(" ");
  }

  console.log(userData);
  function submitHandler(e) {
    e.preventDefault();
    const person = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      jobTitle: formData.jobTitle,
      email: formData.email,
      phone: formData.phone,
    };

    userData.push(person);

    console.log(userData);
  }

  function firstNameChangeHandler(e) {
    const firstName = convertToTitleCase(e.target.value);
    dispatch(newEmployeeActions.setFirstName(firstName));
  }

  function lastNameChangeHandler(e) {
    const lastName = convertToTitleCase(e.target.value);
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
        <Button variant="outlined" type="submit">
          New user
        </Button>
      </form>
    </Box>
  );
};

export default NEForm;
