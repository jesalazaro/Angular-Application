import { Component, Input } from '@angular/core';
import { GeneralAccessService } from '../general-access.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  userId = '';
  currentModule = '';

  constructor(private generalAccess: GeneralAccessService, private router: Router) { }


  ngOnInit() {
    this.generalAccess.currentUserId.subscribe((userId) => {
      this.userId = userId;
    });
    this.generalAccess.currentModule.subscribe((currentModule) => {
      this.currentModule = currentModule;
    });
  }

  closeSession() {
    this.userId = '';
    this.currentModule = '';
    this.router.navigate(['/']);
  }

  redirectToGeneral() {
    this.currentModule = '';
    this.router.navigate(['/general']);
  }

  moduleRedirection(currentModule: string) {
    this.currentModule = currentModule;
  }


}
