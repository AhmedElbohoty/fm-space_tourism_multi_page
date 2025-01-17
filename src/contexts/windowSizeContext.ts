import { createContext, useContext } from "react";

import { MAX_SMAL_SCR_WIDTH, MIN_LARGE_SCR_WIDTH } from "services/constants";

interface windowSizeContext {
  isLargeScr: boolean;
  isSmallScr: boolean;
}

const contextValue: windowSizeContext = {
  isLargeScr: window.innerWidth > MIN_LARGE_SCR_WIDTH,
  isSmallScr: window.innerWidth <= MAX_SMAL_SCR_WIDTH,
};

export const WindowSizeContext = createContext(contextValue);

export function useWindowSizeContext() {
  const context = useContext(WindowSizeContext);

  if (context === undefined) {
    throw new Error(
      "useWindowSizeContext must be used within a WindowSizeContext Provider"
    );
  }

  return context;
}
