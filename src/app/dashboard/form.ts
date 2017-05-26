// GET  /application
// Structure of each project to list
export interface IProjectToList{
    id: number;
    course: number; 
    name: string;
    description: string;
    owner: string, // who submitted the project
}

// GET  /application/:id
// Structure of a project's profile to present
export interface IProjectApplication{
    id: number;
    year: number; // school year
    courseid: number; 
    name: string;
    description: string;
    userid: number, // who submitted the project
    created: string; // project submission date
    groups: Group[]; 
}
// Structure of each group who applied for a project
interface Group{
    id: number;
    name: string;
    users: User[];
}
// Structure of each user of a group who applied for a project
interface User{
    id: number;
    name: string;
}

export interface ICourse {
    id:number;
    name: string;
}