export class Group{
    id: number;
    name : string;
}

export interface IGroup{
    id: number;
    name : string;
}

export interface IGroupProfile{
    id: number;
    name : string;
    project: IProject;
    team: IMember[];
}

export interface IMember{
    id: number;
    name: string;
}

export interface IProject{
    id: number;
    name: string;
}