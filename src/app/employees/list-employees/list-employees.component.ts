import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
//import { Employee } from '../../models/employee.model';

@Component({
  // selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[]=[
  { id: 1,
    name:'Niroshan',
    gender:'Male',
    contactPreferences:'Email',
    email:'niroshan@gmail.com',
    dateOfBirth:new Date('10/25/1998'),
    department:'IT',
    isActive:true,
    photoPath:'assets/images/niro1.jpeg'
  },
  { id: 2,
    name:'Brayan',
    gender:'Male',
    contactPreferences:'Email',
    email:'brayan@gmail.com',
    dateOfBirth:new Date('10/25/1994'),
    department:'IT',
    isActive:true,
    photoPath:'assets/images/niro2.jpeg'
  },
  { id: 3,
    name:'Ratnayake',
    gender:'Male',
    contactPreferences:'Email',
    email:'ratnayake@gmail.com',
    dateOfBirth:new Date('10/25/1995'),
    department:'ITM',
    isActive:true,
    photoPath:'assets/images/niro3.jpeg'
  },

  ];

  constructor() { }

  ngOnInit() {
  }

}
