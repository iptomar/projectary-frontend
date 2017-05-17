export interface IProject{
    id: string;
    approvedin: string;
    year: string;
    courseid: number;
    name: string;
    description: string;
    userid: string,
    created: string;
}

export interface IApplication{
    groupid: number;
    projectid: number;
}