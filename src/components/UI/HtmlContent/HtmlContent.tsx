import serialize from "@/helpers/slateSerialize";
import Box from "@mui/material/Box";

interface Props {
  content: any;
}

const HtmlContent: React.FC<Props> = ({ content }) => {
  return (
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
        __html: serialize(content),
      }}
    />
  );
};

export default HtmlContent;
