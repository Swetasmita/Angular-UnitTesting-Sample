import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  componentName ="user"
  constructor() { }

  ngOnInit(): void {
  }
sum(){
 var x: number = 10;
 var y: number = 10;
 var sum = x * y;
 return sum;
  //
}
}
