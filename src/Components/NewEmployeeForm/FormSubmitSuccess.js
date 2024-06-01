import { Alert, Box } from "@mui/material";

const FormSubmitSuccess = () => {
  return (
    <Box>
      <Alert
        icon={false}
        onClose={() => {}}
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
