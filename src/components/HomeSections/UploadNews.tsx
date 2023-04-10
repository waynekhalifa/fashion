import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Section from "../UI/Section";

import searching from "@images/searching.png";
import SectionTitle from "../UI/SectionTitle";
import DropzoneField from "../UI/FormFields/DropzoneField";

interface UploadNewsProps {}

const UploadNews: React.FC<UploadNewsProps> = () => {
  return (
    <Section background="#F7F5F9">
      <Container>
        <SectionTitle maxWidth="100%">لا تجد ما تبحث عنه؟</SectionTitle>
        <Typography paragraph>
          قم برفع الخبر الذي ترغب في التحقق منه، لا يمكننا أن نعدكم بفحص كل خبر
          مقترح، لكننا نبذل قصارى جهدنا في عمل اللازم.
        </Typography>
        <Grid container columnSpacing={4} alignItems={"center"}>
          <Grid item xs={12} md={8}>
            <Box
              component="form"
              sx={{ mt: 2, input: { backgroundColor: "common.white" } }}
            >
              <Box sx={{ mb: 2 }}>
                <Typography>الاسم بالكامل</Typography>
                <TextField fullWidth size="small" />
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography>البريد الإلكتروني</Typography>
                <TextField fullWidth size="small" />
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography>رابط الخبر</Typography>
                <TextField fullWidth size="small" />
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography>500 كلمة</Typography>
                <TextField fullWidth size="small" />
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography>رفع ملف</Typography>
                {/* <TextField fullWidth size="small" type="file" /> */}
                <DropzoneField />
              </Box>
              <Grid container justifyContent={"center"}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ minWidth: 184 }}
                >
                  إرسال
                </Button>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src={searching.src}
              alt="logo"
              sx={{ display: "block", maxWidth: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default UploadNews;
