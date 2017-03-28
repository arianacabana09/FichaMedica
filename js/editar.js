window.onload = function() {
  document.getElementsByTagName("form")[0].onsubmit=function(e){
    e.preventDefault();
  }
  var objPaciente = JSON.parse(localStorage.getItem("newPaciente"));
  var inputsEditar=document.getElementsByClassName("input-editar");
  inputsEditar[0].value= objPaciente.name;
  inputsEditar[1].value= objPaciente.lastname;
  inputsEditar[2].value= objPaciente.age;
  inputsEditar[3].value= objPaciente.gender;
  inputsEditar[4].value= objPaciente.city;
  inputsEditar[5].value= objPaciente.country;

 document.getElementsByTagName("button")[0].addEventListener("click", function(){
    if(inputsEditar[0].length!=0 && inputsEditar[1].length!=0 && inputsEditar[2].length!=0 && inputsEditar[3].length!=0 && inputsEditar[4].length !=0 && inputsEditar[5].length !=0){
      objPaciente.name = inputsEditar[0].value;
      objPaciente.lastname = inputsEditar[1].value;
      objPaciente.age = inputsEditar[2].value;
      objPaciente.gender = inputsEditar[3].value;
      objPaciente.city = inputsEditar[4].value;
      objPaciente.country = inputsEditar[5].value;
      localStorage.setItem("newPaciente", JSON.stringify(objPaciente));
      window.location = "paciente.html"
    } else{
      alert("Todos los campos son obligatorios");
    }
  })
};
