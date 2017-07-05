import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRoute,Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';



@Injectable()
export class AuthGuard implements CanActivate {
 constructor(private authService: AuthService ,
              private router: Router,
              private route: ActivatedRoute
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log("testing")
      const role = this.authService.getRole();
      console.log("in auth guard:: "+role);
      if(role==1){
         this.router.navigate(['./admin'], {relativeTo: this.route});

      }else if(role==2) {
          this.router.navigate(['./manager'], {relativeTo: this.route});

      }else if(role==3) {
          this.router.navigate(['./analyst'], {relativeTo: this.route});
      }else{
        return true;
      }
     
  }
}
