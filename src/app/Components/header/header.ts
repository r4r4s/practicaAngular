import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { LoginService } from '../../Servicios/login/loginService'; 
import { Subscription } from 'rxjs'; 

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule], 
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit, OnDestroy {

  estaLogueado: boolean = false;
  nombreUsuario: string | null = null;
  private loginSub?: Subscription; 

  constructor(
    private loginService: LoginService, 
    private router: Router 
  ) {}

  ngOnInit(): void {
    
    this.loginSub = this.loginService.loginStatus$.subscribe(status => {
      this.estaLogueado = status;
      this.nombreUsuario = this.loginService.usuarioLogueado;
    });
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['/']); 
  }

  ngOnDestroy(): void {
    if (this.loginSub) {
      this.loginSub.unsubscribe();
    }
  }
}