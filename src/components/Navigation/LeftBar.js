import { navLinks } from "@/data/navLinks";
import { List } from "@mui/material";

import NavItem from "../utils/NavItem";

const LeftBar = () => {
  return (
    <List>
      {navLinks.map((item, index) => {
        return <NavItem key={index} item={item} />;
      })}
    </List>
  );
};

export default LeftBar;
