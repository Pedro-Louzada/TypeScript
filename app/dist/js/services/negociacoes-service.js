import { Negociacao } from "../models/negociacao.js";
export class NegociacoesService {
    obtendoNegociacoesDiarias() {
        return fetch('http://localhost:8080/dados')
            .then(resp => resp.json())
            .then((dados) => {
            return dados.map(dadoDeHoje => {
                return new Negociacao(new Date(), dadoDeHoje.vezes, dadoDeHoje.montante);
            });
        });
    }
}
