import { useState } from "react";
import Link from "@/customMUI/Link";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Icon from "@mui/material/Icon";

function NavItem({ item }) {
  const [open, setOpen] = useState(false);
  const url = item.to || "#";
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem button component={Link} href={url} onClick={handleClick}>
        <ListItemIcon>
          <Icon>{item.icon}</Icon>{" "}
        </ListItemIcon>
        <ListItemText primary={item.name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List dense component="div" disablePadding>
          {item.submenu.map((menu, index) => (
            <ListItem button key={"submenu-" + index}>
              <ListItemText primary={menu.name} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
}

export default NavItem;
