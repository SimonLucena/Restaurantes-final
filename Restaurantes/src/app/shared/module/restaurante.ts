export class Restaurante {
    id: number;
    nome: string;
    endereco: string;
    nota: number;
    descricao: string;
    
    constructor(id=0, nome='', endereco='', nota=0, descricao='') {
        this.id = id;
        this.nome = nome;
        this.endereco = endereco;
        this.nota = nota;
        this.descricao = descricao;
    }
}