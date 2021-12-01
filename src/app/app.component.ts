import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular unit-test Sample';
  
   testOne: string[] = [];
   testTwo: string[] = [];
  constructor(){
  this.testOne.push("Hey, I am constructor called");
  }
  ngOnInit():void{
  this.testTwo.push("Hey, I am ngOnInit called");
  }
  //add Two numbers 

  Add (a:number, b:number):number{
  return a+b;
  }
}
