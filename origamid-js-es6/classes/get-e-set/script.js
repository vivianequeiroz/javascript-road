const button = {
    get tamanho() {
        return this._numero || 100;
    },
    set tamanho(numero) {
        this._numero = numero
    }
}

const frutas = {
    lista: [],
    set nova(fruta) {
        this.lista.push(fruta);
    }
}

frutas.nova = 'Banana';
// accessed as a property