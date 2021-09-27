
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  lat = -12.0862401;
  lng = -77.030033;
  type = 'satellite';
  // zoom = 8;
  // @Input() draggable = false;
  // @Input() list: any;

  // @Output() marker: EventEmitter<any> = new EventEmitter();
  // constructor() {}

  ngOnInit(): void {}

  // markerDragEnd(location: ListOfAgencies, $event: any) {
  //   this.marker.emit({latitude: $event.latLng.lat(), longitude: $event.latLng.lng()})
  // }

  // clickedMarker(label: string, index: number) {
  //   console.log(`clicked the marker: ${label || index}`)
  // }
}
