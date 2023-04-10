import { useRef, useState } from "react";
import Box from "@mui/material/Box";

import Image from "../Image/Image";
import useElementWidth from "@/hooks/useElementWidth";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

interface Props {
  boxID: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  withBorder?: boolean;
}

const ImageContainer: React.FC<Props> = ({
  boxID,
  src,
  alt,
  withBorder,
  width,
  height,
}) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const element: any = useElementWidth(boxID);

  useIntersectionObserver({
    target: ref,
    onIntersect: ([{ isIntersecting }]: any, observerElement: any) => {
      if (isIntersecting) {
        setIsVisible(true);
        observerElement.unobserve(ref.current);
      }
    },
  });

  const aspectRatio = (height / width) * 100;

  return (
    <Box
      ref={ref}
      sx={{
        position: "relative",
        overflow: "hidden",
        display: "block",
        border: "1px solid",
        borderColor: withBorder ? "divider" : "transparent",
        paddingBottom: `${aspectRatio}%`,
        img: { height: "auto" },
      }}
    >
      {isVisible && element.width > 0 && (
        <Image
          src={`${src}?tx=c_fill,g_auto,h_${Math.round(
            aspectRatio * (element.width / 100)
          )},w_${Math.round(element.width)},f_auto`}
          alt={alt}
        />
      )}
    </Box>
  );
};

export default ImageContainer;
