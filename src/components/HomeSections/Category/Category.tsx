import Section from "@/components/UI/Section";
import { Container, Grid, Typography } from "@mui/material";

interface Props {}

import menBg from "@images/category/men-bg.png";
import womenBg from "@images/category/women-bg.png";

const Category: React.FC<Props> = ({}) => {
  return (
    <>
      <Section sx={{ backgroundColor: "primary.main" }}>
        <Container>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography variant="h3">
                CHOOSE YOUR
                <br />
                FASHION CATEGORY
              </Typography>
            </Grid>
          </Grid>
          <Grid container flexDirection={"row-reverse"}>
            <Grid item xs={12} md={6}>
              <Typography>
                Tempor justo odio nam ut et. Vel interdum mi consequat mi
                interdum iaculis adipiscing. Purus est sed lectus consequat
                phasellus at sollicitudin consectetur lorem. Rhoncus sed
                pellentesque nunc.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Section>
      <Section
        sx={{
          backgroundImage: `url(${menBg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <Grid container alignItems={"center"}>
            <Grid item xs={12} md={4}>
              <Typography color={"primary.main"} variant="h5" sx={{ mb: 4 }}>
                Various choices of clothing for men
              </Typography>
              <Typography color={"primary.main"} variant="h3">
                {"MEN’S"}
                <br />
                FASHION
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid container justifyContent={"center"}>
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    width: 120,
                    height: 120,
                    borderColor: "rgba(255,255,255,0.1 )",
                    borderWidth: "1px",
                    borderStyle: "dashed",
                    borderRadius: "50%",
                    backgroundColor: "primary.main",
                  }}
                >
                  <Typography
                    textAlign={"center"}
                    sx={{ transform: "rotate(-15deg)" }}
                    variant="h5"
                  >
                    VISIT SHOP
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Section>
      <Section
        sx={{
          backgroundImage: `url(${womenBg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <Grid container alignItems={"center"} flexDirection={"row-reverse"}>
            <Grid item xs={12} md={4}>
              <Typography color={"primary.main"} variant="h5" sx={{ mb: 4 }}>
                Various choices of clothing for women
              </Typography>
              <Typography color={"primary.main"} variant="h3">
                {"WOMAN’S"}
                <br />
                FASHION
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Section>
    </>
  );
};

export default Category;
