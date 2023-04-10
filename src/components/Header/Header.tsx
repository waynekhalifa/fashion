import { useSelector } from "react-redux";
import {
  AppBar,
  Box,
  Container,
  Drawer,
  Grid,
  IconButton,
  List,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

import NavMenu from "../NavMenu";
import TopBar from "./TopBar";
import { selectSelected as selectAccount } from "@/store/accountSlice";
import { selectListing as selectPages } from "@/store/pageSlice";
import { Account, MenuItem, Page } from "@/models";
import { IMAGES_STORAGE } from "@/constants/images";
import { selectPrimaryMenu } from "@/store/menuSlice";
import { useState } from "react";
import NextLink from "../UI/NextLink";
import { getComparator, stableSort } from "@/helpers/utils";
import { SortOrder } from "@/constants/enums";
import Link from "next/link";

interface Props {
  activePage: string;
}

type IState = { open: boolean };
const INITIAL_STATE: IState = { open: false };

const Header: React.FC<Props> = ({ activePage }) => {
  const selectedAccount: Account | null = useSelector(selectAccount);
  const primaryMenu: MenuItem[] = useSelector(selectPrimaryMenu);
  const pages: Page[] = useSelector(selectPages);
  const [state, setState] = useState<IState>(INITIAL_STATE);
  const { open } = state;

  if (!selectedAccount || primaryMenu.length === 0 || pages.length === 0)
    return null;

  const Items: Page[] = [];

  for (let item of stableSort(
    primaryMenu,
    getComparator(SortOrder.ASC, "precedence")
  )) {
    const page: Page | undefined = pages.find(
      (page: Page) => page.id === item.pageID
    );

    if (page) Items.push(page);
  }

  const toggleDrawer = () =>
    setState((prevState) => ({ ...prevState, open: !open }));

  return (
    <>
      <TopBar />
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "common.white",
          color: "text.primary",
          py: 1,
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.12)",
        }}
      >
        <Container>
          <Grid container alignItems="center">
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                component="span"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  a: {
                    textDecoration: "none",
                    color: "inherit",
                    display: "block",
                  },
                }}
              >
                <Link href={"/"}>
                  <Box
                    component="img"
                    src={`${IMAGES_STORAGE}${selectedAccount.headerLogoURL!}?tx=c_fill,g_auto,f_auto`}
                    alt={selectedAccount.siteTitle}
                    sx={{
                      display: "block",
                      maxHeight: { xs: 56, md: 72 },
                      width: "auto",
                    }}
                  />
                </Link>
              </Box>
              <Box
                component={"nav"}
                sx={{ display: { xs: "none", lg: "flex" }, ml: 8 }}
              >
                <NavMenu activePage={activePage} />
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "flex", lg: "none" },
                justifyContent: "flex-end",
                flexGrow: 1,
              }}
            >
              <IconButton
                size="large"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer}
              >
                <MenuIcon />
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
              >
                <SearchIcon />
              </IconButton>
            </Box>
          </Grid>
        </Container>
      </AppBar>
      <Drawer anchor={"top"} open={open}>
        <Box
          sx={{
            height: "100vh",
            py: 2,
            px: 1,
            backgroundColor: "secondary.main",
            color: "common.white",
          }}
        >
          <Grid container justifyContent={"flex-end"}>
            <IconButton onClick={toggleDrawer} color="inherit">
              <CloseIcon />
            </IconButton>
          </Grid>
          <List disablePadding sx={{ px: 1 }}>
            {Items.map((model: Page) => (
              <Box key={model.id} component="li" sx={{ mb: 2 }}>
                <NextLink
                  link={!model.slug ? "/" : model.slug}
                  text={model.title}
                  fontWeight={500}
                />
              </Box>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
