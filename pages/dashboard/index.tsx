import type { GetServerSideProps, NextPage } from "next";
import { Pages, Routes } from "@/constants/enums";

const PageTemplate: NextPage = () => <></>;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: `/${Routes.DASHBOARD}/${Pages.PERMISSIONS}`,
      permanent: false,
    },
  };
};

export default PageTemplate;
