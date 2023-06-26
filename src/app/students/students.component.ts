import { Component, OnInit } from '@angular/core';
import { student } from './student.model';
import { StudentsService } from './student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})

export class StudentsComponent implements OnInit {
  students: student[] = [];
  constructor(private studentService: StudentsService) { }

  ngOnInit(): void {
    this.fetchStudents();
  }

  fetchStudents(): void {
    this.studentService.getAll().then(students => {
      this.students = students;
    });
  }

  showDetails = false;
  selectedStudent: student | undefined;

  toggleDetails(student: student) {
    this.showDetails = !this.showDetails;
    this.selectedStudent = student;
  }

  onStudentSaved(updatedStudent: student) {
    const index = this.students.findIndex(student => student.id === updatedStudent.id);
    if (index !== -1) {
      this.students[index] = updatedStudent;
    }
  }

  deleteStudent(student: student) {
    this.students = this.students.filter(s => s !== student);
  }

  addStudent() {
    this.students.push(new student(0, '', '', '', '', 0, false, ''));
    this.showDetails = !this.showDetails;
    this.selectedStudent = this.students[this.students.length - 1];
  }

}
