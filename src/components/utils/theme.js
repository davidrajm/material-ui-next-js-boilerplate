import { createTheme } from "@mui/material/styles";
import { red, teal } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#041122",
      dark: teal[900],
    },
    secondary: {
      main: "#ff7062",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
