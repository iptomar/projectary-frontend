import { group, Pipe, PipeTransform } from '@angular/core';
import { IGroup } from "./group";

@Pipe({ name: "groupFilter" })

export class GroupFilterPipe implements PipeTransform{
    
    transform(value: IGroup[], filterBy: string): IGroup[]{
        
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((group: IGroup) => 
            group.name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}