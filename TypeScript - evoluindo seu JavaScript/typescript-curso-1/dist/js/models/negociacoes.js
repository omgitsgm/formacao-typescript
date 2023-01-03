export class Negociacoes {
    constructor() {
        // private _negociacoes: Negociacao[] = []
        this._negociacoes = [];
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    // public lista(): readonly Negociacao[] {}
    lista() {
        // Retorno um array readonly, impossibilitando alterações na lista original.
        return this._negociacoes;
    }
}
