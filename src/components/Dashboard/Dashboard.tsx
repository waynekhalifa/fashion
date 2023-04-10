import { useRouter } from "next/router";
import { useState } from "react";
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  OutlinedInput,
} from "@mui/material";

import SideMenu from "./SideMenu";
import Permissions from "./Permissions";
import ActionLoader from "../UI/ActionLoader";
import {
  LogoutIcon,
  ManageAccountsIcon,
  NotificationsNoneOutlinedIcon,
  PersonOutlinedIcon,
  SearchIcon,
} from "../UI/Icons";
import useUpdating from "@/hooks/useUpdating";
import { logout } from "@/services/auth";
import { Pages, Routes } from "@/constants/enums";
import AssignCoach from "./AssignCoach";
import Users from "./Users";
import Comments from "./Comments";
import SingleComment from "./SingleComment";
import Messages from "./Messages";
import SingleMessage from "./SingleMessage";
import SocialLinks from "./SocialLinks";

const permissionsArray: string[] = [
  "reviewer-permissions",
  "coach-permissions",
];
const messagesArray: string[] = [
  "evidence-messages",
  "search-messages",
  "contact-messages",
];
export const usersArray: string[] = ["subscribers", "coaches", "reviewers"];
const permissionsSet: Set<string> = new Set<string>(permissionsArray);
const messagesSet: Set<string> = new Set<string>(messagesArray);
const usersSet: Set<string> = new Set<string>(usersArray);

interface Props {
  slug: string;
  id?: string;
}

type IState = {
  anchorEl: null | HTMLElement;
};

const INITIAL_STATE: IState = {
  anchorEl: null,
};

const Dashboard: React.FC<Props> = ({ slug, id }) => {
  const [state, setState] = useState<IState>(INITIAL_STATE);
  const { anchorEl } = state;
  const { push } = useRouter();
  const { updating, setUpdating } = useUpdating();
  const menuId = "account-menu";
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (
    event: React.MouseEvent<HTMLElement>
  ): void => {
    setState({ ...state, anchorEl: event.currentTarget });
  };

  const handleMenuClose = (): void => setState({ ...state, anchorEl: null });

  const handleAdminProfile = async (): Promise<void> => {
    setState({ ...state, anchorEl: null });

    // TODO: Navigate to admin profile
  };

  const handleLogout = async (): Promise<void> => {
    setUpdating(true);
    setState({ ...state, anchorEl: null });

    await logout();

    push(`/${Routes.AUTH}/${Pages.LOGIN}`);
    setUpdating(false);
  };

  const renderContent = (slug: string): React.ReactNode => {
    if (slug === "assign-coach") return <AssignCoach />;
    if (slug === "social-links") return <SocialLinks />;
    if (slug === Pages.COMMENTS) {
      return id ? <SingleComment id={id} /> : <Comments slug={slug} />;
    }
    if (permissionsSet.has(slug)) return <Permissions slug={slug} />;
    if (messagesSet.has(slug)) {
      return id ? <SingleMessage id={id} /> : <Messages slug={slug} />;
    }
    if (usersSet.has(slug)) return <Users slug={slug} />;
    return null;
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleAdminProfile}>
        <ListItemIcon>
          <ManageAccountsIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>{"الملف الشخصي"}</ListItemText>
      </MenuItem>
      <MenuItem onClick={handleLogout}>
        <ListItemIcon>
          <LogoutIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>{"تسجيل الخروج"}</ListItemText>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          overflowY: "hidden",
        }}
      >
        <Grid container>
          <SideMenu activePage={slug} />
          <Box component="main" sx={{ flex: 1 }}>
            <Box
              component="header"
              sx={{
                background: "#FFFFFF",
                boxShadow: "0px 4px 10px rgba(3, 11, 24, 0.078)",
                py: 2,
                px: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ flex: 1, maxWidth: "50%" }}>
                <OutlinedInput
                  fullWidth
                  size="small"
                  type={"search"}
                  placeholder={"ابحث"}
                  sx={{ borderSize: "2px" }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="search"
                        edge="end"
                        sx={{
                          color: "common.white",
                          backgroundColor: "primary.main",
                          borderRadius: 0,
                          "&:hover": {
                            color: "common.white",
                            backgroundColor: "primary.main",
                          },
                        }}
                      >
                        <SearchIcon fontSize="small" />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </Box>
              <Box>
                <IconButton
                  aria-label="notification"
                  sx={{
                    color: "common.white",
                    backgroundColor: "primary.main",
                    mr: 2,
                    "&:hover": {
                      color: "common.white",
                      backgroundColor: "primary.main",
                    },
                  }}
                >
                  <NotificationsNoneOutlinedIcon fontSize="small" />
                </IconButton>
                <IconButton
                  aria-label="profile"
                  onClick={handleProfileMenuOpen}
                  sx={{
                    color: "common.white",
                    backgroundColor: "primary.main",
                    "&:hover": {
                      color: "common.white",
                      backgroundColor: "primary.main",
                    },
                  }}
                >
                  <PersonOutlinedIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
            {renderMenu}
            <Box sx={{ p: 3, position: "relative" }}>{renderContent(slug)}</Box>
          </Box>
        </Grid>
      </Box>
      {updating && <ActionLoader position="fixed" />}
    </>
  );
};

export default Dashboard;
