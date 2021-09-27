import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemCardModule } from 'src/app/shared/components/item-card/item-card.module';
import { AgenciesComponent } from './agencies.component';
import { ListAgenciesComponent } from './views/list-agencies/list-agencies.component';
import { LoaderModule } from 'src/app/shared/components/loader/loader.module';
import { AgencyDetailComponent } from './views/detail/detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AgenciesPresenter } from 'src/app/shared/presenter/agencies.presenter';

const routes: Routes = [
  {
    path: '',
    component: AgenciesComponent,
    children: [
      {
        path: '',
        redirectTo: 'canales-presenciales',
        pathMatch: 'full',
      },
      {
        path: 'canales-presenciales',
        component: ListAgenciesComponent,
      },
      {
        path: 'detalle/:id',
        component: AgencyDetailComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    AgencyDetailComponent,
    ListAgenciesComponent,
    AgenciesComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule,
    LoaderModule, ItemCardModule, RouterModule.forChild(routes)],
  providers: [AgenciesPresenter],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AgenciesModule { }
