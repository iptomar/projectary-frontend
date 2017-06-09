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

export class ProjectFinalize{
    project_id: number;
    group_id: number;
    members: GroupMember[];
}

export class GroupMember{
    member_id: number;
    member_grade: number;

    constructor(member_id: number, member_grade: number){
        this.member_id = member_id;
        this.member_grade = member_grade;
    }
}