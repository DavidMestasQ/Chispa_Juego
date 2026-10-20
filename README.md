# CHISPA — Juego de Retos

Versión revisada del proyecto personal. Para jugar, abre `index.html` en Edge, Chrome o Firefox. Mantén `index.html`, `script.js`, `style.css`, `basta.js` y `basta.css` en la misma carpeta. No necesita instalación ni servidor. Las fuentes de Google requieren conexión; si estás sin conexión, se utiliza la fuente alternativa.

El proyecto activo en Visual Studio Code está en `CHISPA-corregido`. Los cambios se aplican directamente aquí; no hace falta descargar ni extraer nuevos ZIP. Los archivos originales de `proyecto-original` se conservaron sin cambios.

## Apariencia actualizada

El juego admite entre **2 y 20 jugadores**, también al continuar partidas guardadas. Las listas largas de destinatarios del castigo, votos y jugadores del menú tienen desplazamiento. Las ventanas de registro, cartas especiales, confirmación, roles y shots se ajustan a la altura disponible y permiten bajar hasta sus botones. Los equipos de VS y los resúmenes pueden recorrerse completos; las barras de jugadores permiten desplazamiento horizontal hasta ambos extremos.

La revisión de grupos de 14 personas en móvil, horizontal y escritorio está en `tests/scroll.test.cjs`; se ejecuta con `npm run test:scroll` y guarda resultados en `tests/results-scroll.json`.

La mejora visual general está incorporada en `style.css`: fondos azul noche, superficies con profundidad, botones uniformes, mayor contraste y un estilo compartido para jugadores, menús, cartas y ventanas. Se conservan el logo, las partículas, los avatares, los colores de los ocho modos y el pulsador de Basta. El HTML y la lógica del juego no se modificaron para este ajuste.

Las capturas de revisión están en `tests/modern-*.png`. Las pruebas visuales se pueden volver a generar con `node tests/visual-preview.cjs`.

## Cambios del 20 de octubre de 2026

- Se eliminó el sistema de puntos de todos los modos. El resumen muestra los jugadores en el orden registrado y sus shots acumulados, sin ranking ni medallas.
- En VS, acertar pasa el turno y fallar mantiene la penalización del equipo. Terminar la partida muestra el resumen sin declarar ganadores ni aplicar un castigo final.
- Los castigos normales tienen entre uno y tres shots, incluyendo Impostor. El duplicador se aplica después de ese límite: 1 → 2, 2 → 4 y 3 → 6. Los totales acumulados durante toda la partida pueden superar esos valores.
- Las partidas guardadas anteriores se pueden recuperar; sus puntos antiguos se descartan.
- Para medir visitas en Render, consulta `ANALITICA_RENDER.md`. La analítica todavía no está activada: requiere el código de una cuenta de estadísticas.

## Comportamiento del guardado

- El botón **Continuar partida** aparece en el inicio cuando existe una partida válida de menos de 12 horas.
- El guardado pertenece al navegador y a la ubicación desde la que abres el juego. Cambiar de navegador o mover el archivo puede hacer que el navegador utilice otro almacenamiento.
- Se guarda al iniciar y avanzar turnos. Verdad o Reto y Trivia recuperan la carta guardada. TODI recupera el jugador y el contador de turnos. VS recupera equipos, turnos y shots; puede mostrar una pregunta nueva al continuar.
- En ¿Quién? se vuelve a votar el turno guardado. En Impostor se vuelve a repartir la misma palabra y los mismos roles, reiniciando pistas y votos de esa ronda.
- Las animaciones y los diálogos pendientes no se recuperan a mitad de su ejecución.
- **Nueva partida** borra el guardado anterior y vacía los jugadores.

## Basta: octavo modo

El tablero usa letras con relieve y un pulsador central. El reloj aparece en la cabecera. Al elegir una letra, el pulsador cambia de violeta a dorado y muestra **Pulsa para pasar**; al presionarlo se hunde y confirma el cambio de turno con un destello breve. La vista respeta la preferencia de movimiento reducido del dispositivo.

Elige Basta en el selector o en el menú durante una partida. Usa los jugadores registrados, con un mínimo de dos.

1. La pantalla propone una categoría. Puedes cambiarla al azar o escribir una propia.
2. Elige **15, 30 o 45 segundos** en **Tiempo por jugador** y pulsa **Comenzar ronda**. Ese plazo incluye elegir letra, responder y pasar. La opción inicial es 30 segundos; las nuevas rondas conservan tu elección, que puedes cambiar antes de comenzar.
3. Elige una letra disponible de la A a la Z y di una respuesta en voz alta que pertenezca a la categoría y empiece por esa letra. También puedes seleccionar letras con el teclado.
4. Pulsa el centro para confirmar la respuesta y pasar al siguiente jugador, que recibe el tiempo completo elegido. La letra confirmada ya no se puede usar. Elegir o cambiar una letra no reinicia el reloj.
5. El grupo valida las respuestas. **Respuesta incorrecta** termina la ronda y marca como perdedor al jugador activo. También pierde quien no pulse el centro antes de que termine su tiempo, aunque ya haya elegido una letra.
6. Si se confirman las 26 letras, aparece **¡Todos ganaron!** y se anuncia que cada jugador toma **1 shot de celebración**. Se abre la misma ruleta con el anuncio «¡Todos ganaron!», gira y termina en 1 shot por persona. Se confirma con «¡Brindamos! 🥂» y se suma exactamente uno a cada persona, sin duplicador. Al recargar se recupera una celebración pendiente sin repetir la suma. **Nueva ronda** permite volver a elegir categoría y recupera todas las letras.

El reloj sigue corriendo al abrir el menú. Al salir o recargar se conserva el plazo original: continuar no reinicia el tiempo ni cambia la duración elegida. Cambiar los jugadores prepara una nueva ronda para no alterar la que estaba en curso. Si alguien pierde por tiempo o respuesta incorrecta, aparece automáticamente su ruleta de castigo de 1 a 3 shots. El resultado se suma una sola vez y se conserva al recargar; tras confirmar queda en el resumen de la ronda. Completar las 26 letras anuncia un shot de celebración por persona, que se guarda sin volver a sumarse al recargar. Basta no añade puntos.

El menú lateral permite desplazarse hasta la última opción, con una barra de scroll visible y la cabecera fija, también en pantallas pequeñas.

Para actualizar Render, incluye también los dos archivos nuevos `basta.js` y `basta.css` junto con el `index.html` y el `script.js` modificados.

## Pruebas

El informe está en `INFORME_PRUEBAS.md` y los resultados automáticos en `tests/results.json`.
Las pruebas específicas de Basta están en `tests/basta.test.cjs` y su resultado en `tests/results-basta.json`.

La batería usa Node.js, Playwright 1.62.1 y Microsoft Edge instalado. Con las dependencias disponibles:

```powershell
npm install
npm test
```

Las pruebas utilizan un perfil de navegador aislado y jugadores de prueba. No modifican partidas del navegador habitual. Para reproducir un caso por nombre, establece `TEST_FILTER` antes de ejecutar las pruebas.
