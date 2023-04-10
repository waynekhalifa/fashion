import Section from "@/components/UI/Section";
import { ArrowNext, ArrowPrev } from "@/components/UI/SvgIcons";
import { Box, Container, Grid, Typography } from "@mui/material";

interface Props {}

const Testimonial: React.FC<Props> = () => {
  const testimonial: any = {
    name: "John Doe",
    message:
      "The materials and products are excellent, with fast and safe delivery. I am very satisfied with the service and quality of this brand!",
  };
  return (
    <Section sx={{ backgroundColor: "primary.main" }}>
      <Container>
        <Typography variant="h3">
          THEY ARE SATISFIED WITH WHAT
          <br />
          THEY BUY IN OUR BRAND
        </Typography>
        <Box sx={{ pt: 9, position: "relative" }}>
          <Grid container flexDirection={"row-reverse"}>
            <Grid item xs={12} md={9}>
              <Grid container spacing={4} alignItems={"flex-start"}>
                <Grid item xs={2}>
                  <Box
                    sx={{
                      width: 104,
                      height: 104,
                      borderRadius: "50%",
                      backgroundColor: "common.white",
                    }}
                  />
                </Grid>
                <Grid item xs={9}>
                  <Typography>{testimonial.message}</Typography>
                  <Typography sx={{ mt: 16 }}>{testimonial.name}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Box sx={{ position: "absolute", left: 0, bottom: "-16px" }}>
            <Box
              component="span"
              sx={{ display: "inline-block", cursor: "pointer" }}
            >
              <ArrowPrev />
            </Box>
            <Box
              component="span"
              sx={{ display: "inline-block", cursor: "pointer", ml: 12 }}
            >
              <ArrowNext />
            </Box>
          </Box>
        </Box>
      </Container>
    </Section>
  );
};

export default Testimonial;
