export interface IProject{
    id: number;
    approvedin: string;
    year: string;
    courseid: number;
    name: string;
    description: string;
    userid: number,
    created: string;
    groupid: number;
}

export class Application{
    groupid: number;
    projectid: number;
}