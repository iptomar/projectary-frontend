export interface Student {
  id: string;
  nome: string;
  username: string;
  num_aluno: number; 
  foto: string;
  escola: string;
  curso: string;
  mail: string;
  telefone: string;
  area_interesse: string[];
  perfil_publico: boolean;
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