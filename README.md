# 🚀 Proyecto: Gestión de Usuarios con Array y LocalStorage

---

## 👩‍💻 INTEGRANTES:
- Silvia Ibañez Raquel
- Corina López

---

## 📝 Descripción

Esta aplicación web simula una base de datos de usuarios utilizando un array en JavaScript. Permite agregar nuevos usuarios mediante un formulario, guardar información personalizada en el navegador y mostrar todos los datos en pantalla de forma dinámica.

---

## ⚙️ ¿Cómo funciona?

### 1️⃣ Simulación de base de datos

- Se utiliza un **array de objetos** en JavaScript llamado `usuarios` para almacenar la información de cada usuario (id, nombre, edad y email).
- Este array actúa como una base de datos temporal en memoria.

### 2️⃣ Mostrar usuarios en pantalla

- Al cargar la página, se recorre el array de usuarios y se muestra cada usuario en una lista (`<ul>`) usando JavaScript y el método `createElement`.
- Cada vez que se agrega un usuario nuevo, la lista se actualiza automáticamente.

### 3️⃣ Agregar nuevos usuarios

- Hay un **formulario** con campos para nombre, edad y email.
- Al enviar el formulario, se crea un nuevo objeto usuario con los datos ingresados y se agrega al array.
- La lista de usuarios se vuelve a mostrar con el nuevo usuario incluido.

### 4️⃣ Guardar información personalizada en el navegador

- Al cargar la página, si el usuario no tiene un nombre guardado, se le pide mediante un `prompt` y se guarda en el **localStorage**.
- El nombre se muestra en pantalla como un saludo personalizado.
- Además, el usuario puede guardar su **materia favorita**. Este dato también se almacena en localStorage y se muestra en pantalla.

---

## 🛠️ Tecnologías utilizadas

- **HTML:** estructura de la página.
- **CSS:** estilos visuales.
- **JavaScript:** lógica de la aplicación, manejo de arrays, eventos y localStorage.

---

## 💡 ¿Qué conceptos de programación se aplican?

- **Arrays y objetos:** para simular la base de datos.
- **Manipulación del DOM:** para mostrar y actualizar la información en pantalla.
- **Eventos:** para manejar el envío del formulario y los botones.
- **localStorage:** para guardar y recuperar datos personalizados del usuario.
- **Funciones:** para organizar el código y reutilizar lógica.

---

## 🧪 ¿Cómo probar la aplicación?

1. Abrir el archivo `index.html` en el navegador o ingresar al link de GitHub Pages.
2. Al cargar, aparecerá un prompt pidiendo tu nombre (si es la primera vez).
3. Se mostrará un saludo personalizado y la lista de usuarios inicial.
4. Puedes agregar nuevos usuarios con el formulario.
5. Puedes guardar tu materia favorita, que se mostrará en pantalla y se recordará al recargar la página.

---

## 🔗 Enlaces

- **🌐 App web:** (https://cori77-lopez.github.io/proyecto-array/)
- **📂 Repositorio:** (https://github.com/Cori77-lopez/proyecto-array.git)

---