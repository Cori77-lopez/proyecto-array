// 1️⃣ Leer usuarios desde localStorage o usar array inicial
function leerUsuarios() {
  return JSON.parse(localStorage.getItem("usuarios")) || [
    { id: 1, nombre: "Juan", edad: 25, email: "juan@mail.com" },
    { id: 2, nombre: "Ana", edad: 30, email: "ana@mail.com" }
  ];
}
let usuarios = leerUsuarios();

// 2️⃣ Guardar usuarios en localStorage
function guardarUsuarios() {
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

// 3️⃣ Mostrar usuarios en pantalla
function mostrarUsuarios() {
  const lista = document.getElementById('listaUsuarios');
  lista.innerHTML = "";
  if (usuarios.length === 0) {
    lista.innerHTML = "<li>No hay usuarios registrados aún.</li>";
    return;
  }
  usuarios.forEach(u => {
    const li = document.createElement('li');
    li.textContent = `ID: ${u.id} | Nombre: ${u.nombre} | Edad: ${u.edad} | Email: ${u.email}`;
    lista.appendChild(li);
  });
}

// 4️⃣ Validar y agregar nuevos usuarios desde el formulario
document.getElementById('formUsuario').addEventListener('submit', function(e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const edad = parseInt(document.getElementById('edad').value);
  const email = document.getElementById('email').value.trim();

  // Validaciones
  let errores = [];
  if (!nombre) errores.push("El nombre no puede estar vacío.");
  if (!email.includes("@")) errores.push("El email debe contener '@'.");
  if (isNaN(edad) || edad <= 0) errores.push("La edad debe ser un número mayor a 0.");

  if (errores.length > 0) {
    alert(errores.join("\n"));
    return;
  }

  const nuevoUsuario = {
    id: usuarios.length ? usuarios[usuarios.length - 1].id + 1 : 1,
    nombre,
    edad,
    email
  };
  usuarios.push(nuevoUsuario);
  guardarUsuarios();
  mostrarUsuarios();
  this.reset();
});

// 5️⃣ Guardar y mostrar materia favorita
function guardarMateria() {
  const materia = document.getElementById('materiaFav').value;
  if (materia) {
    localStorage.setItem("materiaFavorita", materia);
    mostrarMateria();
    document.getElementById('materiaFav').value = "";
  }
}

function mostrarMateria() {
  const materia = localStorage.getItem("materiaFavorita");
  document.getElementById('materiaGuardada').textContent = materia
    ? `Materia guardada: ${materia}`
    : "";
}

// 6️⃣ Saludo personalizado
function mostrarSaludo() {
  const nombre = localStorage.getItem("nombreUsuario");
  const materia = localStorage.getItem("materiaFavorita");
  const saludo = document.getElementById('saludo');
  if (nombre) {
    saludo.textContent = `¡Bienvenido/a, ${nombre}!` + (materia ? ` Tu materia favorita es: ${materia}` : "");
  } else {
    saludo.textContent = "¡Bienvenido! ¿Cómo te llamas?";
  }
}

// 7️⃣ Pedir el nombre solo si no está guardado
function pedirNombre() {
  let nombre = localStorage.getItem("nombreUsuario");
  if (!nombre) {
    nombre = prompt("¡Hola! ¿Cómo te llamas?");
    if (nombre && nombre.trim() !== "") {
      localStorage.setItem("nombreUsuario", nombre.trim());
    }
  }
}

// 8️⃣ Evento para guardar materia favorita
document.getElementById('guardarMateria').addEventListener('click', guardarMateria);

// 9️⃣ API: Buscar películas históricas
document.getElementById('buscarMovie').addEventListener('click', function() {
  const titulo = document.getElementById('movieInput').value.trim();
  const resultado = document.getElementById('movieResultado');
  resultado.innerHTML = "";
  if (!titulo) {
    resultado.textContent = "Por favor, ingresa el título de una película.";
    return;
  }
  fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(titulo)}&type=movie&apikey=564727fa`)
    .then(res => res.json())
    .then(data => {
      if (!Array.isArray(data.Search) || data.Search.length === 0) {
        resultado.textContent = "No se encontraron películas.";
        return;
      }
      resultado.innerHTML = "<ul>" + data.Search.slice(0, 5).map(m =>
        `<li>
          <strong>${m.Title}</strong> (${m.Year})<br>
          <img src="${m.Poster !== 'N/A' ? m.Poster : ''}" alt="${m.Title}" style="max-width:100px;"><br>
          <a href="https://www.imdb.com/title/${m.imdbID}/" target="_blank">Ver en IMDb</a>
        </li>`
      ).join("") + "</ul>";
    })
    .catch(() => {
      resultado.textContent = "Error al buscar películas.";
    });
});

// 🔟 Inicialización al cargar la página
pedirNombre();
mostrarSaludo();
mostrarMateria();
mostrarUsuarios();