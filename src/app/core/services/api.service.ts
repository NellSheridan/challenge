import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IAgency } from 'src/app/shared/models/agency.model';

@Injectable({
    providedIn: 'root'
})
export class AgenciesService {
  private readonly _url = 'assets/data/agencies.json';
  constructor(private http: HttpClient) {}

  public getImgSrc() {
    let number = Math.round(Math.random() * 6);
    return `assets/images/agencia-${number}.jpg`;
  }

  public getList(): Observable<IAgency[]> {
    return this.http.get<IAgency[]>(this._url).pipe(
      map((agencies) => {
        const listAgency: IAgency[] = [];
        for (let key in agencies) {
          let imgSrc = this.getImgSrc();
          listAgency.push({ ...agencies[key], img: imgSrc, id: key });
        }
        return listAgency;
      })
    );
  }
}
