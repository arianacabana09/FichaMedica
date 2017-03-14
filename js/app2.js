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
    return "Nombre: " + n + "<br>" + "Edad: " + e + "<br>" + "País: " + p + "<p>";
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

    if (name.value == "" || lastname.value == "" || age.value == "" || country.value == ""){
      alert("Estos Datos son obligatorios \n Nombre \n apellido \n edad \n pais");
    }
    else{
      var registro = new Paciente(name.value,lastname.value,age.value,gender.value,city.value,country.value);
      registros.push(registro);
      show.innerHTML += registro.ficha();
      document.getElementById("formulario").reset();
    }
  });
});
