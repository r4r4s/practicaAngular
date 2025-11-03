

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../Servicios/login/loginService'; 

export const authGuard: CanActivateFn = (route, state) => {
  

  const loginService = inject(LoginService);
  const router = inject(Router);

 
  if (loginService.isLoged) {
    return true; 
  } else {
    
    router.navigate(['/']); 
    return false; 
  }
};