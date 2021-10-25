function logar() {
  var email = document.getElementById("email");
  var senha = document.getElementById("senha");

  if (email.value == "admin@admin.com" && senha.value == "admin") {
    window.open("petcare.html", "_self");

  } else {
    alert("Usuário ou senha inválidos!")
  }


}

