import { Routes } from "@/constants/enums";
import { Feature } from "@/services/feature";
import { Box, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useRouter } from "next/router";

interface Props {
  activePage: string;
  item: Feature;
}

const SubmenuItem: React.FC<Props> = ({ activePage, item }) => {
  const { push } = useRouter();

  const handleClick = () => push(`/${Routes.DASHBOARD}/${item.link}`);

  const isActive = (): boolean => item.link === activePage;

  return (
    <ListItem
      disablePadding
      sx={{
        position: "relative",
        px: 2,
        cursor: "pointer",
        backgroundColor: isActive() ? "#222222" : "transparent",
      }}
      onClick={handleClick}
    >
      <ListItemButton sx={{ p: 0, pl: 3, height: 40 }}>
        <ListItemText primary={item.title} />
        <Box
          sx={{
            position: "absolute",
            left: 8,
            top: 0,
            height: "100%",
            width: 2,
            backgroundColor: "common.white",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            left: 5,
            top: "50%",
            height: 8,
            width: 8,
            borderRadius: "50%",
            backgroundColor: "common.white",
            transform: "translateY(-60%)",
          }}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default SubmenuItem;
