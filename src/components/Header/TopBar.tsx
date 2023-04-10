import { Box, Button, Container, Grid, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";
import { Pages, Routes } from "@/constants/enums";

const TopBar: React.FC = () => {
  const { push } = useRouter();

  const handleLogin = () => push(`/${Routes.AUTH}/${Pages.LOGIN}`);

  const handleRegister = () => push(`/${Routes.AUTH}/${Pages.REGISTER}`);

  return (
    <Box
      sx={{
        color: "common.white",
        py: { xs: 1, md: "4px" },
        background:
          "url(https://wanijoseph.mo.cloudinary.net/oms/1680240899202-topbar-bg.png?tx=c_fill,g_auto,f_auto) no-repeat center center/cover",
      }}
    >
      <Container>
        <Grid container alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Button
              size="small"
              variant="outlined"
              sx={{
                color: "common.white",
                borderColor: "common.white",
                "&:hover": {
                  color: "common.white",
                  borderColor: "common.white",
                },
              }}
              onClick={handleLogin}
            >
              تسجيل الدخول
            </Button>
            <Button
              size="small"
              variant="outlined"
              sx={{
                ml: 2,
                backgroundColor: "common.white",
                color: "common.black",
                borderColor: "common.black",
                "&:hover": {
                  backgroundColor: "common.white",
                  color: "common.black",
                  borderColor: "common.black",
                },
              }}
              onClick={handleRegister}
            >
              إنشاء حساب
            </Button>
          </Box>
          <IconButton
            edge="end"
            color="inherit"
            sx={{ display: { xs: "none", md: "inline-block" } }}
          >
            <SearchIcon />
          </IconButton>
        </Grid>
      </Container>
    </Box>
  );
};

export default TopBar;
