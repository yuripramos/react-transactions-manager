import { SCREEN_MD } from "./constants";
export function isResponsive() {
  if (window.screen.availWidth < SCREEN_MD) {
    return true;
  }
}
