import { useState } from "react";
import { Box, Skeleton } from "@mui/material";
import { IMAGES_STORAGE } from "@/constants/images";

interface Props {
  alt: string;
  src: string;
}

const Image: React.FC<Props> = ({ alt, src }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <Skeleton
        animation="wave"
        variant="rectangular"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          opacity: isLoaded ? 0 : 1,
          transform: "translate(-50%, -50%)",
        }}
      />
      <Box
        component="img"
        onLoad={() => {
          setIsLoaded(true);
        }}
        alt={alt}
        src={`${IMAGES_STORAGE}${src}`}
        sx={{
          opacity: isLoaded ? 1 : 0,
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
};

export default Image;
