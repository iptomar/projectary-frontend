export interface IProjectToList{
    id: number;
    year: string;
    courseid: number;
    name: string;
    created: string;
}

export interface IProjectApplication{
    id: number;
    year: string;
    courseid: number;
    name: string;
    description: string;
    userid: string,
    created: string;
    groups: Group[];
}

interface Group{
    id: number;
    name: string;
    users: User[];
}

interface User{
    id: number;
    name: string;
}