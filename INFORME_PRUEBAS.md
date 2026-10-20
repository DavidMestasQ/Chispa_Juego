# Revisión de CHISPA

## Listas y desplazamiento con grupos de catorce personas

Se amplió el límite de 10 a 20 jugadores en registro, incorporación durante la partida y validación del guardado. Se probaron altas reales del jugador 15 al 20, el bloqueo del jugador 21 y la recuperación de una partida con 20 personas. La pantalla informa del nuevo límite.

La carta especial para redirigir shots tenía contenido recortado por `overflow: hidden` y no limitaba ni desplazaba la lista de destinos. Ahora la ventana se ajusta a la altura disponible y la lista tiene su propio desplazamiento. Se mantienen accesibles el último destinatario y el botón de confirmar. Se limitaron y habilitaron también las ventanas de registro, confirmación de retos y roles de Impostor; la ruleta conserva su desplazamiento. Las votaciones de Trivia, ¿Quién? e Impostor, el menú y sus jugadores permiten recorrer todos los nombres sin comprimir las filas. Las listas admiten foco de teclado y barras finas.

Las pantallas de registro, cartas, resultados y Basta conservan la altura natural de sus elementos y permiten desplazamiento vertical. VS permite bajar por los dos equipos hasta los botones de respuesta. En escritorio, ambos paneles de configuración permiten desplazamiento independiente. TODI y las cartas permiten recorrer horizontalmente la barra de jugadores desde el primero hasta el último; se eliminó el centrado que dejaba elementos del inicio fuera del alcance en TODI.

**Verificación final: 115 escenarios aprobados en Edge**: 45 generales, 25 de Basta y 45 de desplazamiento. Los escenarios de desplazamiento usan 14 jugadores en 320 × 568, 390 × 844, 844 × 390 y 1280 × 600, además del registro y guardado con 20. Se usan movimientos reales de rueda sobre los contenedores y se comprueba que el último elemento esté dentro de la pantalla y no tapado antes de pulsarlo. Se repitieron por separado los cuatro casos de TODI y el registro de 20, corrigiendo la preparación de esas pruebas. El resultado consolidado está en `tests/results-scroll-final.json`; se conservan la ejecución anterior en `tests/results-scroll.json` y las repeticiones en `tests/results-scroll-todi.json` y `tests/results-scroll-limit.json`.

Se inspeccionaron capturas del último destinatario de castigo en móvil, de los equipos de VS en horizontal y del formulario de registro en escritorio (`tests/scroll-*.png`). Las pruebas se limitan a Edge con tamaños de pantalla simulados, sin verificación en teléfonos físicos ni otros navegadores. La prueba reproducible completa se ejecuta con `npm test`; la revisión de desplazamiento con `npm run test:scroll`.

## Tiempo configurable en Basta

Antes de comenzar se eligen 15, 30 o 45 segundos por jugador. La opción inicial es 30; se mantiene al preparar la siguiente ronda y puede cambiarse antes de iniciarla. El plazo se aplica a todos los turnos, a la cuenta regresiva, al indicador del tablero y a los mensajes de derrota y ruleta. Elegir una letra no reinicia el tiempo y abrir el menú no lo pausa. Continuar conserva la duración elegida y el plazo original, sin tiempo adicional. Los guardados anteriores y las duraciones inválidas utilizan 30 segundos. La duración no se puede cambiar durante una ronda en curso.

**25 de 25 escenarios de Basta aprobados en Edge**, sin errores JavaScript registrados, más una segunda comprobación de los tres tiempos tras actualizar la etiqueta del tablero. Se verificaron selección y guardado antes de empezar, turnos posteriores, recuperación sin reiniciar el plazo, derrota con la duración correcta, elección conservada para la siguiente ronda y compatibilidad con guardados anteriores. Se inspeccionó el selector en móvil de 320 × 568. Evidencia: `tests/results-basta.json`, `tests/results-basta-duration.json` y `tests/basta-duration-mobile.png`. No se repitió la batería general de otros modos para este cambio de Basta.

## Celebración integrada en la ruleta

La victoria colectiva de Basta ahora abre la misma ventana y animación de ruleta que los castigos. Muestra «¡Todos ganaron!», «Todos los jugadores» y «1 shot por persona · ¡Salud!». La ruleta termina siempre en uno y se confirma con «¡Brindamos! 🥂». Se conservan el sonido y el giro habituales. Una celebración pendiente se recupera al continuar sin volver a sumar shots; una confirmada no vuelve a abrirse. La siguiente penalización recupera los textos normales de la ruleta. Esta mejora sustituye la celebración sin ruleta descrita en la sección anterior.

Pasaron los 20 escenarios existentes de Basta con el nuevo flujo, las tres pruebas generales seleccionadas de shots y duplicador, y dos comprobaciones adicionales de celebración con diez jugadores y en móvil de 320 × 568. La ventana de shots limita su altura y permite desplazarse en pantallas pequeñas para llegar a la confirmación. Se inspeccionaron capturas de escritorio y móvil. Evidencia: `tests/results-basta.json`, `tests/results-celebration-regression.json`, `tests/results-celebration-mobile.json`, `tests/basta-celebration-roulette.png` y `tests/basta-celebration-mobile.png`. La batería de Basta ahora contiene 21 escenarios; en esta revisión el caso móvil se ejecutó por separado junto al de diez jugadores.

## Celebración al completar Basta

Completar las 26 letras muestra «¡Todos ganaron!» y anuncia «Cada jugador toma 1 shot para celebrar». Se suma exactamente un shot a cada jugador sobre su total anterior, sin ruleta ni modificadores. La celebración se guarda con la ronda finalizada: los clics repetidos, continuar y recargar no vuelven a sumarla. Nueva ronda conserva los totales y reinicia las letras. Las partidas antiguas ya finalizadas conservan sus totales sin aplicar la nueva celebración retroactivamente.

Esta regla sustituye el comportamiento anterior sin shots al completar el abecedario, descrito en las revisiones históricas de abajo.

**20 de 20 pruebas de Basta aprobadas en Edge**, sin errores JavaScript registrados. Se comprobó el anuncio, un shot por persona con tres y diez jugadores, la conservación de los totales anteriores, los eventos repetidos y la recuperación tras recargar. Se inspeccionó la captura `tests/basta-complete.png`. Los resultados están en `tests/results-basta.json`. La lógica de los otros modos no cambió y no se repitió su batería general para este ajuste.

## Castigo de Basta y desplazamiento del menú

Al perder por tiempo o por respuesta incorrecta se abre automáticamente la ruleta del jugador que perdió, con un castigo normal de 1 a 3 shots. La cantidad se guarda y se suma una sola vez: continuar una partida recupera una ruleta pendiente con el mismo resultado, y una ruleta ya confirmada no vuelve a aparecer. El resumen conserva el castigo. Completar las 26 letras no penaliza a nadie. Los modificadores de otros modos no alteran al destinatario ni a la cantidad del castigo de Basta; el duplicador sigue disponible en los modos que lo utilizan.

El cuerpo del menú tiene altura flexible limitada, desplazamiento vertical, barra fina y acceso por teclado; la cabecera permanece fija. Se comprobó con diez jugadores, en 320 × 568 y 1280 × 600, usando la rueda del ratón para llegar a «Salir al Inicio» y regresando al modo Basta.

Las 19 pruebas específicas de Basta pasaron en Edge, sin errores JavaScript registrados. Incluyen castigos por ambos tipos de derrota, destinatario, cantidades 1/2/3, protección ante eventos repetidos, recuperación tras recargar y recorrido del menú. Evidencia: `tests/results-basta.json`, `tests/basta-castigo.png` y `tests/menu-scroll-*.png`.

También pasaron las 45 pruebas generales de regresión, incluyendo el duplicador hasta seis, la redirección y los otros modos. Total de esta revisión: **64 de 64 escenarios aprobados en Edge**. Resultado general en `tests/results.json`. Se revisaron visualmente las capturas del menú móvil y de la ruleta de Basta; la prueba se limita a Edge y dispositivos simulados.

## Modernización visual general

La mejora se aplicó únicamente mediante estilos en `style.css`. Se mantienen la estructura HTML y toda la lógica de `script.js` y `basta.js`; se verificó que sus hashes SHA-256 no cambiaron durante este ajuste. Se conservan las pantallas, elementos, botones, avatares, partículas y los ocho modos.

Se actualizaron los fondos, superficies, botones, entradas, tarjetas, menú lateral y ventanas. Se mejoró el contraste de textos y se mantuvieron los colores de cada modo. El pulsador de Basta conserva su aspecto y respuesta interactiva. Se respeta la preferencia de movimiento reducido.

**Verificación: 61 de 61 escenarios funcionales aprobados en Edge** (45 generales y 16 de Basta). Se generaron 32 capturas en 390 × 900 y 1280 × 900, comprobando que no hubiera desbordamiento horizontal; se inspeccionaron pantallas representativas de inicio, configuración, modos, menú, ventanas y resultados. Los resultados están en `tests/results.json`, `tests/results-basta.json` y `tests/results-visual.json`.

Las pruebas funcionales bloquean las fuentes de Google para evitar depender de su disponibilidad y comprobar las fuentes alternativas. Las capturas de `tests/modern-*.png` corresponden a la revisión visual con las fuentes habituales. Esta revisión se limita a Edge y tamaños de móvil simulados.

## Rediseño de Basta y pulsador central

El tablero incorpora un fondo violeta, letras con relieve, una guía de tres pasos y la categoría junto al reloj. El centro tiene forma de pulsador con borde, reflejo y profundidad. Al elegir una letra pasa de violeta a dorado y muestra «Pulsa para pasar». Al mantenerlo presionado se hunde, y al confirmar aparece una onda breve de cambio de turno. El reloj se separó del botón para distinguir la información de la acción.

**16 de 16 pruebas de Basta aprobadas en Edge.** Incluyen los 14 escenarios funcionales anteriores, la activación y presión del pulsador, el uso de teclado y la preferencia de movimiento reducido. Se inspeccionaron capturas de escritorio, móvil y del botón activado y presionado. La verificación anterior de 45 escenarios de los otros modos se conserva abajo; no se volvió a ejecutar para este cambio localizado.

## Nuevo modo Basta

Se añadió Basta al selector, a la vista previa de inicio y al menú, con ocho modos disponibles. La pantalla permite elegir una categoría al azar o escribirla. Presenta 26 letras de la A a la Z en círculo y un botón central con el reloj.

Cada turno dura 30 segundos. Elegir o cambiar letra no reinicia el reloj; confirmar con el centro consume la letra y pasa al siguiente jugador. La ronda termina por tiempo, por una respuesta que el grupo marca como incorrecta o por completar las 26 letras. No hay puntos ni reconocimiento automático de voz. El guardado conserva categoría, letras, selección, jugador y plazo, incluso al recargar o salir. El menú no pausa el reloj.

**Pruebas específicas: 14 de 14 aprobadas en Edge, sin errores JavaScript en esos escenarios.** Se comprobaron los finales de ronda, los turnos circulares, los clics repetidos, el límite exacto del tiempo, las letras usadas, la categoría personalizada, el cambio de jugadores y la continuación sin tiempo adicional. Las 26 letras se comprobaron como pulsables en anchos de 320, 390 y 1280 píxeles y se inspeccionaron capturas de pantalla.

Los resultados y las capturas están en `tests/results-basta.json` y `tests/basta-*.png`.

También pasaron los **45 escenarios de regresión**, con el selector y la prueba móvil actualizados para los ocho modos. Total de esta verificación: **59 de 59 escenarios aprobados**, sin errores JavaScript registrados durante las pruebas. Los resultados de regresión están en `tests/results.json`.

## Ajuste posterior: duplicador y carpeta activa

Los cambios se aplican directamente en los archivos de la carpeta del proyecto abierta en Visual Studio Code y no se generan nuevos ZIP.

El límite de tres se aplica al castigo normal, antes del duplicador. El duplicador vuelve a convertir 1, 2 y 3 shots en 2, 4 y 6, respectivamente; se consume tras una penalización. Las cartas y la ruleta muestran esos valores. El resultado de las pruebas específicas de este ajuste está en `tests/results-duplicador.json`. La revisión de 44 escenarios que figura abajo es anterior a este ajuste.

## Actualización del 20 de octubre de 2026

**Resultado: 44 de 44 escenarios aprobados en Edge.** Se volvieron a comprobar los siete modos y se añadieron pruebas del límite de shots, del castigo de Impostor con diez jugadores y de la recuperación de guardados con puntos antiguos. No se detectaron errores JavaScript durante estos escenarios.

Se eliminó el sistema de puntos de todos los modos y su persistencia. Los guardados anteriores se recuperan descartando esos puntos. El resumen conserva el orden de jugadores y muestra únicamente sus shots acumulados, sin ranking ni medallas.

VS mantiene las respuestas correctas y las penalizaciones por fallo, pero termina directamente en el resumen, sin ganadores ni castigo final por equipo perdedor.

Cada penalización está limitada a tres shots, incluyendo las cartas de doble y el castigo de Impostor con diez jugadores. La animación de la ruleta también muestra únicamente uno, dos y tres. El total acumulado de una partida puede superar tres.

La configuración de analítica para Render está explicada en `ANALITICA_RENDER.md`; no se activó ningún servicio de seguimiento.

## Revisión inicial del 19 de octubre de 2026

Fecha: 19 de octubre de 2026, hora de Lima.

**Resultado de la revisión inicial: 41 de 41 escenarios aprobados.** No se detectaron errores JavaScript durante esos escenarios. Se corrigieron 24 problemas de interacción, guardado, navegación, presentación e instrucciones. La tabla siguiente corresponde a esa revisión inicial; los cambios posteriores se describen arriba.

La versión corregida está en la carpeta del proyecto. El original se conserva intacto. Abre `index.html` de la copia corregida para probarla.

## Errores encontrados y corregidos

| Área | Error del original | Corrección |
| --- | --- | --- |
| Yo Nunca | Un apóstrofe en el nombre rompía el evento del dedo: `missing ) after argument list`. | El botón identifica al jugador por índice y no inserta su nombre dentro de código JavaScript. |
| Nombres | Los nombres se interpretaban como HTML en listas, votos y resultados. | Se escapa el texto al construir HTML y se usa `textContent` donde corresponde. |
| Doble shot | El modificador no duplicaba los shots cuando la cantidad se sorteaba. | Se sortea primero y se aplica el doble después. |
| Trivia | El ganador aparecía entre los destinatarios aunque la interfaz indica que debe elegir a otra persona. | Se excluye al ganador de esa selección. |
| Trivia | El tiempo seguía corriendo con el menú abierto. | Se pausa al abrir el menú y se conserva el tiempo restante al cerrarlo. |
| Navegación | Respuestas y animaciones pendientes podían abrir modales después de cambiar de modo o salir. | Se cancelan los callbacks y animaciones asociados a la pantalla anterior. |
| TODI | El giro podía dejar activo el sonido repetitivo de la ruleta. | Se detiene al aterrizar y al abandonar el modo. |
| Guardado | Iniciar una partida no garantizaba un guardado; volver al inicio no actualizaba el botón Continuar. | Se guarda al iniciar y avanzar, y se actualiza el botón al regresar. |
| TODI | No persistía el jugador ni el número de turno. | Se sincronizan con el estado guardado y se recuperan al continuar. |
| VS | `Infinity` se serializaba como `null`; al continuar se recuperaba como cero y la partida podía terminar prematuramente. | Se recupera correctamente la duración infinita. |
| VS | Se avanzaba el índice del equipo que iba a jugar, saltando a su primer integrante. | Se avanza el índice del equipo que terminó su turno. |
| VS | Los resultados se construían antes de sumar la penalización final. | El resumen se construye después de completar las penalizaciones. |
| VS | Agregar o eliminar jugadores dejaba los equipos desactualizados. | Se reconstruyen los equipos e inicia una partida VS nueva con la lista válida. |
| Cambiar modo | Seleccionar un modo incompatible podía borrar los puntos antes de detectar que no había jugadores suficientes. | Se valida antes de reiniciar la partida. Impostor requiere al menos tres jugadores. |
| Impostor | Tras terminar una ronda, la siguiente podía quedar con la sección de pistas oculta. | Se restaura su visibilidad al iniciar cada ronda. |
| Impostor | Continuar lo enviaba a la pantalla genérica del juego. | Se recuperan la palabra y los roles y se reinicia el reparto de esa ronda. |
| Impostor | No había una salida durante el reparto ni menú en su cabecera. | Se añadieron Cambiar modo durante el reparto y un botón de menú. |
| Jugadores | Cancelar una incorporación durante la partida dejaba la marca de incorporación activa. | Se limpia al cancelar; también se respeta el máximo de diez desde el menú. |
| Jugadores | Eliminar a alguien anterior al jugador activo podía cambiar involuntariamente de turno. | Se conserva al jugador activo por nombre cuando sigue en la lista. |
| Carrusel | Las tarjetas laterales visibles ignoraban los clics. | Las tarjetas adyacentes ahora permiten seleccionarlas. |
| Carrusel | El clic emitido después de un arrastre podía deshacer el cambio de modo. | Se ignora ese clic posterior al gesto; se verificaron arrastres y clics normales. |
| Escritorio | Los botones de intensidad se salían del panel lateral. | Se distribuyen verticalmente dentro del panel. |
| Adaptación | Al pasar de escritorio a móvil se conservaban los contenedores del diseño de escritorio. | Se reconstruye la distribución al cruzar el ancho de 900 px. |
| Ayuda | El tutorial decía que Verdad y Reto se alternaban, aunque el jugador los elige. | Se ajustaron las instrucciones y una errata de la tarjeta de Trivia. |

## Cómo se comprobó

Pruebas automatizadas en Microsoft Edge real, ejecutado sin ventana, con Playwright y un perfil aislado. Se pulsaron controles de la interfaz y se comprobaron pantallas, puntajes, destinatarios, turnos, almacenamiento y errores JavaScript. Se usaron datos y aleatoriedad controlados para reproducir respuestas correctas, errores, empates y cartas especiales. Algunos estados poco accesibles, como el final de una partida de rondas infinitas, se prepararon desde el entorno de pruebas.

Se verificaron los siete modos, altas y bajas, validaciones de nombres y cantidad, géneros y emojis, carrusel, intensidades, menús, confirmaciones, penalizaciones individuales y en cadena, sonido activado/desactivado, recarga, continuación y resultados. También se validó la estructura de todas las preguntas y respuestas de Trivia.

Se revisaron capturas de escritorio a 1280 × 900 y móvil simulado a 390 × 844. Las capturas y los resultados por escenario están en `tests/`.

## Alcance del guardado y de las pruebas

La recuperación es por turno. En ¿Quién? se repite la votación del turno. En Impostor se reinicia la ronda conservando la palabra y los roles. VS puede escoger otra pregunta del mismo turno. Las animaciones y los diálogos pendientes no se restauran en su punto exacto. Estos comportamientos se detallan en `README.md`.

Se comprobó que el interruptor de sonido cambia de estado y que la ruleta deja de programar sonidos. La calidad audible, la vibración y los gestos físicos necesitan revisión en un teléfono real. No se ejecutó esta batería en Safari, iOS o Firefox. La revisión del banco de Trivia valida su estructura, no la exactitud factual de cada respuesta.

El número y el resultado definitivo de los escenarios están registrados en `tests/results.json`.
