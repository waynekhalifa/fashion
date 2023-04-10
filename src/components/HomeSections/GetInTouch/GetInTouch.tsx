import { Grid, Typography } from "@mui/material";

import Section from "@/components/UI/Section/Section";

interface Props {}

const Category: React.FC<Props> = () => {
  return (
    <Section>
      <Typography
        variant="h3"
        textAlign={"center"}
        sx={{ position: "relative", zIndex: 1 }}
      >
        JOIN US TO GET
        <br />
        NOTIFIED OF THE LATEST
        <br />
        STYLE TRENDS
      </Typography>
      <Grid container justifyContent={"center"} sx={{ mt: "-24px" }}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{
            cursor: "pointer",
            width: 208,
            height: 208,
            borderRadius: "50%",
            background:
              "linear-gradient(148deg, \n#535495 0.00%, \n#252661 96.88%)",
          }}
        >
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{
              width: 192,
              height: 192,
              borderColor: "rgba(255,255,255,0.1 )",
              borderWidth: "1px",
              borderStyle: "dashed",
              borderRadius: "50%",
            }}
          >
            <Typography
              textAlign={"center"}
              sx={{ transform: "rotate(-15deg)" }}
              variant="h4"
            >
              GET IN TOUCH
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Section>
  );
};

export default Category;
