class Memotec {
    constructor(cartas) {
        this.cartas = cartas.concat(cartas);
        this.totalCartas = this.cartas.length;
        this.aciertos = 0;
        this.contadorClicks = 0;
        this.ultimosClicks = [];
    }

    start() {
        this.ordenarCartasAleatoriamente();
        this.cargarCartas();
    }

    ordenarCartasAleatoriamente() {
        //ordenar las cartas, dependiendo si retorna 1 o -1 la funcion sort ira ordenando

        this.cartas.sort(() => {
            const numeroAleatorio = Math.random(); //genera numero aleatorio entre 0 y 1
            if (numeroAleatorio > 0.5) { // se hace con 0.5 porque esta en la mitad de 0 y 1
                return 1;
            } else {
                return -1;
            }
        });
    }
}


const pokemons = ["ho-oh", "leafeon", "manectric", "pikachu", "rayquaza", "reshiram", "suicune", "vaporeon"];
const juego = new Memotec(pokemons);
juego.start();