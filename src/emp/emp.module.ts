import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { EmpComponent } from './emp.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [EmpComponent ],
  imports: [BrowserModule, HttpModule, FormsModule ],
  providers: [],
  bootstrap: [EmpComponent]
})
export class EmpModule { }
