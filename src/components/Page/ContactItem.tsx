import useResponsive from "@/hooks/useResponsive";
import { IContactItem, IMediaQuery } from "@/models/app";
import { Box, Grid, Typography } from "@mui/material";
import ImageContainer from "../ImageContainer";

interface Props {
  contactItem: IContactItem;
}

const ContactItem: React.FC<Props> = ({ contactItem }) => {
  const params: IMediaQuery = { query: "up", key: "md" };
  const mdUp = useResponsive(params);

  return (
    <Grid container alignItems={mdUp ? "center" : "flex-start"} sx={{ mb: 4 }}>
      <Box
        sx={{
          backgroundColor: "common.white",
          width: { xs: 64, md: 104 },
          height: { xs: 64, md: 104 },
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: { xs: 36, md: 72 } }} id={"icon-" + contactItem.id}>
          <ImageContainer
            src={contactItem.src}
            boxID={"icon-" + contactItem.id}
            alt={contactItem.title}
            width={contactItem.width}
            height={contactItem.height}
          />
        </Box>
      </Box>
      <Box sx={{ ml: { xs: 3, md: 5 }, flex: 1 }}>
        <Typography variant="h5" gutterBottom>
          {contactItem.title}
        </Typography>
        <Typography>{contactItem.description}</Typography>
      </Box>
    </Grid>
  );
};

export default ContactItem;
