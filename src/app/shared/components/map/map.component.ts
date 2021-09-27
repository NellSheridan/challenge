
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

  ngOnInit(): void {}

}
