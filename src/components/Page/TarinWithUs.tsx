import { Page } from "@/models";
import {
  Box,
  Button,
  Grid,
  Typography,
  CardContent,
  CardMedia,
} from "@mui/material";

import useLoading from "@/hooks/useLoading";
import thumbnail from "@images/training_with_us.png";
import thumbnail2 from "@images/section_for_test.png";
import thumbnail3 from "@images/unsplash_SYTO3xs06fU.png";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import SectionTitle from "../UI/SectionTitle";
import Card from "../UI/Card/Card";
import UploadNews from "../HomeSections/UploadNews";
interface Props {
  page: Page;
}

const TrainWithUs: React.FC<Props> = ({ page }) => {
  const { loading, setLoading } = useLoading();

  return (
    <Box sx={{ py: { xs: 0, md: 0 } }}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={thumbnail.src}
          alt="logo"
          sx={{ display: "block", maxWidth: "100%", height: "auto" }}
        />
      </Box>
      <Grid container alignItems={"center"} sx={{ m: 4 }}>
        <Grid item lg={12} textAlign={"center"} sx={{ m: 4 }}>
          <KeyboardDoubleArrowDownIcon
            sx={{
              color: "#780018",
              fontSize: "60px",
              cursor: "pointer",
            }}
          />
        </Grid>
        <Grid item lg={12} textAlign={"left"}>
          <SectionTitle maxWidth="100%" variant="h4">
            الدورة التدريبية
          </SectionTitle>
        </Grid>
        <Grid item lg={12} textAlign={"left"} sx={{ m: 4 }}>
          <Typography maxWidth="100%" variant="h6">
            نقدم تدريباً أساسياً وفقاً لاحتياجاتك العلمية والعملية في المدة
            الزمنية المتاحة لك عبر كورس مكثف من &quot; المُخبِر الصحفي&quot;،
            وتغطي الورشة الموضوعات الآتية:
          </Typography>
        </Grid>
        <Grid item lg={12}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={thumbnail2.src}
              alt="logo"
              sx={{ display: "block", maxWidth: "100%", height: "auto" }}
            />
          </Box>
        </Grid>
        <Grid lg={12} textAlign={"center"} sx={{ m: 4 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#780018",
              color: "#fff",
              width: "200px",
              height: "50px",
              fontSize: "20px",
              "&:hover": {
                backgroundColor: "#780018",
                color: "#fff",
              },
            }}
          >
            بدء التدريب
          </Button>
        </Grid>
        <Grid item lg={12} textAlign={"left"}>
          <SectionTitle maxWidth="100%" variant="h4">
            الندوات العلمية
          </SectionTitle>
        </Grid>
        <Grid
          item
          lg={12}
          sx={{
            mr: 4,
          }}
        >
          <Grid container alignItems={"center"}>
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <Grid key={index} item lg={3} xs={12}>
                <Card sx={{ mb: 2, cursor: "pointer" }}>
                  <CardMedia
                    style={{
                      position: "relative",
                      height: 200,
                      maxWidth: "100%",
                      zIndex: 1,
                    }}
                    image={thumbnail3.src}
                    title="Title of the image"
                  >
                    <CardContent
                      style={{ position: "absolute", bottom: 0, zIndex: 999 }}
                    >
                      <Typography
                        variant="h5"
                        component="h2"
                        sx={{
                          color: "#fff",
                          fontWeight: "bold",
                        }}
                      >
                        Title of the card
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="textSecondary"
                        sx={{
                          color: "#fff",
                          fontWeight: "bold",
                          fontSize: "14px",
                        }}
                      >
                        1-4-2021
                      </Typography>
                    </CardContent>
                  </CardMedia>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* {loading && <p>Loading...</p>} */}
      <UploadNews />
    </Box>
  );
};

export default TrainWithUs;
