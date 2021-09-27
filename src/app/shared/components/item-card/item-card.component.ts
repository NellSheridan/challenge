import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAgency } from '../../models/agency.model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent {

  @Input() data: IAgency = {} as IAgency;
  @Output() onClickNext = new EventEmitter<string>();

  // public goToDetail(): void {
  //   this.onClickNext.emit(this.data.id);
  // }
}