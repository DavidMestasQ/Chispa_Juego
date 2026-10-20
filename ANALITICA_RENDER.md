# Visitas de CHISPA en Render

Una página estática puede medir visitas mediante un pequeño script de analítica. No necesita un servidor propio para hacerlo.

Render muestra consumo de ancho de banda en Metrics. Eso mide tráfico de archivos y no equivale a una lista de visitantes ni a personas identificadas. Sus gráficos de volumen de solicitudes HTTP están documentados para los servicios web, no para los sitios estáticos. Fuente: [métricas de Render](https://render.com/docs/service-metrics).

## Opción sencilla: GoatCounter

[GoatCounter](https://www.goatcounter.com/) ofrece estadísticas de visitas, procedencia, ubicación aproximada, navegadores y tamaños de pantalla. Son estadísticas; no revela los nombres de quienes entran. Los nombres de jugadores de CHISPA siguen siendo datos locales del juego y no se envían automáticamente a este servicio.

1. Crea tu cuenta en GoatCounter y registra la dirección pública de CHISPA en Render.
2. Obtén el código de integración. Si tu cuenta fuera `mi-chispa`, el destino sería `https://mi-chispa.goatcounter.com/count`.
3. Añade el siguiente fragmento antes de `</body>` en `index.html`, reemplazando `TU_CODIGO` por el código real de tu cuenta:

```html
<script
  data-goatcounter="https://TU_CODIGO.goatcounter.com/count"
  async
  src="https://gc.zgo.at/count.js">
</script>
```

4. Sube los archivos al repositorio conectado a Render y vuelve a desplegar el sitio. Si utilizas despliegue automático, el cambio se publica cuando Render despliega el nuevo commit.
5. Visita la página pública y comprueba el panel de GoatCounter. Si no aparece la visita, prueba sin un bloqueador de anuncios y comprueba que las políticas CSP de tu sitio permitan el servicio.

El ejemplo está documentado aquí y **no está insertado ni activado** en el juego. Hace falta el código real de tu cuenta. No compartas tu contraseña; para la integración basta el fragmento de script proporcionado por el servicio.

Se empezarán a registrar visitas desde que publiques la integración. El script no recupera las visitas anteriores. El código básico cuenta cargas de página: cambiar de modo dentro de CHISPA no crea una nueva página. Para medir qué modos se usan habría que añadir eventos de juego por separado.

Fuentes: [integración oficial](https://www.goatcounter.com/help/start), [datos que almacena GoatCounter](https://www.goatcounter.com/help/privacy).
