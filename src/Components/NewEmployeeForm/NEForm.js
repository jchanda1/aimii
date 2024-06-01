import { Box, Grid, TextField } from "@mui/material";
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
      component="form"
      autoComplete="off"
      noValidate
      onSubmit={submitHandler}
      sx={{ bgcolor: "white", p: 5, pb: 2, borderRadius: "50px" }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="First Name"
            variant="outlined"
            required
            onChange={firstNameChangeHandler}
            fullWidth
            InputProps={{
              style: {
                borderRadius: "50px",
                color: "black",
                border: "pink",
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "secondary.main",
                  borderWidth: "2px",
                },
              },
              "& .MuiFormLabel-root": {
                color: "primary.main",
              },
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Last Name"
            variant="outlined"
            required
            onChange={lastNameChangeHandler}
            fullWidth
            InputProps={{
              style: {
                borderRadius: "50px",
                backgroundColor: "white",
                color: "black",
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "secondary.main",
                  borderWidth: "2px",
                },
              },
              "& .MuiFormLabel-root": {
                color: "primary.main",
              },
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            onChange={jobTitleChangeHandler}
            label="Job Title"
            variant="outlined"
            required
            fullWidth
            InputProps={{
              style: {
                borderRadius: "50px",
                backgroundColor: "white",
                color: "black",
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "secondary.main",
                  borderWidth: "2px",
                },
              },
              "& .MuiFormLabel-root": {
                color: "primary.main",
              },
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            onChange={phoneChangeHandler}
            label="Phone"
            variant="outlined"
            required
            fullWidth
            InputProps={{
              style: {
                borderRadius: "50px",
                backgroundColor: "white",
                color: "black",
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "secondary.main",
                  borderWidth: "2px",
                },
              },
              "& .MuiFormLabel-root": {
                color: "primary.main",
              },
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            onChange={emailChangeHandler}
            label="Email"
            variant="outlined"
            required
            fullWidth
            InputProps={{
              style: {
                borderRadius: "50px",
                backgroundColor: "white",
                color: "black",
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "secondary.main",
                  borderWidth: "2px",
                },
              },
              "& .MuiFormLabel-root": {
                color: "primary.main",
              },
            }}
          />
        </Grid>
        <Grid item xs={5} />
        <Grid item xs={2} sx={{ textAlign: "center" }}>
          <MyButton type="submit">Create</MyButton>
        </Grid>
        <Grid item xs={5} />
      </Grid>
    </Box>
  );
};

export default NEForm;
