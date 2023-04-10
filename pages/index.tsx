import Header from "@/components/Header";
import type { NextPage } from "next";

import Footer from "@/components/Footer";
import Featured from "@/components/Featured";

const Home: NextPage = () => {
  return (
    <>
      <Header activePage={""} />
      <Featured />
      <Footer />
    </>
  );
};

export default Home;
