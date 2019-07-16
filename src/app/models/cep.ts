export class Cep {

    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    unidade: string;
    ibge: string;
    gia: string;

    cityAndUfGet() {
      return this.localidade + ' - ' + this.uf;
    }
}
