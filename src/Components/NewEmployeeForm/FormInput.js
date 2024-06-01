import { TextField } from "@mui/material";

const FormInput = (label, onChangeHandler) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      required
      onChange={onChangeHandler}
      fullWidth
      InputProps={{
        style: {
          borderRadius: "50px",
          color: "black",
        },
      }}
    />
  );
};

export default FormInput;
