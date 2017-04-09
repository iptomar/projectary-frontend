import { Pipe, PipeTransform } from "@angular/core";
import { Student } from "./users";

@Pipe({ name: "studentFilter" })

export class StudentFilterPipe implements PipeTransform{
    
    transform(value: Student[], filterBy: string): Student[]{
        
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((student: Student) => 
            student.nome.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}