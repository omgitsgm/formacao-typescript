import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
export class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        negociacao.data.setDate(12);
        this._negociacoes.adiciona(negociacao);
        console.log(this._negociacoes.lista());
        this.limparFormulario();
    }
    criaNegociacao() {
        /* CONVERTENDO STRING PARA DATE
         *
         * Quando criamos uma nova data utilizando o new Date(), esse construtor é capaz de criar uma data a partir de uma String.
         * No entanto, para realizar tal criação, é necessário que a String esteja no formato 'ano,mês,dia', separado por vírgulas.
         * O problema é que quando recebemos uma data de um formulário ela vem no formato 'ano-mês-dia', separado por hífens.
         *
         * Como contornar essa situação?
         *
         * Criamos uma expressão regular que irá procurar por todos os hífens em uma String.
         * Em seguida, utilizamos o método replace do valor do inputData.
         * O primeiro parâmetro é a nossa expressão regular, que irá procurar por hífens.
         * O segundo parâmetro é a String pela qual esses hífens serão substituídos. No caso, ','.
         * Por fim, teremos uma conversão perfeita de uma String para o tipo Date.
         */
        const exp = /-/g;
        const date = new Date(this._inputData.value.replace(exp, ','));
        const quantidade = parseInt(this._inputQuantidade.value);
        const valor = parseFloat(this._inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    // Limpa os campos do formulário e retorna o foco para o inputData
    limparFormulario() {
        this._inputData.value = "";
        this._inputQuantidade.value = "";
        this._inputValor.value = "";
        this._inputData.focus();
    }
}
