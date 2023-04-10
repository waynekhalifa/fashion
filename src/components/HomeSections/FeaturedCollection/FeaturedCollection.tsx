import Section from "@/components/UI/Section";
import { ArrowNext, ArrowPrev } from "@/components/UI/SvgIcons";
import { Box, Container, Grid, Typography } from "@mui/material";

interface Props {}

const FeaturedCollection: React.FC<Props> = ({}) => {
  return (
    <>
      <Section>
        <Container>
          <Box sx={{ pt: 9, position: "relative" }}>
            <Typography variant="h3">
              FEATURED
              <br />
              COLLECTION
            </Typography>
            <Box sx={{ position: "absolute", right: 0, top: "98px" }}>
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
      <Box sx={{ overflowX: "hidden" }}>
        <Grid container sx={{ py: 16 }}>
          <Box sx={{ width: "18%" }}>
            <Box
              component="img"
              src="/images/lsliders/image1.webp"
              sx={{ maxWidth: "100%", height: "auto", display: "block" }}
            />
          </Box>
          <Box sx={{ width: "18%" }}>
            <Box
              component="img"
              src="/images/lsliders/image2.webp"
              sx={{ maxWidth: "100%", height: "auto", display: "block" }}
            />
          </Box>
          <Box sx={{ width: "28%", mt: "-8%" }}>
            <Box
              component="img"
              src="/images/lsliders/image1.webp"
              sx={{ width: "100%", height: "auto", display: "block" }}
            />
          </Box>
          <Box sx={{ width: "18%" }}>
            <Box
              component="img"
              src="/images/lsliders/image2.webp"
              sx={{ width: "100%", height: "auto", display: "block" }}
            />
          </Box>
          <Box sx={{ width: "18%" }}>
            <Box
              component="img"
              src="/images/lsliders/image1.webp"
              sx={{ maxWidth: "100%", height: "auto", display: "block" }}
            />
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default FeaturedCollection;
