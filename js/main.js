let users = document.querySelector(".usuario");
let mail = document.querySelector(".mail");
let pass = document.querySelector(".Contraseña");
let btn = document.querySelector(".btn-crear");

let userContainer = document.querySelector(".user-container");

btn.addEventListener("click", () => {
  userContainer.appendChild(
    document.createElement("div")
  ).innerHTML = `<p>Nombre: ${users.value}</p>
        <p>Mail: ${mail.value}</p>
        <p>Contraseña: ${pass.value}</p><hr>`;
  setTimeout(() => {
    alert("Se creo el usuario");
  }, 250);

  users.value = "";
  mail.value = "";
  pass.value = "";
});
