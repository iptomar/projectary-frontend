export class IStudent {
    id:number;
    name:string;
    external_id:string;
    photo:string;
    email:string;
    phonenumber:string;
    isadmin:string;
    locked:number;
    groupid:number;
    groupname:string;
    active:number;
}

export interface ITeacher {
  id: string;
  nome: string;
  username: string;
  foto: string;
  link: string;
  escola: string;
  departamento: string;
  mail: string;
  telefone: string;
  area_funcional: string[];
  perfil_publico: boolean;
}
