window.onload=function(){
  var nombre = document.getElementById("nombre-paciente");
  var apellido = document.getElementById("apellido-paciente");
  var edad = document.getElementById("edad-paciente");
  var genero = document.getElementById("genero-paciente");
  var ciudad = document.getElementById("ciudad-paciente");
  var pais = document.getElementById("pais-paciente");
  var objPaciente = JSON.parse(localStorage.getItem("newPaciente"));

  nombre.innerText=objPaciente.name;
  apellido.innerText=objPaciente.lastname;
  edad.innerText=objPaciente.age;
  genero.innerText=objPaciente.gender;
  ciudad.innerText=objPaciente.city;
  pais.innerText=objPaciente.country;
}
