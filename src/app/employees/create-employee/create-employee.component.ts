import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { NgForm } from '@angular/forms';
import { Department } from 'src/app/models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  // selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  

  bsConfig: Partial<BsDatepickerConfig>;
 
  departments: Department[]=[
  {id:1,name:'IT'} , 
  {id:2,name:'Engineering'} , 
  {id:3,name:'Medicine'} , 
  {id:4,name:'Science'} ,
  {id:5,name:'Arts'}
  
  ];
  gender:string;
  email:string; //declare variable
  fullName:string;
  phoneNumber:number;
  contactPref:string;
  isActive:boolean;
  department:string;
  dateOfBirth:Date;
  
  



  constructor() { 
    
    this.bsConfig = Object.assign({}, { containerClass: 
    'theme-dark-blue', 
    showWeekNumbers:true,
    minDate:new Date(1920,1,1),
    maxDate:new Date(2020,11,31),
    dateInputFormat:'DD/MM/YYYY'
  });


  }

  ngOnInit() {
  }

saveEmployee(empForm:NgForm):void{
console.log(empForm.value);
  }

}
