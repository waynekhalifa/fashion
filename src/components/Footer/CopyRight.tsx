import { Box, Container, Grid, Typography } from "@mui/material";

interface Props {}

const CopyRight: React.FC<Props> = () => {
  return (
    <Container>
      <Grid
        container
        alignItems={"center"}
        justifyContent="space-between"
        sx={{ py: 2 }}
      >
        <Box
          sx={{
            width: "34%",
            height: "1px",
            backgroundColor: { xs: "transparent", md: "#ffffff4f" },
          }}
        />
        <Typography>&copy; جميع الحقوق محفوظة المخبر الصحفي 2023</Typography>
        <Box
          sx={{
            width: "34%",
            height: "1px",
            backgroundColor: { xs: "transparent", md: "#ffffff4f" },
          }}
        />
      </Grid>
    </Container>
  );
};

export default CopyRight;
