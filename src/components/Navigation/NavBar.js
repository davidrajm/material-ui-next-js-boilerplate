import { AppBar, Toolbar, Typography } from "@mui/material";

import { makeStyles } from "@mui/styles";
import MobileNav from "./MobileNav";

const useStyles = makeStyles((theme) => ({
  logoLg: {},
  logoSm: {},
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <MobileNav />
        <Typography
          variant="h6"
          className={classes.logoLg}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          School of Advanced Sciences
        </Typography>
        <Typography variant="h6" sx={{ display: { xs: "block", md: "none" } }}>
          SAS
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
