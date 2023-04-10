import AdsPlaceHolder from "./AdsPlaceHolder";
import FeaturedPosts from "./FeaturedPosts";
import MotionGraphic from "./MotionGraphic";
import Proves from "./Proves";
import UploadNews from "./UploadNews";

interface Props {}

const HomeSections: React.FC<Props> = () => {
  return (
    <>
      <FeaturedPosts />
      <MotionGraphic />
      <Proves />
      <UploadNews />
      <AdsPlaceHolder />
    </>
  );
};

export default HomeSections;
