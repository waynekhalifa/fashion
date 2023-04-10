import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Discount from "./Discount";
import { DiamondIcon } from "../UI/SvgIcons";

interface Props {}

const Featured: React.FC<Props> = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: 972,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: "15%",
          width: "100%",
          zIndex: 1,
        }}
      >
        <Box
          component="img"
          src="/images/line-bg.png"
          sx={{ display: "block", width: "100%", height: "auto" }}
        />
      </Box>
      <Container>
        <Box
          sx={{
            position: "relative",
            paddingTop: "88px",
            paddingLeft: "40px",
            backgroundImage: `url("/images/featured-image.png")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right bottom",
            minHeight: 500,
            my: 8,
          }}
        >
          <Box sx={{ position: "absolute", left: "-32px", top: "0" }}>
            <DiamondIcon />
          </Box>
          <Typography variant="h1" fontWeight={500}>
            WHOLESALE BIG
            <br />
            DISCOUNT
          </Typography>
        </Box>
        <Grid container alignItems={"center"}>
          <Grid item xs={12} md={6}>
            <Button
              size="large"
              sx={{
                borderColor: "#ffffff",
                borderWidth: "2px",
                borderStyle: "dashed",
                borderRadius: "100px",
                width: "360px",
                height: "72px",
                color: "#ffffff",
                fontSize: "24px",
              }}
            >
              LET’S GO SHOPPING
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography>
              Changing styles becomes more extraordinary for men and women,
              especially among teenagers who like to be stylish. Hundreds or
              even thousands of stocks we provide for all of you.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ backgroundColor: "primary.dark", mt: 8 }}>
        <Box
          sx={{
            minWidth: "110vw",
            backgroundColor: "primary.main",
            transform: "rotate(-5.4deg) translateX(-5%)",
            py: 3,
          }}
        >
          <Container maxWidth="xl">
            <Grid container justifyContent={"space-between"}>
              <Discount />
              <Discount />
              <Discount />
            </Grid>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default Featured;
