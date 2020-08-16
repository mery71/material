import { Component, OnInit } from '@angular/core';
import {DepartmentService} from '../shared/department.service';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  constructor(public  service: DepartmentService) { }
 citys = [
    { id: 3, value: 'Hue' },
    { id: 2, value: 'HCM' },
    ];

  ngOnInit(): void {
  }
  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

}
