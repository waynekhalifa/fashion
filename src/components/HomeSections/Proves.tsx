import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import Section from "../UI/Section";

import placeholder from "@images/join-us.png";

import SectionTitle from "../UI/SectionTitle";
import VPostCard from "../VPostCard";
import DropzoneField from "../UI/FormFields/DropzoneField";

interface ProvesProps {}

const Proves: React.FC<ProvesProps> = () => {
  return (
    <Section background="transparent">
      <Container>
        <Grid container columnSpacing={4} sx={{ mb: 9 }}>
          <Grid item xs={12} md={8}>
            <Grid container justifyContent="space-between">
              <Box>
                <SectionTitle maxWidth="100%">أخبار الشائعات</SectionTitle>
              </Box>
              <Link href="/blog" underline="none" color="inherit">
                عرض الكل
              </Link>
            </Grid>
            <VPostCard />
            <VPostCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src={placeholder.src}
              alt="logo"
              sx={{ display: "block", maxWidth: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
        <Box sx={{ py: 6, boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.1)" }}>
          <Container maxWidth="md">
            <SectionTitle maxWidth="100%">
              قدم ما يدعمنا من مستندات وأدلة مقابل 2 دولار
            </SectionTitle>
            <Typography paragraph>
              سيقوم فريق “المٌخبر الصحفي” بالإطلاع على الأدلة وعند التحقق من
              صحتها سيتم إرسال المبلغ ومن ثم نشر الأدلة مع نسبها لمصدرها الأصلي.
            </Typography>
            <Box
              component="form"
              sx={{ mt: 6, input: { backgroundColor: "common.white" } }}
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
                <Typography>الرقم القومي</Typography>
                <TextField fullWidth size="small" />
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography>رفع ملف</Typography>
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
          </Container>
        </Box>
      </Container>
    </Section>
  );
};

export default Proves;
