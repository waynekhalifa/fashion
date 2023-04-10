import Header from "@/components/Header";
import type { NextPage } from "next";

import Footer from "@/components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Header activePage={""} />
      {/* <Featured /> */}
      <Footer />
    </>
  );
};

export default Home;
