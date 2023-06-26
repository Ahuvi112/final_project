import { Component, Input } from '@angular/core';
import { student } from '../students/student.model';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-deatails.component.html',
  styleUrls: ['./student-deatails.component.css']
})
export class StudentDeatailsComponent {
  @Input() student: student | undefined;

  saveStudent() {
    //this.student = my_student;
  }
}
