import { Box, Container } from "@mui/material";

import placeholder from "@images/ads-placeholder.png";
import Section from "../UI/Section";

const AdsPlaceHolder: React.FC = () => {
  return (
    <Section background="transparent">
      <Container>
        <Box
          component="img"
          src={placeholder.src}
          alt="logo"
          sx={{ display: "block", maxWidth: "100%", height: "auto" }}
        />
      </Container>
    </Section>
  );
};

export default AdsPlaceHolder;
