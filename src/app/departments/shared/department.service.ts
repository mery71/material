import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor() { }

  form: FormGroup = new FormGroup({
    // $key: new FormControl(null),
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    phone: new FormControl('', [Validators.required, Validators.minLength(8)]),
    city: new FormControl(''),
    country: new FormControl(''),
    district: new FormControl('')
  });

  initializeFormGroup() {
    this.form.setValue({
    //   $key: null,
      name: '',
      email: '',
      phone: '',
      city: '',
      country: '',
      district: ''
    });
  }
}
