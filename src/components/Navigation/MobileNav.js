import { navLinks } from "@/data/navLinks";
import { Drawer, List, IconButton } from "@mui/material";
import Icon from "@mui/material/Icon";
import { makeStyles } from "@mui/styles";
import NavItem from "../utils/NavItem";

import { useState } from "react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpen(open);
  };

  return (
    <>
      <IconButton
        color="inherit"
        onClick={toggleDrawer(true)}
        aria-label="toggle navigation"
        sx={{ display: { md: "none" } }}
      >
        <Icon>menu</Icon>
      </IconButton>

      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
        <List sx={{ maxWidth: "250px" }}>
          {navLinks.map((item, index) => {
            return <NavItem key={index} item={item} />;
          })}
        </List>
      </Drawer>
    </>
  );
};

export default MobileNav;
