import { Injectable } from "@angular/core";
import { student } from "./student.model";

const STUDENTS: student[] = [
    new student(123, "Jasmine", "leni", "USA", "9727272", 98, true),
    new student(123, "Jesy", "Walword", "Texas", "9727272", 88, true),
    new student(123, "Sara", "van", "USA", "9727272", 98, false),
]


@Injectable()
export class StudentsService {

    getAll(): Promise<student[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(STUDENTS);
                reject(new Error('get students list failed'))
            }, 1000)
        })
    }

    getStudentByID(id: number): Promise<number | undefined> {
        return new Promise((resolve, reject) => {
            resolve(STUDENTS.find((s) => s.id == id)?.avgMarks);
            reject(new Error('get students list failed'))
        })
    }
}
