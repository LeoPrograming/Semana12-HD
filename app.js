// Demo UTP: el Issue del botón Limpiar se corrige en una rama separada.
const form = document.getElementById('registroForm');
const mensaje = document.getElementById('mensaje');
const lista = document.getElementById('lista');
const total = document.getElementById('total');
const usuarios = [];

function mostrarMensaje(texto, tipo) {
  mensaje.textContent = texto;
  mensaje.className = 'message ' + tipo;
}

form.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const nombre = form.elements.nombre.value.trim();
  const correo = form.elements.correo.value.trim();
  const area = form.elements.area.value;
  if (!nombre || !correo) {
    mostrarMensaje('Completa el nombre y el correo para continuar.', 'error');
    return;
  }
  usuarios.push({ nombre, correo, area });
  total.textContent = usuarios.length;
  lista.replaceChildren();
  usuarios.forEach((usuario) => {
    const item = document.createElement('li');
    const titulo = document.createElement('strong');
    titulo.textContent = usuario.nombre;
    const detalle = document.createElement('small');
    detalle.textContent = usuario.correo + (usuario.area ? ' · ' + usuario.area : '');
    item.append(titulo, detalle);
    lista.append(item);
  });
  mostrarMensaje('Usuario registrado correctamente.', 'ok');
});

// ISSUE PENDIENTE: botón "Limpiar" actualmente no hace nada.
// Se corregirá con un Pull Request usando type="reset" en index.html.
form.addEventListener('reset', () => mostrarMensaje('Formulario limpiado.', 'ok'));
