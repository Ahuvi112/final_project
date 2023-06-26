import { Component, EventEmitter, Input, Output } from '@angular/core';
import { student } from '../students/student.model';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-deatails.component.html',
  styleUrls: ['./student-deatails.component.css']
})
export class StudentDeatailsComponent {
  @Input() student: student | any;
  @Output() studentSaved: EventEmitter<student> = new EventEmitter<student>();


  saveStudent() {
    this.studentSaved.emit(this.student);
  }


}
