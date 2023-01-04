function PrimeraEntrega() {
    let cantPersonas = parseInt(prompt("Bienvenido! Cuantas personas quiere cargar hoy?"))
    let sumaDeEdades = 0
    let edad = 0

    for (let i = 1; i <= cantPersonas; i++) {
        let nombre = prompt("Ingresar el nombre de la persona nº " + i)
        do {
            edad = parseInt(prompt("Ingresar edad de " + nombre))
        } while (isNaN(edad));
        sumaDeEdades = sumaDeEdades + edad;
        if (edad >= 18) {
            alert("Cargaste una persona mayor de edad")
        } else {
            alert("Cargaste una persona que no es mayor de edad")
        }
    }

    let promDeEdades = 0
    if (cantPersonas > 0) {
        promDeEdades = sumaDeEdades / cantPersonas;
        alert("El promedio de edad de las personas cargadas es de: " + promDeEdades + " años")
    }
}

PrimeraEntrega();



