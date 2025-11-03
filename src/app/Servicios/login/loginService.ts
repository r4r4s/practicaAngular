import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public isLoged: boolean = false;

  constructor() { }

  login(usuario: string, contrasena: string): boolean {
    if (usuario === 'admin' && contrasena === 'admin') {
      this.isLoged = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoged = false;
  }
}