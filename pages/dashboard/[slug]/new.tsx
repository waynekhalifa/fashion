import type { NextPage } from "next";
import { Suspense } from "react";

import { useRouter } from "next/router";
import { Pages, Routes } from "@/constants/enums";
import { Button } from "@mui/material";
import ActionLoader from "@/components/UI/ActionLoader";

const New: NextPage = () => {
  const { push } = useRouter();

  const handleLogout = () => push(`/${Routes.AUTH}/${Pages.LOGOUT}`);

  return (
    <>
      <Suspense fallback={<ActionLoader position="fixed" />}>
        <Button onClick={handleLogout}>logout</Button>
      </Suspense>
    </>
  );
};

export default New;
