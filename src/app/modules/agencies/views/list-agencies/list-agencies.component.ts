import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { AgenciesService } from 'src/app/core/services/api.service';
import { IAgency } from 'src/app/shared/models/agency.model';

@Component({
  selector: 'app-list-agencies',
  templateUrl: './list-agencies.component.html',
  styleUrls: ['./list-agencies.component.scss']
})
export class ListAgenciesComponent {
  agenciesList: IAgency[] = [];
  public loading = true;

  constructor(
    private service: AgenciesService,
    private router: Router,
  ) {}
  
  ngOnInit() {
    const data = localStorage.getItem('agenciesList') as string;
    const parseJson = JSON.parse(data);
    if (data) {
      this.agenciesList = parseJson;
      this.loading = false;
    } else {
      this.service.getList().pipe(
        tap((response) => {
          this.agenciesList = response;
          this.loading = false;
        }))
        .subscribe(
          () => {
            localStorage.setItem('agenciesList', JSON.stringify(this.agenciesList));
          }
        )
    }
    
  }

  public goToDetailAgency($event: string) {
    this.router.navigate(['agencias/detalle']);
  }
}
