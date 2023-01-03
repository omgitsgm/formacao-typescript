import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    // private _negociacoes: Negociacao[] = []
    private _negociacoes: Array<Negociacao> = [];

    public adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }
    // public lista(): readonly Negociacao[] {}
    public lista(): ReadonlyArray<Negociacao> {
        // Retorno um array readonly, impossibilitando alterações na lista original.
        return this._negociacoes;
    }
}