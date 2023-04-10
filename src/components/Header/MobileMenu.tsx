import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import MenuToggle from "./MenuToggle";
import Navigation from "./Navigation";
import { useDimensions } from "@/hooks/useDimensions";
import { Box } from "@mui/material";

const MobileMenu: React.FC = () => {
  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(18px at 34px 24px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <Box
      sx={{
        nav: {
          zIndex: 100,
          position: "absolute",
          top: "0",
          right: "0",
          bottom: "0",
          width: "300px",
        },
        ".background": {
          position: "absolute",
          top: "0",
          right: "0",
          bottom: "0",
          width: "300px",
          background: "#fff",
        },
        button: {
          outline: "none",
          border: "none",
          webkitUserSelect: "none",
          mozUserSelect: "none",
          msUserSelect: "none",
          cursor: "pointer",
          position: "absolute",
          top: "8px",
          right: "14px",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background: "transparent",
        },
        svg: {
          transform: "scale(.8)",
        },
        "ul, li": {
          margin: "0",
          padding: "0",
        },
        ul: {
          padding: "25px",
          position: "absolute",
          top: "100px",
          width: "230px",
        },
        li: {
          listStyle: "none",
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        },
        ".icon-placeholder": {
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          flex: "40px 0",
          marginRight: "20px",
        },
        ".text-placeholder": {
          borderRadius: "5px",
          width: "200px",
          height: "20px",
          flex: "1",
        },
        ".refresh": {
          padding: "10px",
          position: "absolute",
          background: "rgba(0, 0, 0, 0.4)",
          borderRadius: "10px",
          width: "20px",
          height: "20px",
          top: "10px",
          right: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        },
      }}
    >
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div className="background" variants={sidebar} />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </Box>
  );
};

export default MobileMenu;
