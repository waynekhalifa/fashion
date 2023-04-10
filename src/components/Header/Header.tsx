import { AppBar, Container, Grid, IconButton } from "@mui/material";
import {
  LocalMallIcon,
  MenuIcon,
  PersonOutlineOutlinedIcon,
  SearchIcon,
} from "../UI/Icons";
import Logo from "../Logo";

interface Props {
  activePage: string;
}

type IState = { open: boolean };
const INITIAL_STATE: IState = { open: false };

const Header: React.FC<Props> = ({ activePage }) => {
  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        color="transparent"
        sx={{
          color: "common.white",
          py: 1,
        }}
      >
        <Container>
          <Grid container alignItems="center">
            <Grid item xs={4}>
              <IconButton color="inherit">
                <MenuIcon color="inherit" />
              </IconButton>
            </Grid>
            <Grid item xs={4}>
              <Grid container justifyContent={"center"}>
                <Logo />
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid container justifyContent={"flex-end"}>
                <IconButton color="inherit">
                  <LocalMallIcon color="inherit" />
                </IconButton>
                <IconButton color="inherit">
                  <SearchIcon color="inherit" />
                </IconButton>
                <IconButton color="inherit">
                  <PersonOutlineOutlinedIcon color="inherit" />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
