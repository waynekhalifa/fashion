import { IContactItem } from "@/models/app";
import { Box, Button, TextField, Typography } from "@mui/material";
import SocialLinks from "../Footer/SocialLinks";
import DropzoneField from "../UI/FormFields/DropzoneField";
import ContactItem from "./ContactItem";

const items: IContactItem[] = [
  {
    id: "1",
    src: "1680247742840-hand.gif",
    width: 576,
    height: 480,
    title: "سياسة التصحيح",
    description:
      "يمكنك مراجعة سياسة تصحيح المُخبِر الصحفي (رابط سياسة التصحيح)إذا كنت تريد تصحيح خبر ما أو إضافة تعديل .. دمتم دعماً للحقيقة.",
  },
  {
    id: "2",
    src: "1680247742831-phone.gif",
    width: 496,
    height: 368,
    title: "الهاتف",
    description: "+20 123456789",
  },
  {
    id: "3",
    src: "1680247742804-notebook.gif",
    width: 600,
    height: 474,
    title: "العلاقات العامة",
    description: "almokhber@gmail.com",
  },
];

const ContactUs: React.FC = () => {
  return (
    <Box sx={{ position: "relative", minHeight: { md: 672 } }}>
      <Box
        sx={{
          width: { md: "50vw" },
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          p: { xs: 3, md: 16 },
        }}
      >
        <Box
          component="form"
          sx={{ input: { backgroundColor: "common.white" } }}
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
            <Typography>الرسالة</Typography>
            <TextField
              fullWidth
              size="small"
              placeholder="500 كلمة"
              multiline
              rows={3}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography>رفع ملف</Typography>
            <DropzoneField />
          </Box>
          <Button type="submit" variant="contained" fullWidth>
            إرسال
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          position: { md: "absolute" },
          width: { md: "50vw" },
          right: { md: "0px" },
          top: { md: "0px" },
          height: "100%",
          background:
            "url(https://wanijoseph.mo.cloudinary.net/oms/1680247118169-contactus-bg.png?tx=c_fill,g_auto,f_auto) no-repeat center center/cover",
        }}
      >
        <Box
          sx={{
            maxWidth: "640px",
            m: "0 auto",
            color: "common.white",
            py: { xs: 6, md: 12 },
            px: { xs: 3, md: 0 },
          }}
        >
          {items.map((item: IContactItem) => (
            <ContactItem key={item.id} contactItem={item} />
          ))}
          <Typography variant="h4" paragraph>
            # تواصل معنا
          </Typography>
          <SocialLinks />
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
