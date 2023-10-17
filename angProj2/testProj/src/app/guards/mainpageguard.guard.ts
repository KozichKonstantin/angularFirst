import { CanActivateFn } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';
export const mainpageguardGuard: CanActivateFn = (route, state) => {
  return true;
};
