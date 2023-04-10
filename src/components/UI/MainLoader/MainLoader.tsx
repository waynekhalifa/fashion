import { Box, Grid, useTheme } from "@mui/material";

const MainLoader: React.FC = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: theme.zIndex.drawer + 1,
      }}
    >
      <Box
        component={"img"}
        src={
          "https://wanijoseph.mo.cloudinary.net/oms/1679644671842-header-logo.png"
        }
        alt={"main-loader"}
        sx={{ display: "block" }}
      />
    </Grid>
  );
};

export default MainLoader;
