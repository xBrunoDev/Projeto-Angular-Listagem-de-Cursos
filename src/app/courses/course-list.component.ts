import { SelectorContext } from "@angular/compiler";
import { Template } from "@angular/compiler/src/render3/r3_ast";
import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
   

    filteredCourses: Course[] = [];
    
    _courses: Course[] = [];

    _filterBy!: string;

    constructor(private courseService: CourseService) {}

    ngOnInit(): void {
        this.retrieveall();

        }

        retrieveall(): void {
            this.courseService.retrieveAll().subscribe({
                next: courses => {
                    this._courses = courses;
                    this.filteredCourses = this._courses;

                },
                error: err => console.log('Error', err)
                
            })
        }

        deleteById(courseId: number): void {
            this.courseService.deleteById(courseId).subscribe({
                next: () => {
                    console.log('Delete with sucess');
                    this.retrieveall();
                },
                error: err => console.log('Error', err)
            })
        }

        set filter(value: string) {
            this._filterBy = value;

            this.filteredCourses = this._courses.filter((Course: Course) =>Course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
        }

        get filter() {
            return this._filterBy;
        }
    }        