import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public isLoged: boolean = false;
  public usuarioLogueado: string | null = null; 


  private loginStatus = new BehaviorSubject<boolean>(false);
  

  public loginStatus$ = this.loginStatus.asObservable();

  constructor() { }

  login(usuario: string, contrasena: string): boolean {
    if (usuario === 'admin' && contrasena === 'admin') {
      this.isLoged = true;
      this.usuarioLogueado = usuario; 
      this.loginStatus.next(true); 
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoged = false;
    this.usuarioLogueado = null;
    this.loginStatus.next(false);
  }
}