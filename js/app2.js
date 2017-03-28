//funcion crear div para cada paciente
function Paciente(nombre,apellido,edad,genero,ciudad,pais) {
  this.name = nombre;
  this.lastname = apellido;
  this.age = edad;
  this.gender = genero;
  this.city = ciudad;
  this.country = pais;

  this.ficha = function (){
    var n = this.name + " "+ this.lastname;
    var e = this.age;
    var p = this.country;
    return "<div class='un-paciente'>Nombre: " + n + "<br>" + "Edad: " + e + "<br>" + "País: " + p + "<p></div";
  }
}

window.addEventListener('load',function(){
  var envia = document.getElementById("enviar");
  var show = document.getElementById("mostrar");
  var registros = [];

  envia.addEventListener('click',function(event){
    event.preventDefault();
    var name = document.getElementById("nombre");
    var lastname = document.getElementById("apellido");
    var age = document.getElementById("edad");
    var gender = document.getElementById("genero");
    var city = document.getElementById("ciudad");
    var country = document.getElementById("pais");

    if (name.value == "" || lastname.value == "" || age.value == "" || gender.value == "" || city.value == "" || country.value == ""){
      alert("Estos Datos son obligatorios \n Nombre \n apellido \n edad \n genero \n ciudad \n pais");
    }
    else{
      var registro = new Paciente(name.value,lastname.value,age.value,gender.value,city.value,country.value);
      //registros.push(registro);
      console.log(registro);
      localStorage.setItem("newPaciente",JSON.stringify(registro));
      //show.innerHTML += registro.ficha();
      window.location="paciente.html";
      document.getElementById("formulario").reset();
    }
  });
});

var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');

// validando inputText
var soloLetras = function(e){
  var codigoTecla = e.keyCode;
  console.log(codigoTecla);
  if ((codigoTecla >= 97 && codigoTecla <= 122) || (codigoTecla >=65 && codigoTecla <= 90) || codigoTecla == 39 || codigoTecla == 32) {
    return true;
  } else{
    this.nextElementSibling.nextElementSibling.innerText = "Este campo solo permite letras";
    return false;
  }
}

//validando numeros
var soloNumeros = function(e){
  var codeTecla = e.keyCode;
  console.log(codeTecla);
  if (codeTecla >= 48 && codeTecla <= 57 && this.value.length < 2) {
    return true;
  }
  else {
    this.nextElementSibling.nextElementSibling.innerText = "Este campo solo permite numeros de dos digitos";
    return false;
  }
}

//validando datosIngresados
var inputs = document.getElementsByClassName('input-registro');
var validaInputs = function(){
  if(this.value.trim().length==0){
    this.value="";
    this.nextElementSibling.nextElementSibling.innerText="*Este campo es obligatorio"
  } else{
    this.nextElementSibling.nextElementSibling.innerText="";
  }

  /* var datoCorrecto = this.value.charAt(0).toUpperCase()+this.value.substring(1).toLowerCase();
    this.value = datoCorrecto;*/

  //Mayúscula a cada palabra
  var arrDato = this.value.split(" ");
  var datoConMayus = "";
  for (var i = 0; i < arrDato.length; i++){
    datoConMayus += arrDato[i].charAt(0).toUpperCase()+arrDato[i].substring(1).toLowerCase()+" ";
  }
  this.value = datoConMayus.trim();
}

for(var i = 0; i < inputs.length; i++){
  inputs[i].onblur = validaInputs;
}

//asignando funciones
edad.onkeypress = soloNumeros;
nombre.onkeypress = soloLetras;
apellido.onkeypress = soloLetras;
pais.onkeypress = soloLetras;
ciudad.onkeypress = soloLetras;
