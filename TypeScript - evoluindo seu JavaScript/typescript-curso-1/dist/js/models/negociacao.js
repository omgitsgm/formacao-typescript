export class Negociacao {
    // private _data: Date;
    // private _quantidade: number;
    // private _valor: number;
    // constructor(data: Date, quantidade: number, valor: number) {
    //     this._data = data;
    //     this._quantidade = quantidade;
    //     this._valor = valor;
    // }
    // ------------------------------------------------------------------
    // constructor(
    //     private _data: Date,
    //     private _quantidade: number,
    //     private _valor: number
    // ) {}
    // public get data(): Date {
    //     return this._data;
    // }
    // public get quantidade(): number {
    //     return this._quantidade;
    // }
    // public get valor(): number {
    //     return this._valor;
    // }
    // ------------------------------------------------------------------
    constructor(
    // Declaro as variáveis como públicas, mas disponíveis apenas para leitura. Ou seja, não podem ser modificadas depois de criadas, mas podem ser acessadas por outras classes.
    _data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        // Aqui utilizamos programação defensiva para garantir que a data não seja modificada posteriormente através de métodos como setDate.
        // Ao invés de passarmos a referência para a data da negociação, passamos uma cópia. Assim, a data original se mantém preservada.
        const data = new Date(this._data.getTime());
        return data;
    }
}
