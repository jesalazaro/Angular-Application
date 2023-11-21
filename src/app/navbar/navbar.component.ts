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

  constructor(private generalAccessService: GeneralAccessService, private router: Router) { }


  ngOnInit() {

    const userId = sessionStorage.getItem("userId");
    const currentModule = sessionStorage.getItem("currentModule");

    //if vacio para no romper reglas de typescript
    if (userId == null) {
    } else {
      this.generalAccessService.changeUserId(userId);
    }

    if(currentModule == null){
    } else {
      this.generalAccessService.changeModule(currentModule);
    }

    this.generalAccessService.currentUserId.subscribe((userId) => {
      this.userId = userId;
    });
    this.generalAccessService.currentModule.subscribe((currentModule) => {
      this.currentModule = currentModule;
    });

  }

  closeSession() {
    this.userId = '';
    this.currentModule = '';
    sessionStorage.clear();
    this.router.navigate(['/']);
  }

  redirectToGeneral() {
    this.currentModule = '';
    this.router.navigate(['/general']);
    sessionStorage.setItem("currentModule", '');
  }

  moduleRedirection(currentModule: string) {
    this.currentModule = currentModule;
    sessionStorage.setItem("currentModule", currentModule);
  }


}
