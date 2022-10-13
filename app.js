class Usuario {
    constructor(nombre, apellido, mascotas, libros) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.mascotas = [mascotas];
        this.libros = [libros];
    }

    getFullName() {
        return console.log(`Nombre completo: ${this.nombre} ${this.apellido}`);
    }

    addMascota(nuevaMascota) {
        this.mascotas.push(nuevaMascota);
    }

    countMascota() {
        return console.log(`Mascotas: ${this.mascotas.length}`);
    }

    addBook(nombre, autor) {
        this.libros.push({ nombre: nombre, autor: autor });
    }
    getBookNames() {
        const nombreLibro = [];
        this.libros.map((libro) => nombreLibro.push(libro.nombre));
        return console.log(`Libros: ${nombreLibro}`);
    }
}

let usuario = new Usuario("Tomas","Carlos",["Loro", "Perro"],[
        { nombre: "El libro de la selva", autor: "Rudyard Kipling" },
        { nombre: "El principito", autor: "Antoine de Saint-Exupéry" },
    ]
);

usuario.getFullName();
usuario.addMascota("Gato");
console.log(usuario.mascotas);
usuario.countMascota();
usuario.addBook("Casa Tomada", "Julio Cortazar");
usuario.getBookNames();