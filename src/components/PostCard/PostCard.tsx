import { Box, Typography } from "@mui/material";
import thumbnail from "@images/featured-post.png";
import { Post } from "@/models";

interface Props {
  post?: Post;
  height?: string;
  styles?: any;
}

const PostCard: React.FC<Props> = ({ height, styles }) => {
  return (
    <Box sx={{ position: "relative", mb: { xs: 3, md: 0 } }}>
      <Box
        sx={{
          position: "absolute",
          left: 16,
          top: 16,
          background: "#FF0000",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
          borderRadius: "4px",
          minWidth: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "common.white",
        }}
      >
        زائف
      </Box>
      <Box
        component="img"
        src={thumbnail.src}
        alt="logo"
        sx={{ display: "block", maxWidth: "100%", height: "auto" }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "0",
          left: "0",
          width: "100%",
          background: "#00000087",
          py: 1,
          px: 2,
          color: "common.white",
        }}
      >
        <Typography variant="body2" gutterBottom>
          11 ديسمبر 2022
        </Typography>
        <Typography
          sx={{
            lineHeight: "1.5em",
            height,
            overflow: "hidden",
            ...styles,
          }}
        >
          {`هل قال ياسين بونو للصحفيين خلال مونديال قطر "ليست مشكلتي أنكم لم
          تحضروا مترجمين لكم"؟`}
        </Typography>
      </Box>
    </Box>
  );
};

export default PostCard;
