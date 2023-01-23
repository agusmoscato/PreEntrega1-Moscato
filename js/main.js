function SegundaEntrega() {
    /* Constructor obejeto "persona" */
    class Persona {
        constructor(nombre, edad) {
            this.nombre = nombre;
            this.edad = edad;
        }
    }

    /* Inicio del programa */
    let cantPersonas = parseInt(prompt("Bienvenido! Cuantas personas quiere cargar hoy?"))
    let edad = 0
    const arrayPersonas = [];


    function pedirEdad(cantPersonas) {
        for (let i = 1; i <= cantPersonas; i++) {
            let nombre = prompt("Ingresar el nombre de la persona nº " + i)
            do {
                edad = parseInt(prompt("Ingresar edad de " + nombre))
            } while (isNaN(edad));
            arrayPersonas[i - 1] = new Persona(nombre, edad);
            preguntarSiEsMayor(nombre, edad);
        }
    }
    function preguntarSiEsMayor(nombre, edad) {
        if (edad >= 18) {
            alert(nombre + " es mayor de edad")
        } else {
            alert(nombre + " no es mayor de edad")
        }
    }

    function promedioEdades(arrayPersonas, cantPersonas) {

        if (cantPersonas) {
            let sumaEdades = arrayPersonas.reduce((total, arrayPersonas) => {
                return total + arrayPersonas.edad;
            }, 0);

            let promedioEdades = sumaEdades / arrayPersonas.length;
            console.log(promedioEdades);
            alert("El promedio de edad de las personas cargadas es de: " + promedioEdades + " años")
        }
    }


    pedirEdad(cantPersonas);
    promedioEdades(arrayPersonas, cantPersonas);

    console.log(arrayPersonas)
}

/* Ejecutar Programa */
SegundaEntrega();
