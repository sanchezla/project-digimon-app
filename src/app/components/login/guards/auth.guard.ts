import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private authService: AuthService,
    private router: Router) {}
  
    canActivate() {
    if (!this.authService.getCurrentUser()) {
      console.log('Bienvenido a Digimon App!');
      return true;
    } else {
      console.log('Debe iniciar sesión.');
      this.router.navigate(['/login']);
      return false;
    }
  }  
}
