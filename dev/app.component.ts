import {Component} from 'angular2/core';
import {CourseComponent} from "./courses/course.component";
import {ListComponent} from "./courses/list.component";
import {AddCourseComponent} from "./courses/add-course.component";

@Component({
    selector: 'my-app',
    template: `<div class="container" style="padding: 20px">
    <div class="row">
        <course-component></course-component>
        <list-component></list-component>
        <div class="col-md-4 col-md-offset-3">
            <!--<add-course></add-course>-->
        </div>
    </div>
</div>`,
    directives: [CourseComponent, ListComponent, AddCourseComponent]
})

export class AppComponent {

}