import { Member } from "@/models";
import { Box, Typography } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

import ImageContainer from "../ImageContainer/ImageContainer";
import Link from "next/link";

interface Props {
  member: Member;
}

const MemberCard: React.FC<Props> = ({ member }) => {
  return (
    <Box sx={{ px: 4 }}>
      <Box
        sx={{
          background: "#F7F5F9",
          boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.1)",
          borderRadius: "6px",
          p: 4,
        }}
      >
        <Box
          sx={{
            width: "calc(100% -64px)",
            ml: "-64px",
            mb: 3,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            id={"member-thumbnail-" + member.id}
            sx={{ width: "80%", height: "80%" }}
          >
            <ImageContainer
              boxID={"member-thumbnail-" + member.id}
              src={member.thumbnailURL!}
              alt={member.name}
              width={member.thumbnailWidth!}
              height={member.thumbnailHeight!}
            />
          </Box>
          <Box>
            <Box
              component="span"
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 1,
                a: {
                  textDecoration: "none",
                  color: "inherit",
                  display: "block",
                },
              }}
            >
              <Link href={"https://www.facebook.com/"} target="_blank">
                <FacebookOutlinedIcon />
              </Link>
            </Box>
            <Box
              component="span"
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 1,
                a: {
                  textDecoration: "none",
                  color: "inherit",
                  display: "block",
                },
              }}
            >
              <Link href={"https://www.linkedin.com/"} target="_blank">
                <LinkedInIcon />
              </Link>
            </Box>
            <Box
              component="span"
              sx={{
                display: "flex",
                alignItems: "center",
                a: {
                  textDecoration: "none",
                  color: "inherit",
                  display: "block",
                },
              }}
            >
              <Link href={"mailto:wani-joseph@outlook.com"} target="_blank">
                <MailIcon />
              </Link>
            </Box>
          </Box>
        </Box>
        <Typography gutterBottom variant="h5" fontWeight={700}>
          {member.name}
        </Typography>
        <Typography fontWeight={500}>{member.jobTitle}</Typography>
      </Box>
    </Box>
  );
};

export default MemberCard;
