let Usuarios = [];
document.getElementById("RegistroForm").addEventListener('submit', function (e) {
  e.preventDefault();
  let Usuario = document.getElementById("Contra1").value;
  let Contrasena1 = document.getElementById("Contra1").value;
  let Contrasena2 = document.getElementById("Contra2").value;
  let FechaNacimiento = document.getElementById("FechaNacimiento").value;
  let Cargo = document.getElementById("Cargo").value;

  if (Contrasena1 !== Contrasena2) {
    alert("las contraseñas deben coincidir")
  } else {
    const NuevoUsuario = {
      id: Usuarios.length + 1,
      NombreUsuario: Usuario,
      ContraseñaUsuario: Contrasena1,
      FechaNacimiento: FechaNacimiento,
      Cargo: Cargo
    };

    Usuarios.push(NuevoUsuario);
    this.reset();
  }


});