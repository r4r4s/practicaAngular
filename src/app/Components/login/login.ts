import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../Servicios/login/loginService'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  public usuario: string = '';
  public contrasena: string = '';
  
  public errorLogin: boolean = false;

  constructor(
    private router: Router,
    private loginService: LoginService // 
  ) { }

  login(): void {
    
   
    const exito = this.loginService.login(this.usuario, this.contrasena);

    if (exito) {
     
      this.errorLogin = false;
      this.router.navigate(['/inicio']);
    } else {
      this.errorLogin = true;
    }
  }
}