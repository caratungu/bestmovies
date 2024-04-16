class CarritoCompra {
    constructor () {
        this.carrito = [];
    }

    agregarProducto (producto) {
        this.carrito.push(producto);
    }

    calcularTotal () {
        let total = 0;
        for (let producto of this.carrito) {
            total += producto.quantity * producto.price;
        }
        return total;
    }

    aplicarDescuento (porcentaje) {
        return this.calcularTotal()*((100-porcentaje)/100);
    }
}

module.exports = CarritoCompra;