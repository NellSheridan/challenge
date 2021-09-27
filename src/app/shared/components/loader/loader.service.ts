import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoaderService {
    private _handlerLoader = new Subject<boolean>();
    public handlerLoader$ = this._handlerLoader.asObservable();

    setLoaderState(value: boolean) {
        this._handlerLoader.next(value);
    }
}
