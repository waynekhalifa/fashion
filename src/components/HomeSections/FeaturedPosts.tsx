import { Box, Container } from "@mui/material";
import PostCard from "../PostCard";
import Section from "../UI/Section";

interface Props {}

const FeaturedPosts: React.FC<Props> = () => {
  return (
    <Section background="transparent">
      <Container>
        <Box
          className="parent"
          sx={{
            display: { md: "grid" },
            gridTemplateColumns: { md: "repeat(12, 1fr)" },
            gridTemplateRows: { md: "repeat(6, 1fr)" },
            gridColumnGap: { md: "16px" },
            gridRowGap: { md: "16px" },
          }}
        >
          <Box sx={{ gridArea: "1 / 1 / 4 / 4" }}>
            <PostCard
              height="1.5em"
              styles={{ whiteSpace: "nowrap", textOverflow: "ellipsis" }}
            />
          </Box>
          <Box sx={{ gridArea: "4 / 1 / 7 / 4" }}>
            <PostCard
              height="1.5em"
              styles={{ whiteSpace: "nowrap", textOverflow: "ellipsis" }}
            />
          </Box>
          <Box sx={{ gridArea: "1 / 10 / 4 / 13" }}>
            <PostCard
              height="1.5em"
              styles={{ whiteSpace: "nowrap", textOverflow: "ellipsis" }}
            />
          </Box>
          <Box sx={{ gridArea: "4 / 10 / 7 / 13" }}>
            <PostCard
              height="1.5em"
              styles={{ whiteSpace: "nowrap", textOverflow: "ellipsis" }}
            />
          </Box>
          <Box sx={{ gridArea: "1 / 4 / 7 / 10" }}>
            <PostCard height="3em" />
          </Box>
        </Box>
      </Container>
    </Section>
  );
};

export default FeaturedPosts;
