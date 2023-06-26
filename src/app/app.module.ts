import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentDeatailsComponent } from './student-deatails/student-deatails.component';
import { StudentsService } from './students/student.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentDeatailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    StudentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
