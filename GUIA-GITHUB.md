# Guía para evidenciar el Pull Request y el cierre automático

## 1. Subir ZIP a GitHub
1. Descarga el ZIP y descomprímelo.
2. Crea un repositorio público llamado `actividad-issues-utp` con README desmarcado si vas a subir todo desde cero.
3. Selecciona **Add file > Upload files** y arrastra `index.html`, `styles.css`, `app.js` y `README.md` (NO el ZIP).
4. Confirma el commit en `main`: `chore: agregar aplicacion base de registro`.

## 2. Crear el Issue
En **Issues > New issue** crea:

**Título:** `[BUG] El botón Limpiar no funciona correctamente`

**Descripción:**

```
## Descripción
El botón Limpiar está visible pero no restablece los campos del formulario.

## Pasos para reproducir
1. Abrir index.html en el navegador.
2. Completar Nombre, Correo y Área.
3. Presionar Limpiar.

## Resultado esperado
Todos los campos vuelven a su estado inicial.

## Resultado actual
Los datos permanecen ingresados.

## Criterios de aceptación
- El botón Limpiar restablece los campos.
- No guarda un usuario al limpiar.

## Prioridad
P3-media. Impacto 2, urgencia 1: molestia operativa sin bloquear el registro.
```

Asignar etiqueta `bug`, prioridad `P3-media` y uno de los dos compañeros como responsable. Anota el número real del Issue (por ejemplo, `#4`).

## 3. Crear rama y corregir
1. En **Code**, abre el selector `main` y crea `fix/boton-limpiar` desde `main`.
2. Abre `index.html` **en la rama nueva** y presiona el lápiz de edición.
3. Busca `<button class="secondary" id="limpiar" type="button">Limpiar</button>`.
4. Cambia solo `type="button"` por `type="reset"`.
5. **Commit changes** en esa rama con mensaje `fix: restaurar limpieza del formulario`.

## 4. Pull Request y cierre
1. Abre **Pull requests > New pull request**.
2. Base `main` y compare `fix/boton-limpiar`.
3. Título: `fix: corregir boton Limpiar del formulario`.
4. Descripción (usa número real):

```
## Cambios
- Se corrigió el tipo de botón para restablecer los campos.
- Se validó que Limpiar no registra usuarios.

Closes #4
```

5. Crea el PR, revisa y pulsa **Merge pull request**.
6. Ve a **Issues** y verifica el cierre automático del Issue al fusionar a la rama predeterminada.

## 5. Capturas para la UTP
- Lista de cinco Issues, sus etiquetas y prioridades.
- Detalle de un Issue con justificación de prioridad en un comentario.
- Pull Request fusionado mostrando `Closes #N` y Issue cerrado.

**Importante:** solo uno de los cinco Issues necesita resolverse si la consigna pide un PR. Los demás pueden quedar abiertos como escenarios de práctica. No afirmes haber resuelto o probado lo que no hiciste.
