import { Pipe, PipeTransform } from "@angular/core";
import { IStudent } from "./users";

@Pipe({ name: "studentFilter" })

export class StudentFilterPipe implements PipeTransform{
    
    transform(value: IStudent[], filterBy: string): IStudent[]{
        
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((student: IStudent) => 
            student.name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}