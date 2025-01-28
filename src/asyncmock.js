export const productos = [{id: 1, nombre: "Alfajor de Chocolate",precio: 1000, img: "https://i.pinimg.com/736x/e8/1e/63/e81e633f2bc1ed5d8da4c75dcbd4a21a.jpg"},
    {id: 2, nombre: "Alfajor de Frambuesa", precio: 1000, img: "https://i.pinimg.com/736x/e5/1b/75/e51b753d19fa45c7f30f02ae423ad5b0.jpg"}
]

export const getProductos = () =>{
    return new Promise (resolve =>{
        setTimeout(()=>{
            resolve(productos);
        },2000)
    })
};

export const getUnProducto = (id) => {
    return new Promise (resolver =>{
        setTimeout(()=>{
            const productoBuscado = productos.find(item=> item.id === id)
            resolver(productoBuscado)
        },2000)
    })
}

