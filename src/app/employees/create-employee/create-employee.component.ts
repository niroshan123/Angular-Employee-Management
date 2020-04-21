import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { NgForm } from '@angular/forms';
import { Department } from 'src/app/models/department.model';

@Component({
  // selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
 
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
  
  



  constructor() { 
    
  }

  ngOnInit() {
  }

saveEmployee(empForm:NgForm):void{
console.log(empForm.value);
  }

}
