import {Component} from "angular2/src/core/metadata";
import {ControlGroup} from "angular2/src/common/forms/model";

@Component({
    selector: 'add-course',
    template: `<form (ngSubmit)="addCourse()" [ngFormModel]="addCourseForm">
    <div class="form-group">
        <label for="name">Name: </label>
        <input class="form-control" type="text" id="name" ngControl="courseName">
    </div>
    <div class="form-group">
        <label for="credits">Credits: </label>
        <input type="text" class="form-control" id="credits" ngControl="courseCredits">
    </div>
    <br>
    <button class="btn btn-info" type="submit">Add Course</button>
</form>`
})

export class AddCourseComponent{
    addCourse(form: ControlGroup){

    }
}