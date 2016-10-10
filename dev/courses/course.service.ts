import {Injectable} from "angular2/src/core/di/decorators";
import {COURSES} from "./mock-courses";
import {Course} from "./course";

@Injectable()
export class CourseService{
    getCourses(){
        return COURSES;
    }

    addCourse(course: Course){
        COURSES.push(course);
    }
}