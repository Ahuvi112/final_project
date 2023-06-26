/* import { Component, Output } from '@angular/core';
import { student } from './student.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  students: student[]=[
    new student(123,'aaa','AAA','aA',"054-45609789",100,true),
    new student(456,'bbb','BBB','bB',"054-45609789",91,true),
    new student(789,'ccc','CCC','cC',"054-45609789",80,false)
  ]
  isClick:boolean=false;
  setDetails(){
    console.log("hello");
  }
} */


import { Component } from '@angular/core';
import { student } from './student.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})

export class StudentsComponent {
  students: student[] = [
    new student(123, 'aaa', 'AAA', 'aA', "054-45609789", 100, true),
    new student(456, 'bbb', 'BBB', 'bB', "054-45609789", 91, true),
    new student(789, 'ccc', 'CCC', 'cC', "054-45609789", 80, false)
  ]; // Assuming you have an array of Student objects

  showDetails = false;
  selectedStudent: student | undefined;

  toggleDetails(student: student) {
    this.showDetails = !this.showDetails;
    this.selectedStudent = student;
  }
}
