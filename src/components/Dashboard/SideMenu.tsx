import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import SideMenuItem from "./SideMenuItem";
import ActionLoader from "../UI/ActionLoader";
import useUpdating from "@/hooks/useUpdating";
import { selectSelected as selectAccount } from "@/store/accountSlice";
import { selectListing as selectFeatures } from "@/store/featureSlice";
import { Account } from "@/models";
import { useSelector } from "react-redux";
import { IMAGES_STORAGE } from "@/constants/images";
import { Feature, Features } from "@/services/feature";
import { useRouter } from "next/router";
import { LogoutIcon } from "../UI/Icons";
import { Pages, Routes } from "@/constants/enums";
import { logout } from "@/services/auth";

interface Props {
  activePage: string;
}

const SideMenu: React.FC<Props> = ({ activePage }) => {
  const selectedAccount: Account | null = useSelector(selectAccount);
  const features: Features = useSelector(selectFeatures);
  const { push } = useRouter();
  const { updating, setUpdating } = useUpdating();

  if (!selectedAccount || features.length === 0) return null;

  const handleLogout = async (): Promise<void> => {
    setUpdating(true);

    await logout();

    push(`/${Routes.AUTH}/${Pages.LOGIN}`);
    setUpdating(false);
  };

  return (
    <>
      <Box
        sx={{
          width: 288,
          height: "100vh",
          maxHeight: "100vh",
          overflow: "hidden",
          backgroundColor: "secondary.main",
          position: "relative",
        }}
      >
        <Grid container justifyContent="center">
          <Box sx={{ py: 3 }}>
            <Box
              component="img"
              src={`${IMAGES_STORAGE}${selectedAccount.footerLogoURL!}?tx=c_fill,g_auto,f_auto`}
              alt={selectedAccount.siteTitle}
              sx={{
                display: "block",
                maxHeight: { xs: 56, md: 72 },
                width: "auto",
              }}
            />
          </Box>
          <List
            disablePadding
            sx={{
              color: "common.white",
              width: "100%",
              height: "calc(100vh - 218px)",
              overflowY: "auto",
              py: 3,
            }}
          >
            {features.map((item: Feature) => (
              <SideMenuItem key={item.id} item={item} activePage={activePage} />
            ))}
          </List>
          <List
            disablePadding
            sx={{
              color: "common.white",
              width: "100%",
              position: "absolute",
              bottom: 0,
              left: 0,
              py: 3,
            }}
          >
            <ListItem
              disablePadding
              sx={{
                position: "relative",
                cursor: "pointer",
                px: 2,
                height: 48,
              }}
              onClick={handleLogout}
            >
              <ListItemButton sx={{ p: 0 }}>
                <ListItemIcon sx={{ minWidth: 40, color: "inherit" }}>
                  <LogoutIcon color="inherit" fontSize="small" />
                </ListItemIcon>
                <ListItemText
                  primary={"تسجيل الخروج"}
                  sx={{ span: { fontSize: "1.125rem" } }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Grid>
      </Box>
      {updating && <ActionLoader position="fixed" />}
    </>
  );
};

export default SideMenu;
