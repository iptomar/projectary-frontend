export interface IStudent {
    name: string;
    external_id:string;
    email:string;
    phonenumber:string;
    locked:number;
    active:number;
}

export interface Teacher {
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
