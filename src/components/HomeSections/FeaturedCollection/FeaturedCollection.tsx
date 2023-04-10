import Section from "@/components/UI/Section";
import { ArrowNext, ArrowPrev } from "@/components/UI/SvgIcons";
import { Box, Container, Typography } from "@mui/material";

interface Props {}

const FeaturedCollection: React.FC<Props> = ({}) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    // autoplaySpeed: 4000,
  };

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
        {/* <Slider {...settings}>
         
        </Slider> */}
      </Box>
    </>
  );
};

export default FeaturedCollection;
