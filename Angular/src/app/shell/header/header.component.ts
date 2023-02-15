import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




import { AuthenticationService, CredentialsService } from '@app/auth';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuHidden = true;
userName:any;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private credentialsService: CredentialsService
  ) {}

  ngOnInit() {

this.userName = this.credentialsService.getUserName();
    
}


  logout(): Observable<boolean> {
    // Customize credentials invalidation here
    this.credentialsService.clearCredentila();
    this.router.navigate(['/login'])
    return of(true);
  }

}
