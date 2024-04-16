const CarritoCompra = require("../index");

// El constructor(), inicializa el carrito como un array vacío.

// El método agregarProducto(producto) recibe un objeto representando un producto y lo agrega al carrito.

// El método calcularTotal() calcula el total de la compra sumando los precios de todos los productos en el carrito.

// El método aplicarDescuento(porcentaje) aplica un descuento al total de la compra según el porcentaje especificado.

describe("La clase CarritoCompra", () => {
  let carritoCompra;
  beforeEach(() => {
    carritoCompra = new CarritoCompra();
  });
  const productos = [
    { name: "Producto A", price: 10, quantity: 2 },
    { name: "Producto B", price: 20, quantity: 3 },
    { name: "Producto C", price: 30, quantity: 1 },
  ];
  it("El constructor(), inicializa el 'carrito' como un array vacío.", () => {
    expect(carritoCompra.carrito).toEqual([]);
  });
  it("El método agregarProducto(producto) recibe un objeto representando un producto y lo agrega al carrito.", () => {
    const producto = { name: "Producto A", price: 10, quantity: 2 };
    carritoCompra.agregarProducto(producto);
    expect(carritoCompra.carrito).toContainEqual(producto);
  });
  it("El método calcularTotal() calcula el total de la compra sumando los precios de todos los productos en el carrito.", () => {
    for (let producto of productos) {
      carritoCompra.agregarProducto(producto);
    }
    expect(carritoCompra.calcularTotal()).toBe(110);
  });
  it("El método aplicarDescuento(porcentaje) aplica un descuento al total de la compra según el porcentaje especificado.", () => {
    for (let producto of productos) {
      carritoCompra.agregarProducto(producto);
    }
    expect(carritoCompra.aplicarDescuento(10)).toBe(carritoCompra.calcularTotal() * (1 - 0.1));
    expect(carritoCompra.aplicarDescuento(20)).toBe(carritoCompra.calcularTotal() * (1 - 0.2));
    expect(carritoCompra.aplicarDescuento(5)).toBe(carritoCompra.calcularTotal() * (1 - 0.05));
  });
});
