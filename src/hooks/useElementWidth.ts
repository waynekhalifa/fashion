import { useCallback, useEffect, useState } from "react";

interface IState {
  width: number;
}

const INITIAL_STATE: IState = { width: 0 };

const useElementWidth = (elementID: string) => {
  const [state, setState] = useState(INITIAL_STATE);

  const handleResize = useCallback(() => {
    const container: HTMLElement | null = document.getElementById(elementID);

    if (container) {
      const { width } = container.getBoundingClientRect();

      setState({ width });
    }

    // eslint-disable-next-line
  }, [elementID]);

  useEffect(() => {
    handleResize();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  return state;
};

export default useElementWidth;
