import { ReactNode } from "react";
import {
  OverlayScrollbarsComponent,
  OverlayScrollbarsComponentProps,
} from "overlayscrollbars-react";

import "overlayscrollbars/overlayscrollbars.css";

interface ScrollbarProps extends OverlayScrollbarsComponentProps {
  children: ReactNode;
}

function Scrollbar({ children, ...props }: ScrollbarProps) {
  return (
    <OverlayScrollbarsComponent {...props}>
      {children}
    </OverlayScrollbarsComponent>
  );
}

export default Scrollbar;
