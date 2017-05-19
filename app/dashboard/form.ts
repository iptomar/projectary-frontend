export interface IProjectToList{
    group_id: number;
    group_name: string;
    project_id: number;
    project_name: string;
    submitedin: string;
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