import { useLocation } from "react-router-dom";

export function useLocationPathname() {
  const location = useLocation();

  return location.pathname;
}

export function useHistoryStateProp(prop: string) {
  const location = useLocation();

  return location.state?.[prop];
}
