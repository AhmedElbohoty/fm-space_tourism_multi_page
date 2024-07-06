import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { APP_NAV_MENU_HS } from "services/history_states";
import { useHistoryStateProp, useLocationPathname } from "services/hooks";

import { isMobile } from "services/utils";

export function useNavMenuLogic() {
  /**
   * The nav menu is opened when:
   *
   *    1- Non-mobile: 'isOpened' state is true
   *
   *    2- Mobile: 'isOpened' state is true AND
   *               history state has prop called 'APP_NAV_MENU_HS'
   */
  const navigate = useNavigate();
  const pathname = useLocationPathname();
  const histProp = useHistoryStateProp(APP_NAV_MENU_HS);
  const [isOpened, setIsOpened] = useState(false);

  function open() {
    setIsOpened(true);

    if (isMobile) {
      navigate(pathname, { state: { [APP_NAV_MENU_HS]: true } });
    }
  }

  function close() {
    setIsOpened(false);

    if (isMobile) {
      navigate(pathname, { replace: true });
    }
  }

  const isNavOpened = isMobile ? isOpened && histProp : isOpened;

  return { isOpened: isNavOpened, open, close };
}
