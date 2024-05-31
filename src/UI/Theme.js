import { createTheme } from "@mui/material";
import { pink } from "@mui/material/colors";

export const Theme = createTheme({
  palette: { mode: "dark", primary: { main: pink[500] } },
});
