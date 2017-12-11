import { Routes } from "@angular/router";
import { AuthGuard } from '../auth/auth-guard.service';

export const ROUTES : Routes = [
  {
    path : ''
  },
  {
    path : '',
    canActivate : [AuthGuard]
  },
  {
    path: 'unauthorized',
    component : null//UnauthorizedComponent
  }
]