import Header from "@/components/Header";
import type { NextPage } from "next";

import Footer from "@/components/Footer";
import Featured from "@/components/Featured";
import HomeSections from "@/components/HomeSections";

const Home: NextPage = () => {
  return (
    <>
      <Header activePage={""} />
      <Featured />
      <HomeSections />
      <Footer />
    </>
  );
};

export default Home;
