import { Component, OnInit } from '@angular/core';
import { GeneralAccessService } from '../general-access.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general-page',
  templateUrl: './general-page.component.html',
  styleUrl: './general-page.component.css'
})
export class GeneralPageComponent implements OnInit {

  currentModule: string | undefined;

  constructor(private generalAccess: GeneralAccessService, private router: Router) { }

  ngOnInit(): void {
      
  }

  moduleRedirection(currentModule: string) {
    this.generalAccess.changeModule(currentModule);
    if (currentModule == 'carModule') {
      this.router.navigate(['/search-car']);
    }

  }

}
