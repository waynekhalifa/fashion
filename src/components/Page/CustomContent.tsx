import { Pages } from "@/constants/enums";
import AboutCustom from "./AboutCustom";

interface Props {
  slug: string;
}

const CustomContent: React.FC<Props> = ({ slug }) => {
  if (slug === Pages.ABOUT_US) return <AboutCustom />;

  return null;
};

export default CustomContent;
