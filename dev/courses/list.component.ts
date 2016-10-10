import {Component} from "angular2/src/core/metadata";
import {OnInit} from "angular2/src/core/linker/interfaces";
import {CourseService} from "./course.service";
import {Course} from "./course";

@Component({
    selector: 'list-component',
    template: `<div class="col-md-4">
    <h3>{{title}}</h3>
    <ul class="list-group">
        <li class="list-group-item" *ngFor="#course of courses"><a href="#!">{{course.name}}</a></li>
    </ul>
</div>`,
    providers: [CourseService]
})

export class ListComponent implements OnInit{
    title: string = "List of Available Courses";
    courses: Course[] = [];

    constructor(private _courseService: CourseService){}

    ngOnInit(): any{
        this.courses = this._courseService.getCourses();
    }
}