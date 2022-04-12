const carritoCompras = [];
const listaCriptomonedas = [ { nombre: 'bnb', precio: 422 },{ nombre: 'ethereum', precio: 3235 },{ nombre: 'usdt', precio: 1 },{ nombre: 'bitcoin', precio: 42556 } ];
let resumenCompra = '';

function validadorCripto (validarTipo){
    do{
        validarTipo = prompt('Ingrese la criptomoneda que desea comprar.' + '\n' + 'Las opciones en lista son: BNB, Ethereum, Bitcoin, USDT').toLowerCase();
        if(validarTipo == 'bnb' || validarTipo == 'ethereum' || validarTipo == 'usdt' || validarTipo == 'bitcoin'){
            return validarTipo;
        }else{
            alert('Ingrese una criptomoneda de la lista');
        }

    }while(validarTipo != 'bnb' || validarTipo != 'ethereum' || validarTipo != 'usdt' || validarTipo != 'bitcoin')
}
function validadorDolares(validarCantidad){
    do{
        validarCantidad = parseFloat(prompt('Ingrese la cantidad de dolares que quiere invertir'));
        if(!isNaN(validarCantidad)){
            return validarCantidad;   
        }else {
            alert('Ingrese un numero valido');
        }
    }while(isNaN(validarCantidad));
}
function cotizador(criptoMoneda) {
    const valor = listaCriptomonedas.find((el => el.nombre === criptoMoneda))
    return valor.precio
}
class Compra{
    constructor(tipoCripto, dolares){
        this.tipoCripto = validadorCripto(tipoCripto);
        this.dolares = validadorDolares(dolares);
        this.valorCripto = cotizador(this.tipoCripto)
        this.cantidadCripto;
    }
    calculador(){
        this.cantidadCripto = (this.dolares / this.valorCripto);    
        return this.cantidadCripto;
    }
    resumen(){
        resumenCompra = this.tipoCripto + ' --> ' + 'US$ ' + this.dolares + ' = ' + this.cantidadCripto + ' ' + this.tipoCripto + '\n' + resumenCompra;
        return resumenCompra;
    }
}   
do{
    const nuevaCompra = new Compra();
    nuevaCompra.calculador();
    nuevaCompra.resumen();
    carritoCompras.push(nuevaCompra);
    salir = confirm('¿Desea realizar otra operacion?')
}while(salir != false);

alert('El resumen de su compra es:' + '\n' + resumenCompra);
