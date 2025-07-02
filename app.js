// 1️⃣ Array de usuarios (base de datos simulada)
let usuarios = [
  { id: 1, nombre: "Juan", edad: 25, email: "juan@mail.com" },
  { id: 2, nombre: "Ana", edad: 30, email: "ana@mail.com" }
];

// 2️⃣ Mostrar usuarios en pantalla
function mostrarUsuarios() {
  const lista = document.getElementById('listaUsuarios');
  lista.innerHTML = "";
  usuarios.forEach(u => {
    const li = document.createElement('li');
    li.textContent = `ID: ${u.id} | Nombre: ${u.nombre} | Edad: ${u.edad} | Email: ${u.email}`;
    lista.appendChild(li);
  });
}

// 3️⃣ Agregar nuevos usuarios desde el formulario
document.getElementById('formUsuario').addEventListener('submit', function(e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const edad = parseInt(document.getElementById('edad').value);
  const email = document.getElementById('email').value;
  const nuevoUsuario = {
    id: usuarios.length ? usuarios[usuarios.length - 1].id + 1 : 1,
    nombre,
    edad,
    email
  };
  usuarios.push(nuevoUsuario);
  mostrarUsuarios();
  this.reset();
});

// 4️⃣ Guardar información en Storage (nombre y materia favorita)
function mostrarSaludo() {
  const nombre = localStorage.getItem("nombreUsuario");
  const materia = localStorage.getItem("materiaFavorita");
  const saludo = document.getElementById('saludo');
  if (nombre) {
    saludo.textContent = `¡Bienvenido/a, ${nombre}!` + (materia ? ` Tu materia favorita es: ${materia}` : "");
  } else {
    saludo.textContent = "¡Bienvenido! ¿Cómo te llamas?";
  }
  if (materia) {
    document.getElementById('materiaGuardada').textContent = `Materia guardada: ${materia}`;
  } else {
    document.getElementById('materiaGuardada').textContent = "";
  }
}

// Pedir el nombre solo si no está guardado
function pedirNombre() {
  let nombre = localStorage.getItem("nombreUsuario");
  if (!nombre) {
    nombre = prompt("¡Hola! ¿Cómo te llamas?");
    if (nombre && nombre.trim() !== "") {
      localStorage.setItem("nombreUsuario", nombre.trim());
    }
  }
}

// Guardar materia favorita
document.getElementById('guardarMateria').addEventListener('click', function() {
  const materia = document.getElementById('materiaFav').value;
  if (materia) {
    localStorage.setItem("materiaFavorita", materia);
    mostrarSaludo();
    document.getElementById('materiaFav').value = "";
  }
});

// Inicialización al cargar la página
pedirNombre();
mostrarSaludo();
mostrarUsuarios();