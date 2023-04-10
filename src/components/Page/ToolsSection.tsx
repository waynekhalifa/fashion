import { Box, Button, Divider, Grid, Typography } from "@mui/material";

import ImageContainer from "../ImageContainer";
import { OpenInNewIcon } from "../UI/Icons";
import Card from "../UI/Card";

interface Props {
  tools: any[];
}

const ToolsSection: React.FC<Props> = ({ tools }) => {
  const handleClick = (url: string) => window.open(url, "_blank");

  return (
    <Grid container spacing={4}>
      {tools.map((tool: any) => (
        <Grid key={tool.id} item xs={12} md={4}>
          <Card>
            <Grid container alignItems={"center"}>
              <Box
                id={"thumbnail-" + tool.thumbnailID + tool.id}
                sx={{ width: 32, height: 32, mr: 2 }}
              >
                <ImageContainer
                  boxID={"thumbnail-" + tool.thumbnailID + tool.id}
                  src={tool.thumbnailURL}
                  alt={tool.title}
                  width={tool.thumbnailWidth}
                  height={tool.thumbnailHeight}
                />
              </Box>
              <Typography fontWeight={500}>{tool.title}</Typography>
            </Grid>
            <Divider sx={{ my: 2 }} />
            <Typography color="text.secondary" paragraph>
              {tool.description}
            </Typography>
            <Grid container justifyContent={"center"}>
              <Button
                variant="outlined"
                size="small"
                startIcon={<OpenInNewIcon fontSize="small" />}
                onClick={() => handleClick(tool.link)}
              >
                قم بالتجربة
              </Button>
            </Grid>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ToolsSection;
