import { NegociacaoDoDia } from "../interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {
    public obterNegociacoesDoDia(): Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados') // Estebeleço conexão com a API
            .then(res => res.json()) // Converto os dados da API para JSON
            .then((dados: Array<NegociacaoDoDia>) => { // Crio um Array com o tipo da interface criada para a API. 
                return dados.map(dado => { // Gero um novo array com as negociações da API
                    return new Negociacao(new Date(), dado.vezes, dado.montante); // Crio um objeto Negociacao com os dados da API
                })
            });
    }
}