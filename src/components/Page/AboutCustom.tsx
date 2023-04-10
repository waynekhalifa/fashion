import { CustomContent, Member } from "@/models";
import { selectAboutContent, selectMembers } from "@/store/pageSlice";
import { Box, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import HtmlContent from "../UI/HtmlContent/HtmlContent";
import ImageContainer from "../ImageContainer";
import MemberCard from "./MemberCard";

interface Props {}

const AboutCustom: React.FC<Props> = () => {
  const customContents: CustomContent[] = useSelector(selectAboutContent);
  const members: Member[] = useSelector(selectMembers);

  if (customContents.length === 0 || members.length === 0) return null;

  return (
    <>
      <Grid container spacing={4} sx={{ mt: { xs: 4 } }}>
        {customContents.map((content: CustomContent) => {
          let html: any = "";

          if (content.content)
            html = { children: JSON.parse(content.content!) };

          return (
            <Grid key={content.id} item xs={12} md={6}>
              <Grid container alignItems={"center"} sx={{ mb: 4 }}>
                {content.thumbnail && (
                  <Box id={content.id} sx={{ width: 64 }}>
                    <ImageContainer
                      boxID={content.id}
                      alt={content.title}
                      src={content.thumbnailURL!}
                      width={content.thumbnailWidth!}
                      height={content.thumbnailHeight!}
                    />
                  </Box>
                )}
                <Typography variant="h4" component="h1" fontWeight={700}>
                  {content.title}
                </Typography>
              </Grid>
              <HtmlContent content={html} />
            </Grid>
          );
        })}
      </Grid>
      <Grid container columnSpacing={4} rowSpacing={4} sx={{ my: { xs: 4 } }}>
        {members.map((model: Member) => (
          <Grid key={model.id} item xs={12} md={4}>
            <MemberCard member={model} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default AboutCustom;
