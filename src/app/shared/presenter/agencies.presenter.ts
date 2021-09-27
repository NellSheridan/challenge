import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Injectable()
export class AgenciesPresenter {
    private _formAgencies: FormGroup;
    constructor() {
        this._formAgencies = new FormGroup({
            agencia: new FormControl(null, [Validators.required]),
            distrito: new FormControl(null, [Validators.required]),
            provincia: new FormControl(null, [Validators.required]),
            departamento: new FormControl(null, [Validators.required]),
            direccion: new FormControl(null, [Validators.required]),
            lat: new FormControl(null, [Validators.required]),
            lon: new FormControl(null, [Validators.required]),
        })
    }

    get formAgencies() {
        return this._formAgencies;
    }

    cleanForm() {
        this.formAgencies.reset()
    }
}