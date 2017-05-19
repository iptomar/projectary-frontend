import { Pipe, PipeTransform } from "@angular/core";
import { IProjectToList } from "../form";

@Pipe({ name: "projectFilter" })

export class ProjectApplicationFilterPipe implements PipeTransform{
    
    transform(value: IProjectToList[], filterBy: string): IProjectToList[]{
        
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((project: IProjectToList) => 
            project.project_name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}