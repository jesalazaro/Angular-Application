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
  perfEntries = performance.getEntriesByType('navigation');

  constructor(private generalAccessService: GeneralAccessService, private router: Router) { }

  ngOnInit(): void {
  }

  moduleRedirection(currentModule: string) {
    this.generalAccessService.changeModule(currentModule);
    if (currentModule == 'carModule') {
      this.router.navigate(['/search-car']);
    }
    else if (currentModule == 'houseModule') {
      this.router.navigate(['/search-hotel']);
    }

  }

}
