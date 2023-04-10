import serialize from "@/helpers/slateSerialize";
import Contact from "./Contact";
import { Pages } from "@/constants/enums";
import { Page } from "@/models";
import { selectListing as selectPages } from "@/store/pageSlice";
import { Box, Container, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import ImageContainer from "../ImageContainer";
import CustomContent from "./CustomContent";
import SectionTitle from "../UI/SectionTitle";
import CheckValidity from "./CheckValidity";
import Blog from "./Blog";
import SinglePost from "./SinglePost";

interface Props {
  slug: string;
  id?: string;
}

const PageComponent: React.FC<Props> = ({ slug, id }) => {
  const pages: Page[] = useSelector(selectPages);

  const renderContent = (): React.ReactNode => {
    if (slug === Pages.CONTACT_US) {
      return <Contact />;
    }

    const page: Page | undefined = pages.find(
      (model: Page) => model.slug === slug
    );

    if (page) {
      if (slug === Pages.CHECK_VALIDITY) return <CheckValidity page={page} />;
      if (slug === Pages.BLOG) {
        return id ? <SinglePost id={id} /> : <Blog page={page} />;
      }

      let html: any = "";

      if (page.content) html = { children: JSON.parse(page.content!) };

      return (
        <Box sx={{ py: { xs: 3, md: 8 } }}>
          <Container>
            <Grid container alignItems={"center"} sx={{ mb: 4 }}>
              {page.thumbnail && (
                <Box id={page.id} sx={{ width: 64 }}>
                  <ImageContainer
                    boxID={page.id}
                    alt={page.title}
                    src={page.thumbnailURL!}
                    width={page.thumbnailWidth!}
                    height={page.thumbnailHeight!}
                  />
                </Box>
              )}
              <Box>
                <SectionTitle maxWidth="100%" variant="h4">
                  {page.title}
                </SectionTitle>
              </Box>
            </Grid>
            {typeof html !== "string" && (
              <Box
                sx={{
                  "& p": {
                    m: "4px",
                    fontFamily: "Tajawal,serif",
                    fontSize: "1rem",
                    lineHeight: "1.5",
                  },
                  "& h2": {
                    fontFamily: "Tajawal,serif",
                    fontWeight: "700",
                    fontSize: "1.5rem",
                    lineHeight: "1.334",
                    color: "rgba(0, 0, 0, 0.87)",
                  },
                }}
                dangerouslySetInnerHTML={{
                  __html: serialize(html),
                }}
              />
            )}
            <CustomContent slug={slug} />
          </Container>
        </Box>
      );
    }

    return null;
  };

  return <>{renderContent()}</>;
};

export default PageComponent;
