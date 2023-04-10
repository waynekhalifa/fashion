import { Page } from "@/models";
import { Box, Container, Typography } from "@mui/material";
import SectionTitle from "../UI/SectionTitle";
import ToolsSection from "./ToolsSection";
import BackgroundImage from "../UI/BackgroundImage/BackgroundImage";
import { IMediaQuery } from "@/models/app";
import useResponsive from "@/hooks/useResponsive";

interface Props {
  page: Page;
}

const CheckValidity: React.FC<Props> = ({ page }) => {
  const params: IMediaQuery = { query: "up", key: "md" };
  const mdUp = useResponsive(params);
  const tool: any = {
    title: "Google Image",
    description: "قم بالبحث العكسي عن الصور المتشابهة.",
    link: "https://www.google.com",
    thumbnailID: "1",
    thumbnailURL: "1680749370600-beta.png",
    thumbnailWidth: 32,
    thumbnailHeight: 32,
  };

  const createToolsArray = (startIndex: number, endIndex: number): any[] => {
    const tools: any[] = [];

    for (let i = startIndex; i < endIndex; i++) {
      tools.push({ ...tool, id: i });
    }

    return tools;
  };

  return (
    <>
      <BackgroundImage
        spacing={1}
        imageURL={
          "https://wanijoseph.mo.cloudinary.net/oms/1679644671807-featured-bg.png?tx=f_auto"
        }
      >
        <Typography variant={mdUp ? "h4" : "h6"} fontWeight={700}>
          قم بالبحث عن الأدلة وتحقق من ملامح الاشتباه عبر هذه الأدوات
          <Box
            component="img"
            src={
              "https://wanijoseph.mo.cloudinary.net/oms/1680760385628-hand-down.png?tx=c_fill,g_auto,h_32,w_32,f_auto"
            }
            alt="hand-down"
            sx={{ position: "absolute" }}
          />
        </Typography>
      </BackgroundImage>
      <Box sx={{ py: { xs: 3, md: 8 } }}>
        <Container>
          <SectionTitle maxWidth="100%" variant="h4">
            {page.title}
          </SectionTitle>
          <Box sx={{ mt: 6 }}>
            <SectionTitle maxWidth="100%">أدوات فحص المصدر</SectionTitle>
            <ToolsSection tools={createToolsArray(1, 4)} />
          </Box>
          <Box sx={{ mt: 6 }}>
            <SectionTitle maxWidth="100%">أدوات فحص الصور</SectionTitle>
            <ToolsSection tools={createToolsArray(4, 7)} />
          </Box>
          <Box sx={{ mt: 6 }}>
            <SectionTitle maxWidth="100%">أدوات فحص الفيديو</SectionTitle>
            <ToolsSection tools={createToolsArray(7, 10)} />
          </Box>
          <Box sx={{ mt: 6 }}>
            <SectionTitle maxWidth="100%">أدوات فحص النص</SectionTitle>
            <ToolsSection tools={createToolsArray(10, 13)} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default CheckValidity;
