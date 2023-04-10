import {
  Box,
  Container,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import chatGPT from "@images/chat-gpt.png";
import bg from "@images/featured-bg.png";
import { IMediaQuery } from "@/models/app";
import useResponsive from "@/hooks/useResponsive";

interface FeaturedProps {}

const Featured: React.FC<FeaturedProps> = () => {
  const params: IMediaQuery = { query: "up", key: "md" };
  const mdUp = useResponsive(params);

  return (
    <>
      <Box
        sx={{
          position: "relative",
          color: "common.white",
          minHeight: { xs: 400, md: 520 },
          py: { xs: 9, md: 12 },
          background: `url(${bg.src})`,
        }}
      >
        <Container>
          <Typography variant={mdUp ? "h4" : "h5"} fontWeight={700} paragraph>
            يكشف ”المُخبر الصحفي“ الأخبار الزائفة
          </Typography>
          <Typography
            variant={mdUp ? "h6" : "body1"}
            fontWeight={700}
            paragraph
          >
            نستدل بحالات الاشتباه، ونقف على الأدلة، ونُفنّد احتمالات الزيف غير
            المرتبطة وصولاً إلى الحقيقة
          </Typography>
          <Box sx={{ maxWidth: 560 }}>
            <OutlinedInput
              fullWidth
              size="small"
              placeholder="ابحث"
              sx={{ backgroundColor: "common.white" }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    sx={{ "&:hover": { backgroundColor: "transparent" } }}
                  >
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          marginTop: { xs: "-80px", md: "-168px" },
        }}
      >
        <Box
          component="img"
          src={chatGPT.src}
          alt="logo"
          sx={{
            display: "block",
            maxWidth: { xs: "90%", md: 700 },
            height: "auto",
          }}
        />
      </Box>
    </>
  );
};

export default Featured;
