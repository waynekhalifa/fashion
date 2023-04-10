import { useRouter } from "next/router";
import { useState } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import Icon, { KeyboardArrowLeftIcon } from "../UI/Icons";
import { Routes } from "@/constants/enums";
import { Feature } from "@/services/feature";
import SubmenuItem from "./SubmenuItem";

interface Props {
  activePage: string;
  item: Feature;
}

type IState = {
  open: boolean;
};

const INITIAL_STATE: IState = {
  open: false,
};

const SideMenuItem: React.FC<Props> = ({ activePage, item }) => {
  const [state, setState] = useState<IState>(INITIAL_STATE);
  const { open } = state;
  const { push } = useRouter();

  const handleClick = () => {
    if (item.children && item.children.length > 0) {
      setState({ ...state, open: !open });
    } else push(`/${Routes.DASHBOARD}/${item.link}`);
  };

  const isActive = (): boolean => item.link === activePage;

  return (
    <>
      <ListItem
        disablePadding
        sx={{
          position: "relative",
          cursor: "pointer",
          px: 2,
          height: 48,
          backgroundColor: isActive() ? "#222222" : "transparent",
        }}
        onClick={handleClick}
      >
        <ListItemButton sx={{ p: 0 }}>
          <ListItemIcon sx={{ minWidth: 40, color: "inherit" }}>
            <Icon icon={item.icon!} />
          </ListItemIcon>
          <ListItemText
            primary={item.title}
            sx={{ span: { fontSize: "1.125rem" } }}
          />
        </ListItemButton>
        {item.children && item.children.length > 0 && (
          <KeyboardArrowLeftIcon
            fontSize="small"
            sx={{
              mr: "-6px",
              mt: "-6px",
              transform: open ? "rotate(-90deg)" : "rotate(0deg)",
              transition: "all 0.3s ease",
            }}
          />
        )}
      </ListItem>
      {item.children && item.children.length > 0 && (
        <List
          disablePadding
          sx={{
            position: open ? "relative" : "absolute",
            opacity: open ? 1 : 0,
            zIndex: open ? 1 : -1,
            maxHeight: open ? "100%" : 0,
            transition: "all 0.3s ease",
          }}
        >
          {item.children.map((item: Feature) => (
            <SubmenuItem key={item.id} item={item} activePage={activePage} />
          ))}
        </List>
      )}
    </>
  );
};

export default SideMenuItem;
