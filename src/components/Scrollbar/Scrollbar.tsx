import { ReactNode } from "react";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

interface ScrollbarProps {
  children: ReactNode;
}

function Scrollbar({ children }: ScrollbarProps) {
  return <OverlayScrollbarsComponent>{children}</OverlayScrollbarsComponent>;
}

export default Scrollbar;
