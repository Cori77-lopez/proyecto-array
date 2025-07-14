# 🎬 Proyecto: Gestión de Usuarios + Películas Históricas

---

## 👩‍💻 INTEGRANTES:
- Silvia Ibañez Raquel
- Corina López

---

## 📝 Descripción

Aplicación web que simula una base de datos de usuarios y permite buscar películas históricas usando la API pública de OMDb. Los datos se guardan en el navegador con localStorage, asegurando persistencia entre sesiones.

---

## 🚦 ¿Cómo funciona?

### 1️⃣ Base de datos simulada (array de usuarios)

- El array `usuarios` contiene objetos con id, nombre, edad y email.
- Al iniciar, se carga desde localStorage si existe, o se usa el array inicial.

### 2️⃣ Mostrar usuarios en pantalla

- Se recorre el array y se muestra cada usuario en una lista.
- Si no hay usuarios, se muestra un mensaje.

### 3️⃣ Agregar nuevos usuarios

- Formulario con validación:
  - Nombre no vacío.
  - Email con "@".
  - Edad mayor a 0.
- Si es válido, se agrega al array, se guarda en localStorage y se actualiza la lista.

### 4️⃣ Guardar y mostrar materia favorita

- Input para materia favorita.
- Se guarda en localStorage y se muestra en pantalla.

### 5️⃣ Saludo personalizado

- Al cargar, se pide el nombre si no está guardado y se muestra un saludo personalizado.

### 6️⃣ Buscar películas históricas (API OMDb)

- Input para buscar películas por título.
- Se consulta la API pública de OMDb y se muestran los primeros 5 resultados con título, año, póster y link a IMDb.
- Si no se encuentra, se muestra un mensaje de error.

---

## 🛠️ Tecnologías utilizadas

- **HTML:** estructura de la página.
- **CSS:** estilos visuales.
- **JavaScript:** lógica de la app, manejo de arrays, eventos, localStorage y consumo de API.

---

## 💡 ¿Qué conceptos se aplican?

- Arrays y objetos.
- Manipulación del DOM.
- Eventos y validaciones.
- localStorage y persistencia.
- Consumo de API externa con fetch.
- Funciones para modularizar el código.

---

## 🧪 ¿Cómo probar la aplicación?

1. Abrir `index.html` en el navegador o ingresar al link de GitHub Pages.
2. Al cargar, aparecerá un prompt pidiendo tu nombre (si es la primera vez).
3. Se muestra el saludo y la lista de usuarios.
4. Puedes agregar usuarios con el formulario.
5. Puedes guardar tu materia favorita.
6. Puedes buscar películas históricas por título y ver resultados visuales.

---

## 🔗 Enlaces

- **🌐 App web:** [Pon aquí el link de GitHub Pages]
- **📂 Repositorio:** [Pon aquí el link del repositorio]

---
