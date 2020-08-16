import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DepartmentComponent} from './departments/department/department.component';
import {DepartmentsComponent} from './departments/departments.component';
import {DepartmentService} from './departments/shared/department.service';
import { MaterialModule } from "./departments/material/material.module";
@NgModule({
  declarations: [
    AppComponent,
    DepartmentsComponent,
    DepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
