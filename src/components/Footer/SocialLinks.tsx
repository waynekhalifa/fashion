import { IconButton, List } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

interface Props {}

interface SocialIconProps {
  children: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ children }) => {
  return (
    <IconButton
      component="li"
      sx={{
        backgroundColor: "common.white",
        color: "secondary.main",
        mr: 1,
        "&:hover": {
          backgroundColor: "common.white",
          color: "secondary.main",
        },
      }}
    >
      {children}
    </IconButton>
  );
};

const SocialLinks: React.FC<Props> = () => {
  return (
    <List disablePadding sx={{ display: "flex", alignItems: "center" }}>
      <SocialIcon>
        <FacebookOutlinedIcon fontSize="small" />
      </SocialIcon>
      <SocialIcon>
        <InstagramIcon fontSize="small" />
      </SocialIcon>
      <SocialIcon>
        <TwitterIcon fontSize="small" />
      </SocialIcon>
      <SocialIcon>
        <WhatsAppIcon fontSize="small" />
      </SocialIcon>
      <SocialIcon>
        <LinkedInIcon fontSize="small" />
      </SocialIcon>
    </List>
  );
};

export default SocialLinks;
