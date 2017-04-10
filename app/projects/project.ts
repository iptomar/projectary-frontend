export interface IProject{
    id: string;
    projectName: string;
    releaseDate: string;
    summary: string;
    anoLectivo: string;
    curso: string;
    preRequisitos: string[];
    state: string;
    attributionDate: string;
    orientadores: string[];
}
//state(Por Atribuir, Atribuido, cancelado), title, releaseDate, attributionDate, Orientador???