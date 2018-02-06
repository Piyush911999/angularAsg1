import { Component, OnInit } from '@angular/core';
import { Employee } from './models/emp.model';

@Component({
  selector: 'app-root',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  qualification;
  experience;
  languages;
  model = new Employee('', '', '', '', '','','', '', '--Select--', '--Select--', false, false, false, false, false );

  ngOnInit():void {
      this.qualification =['--Select--', 'Finance', 'Human Resources','Marketing','Administration', 'Production', 'Others'];
      this.experience =['--Select--', 'Fresher', '1-2 yrs','3-5 yrs','>5 yrs'];
      this.languages =[];
  }
OnFormSubmit(model:string)
  {
    console.log("firstName: " + this.model.firstName);
    console.log("lastName: " + this.model.lastName);
    console.log("Email: " + this.model.Email);
    console.log("ContactNumber: " + this.model.ContactNumber);
    console.log("Address: " + this.model.Address);
    console.log("Username: " + this.model.Username);
    console.log("Password: " + this.model.Password);
    console.log("Gender: " + this.model.Gender);
    console.log("qualification: " + this.model.qualification);
    console.log("experience: " + this.model.experience);
    console.log("C: " + this.model.C);
    console.log("Java: " + this.model.Java);
    console.log("CSharp: " + this.model.CSharp);
    console.log("PHP: " + this.model.PHP);
    console.log("Python: " + this.model.Python);
    
}
}
