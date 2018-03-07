
export class NPS {

    private _nota: number;
    private _comentario: string;
    private _data: Date;
    private _segmento: Segmento;
    private _classificacao: Classificacao;
    private _pergunta: string;

    constructor() {
        this._data = new Date();
    }

    get nota() : number {
        return this._nota;
    }

    set nota(nota: number) {
        this._nota = nota;
    }
    
    get comentario() : string {
        return this._comentario;
    }

    set comentario(comentario: string) {
        this._comentario = comentario;
    }

    get segmento() : Segmento {
        return this._segmento;
    }

    set segmento(segmento: Segmento) {
        this._segmento = segmento;
    }

    get classificacao() : Classificacao {
        return this._classificacao;
    }

    set classificacao(classificacao: Classificacao) {
        this._classificacao = classificacao;
    }

    get pergunta() : string {
        return this._pergunta;
    }

    set pergunta(pergunta: string) {
        this._pergunta = pergunta;
    }
}