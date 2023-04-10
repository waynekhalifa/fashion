import Category from "./Category";
import FeaturedCollection from "./FeaturedCollection";
import GetInTouch from "./GetInTouch";
import Testimonial from "./Testimonial";

interface Props {}

const HomeSections: React.FC<Props> = () => {
  return (
    <>
      <FeaturedCollection />
      <Category />
      <Testimonial />
      <GetInTouch />
    </>
  );
};

export default HomeSections;
