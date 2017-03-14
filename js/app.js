/* En la Clínica Lab necesitan crear un informe con los datos de los pacientes registrados.
Para esto debe escribir una función que reciba como los inputs de nombre, apellido, edad, genero, ciudad y país.
Cree un objeto basado en constructor asignando los parámetros entregados como propiedades y
agregue un método del objeto llamado ficha que retorne la ficha del paciente con su nombre, apellido, edad y país.

Ejemplo:
Input:
    nombre = "Blanca"
    apellido = "Pérez"
    edad = 19
    genero = "Femenino"
    ciudad = "Santiago"
    pais = "Chile"
Output(en el HTML):
    "Nombre: Blanca Pérez"
    "Edad: 19"
    "País: Chile"
-TIP: elabora un formulario para obtener todos los datos de los pacientes, después,
por cada paciente crea un nuevo objeto que esté almecenado en un array
-TIP 2: por cada paciente nuevo que se ingrese crea un div sonde estén contenidos sus datos :) */

function myFunction() {
  var name = document.getElementById("nombre");
  var lastname = document.getElementById("apellido");
  var age = document.getElementById("edad");
  var country = document.getElementById("pais");
  var show;

      if (name.value == "" || lastname.value == "" || age.value == "" || country.value == "") {
        alert("Estos Datos son obligatorios");
      }
      else {
        document.getElementById("mostrar").innerHTML = "Nombre: " + name.value + " " + lastname.value + "<br> Edad: " +
        age.value + "<br> Pais: " + country.value;
      }
    }
