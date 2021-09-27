import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ItemCardComponent } from './item-card.component';

@NgModule({
  declarations: [ItemCardComponent],
  exports: [ItemCardComponent],
  imports: [CommonModule],
  providers: [],
})
export class ItemCardModule { }
