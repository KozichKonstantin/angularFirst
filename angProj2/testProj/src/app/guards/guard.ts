import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { GuardService } from "../services/guard.service";
import {inject} from "@angular/core"
// import { AuthService } from "../services/auth.service";

export const mainGuard = function (value: boolean){
    const authGuard = inject(GuardService);
    return authGuard.isLoggedIn = value
}