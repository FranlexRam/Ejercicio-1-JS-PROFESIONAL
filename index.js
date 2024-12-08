let usuario = "Franlex";
let productoComprado = 0;
const DESCUENTO = 0.1;
let precioDescuento;

const PRODUCTOS = [{
    producto: "Pantalon",
    precio: 10, talla: "m",
    imagen: "pantalon.jpg"
    },{
    producto: "Gorra",
    precio: 5, talla: "s",
    imagen: "gorra.jpg" 
    }
];
document.querySelector('body').innerHTML=
`<h1>${usuario}</h1>
    <section class="caja">
        <div>
            ${PRODUCTOS[productoComprado].producto}:
            (${PRODUCTOS[productoComprado].precio})
       </div>
        <div>Descuento: ${calcularDescuento()} USD</div>
        <div>
            <strong>
                Precio final: ${precioFinal()} $
            </strong>
        </div>
        <div>
            Talla: ${PRODUCTOS[productoComprado].talla}
        </div>
        <img src="${PRODUCTOS[productoComprado].imagen}" alt="Nombre del producto">
    </section>`;

    function calcularDescuento() {
        precioDescuento = PRODUCTOS[productoComprado].precio *DESCUENTO;
        return precioDescuento;
    }

    function precioFinal() {
        let precioFinal = PRODUCTOS[productoComprado].precio - precioDescuento;
        return precioFinal;
    }