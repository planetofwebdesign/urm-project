import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  role: string = "admin";

  login(user: string, password: string): boolean {
    if (user === 'user' && password === 'password') {
      localStorage.setItem('username', user);
      return true;
    }

    return false;
  }

  logout(): any {
    localStorage.removeItem('username');
  }

  getUser(): any {
    return localStorage.getItem('username');
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }

  getRole(): number {

   // return Math.floor(Math.random() * 4) + 1  ;

    if(this.role==='admin'){
      return 1;
    }else if(this.role==='manager'){
      return 2;
    }else if(this.role==='analyst'){
      return 3
    }else{
      return 0;
    }
  } 
}

export const AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
];
