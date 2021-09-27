import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAgency } from 'src/app/shared/models/agency.model';
import { AgenciesPresenter } from 'src/app/shared/presenter/agencies.presenter';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class AgencyDetailComponent implements OnInit, OnDestroy {
  agencies: IAgency[] = [];
  id: number = 0;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public presenter: AgenciesPresenter) {
  }

  ngOnInit(): void {
    const data = localStorage.getItem('agenciesList') as string;
    this.agencies = JSON.parse(data);
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'] || null;
      this.initForm(this.agencies[this.id]);
    });
  }

  ngOnDestroy(): void {
  }

  initForm(stateForm: IAgency) {
    this.presenter.formAgencies.patchValue(stateForm);
  }

  saveInfo() {
    if (this.presenter.formAgencies.valid) {
      const valueAgency = this.presenter.formAgencies.value as IAgency;
      valueAgency.id = this.id;
      valueAgency.img = this.agencies[this.id].img;
      this.agencies[this.id] = valueAgency;
      localStorage.setItem('agenciesList', JSON.stringify(this.agencies));
      this.router.navigate(['/agencias']);
    }
  }

}
