import { Box, Grid, Typography } from "@mui/material";
import thumbnail from "@images/featured-post.png";

const VPostCard: React.FC = () => {
  return (
    <Box
      sx={{
        py: 2,
        borderBottom: "1px solid",
        borderColor: "divider",
        "&:last-of-type": {
          borderColor: "transparent",
          pb: 0,
        },
      }}
    >
      <Grid container columnSpacing={4}>
        <Grid item xs={12} md={4}>
          <Box
            component="img"
            src={thumbnail.src}
            alt="logo"
            sx={{ display: "block", maxWidth: "100%", height: "auto" }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography fontWeight={700} gutterBottom>
            {`هل قال ياسين بونو للصحفيين خلال مونديال قطر "ليست مشكلتي أنكم لم
            تحضروا مترجمين لكم"؟`}
          </Typography>
          <Typography variant="body2" gutterBottom>
            11 ديسمبر 2022
          </Typography>
          <Typography>
            {`            الخبرالمتداول: نشرت مواقع إخبارية اليوم خبراً يزعم أن حارس المنتخب
            المغربي لكرة القدم ياسين بونو رفض الحديث بغير اللغة العربية في ...`}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VPostCard;
