window.addEventListener('submit', validaAntesDeEnviar);
addEventListener('submit', validaSenha);
//document.getElementById('cadastro').addEventListener('submit', validaAntesDeEnviar);
//document.getElementById('nome').addEventListener('onfocusout', validaAntesDeEnviar)

  function validaSenha(event){
    var senhaUm = document.getElementById("senhaA").value;
    var senhaDois = document.getElementById("senhaB").value;

    if(senhaUm.value == senhaDois.value){
      alert("senhas iguais");
    }
    else if (senhaUm.value == null && senhaDois.value == null) {
      innerHTML = "sem senhas"
    }
  };

  function validaAntesDeEnviar(event){
    var nomeValido = document.forms["cadastro"]["name"].value.trim();
    if(nomeValido == null || nomeValido == ""){
      document.getElementById('titulo').innerHTML = "Parece que temos um erro!";
      document.getElementById('titulo').className = "danger";
    }
    else {
      document.getElementById('titulo').className = "correct";
    }
  };
