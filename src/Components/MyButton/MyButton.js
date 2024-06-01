import { Button } from "@mui/material";

const MyButton = ({ children, onClickHandler, type }) => {
  return (
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
      type={type}
    >
      {children}
    </Button>
  );
};

export default MyButton;
