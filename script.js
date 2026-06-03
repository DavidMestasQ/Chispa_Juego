// ===================================================
//  DATA — banco de preguntas
// ===================================================
const CHALLENGES = {
// ===================================================
//  preguntas para juego verdad o reto
// ===================================================
  truth: {
    1: [
      "¿Cuál fue tu mayor vergüenza en la escuela?",
      "¿Cuál es el secreto que menos le has contado a alguien aquí?",
      "¿A quién de los presentes llamarías primero en una emergencia?",
      "¿Cuál es tu miedo más irracional?",
      "¿Alguna vez te has ido sin pagar de algún lugar?",
      "¿Cuál es la mentira más grande que has dicho?",
      "¿Cuál fue tu crush más ridículo?",
      "¿Qué canción escuchas cuando nadie te ve?",
      "¿Cuál es la cosa más rara que has buscado en internet?",
      "¿Alguna vez has fingido estar enfermo para no ir a algo?",
      "¿Cuál es tu peor hábito que nadie sabe?",
      "¿Alguna vez has leído el diario o mensajes de alguien sin permiso?",
      "¿Cuál es la excusa más absurda que has dado para cancelar planes?",
      "¿Tienes una fobia que da vergüenza admitir?",
      "¿Cuál es lo más tonto que has llorado?",
      "¿Alguna vez has reprobado algo y lo ocultaste?",
      "¿Cuál es tu talento oculto más inesperado?",
      "¿A quién del grupo le darías el premio al mejor actor/actriz?",
      "¿Cuál es la peor compra que has hecho con tu dinero?",
      "¿Alguna vez has hablado mal de alguien que estaba en la misma habitación?",
      "¿Cuántas horas al día pasas en el teléfono realmente?",
      "¿Cuál es la cosa más inmadura que sigues haciendo?",
      "¿Has dicho 'ya voy en camino' estando todavía en casa?",
      "¿Cuál es la película o serie que todos creen que viste pero nunca terminaste?",
      "¿Cuál es el apodo más vergonzoso que te han puesto?",
      "¿Alguna vez has mandado un mensaje al grupo equivocado?",
      "¿Cuál es la canción más cursi que tienes en tu playlist?",
      "¿Alguna vez has fingido reírte de un chiste que no entendiste?",
      "¿Cuál es el recuerdo más incómodo que tienes de la infancia?",
      "¿Alguna vez has fallado un saludo (chocar la mano mal, beso en la mejilla equivocada)?",
      "¿Cuál es la cosa más random que coleccionas o has coleccionado?",
      "¿Alguna vez le has dado like sin querer a una foto muy antigua de alguien?",
      "¿Cuál es el juego o app al que más tiempo le has dedicado en tu vida?",
      "¿Alguna vez has respondido un 'hola' equivocado creyendo que era para ti?",
      "¿Cuál es la cosa más atrevida que has hecho sin que tus padres se enteraran?",
      "¿A quién de aquí le contarías un secreto que nadie más sabe?",
      "¿Cuál es tu app más vergonzosa en el teléfono ahora mismo?",
      "¿Alguna vez le has mentido a alguien en esta habitación? ¿Sobre qué?",
      "¿Cuál es la cosa más escandalosa que has hecho después de media noche?",
      "¿Tienes una cuenta de redes sociales escondida? ¿Para qué?",
      "¿Cuál es la cosa más petulante que has hecho para impresionar a alguien?",
      "¿Has ignorado intencionalmente a alguien aquí? ¿Por qué?",
      "¿Cuál es el mensaje más embarazoso que te podrían ver en el teléfono ahora?",
      "¿Alguna vez has inventado una historia completamente falsa sobre tu vida?",
      "¿Cuál es la red social donde más finges ser diferente a quien eres?",
      "¿A quién del grupo le tienes más celos y por qué?",
      "¿Cuál es la cosa más dramática que has hecho por llamar la atención?",
      "¿Has terminado una relación de amistad sin dar explicaciones? ¿Por qué?",
      "¿Cuál es el comentario más pasivo-agresivo que has publicado en redes?",
      "¿Alguna vez has fingido no conocer a alguien para evitar hablarle?",
      "¿Cuál es tu mayor pecado en redes sociales — stalkear, ghostear o subtweetear?",
      "¿Tienes screenshots de conversaciones que nunca debiste guardar?",
      "¿Alguna vez has usado el teléfono de otra persona para espiar sus mensajes?",
      "¿Cuál es la mentira más elaborada que has construido durante semanas?",
      "¿Alguna vez has fingido no haber visto un mensaje para no responderlo?",
      "¿Cuál es la persona de aquí con quien menos hablarías si no fueran del mismo grupo?",
      "¿Alguna vez has publicado algo en redes y lo borraste antes de que alguien lo viera?",
      "¿Cuál es el rumor más absurdo que has esparcido aunque no estabas seguro?",
      "¿Alguna vez has inventado una excusa médica para faltar a algo?",
      "¿Cuál es la situación más incómoda en la que te has metido por mentir?",
      "¿Tienes algún crush activo que nadie de aquí sabe que existe?",
      "¿Cuál es tu mayor inseguridad que pocas personas conocen?",
      "¿Cuál fue la última vez que lloraste y por qué?",
      "¿Qué es lo más atrevido que harías por dinero?",
      "¿A quién de aquí encontrarías más atractivo si no lo conocieras?",
      "¿Cuál es la cosa más horrible que has pensado de alguien cercano?",
      "¿Cuál es el momento en que más te has arrepentido de algo que dijiste?",
      "¿Alguna vez has sentido envidia real de alguien en este grupo?",
      "¿Cuál es la opinión más impopular que tienes sobre alguien aquí?",
      "¿Qué es lo que más te da vergüenza de cómo eras hace 5 años?",
      "¿Hay algo que hayas hecho y que no le contarías ni a tu mejor amigo?",
      "¿Cuál es la relación de tu vida de la que más te arrepientes?",
      "¿Alguna vez has deseado que le fuera mal a alguien que conoces?",
      "¿Cuál es el momento de tu vida en que te sentiste más solo/a?",
      "¿Hay algo que todavía no le hayas perdonado a alguien de este grupo?",
      "¿Cuál es la decisión más cobarde que has tomado para evitar un conflicto?",
      "¿Alguna vez has fingido sentimientos que no tenías para no herir a alguien?",
      "¿Cuál es la verdad sobre ti que más trabajo te costaría admitir en voz alta?",
      "¿Hay alguien aquí a quien envidias genuinamente? ¿Por qué?",
      "¿Cuál es la cosa de la que más te avergüenzas de haber hecho por amor?",
      "¿Cuál es la cosa más atrevida que has hecho sin que tus padres se enteraran?",
      "¿A quién de aquí le contarías un secreto que nadie más sabe?",
      "¿Cuál es tu app más vergonzosa en el teléfono ahora mismo?",
      "¿Alguna vez le has mentido a alguien en esta habitación? ¿Sobre qué?",
      "¿Cuál es la cosa más escandalosa que has hecho después de media noche?",
      "¿Tienes una cuenta de redes sociales escondida? ¿Para qué?",
      "¿Cuál es la cosa más petulante que has hecho para impresionar a alguien?",
      "¿Has ignorado intencionalmente a alguien aquí? ¿Por qué?",
      "¿Cuál es el mensaje más embarazoso que te podrían ver en el teléfono ahora?",
      "¿Alguna vez has inventado una historia completamente falsa sobre tu vida?",
      "¿Cuál es la red social donde más finges ser diferente a quien eres?",
      "¿A quién del grupo le tienes más celos y por qué?",
      "¿Cuál es la cosa más dramática que has hecho por llamar la atención?",
      "¿Has terminado una relación de amistad sin dar explicaciones? ¿Por qué?",
      "¿Cuál es el comentario más pasivo-agresivo que has publicado en redes?",
      "¿Alguna vez has fingido no conocer a alguien para evitar hablarle?",
      "¿Cuál es tu mayor pecado en redes sociales — stalkear, ghostear o subtweetear?",
      "¿Tienes screenshots de conversaciones que nunca debiste guardar?",
      "¿Alguna vez has usado el teléfono de otra persona para espiar sus mensajes?",
      "¿Cuál es la mentira más elaborada que has construido durante semanas?",
      "¿Alguna vez has fingido no haber visto un mensaje para no responderlo?",
      "¿Cuál es la persona de aquí con quien menos hablarías si no fueran del mismo grupo?",
      "¿Alguna vez has publicado algo en redes y lo borraste antes de que alguien lo viera?",
      "¿Cuál es el rumor más absurdo que has esparcido aunque no estabas seguro?",
      "¿Alguna vez has inventado una excusa médica para faltar a algo?",
      "¿Cuál es la situación más incómoda en la que te has metido por mentir?",
      "¿Tienes algún crush activo que nadie de aquí sabe que existe?",
      "¿Cuál es tu mayor miedo?",
      "¿Alguna vez has mentido para salir de un problema?",
      "¿Cuál es tu mayor arrepentimiento?",
      "¿Quién es tu amor platónico?",
      "¿Cuál es el secreto más grande que has guardado?",
      "¿Alguna vez has roto una promesa?",
      "¿Qué es lo más vergonzosa que te ha pasado?",
      "¿Qué es lo más loco que has hecho por amor?",
      "¿Alguna vez has engañado a alguien?",
      "¿Cuál es tu mayor inseguridad?",
      "¿Qué es lo más ilegal que has hecho?",
      "¿Alguna vez has tenido un amor no correspondido?",
      "¿Cuál es tu mayor sueño?",
      "¿Qué es lo que más te molesta de tus amigos?",
      "¿Alguna vez has fingido estar enfermo para no ir a algún lugar?",
      "¿Cuál es tu recuerdo más feliz?",
      "¿Qué es lo más extraño que te gusta comer?",
      "¿Alguna vez has robado algo?",
      "¿Cuál es tu mayor logro?",
      "¿Qué es lo que más te asusta del futuro?",
      "¿Alguna vez has tenido un sueño extraño?",
      "¿Cuál es tu mayor debilidad?",
      "¿Qué es lo más loco que has hecho en una fiesta?",
      "¿Alguna vez has tenido un amor a primera vista?",
      "¿Cuál es tu mayor talento oculto?",
      "¿Qué es lo más raro que has hecho por dinero?",
      "¿Alguna vez has sido arrestado?",
      "¿Cuál es tu mayor fantasía sexual?",
      "¿Qué es lo más embarazoso que has hecho en público?",
      "¿Alguna vez has tenido una experiencia paranormal?",
      "¿Cuál es tu mayor deseo?",
      "¿Qué es lo más tonto que has hecho por una apuesta?",
      "¿Alguna vez has tenido un sueño premonitorio?",
      "¿Cuál es tu mayor miedo irracional?",
      "¿Qué es lo más valiente que has hecho?",
      "¿Alguna vez has tenido un amor secreto?",
      "¿Cuál es tu mayor defecto?",
      "¿Qué es lo más extraño que has hecho por amor?",
      "¿Alguna vez has fingido ser otra persona?",
      "¿Cuál es tu mayor virtud?",
      "¿Te cae mal alguien que está aquí?",
      "¿Te gusta alguien de aquí?",
      "¿Qué es lo más vergonzoso que te ha pasado en una cita?",
      "¿Alguna vez has tenido sentimientos por alguien del grupo?",
      "¿Alguna vez has hablado mal de alguien del grupo a sus espaldas?",
      "¿Alguna vez has tenido un sueño erótico con alguien del grupo?",
      "¿Alguna vez has fingido estar enfermo para evitar a alguien?",
      "¿Alguna vez has sentido envidia de un amigo?",
      "¿Cuál es tu mayor miedo en una relación?",
      "¿Qué es lo que menos te gusta de tu pareja?",
      "¿Qué es lo que menos te gusta de tu mejor amigo/amiga?",
      "¿Qué es lo que más te gusta de ti mismo?",
      "¿Qué es lo que más te gustaría cambiar de tu vida?",
      "¿De este grupo, a quién te llevarías a una isla desierta?",
      "Si hoy fuera tu último día de vida, ¿qué harías?",
      "De 0 a 10, ¿qué nota le darías a (elegir a alguien del grupo) en términos de belleza, simpatía e inteligencia?",
      "De 0 a 10, ¿qué nota te darías a ti mismo en términos de belleza, simpatía e inteligencia?",
      "¿Cuál ha sido el peor regalo que has recibido?",
      "Si el mundo se acabara y pudieras salvar solo a una persona para sobrevivir, ¿a quién salvarías?",
      "¿Te has costado con más de una persona el mismo día?",
      "¿Te arrepientes de tu primera vez?",
      "¿Con qué famoso o famosa te gustaría tener sexo?",
      "Cuenta algo que no sepamos ninguno de los que estamos aquí.",
      "¿Crees que eres atractivo/a?",
      "En una máquina del tiempo, ¿a qué época de la historia o momento de tu vida volverías?",
      "¿Has mentido jugando a verdad o reto?",
      "¿Cuál es tu técnica de seducción?",
      "¿Hay alguien de este grupo que te cayera mal cuando lo conociste?",
      "¿Qué parte de tu cuerpo cambiarías?",
      "¿Dejarías a tu pareja si te ofrecieran un millón de euros?",
      "¿Hablas contigo en voz alta?",
      "¿Alguna vez te han pillado mintiendo?",
      "¿Crees que a veces es mejor no decir la verdad?",
      "¿Hay algo de ti que no sepan tus amigos?",
      "¿Alguna vez has pensado en engañar a una pareja tuya?",
      "¿Cuál es tu posición sexual favorita?",
      "De este grupo, ¿a quién besarías antes?",
      "¿Cuál ha sido la peor etapa de tu vida?",
      "¿Cuál es el peor sexo que has tenido en tu vida?",
      "¿Con cuántas personas te has acostado?",
      "¿Qué es lo peor que has hecho estando borracho/a?",
      "¿Cuál es el hábito más desagradable que tienes?",
      "¿Qué es lo peor que pueden decir de ti los demás? ¿Y lo mejor?",
      "¿Cuál era tu amor de la infancia?",
      "¿A quién no soportas?",
      "¿Te acostarías con alguien de este grupo?",
      "¿Crees que a tu pareja le gustaría alguien del grupo?",
      "¿Has tenido relaciones con alguien de este grupo?",
      "¿Quién es la persona más sexy aquí?",
      "¿Has tenido sexo en la calle?",
      "¿Cómo te describirías en la cama?",
      "¿Alguna vez has hecho un trío?",
      "¿Con qué dos personas de aquí harías un trío?",
      "¿Qué es algo que nunca te has atrevido a pedir en la cama?",
      "¿Debes dinero a algún amigo/a?",
      "¿Cuál ha sido el mensaje más guarro que has recibido?",
      "¿Alguna vez te has acostado con algún familiar de un amigo/a tuyo?",
      "¿Has tenido relaciones con alguien de tu mismo sexo?",
      "¿Te has hecho fotos desnuda/o para alguien?",
      "¿Te acostarías con alguien de esta habitación por 100 euros?",
      "¿Alguna vez te han pedido hacer algo en la cama y no te ha gustado?",
      "¿Qué es lo más sucio que has soñado nunca?",
      "¿Pasarías la noche con alguien si te ofrecieran mucho dinero?",
      "¿Consideras que el sexo es imprescindible en una relación?",
      "¿Tienes algún fetichismo?",
      "¿Serías capaz de matar a alguien?",
      "¿Alguna vez has escrito a un famoso por Instagram?",
      "¿Te arrepientes de haberte acostado con alguien?",
      "¿Con quién pensaste la última vez que te tocaste?",
      "¿Qué pensaste de mí la primera vez que me viste?",
      "¿Alguna vez has estado con alguien mucho mayor?",
      "¿Cuál es la mayor mentira que me has contado?",
      "¿Qué es lo más ridículo que has hecho en la cama por alguien?",
      "¿Alguna vez te has hecho pis encima por reírte demasiado?",
      "¿Cuál crees que es tu problema en las relaciones?",
      "¿Qué opinas del poliamor?",
      "¿Tendrías una relación abierta?",
      "Si tuvieras que volver con un ex, ¿a quién elegirías?",
      "¿A quién quieres más: a tu madre o a tu padre?",
      "¿Cuál es el rumor más extraño que has escuchado sobre ti?",
      "¿Cada cuánto te masturbas?",
      "¿Te has acostado con algún familiar?",
      "¿Alguna vez te ha gustado un amigo?",
      "¿Cuál ha sido tu peor caída?",
      "¿Has seguido siendo amigo de alguien porque te beneficiaba?",
      "¿Qué es lo peor que te han hecho?",
      "¿Qué es lo mejor que alguien ha hecho por ti?",
      "¿Qué es lo más vergonzoso que has hecho de fiesta?",
      "¿Alguna vez te han hecho la cobra?",
      "¿Cuál crees que es la mayor idea errónea que otros tienen de ti?",
      "¿Cuál es el lugar más raro donde has tenido sexo?",
      "¿Qué es lo que más te excita?",
      "Si pudieras intercambiar tu vida con alguien de aquí, ¿con quién sería?",
      "¿Has hecho o te han hecho ‘ghosting’?",
      "¿Alguna vez has salido de casa sin ropa interior?",
      "¿Alguna vez has dejado de lado a tus amigos/as por un ligue?",
      "¿Has mentido sobre tu edad para sacar algo a cambio?",
      "¿Has intentado ligar con un famoso?",
      "¿Has rechazado a alguien sólo por su físico?",
      "Si pudieras no volver a ver a alguien nunca más… ¿a quién elegirías?",
      "¿Has practicado algo de BDSM?",
      "¿Perdonarías una infidelidad?",
      "¿Has creado un perfil falso en Instagram para stalkear?",
      "¿Te consideras una persona superficial?",
      "¿Te consideras tóxica/o?",
      "¿Alguna vez has mentido sobre quién o cómo eres para gustar a otra persona?",
      "De este grupo, ¿con quién te casarías, con quién te acostarías y a quién matarías?",
      "¿Cuál es la cosa más ilegal que has hecho sin que te atraparan?",
      "Si tuvieras que acostarte con alguien aquí (aparte de tu pareja actual), ¿quién sería?",
      "¿Has revisado el celular de tu novio/novia a escondidas?",
      "¿Quién es la persona que menos te cae bien aquí?",
      "Cuenta tu momento más incómodo en la cama.",
      "¿Alguna vez te gustó la pareja de un amigo/amiga?",
      "¿Cuál es la cosa más estúpida que has hecho por amor?",
      "¿Has robado algo (aunque sea algo chico como un encendedor)?",
      "¿Cuál es el rumor más falso que han dicho de ti?",
      "¿Alguna vez has mandado nudes?",
      "¿Cuál es tu miedo irracional más grande?",
      "¿Alguna vez has hecho pipí en una piscina pública? (Todos lo hemos hecho, pero confiesa).",
      "¿Cuál es el sueño más raro que has tenido?",
      "Si pudieras saber la fecha de tu muerte, ¿querrías saberla?",
      "¿Cuál es tu placer culpable musical? (Tipo Banda o Luis Miguel).",
      "Si fueras invisible por una hora, ¿qué harías?",
      "¿Alguna vez has estado enamorado/enamorada de dos personas al mismo tiempo?",
      "Si tuvieras que tatuarte el nombre de alguien aquí, ¿de quién sería?",
      "¿Alguna vez te han dado vergüenza tus papás en público?",
      "Si pudieras legalizar un crimen, ¿cuál elegirías?",
      "¿Cuándo fue la última vez que le mentiste a alguien en este lugar y por qué?",
      "Si tuvieras que borrar a una persona de tu vida de las que están aquí, ¿quién sería?",
      "¿Cuál es lo más vergonzoso que has hecho por amor?",
      "¿Quién es la persona más atractiva en este lugar según tú?",
      "¿Cuánto tiempo has aguantado sin bañarte (sé honesto)?",
      "¿Alguna vez has robado algo? ¿Qué y dónde?",
      "¿Cuál es tu mayor arrepentimiento amoroso?",
      "¿Alguna vez has fingido un orgasmo?",
      "¿Alguna vez has ghosteado a alguien después de acostarte con esa persona?",
      "¿Alguna vez has stalkeado a un ex durante horas en las redes?",
      "¿Alguna vez te has arrepentido de acostarte con alguien? ¿Quién?",
      "¿Alguna vez has engañado a alguien (emocional o físicamente)?",
      "¿Quién de aquí tiene menos probabilidades de triunfar profesionalmente según tú?",
      "¿Alguna vez has mentido en tu CV?",
      "¿Alguna vez has tenido un ataque de celos injustificado?",
      "¿Alguna vez has espiado a tus vecinos?",
      "¿Alguna vez has creado una cuenta falsa en redes sociales para espiar a tu pareja?",
      "¿Alguna vez te has reído en el momento más inapropiado (funeral, noticia triste)?",
      "¿Alguna vez has besado a más de una persona en 24 horas?",
    ],
    2: [
      "¿Qué es lo primero (lo PRIMERO de verdad) en lo que te fijas de alguien que te atrae físicamente?",
      "¿Qué es lo que nunca te has atrevido a pedir en la cama?",
      "¿Tienes algún fetiche?",
      "¿Qué prenda te parece más sexy?",
      "¿Te gusta el sexting?",
      "Si pudiéramos estar en cualquier lugar ahora, ¿dónde sería y qué harías?",
      "¿Qué puntuación te darías del 1 al 10 en la cama?",
      "¿Cuál es el lugar más extraño en el que te gustaría hacer el amor?",
      "¿Qué es lo que más te excita?",
      "¿Cuál es tu mayor fantasía?",
      "¿Cuál es tu postura sexual preferida?",
      "¿Prefieres uno rapidito, de aquí te pillo aquí te mato, o uno más lento?",
      "¿Cuál es tu lugar preferido para besar o que te besen?",
      "¿Qué juguete sexual es tu favorito?",
      "¿Qué es lo más atrevido que harías en público conmigo?",
      "¿Fantaseaste con alguien alguna vez antes?",
      "¿Qué piensas del poliamor?",
      "¿Has tenido algún sueño erótico con alguien que esta presente?",
      "¿Tienes alguna experiencia inconfesable?",
      "¿Cambiarías alguna cosa de tu vida sexual?",
      "Describe tu beso ideal en detalle. ¿Dónde? ¿Cómo? ¿Qué ambiente?",
      "¿Cuál es el sitio más raro donde has besado a alguien (o soñarías con hacerlo)?",
      "¿Qué parte de tu propio cuerpo te parece la más sexy?",
      "¿Y qué parte del cuerpo prefieres en una posible pareja?",
      "¿Alguna vez has tenido un noche unica o extraña? Si sí, ¿buena o mala experiencia?.",
      "¿Qué es lo más loco o atrevido que estarías dispuesto/a a hacer por deseo?",
      "¿Prefieres los preliminares largos y sensuales o ir directo al grano?",
      "¿Cuál es el cumplido más sexy que te han hecho nunca?",
      "¿Alguna vez has enviado un mensaje o una foto picante? ¿A quién? (No es obligatorio responder si es muy personal).",
      "¿Qué famoso/a (hombre o mujer) te hace fantasear más?",
      "¿Qué es lo más vergonzoso que te ha pasado durante un momento íntimo? (¡Si te atreves a contarlo!)",
      "¿Luz tenue u oscuridad total? ¿Por qué?",
      "¿Alguna vez has tenido un sueño erótico con alguien de esta sala? (¡Basta con responder sí/no!)",
      "¿Qué peli o escena de peli te pone a fantasear?",
      "¿Qué te hace sonrojar sí o sí?",
      "Lencería/ropa interior: ¿prefieres comodidad, sexy, o ambas cosas? ¿Cuál es tu preferencia (para llevar o para ver)?",
      "¿Cuál es ese pequeño detalle (un gesto, una palabra, un olor...) que puede excitarte al instante?",
      "¿Alguna vez has tenido una relación puramente sexual (amigos con derecho/beneficios)?",
      "¿Qué es lo más importante para ti durante el sexo (conexión, placer físico, experimentación...)?",
      "¿Alguna vez te han pillado en pleno acto? Cuenta (¡si puedes!).",
      "¿Qué opinas de los juguetes sexuales? ¿Curioso/a, usuario/a, no te interesan?",
      "¿Cuál es el lugar de tu cuerpo donde prefieres que te besen (aparte de la boca)?",
      "¿Alguna vez has mentido sobre tu número de parejas sexuales? (¡No hace falta dar la cifra real!)",
      "¿Cuál es la música perfecta para un ambiente sensual según tú? ¡Di un título!",
      "¿Cuál es tu mata pasion absoluto?",
      "Si tuvieras que describir tu libido ahora mismo con un animal, ¿cuál sería? (León dormido, conejo hiperactivo...)",
      "¿Alguna vez has visto una peli erótica o porno? ¿Tus impresiones?",
      "¿Prefieres dar o recibir placer? ¿O el equilibrio es esencial?",
      "¿Qué es lo más sexy que alguien podría susurrarte al oído?",
      "¿Alguna vez has fingido un orgasmo? ¿Por qué?",
      "¿Cuál es tu tipo de masaje preferido (sensual, relajante, tonificante...)?",
      "¿Qué parte del cuerpo (aparte de las zonas erógenas clásicas) te resulta especialmente atractiva en los demás (manos, hombros, espalda...)?",
      "¿Alguna vez has tomado la iniciativa para el primer beso o algo más?",
      "¿Cuál es tu postura favorita (para dormir... o para otra cosa 😉)?",
      "¿Cuál es la fantasía más común que te gustaría probar?",
      "¿Alguna vez has tenido una experiencia embarazosa relacionada con los anticonceptivos?",
      "¿Cuál es la duración ideal para ti para una relación sexual (preliminares incluidos)?",
      "¿Qué opinas del -dirty talk- (hablar sucio) durante el acto? ¿A favor o en contra?",
      "¿Alguna vez te has sentido atraído/a por alguien -poco convencional- según tus criterios habituales?",
      "¿Qué olor (perfume, piel...) te vuelve especialmente loco/a?",
      "Si pudieras pasar una noche con cualquier persona (real o ficticia, ¡consintiendo, claro!), ¿a quién elegirías?",
      "¿Cuál es el gesto más sensual que te gusta hacerle a tu pareja?",
      "¿Alguna vez has tenido una experiencia sexual en un lugar público o semi-público?",
      "¿Qué es lo que te da más confianza en ti mismo/a en la cama?",
      "¿Qué es lo más importante que has aprendido sobre tu propia sexualidad?",
      "¿Alguna vez has usado comida (nata montada, chocolate...) durante juegos amorosos?",
      "¿Cuál es tu límite absoluto, eso que nunca harías en la cama?",
      "Si tuvieras que puntuar tu vida sexual actual del 1 al 10, ¿qué nota le pondrías (¡sin juzgar!)?",
      "¿Cuál es la pregunta más atrevida que te han hecho en este tipo de juego?",
      "¿Hay algo que te gustaría experimentar sexualmente pero que nunca te has atrevido a pedir?",
    ]
  },
// ===================================================
//  RETOS para juego verdad o reto
// ===================================================
  dare: {
    1: [
      "Imita a alguien del grupo por 30 segundos",
      "Envía el último meme que tienes guardado al chat grupal",
      "Haz tu mejor chiste malo. Si no se ríe nadie, repítelo más fuerte",
      "Habla con acento de otro país por 2 turnos completos",
      "Tómate una selfie con la pose más ridícula que puedas",
      "Canta el coro de la última canción que escuchaste",
      "Deja que alguien del grupo cambie tu foto de perfil por 1 hora",
      "Actúa como si fueras un reportero y entrevista a alguien del grupo sobre su día",
      "Di 5 cosas buenas del jugador que tienes a tu derecha sin reírte",
      "Habla en slow motion durante 1 minuto completo",
      "Haz la peor imitación posible de un robot durante 30 segundos",
      "Muestra el último emoji que enviaste y explica el contexto",
      "Actúa como si acabaras de ganar un Oscar por 30 segundos",
      "Di el alfabeto hacia atrás lo más rápido que puedas",
      "Haz 10 sentadillas mientras cantas una canción que elija el grupo",
      "Describe con mímica la última película que viste hasta que alguien adivine",
      "Habla solo en preguntas durante el siguiente turno completo",
      "Escribe tu nombre con el dedo en el aire mientras dices el abecedario",
      "Haz tu mejor cara de susto sostenida por 15 segundos mientras el grupo te mira",
      "Convence al grupo en 30 segundos de que un objeto de la mesa es el invento más importante de la historia",
      "Di un trabalenguas 3 veces seguidas sin equivocarte o tomas",
      "Actúa como si fueras un chef famoso explicando cómo preparas tu comida favorita",
      "Muestra la foto más vieja que tienes en tu teléfono",
      "Haz sonidos de animales hasta que alguien del grupo adivine cuál es",
      "Habla durante 30 segundos sin parar sobre cualquier tema sin repetir palabras",
      "Haz la mayor cantidad de pasos de baile distintos en 20 segundos",
      "Deja que el grupo escriba algo con marcador en tu brazo",
      "Mantén contacto visual con {player_opposite_gender} durante 30 segundos sin reírte ni apartar la mirada — el primero que rompa toma un shot",
      "Baila sin música por 20 segundos. El grupo elige la canción imaginaria",
      "Escribe un tweet sincero sobre alguien del grupo y léelo en voz alta",
      "Imita al miembro del grupo que crees que tiene la risa más rara",
      "Haz una reverencia real ante cada persona del grupo diciéndoles su virtud principal",
      "Cambia tu estado de WhatsApp a lo que el grupo decida por 30 minutos",
      "Llama a un contacto al azar y canta los primeros 10 segundos de una canción",
      "Deja que el grupo lea tus últimas 3 conversaciones de WhatsApp por 15 segundos",
      "Haz una imitación de cómo camina la persona a tu izquierda",
      "Di en voz alta el nombre completo de tu ex más reciente y una virtud suya",
      "Escribe un poema de 4 líneas sobre alguien del grupo en 60 segundos",
      "Actúa como si tuvieras miedo de un objeto aleatorio que el grupo elija",
      "Muestra tu cara de dormir durante 10 segundos",
      "Haz el discurso más dramático posible sobre por qué amas o odias la pizza con piña",
      "Llama a alguien importante en tu vida y dile que le tenías que decir algo urgente — espera su reacción y luego di 'te quiero, bye'",
      "Haz una imitación de tu jefe, profesor o figura de autoridad durante 30 segundos",
      "Graba un video de 15 segundos de lo que el grupo decida y ponlo en tu estado",
      "Canta el himno nacional con la emoción de un partido de final del mundial",
      "Deja que el grupo revise tu Spotify y nombre la canción más vergonzosa",
      "Haz una actuación de telenovela dramática con cualquier objeto de la mesa",
      "Convence al grupo en 60 segundos de una teoría conspiratoria inventada por ti ahora mismo",
      "Lee los últimos 5 stickers que mandaste en WhatsApp y explica por qué los usaste",
      "Mira fijamente a {player_opposite_gender} a los ojos durante 45 segundos en completo silencio — el grupo decide si hubo tensión o no, y el perdedor del juicio toma",
      "Baila sin música durante un minuto.",
      "Llama a un amigo y canta una canción.",
      "Haz 20 flexiones.",
      "Haz 60 sentadillas.",
      "Haz 10 dominadas.",
      "Imita a alguien del grupo.",
      "Come una cucharada de mostaza.",
      "Haz una llamada de broma a alguien de tu familia diciendo que estás embarazada o que has dejado embarazada a alguien.",
      "Habla con acento extranjero durante 5 minutos.",
      "Quédate una ronda entera sin hablar.",
      "Haz una foto graciosa y publícala en tus redes sociales.",
      "Forma una frase con las palabras: transgresor, otorrinolaringólogo y ovovivíparo.",
      "Haz una caminata de cangrejo alrededor de la habitación.",
      "Haz una declaración de amor a un objeto inanimado.",
      "Haz 10 saltos de tijera.",
      "Envía un mensaje de texto a tu contacto más reciente diciendo “Te quiero”.",
      "Saluda a la persona con la que más tiempo lleves sin hablar en WhatsApp.",
      "Haz una imitación de tu celebridad favorita.",
      "Come una rodaja de limón sin hacer muecas.",
      "Haz una voltereta.",
      "Haz una llamada de broma a un restaurante.",
      "Haz una cara graciosa y mantenla durante 2 minutos.",
      "Haz un baile tonto en la calle.",
      "Haz una serenata a alguien del grupo.",
      "Haz una caminata de pato alrededor de la habitación.",
      "Haz una llamada de broma a un familiar.",
      "Haz una imitación de un animal durante 1 minuto.",
      "Haz una caminata de cangrejo en la calle.",
      "Haz una declaración de amor a alguien del grupo.",
      "Haz una voltereta en el suelo.",
      "Haz una llamada de broma a un amigo diciendo que estas embaraza o embarazaste a alguien.",
      "Haz un baile tonto en la calle.",
      "Intercambia tu ropa con alguien del grupo durante todo el juego.",
      "Haz mímica de una escena de una película famosa.",
      "Canta una canción elegida por tus amigos.",
      "Dibuja algo con los ojos vendados y deja que los demás adivinen qué es.",
      "Come una combinación de alimentos extraña, como pepinillos con helado.",
      "Cuenta chistes hasta que alguien se ría.",
      "Intenta no reírte mientras los demás te hacen cosquillas.",
      "Recrea una foto famosa con tus amigos.",
      "Intenta hacer una pose de yoga complicada.",
      "Adivina objetos con los ojos vendados solo tocándolos.",
      "Recita el alfabeto al revés.",
      "Habla solo en rimas durante 5 minutos.",
      "Equilibra una cuchara o un objeto que tengas a tu alcance en tu nariz durante 1 minuto.",
      "Adivina canciones tarareadas por tus amigos.",
      "Ponte tantas capas de ropa como puedas.",
      "Canta una canción con la boca llena de agua.",
      "Camina en línea recta con un libro en la cabeza.",
      "Toma una foto graciosa cada 5 minutos durante una hora.",
      "Intenta no reírte mientras los demás cuentan chistes.",
      "Salta en un pie durante 1 minuto.",
      "Adivina películas solo con emojis.",
      "Huélele el pie a alguien del grupo.",
      "Pásale el hielo a alguien del grupo sin utilizar las manos.",
      "Adivina objetos solo por su sonido.",
      "Deja que alguien te haga cosquillas en los pies durante 1 minuto.",
      "Toma una foto con una cara graciosa en cada espejo de la casa.",
      "Haz saltos de rana durante 1 minuto.",
      "Tírate a la piscina con ropa.",
      "Sirve las copas de todo el mundo durante toda la noche.",
      "No mires el móvil durante 15 min.",
      "Deja que alguien del grupo lea tus mensajes.",
      "Cómete un ajo crudo masticándolo.",
      "Dale un beso a la persona de tu derecha.",
      "Quítale la camiseta a alguien del grupo.",
      "Acábate toda tu copa de una.",
      "Deja que el resto del grupo envíe un mensaje a alguien de tu cuenta de Instagram o Whatsapp.",
      "Mandar un ‘selfie’ a una persona aleatoria de tu Instagram o Whatsapp.",
      "Repetir todo lo que dice la persona de tu izquierda hasta que sea tu turno de nuevo.",
      "Quítate tres prendas de ropa.",
      "Apaga las luces durante 1 minuto y haz lo que quieras a los otros jugadores.",
      "Fingir ser la persona de tu derecha durante 10 minutos.",
      "Haz ‘twerking’.",
      "Haz un baile sensual a la persona que elijas.",
      "Beber una copa sin usar las manos.",
      "Muerde la oreja de alguien.",
      "Escribe un mensaje privado a un famoso.",
      "Ladra cada vez que des un trago.",
      "Ponte la ropa al revés durante el resto de la noche.",
      "Da vueltas gateando por 1 minuto.",
      "Intentar llorar delante del grupo.",
      "Di dos verdades y una mentira, y tus amigos tienen que adivinar cuál es la mentira.",
      "Contestar con sí a todo durante toda la ronda.",
      "Contestar con no a todo durante toda la ronda.",
      "Bebe un poco de wiskhy puro sin hacer gestos.",
      "Imita un baile de TikTok que elija el grupo.",
      "Mastica un chicle y pásaselo a otro miembro del grupo con la boca.",
      "Enseña tu historial de Google.",
      "Responde a las cinco primeras ‘stories’ que te aparezcan con un ‘fueguito’.",
      "Dejar que alguien te maquille con los ojos vendados.",
      "Dibuja a la persona a tu lado con los ojos vendados.",
      "Toma una cucharada de canela.",
      "Toma una cucharada de café molido.",
      "Inventa y recita un poema sobre la persona de tu izquierda.",
      "Quédate inmóvil durante toda la ronda.",
      "Besa el lóbulo de la oreja de quien quieras.",
      "Escribe en grande “esta noche voy a tener sexo” y después pégala en la ventana. ¡Para advertir a los vecinos!",
      "Repite el mismo reto que el anterior jugador/a.",
      "Pon un mote divertido a cada jugador. Deberán mantenerlo durante todo el juego.",
      "Di qué 3 personas se merecen los adjetivos “inteligente”, “sexy” y “gracioso”.",
      "Dile, mirándole a los ojos, a la persona de tu derecha que te encartaría verle desnudo/a.",
      "Señala a la persona que más probabilidades tiene para ser estafado por Internet.",
      "Señala a la persona que crees que es (o podría ser) más infiel.",
      "Señala a la persona que crees que es más inteligente.",
      "Señala a la persona que crees que sobreviviría al Fin del Mundo.",
      "Señala a la persona que elegirías para formar parte de tu equipo en: juegos, deporte o para bailar.",
      "Señala a la persona que crees que viste mejor.",
      "Señala a la persona con la que crees que es más cómodo hablar.",
      "Señala la persona que crees que es más caótica.",
      "Señala a la persona que crees que baila peor.",
      "Señala a la persona con la que no podrías vivir.",
      "Señala a la persona con la que crees que no podrías aguantar un finde solos.",
      "Señala a la persona que crees que miente más.",
      "Señala a la persona que crees que cocina peor.",
      "Señala a la persona a la que crees que pedirías consejo.",
      "Señala a la persona que crees que es más fuerte.",
      "Señala a la persona que crees que es más divertido/a.",
      "Señala a la persona a la que crees que se le da mejor el sexo oral.",
      "Señala a la persona que crees que es más empática.",
      "Señala a la persona que crees que es más fiestera.",
      "Señala a la persona que crees que es menos sana.",
      "Señala a la persona que crees que es más celoso/a.",
      "Señala a la persona que mejor te cae.",
      "Señala a la persona que crees que es mejor en la cama.",
      "Señala a la persona que crees que besa mejor.",
      "Señala a la persona a la que crees que le caes peor.",
      "Señala a la persona con la que nunca te irías de fiesta.",
      "Lee en voz alta el último mensaje que recibiste.",
      "Dales un beso a todxs en la mejilla.",
      "Gira sobre ti mismo 10 veces y luego intenta andar en línea recta.",
      "Confiésale tus sentimientos a tu crush por mensaje",
      "Mastica un cubo de hielo",
      "Describe con una palabra a cada uno de los presentes.",
      "Desplázate por la habitación como si fueras una serpiente.",
      "Métete cinco cubitos de hielo en los pantalones.",
      "Si solo pudieras hablar con una persona el resto de tu vida… ¿con quién sería?",
      "¿Con quién de todos los presentes te harías un trío?",
      "Baila sin música por 20 segundos. El grupo elige la canción imaginaria",
      "Escribe un tweet sincero sobre alguien del grupo y léelo en voz alta",
      "Imita al miembro del grupo que crees que tiene la risa más rara",
      "Haz una reverencia real ante cada persona del grupo diciéndoles su virtud principal",
      "Cambia tu estado de WhatsApp a lo que el grupo decida por 30 minutos",
      "Llama a un contacto al azar y canta los primeros 10 segundos de una canción",
      "Deja que el grupo lea tus últimas 3 conversaciones de WhatsApp por 15 segundos",
      "Haz una imitación de cómo camina la persona a tu izquierda",
      "Di en voz alta el nombre completo de tu ex más reciente y una virtud suya",
      "Escribe un poema de 4 líneas sobre alguien del grupo en 60 segundos",
      "Actúa como si tuvieras miedo de un objeto aleatorio que el grupo elija",
      "Muestra tu cara de dormir durante 10 segundos",
      "Haz el discurso más dramático posible sobre por qué amas o odias la pizza con piña",
      "Llama a alguien importante en tu vida y dile que le tenías que decir algo urgente — espera su reacción y luego di 'te quiero, bye'",
      "Haz una imitación de tu jefe, profesor o figura de autoridad durante 30 segundos",
      "Graba un video de 15 segundos de lo que el grupo decida y ponlo en tu estado",
      "Canta el himno nacional con la emoción de un partido de final del mundial",
      "Deja que el grupo revise tu Spotify y nombre la canción más vergonzosa",
      "Haz una actuación de telenovela dramática con cualquier objeto de la mesa",
      "Convence al grupo en 60 segundos de una teoría conspiratoria inventada por ti ahora mismo",
      "Lee los últimos 5 stickers que mandaste en WhatsApp y explica por qué los usaste",
      "Mira fijamente a {player_opposite_gender} a los ojos durante 45 segundos en completo silencio — el grupo decide si hubo tensión o no, y el perdedor del juicio toma",
      "Llama a alguien que no has hablado en más de 6 meses y dile que lo extrañas",
      "Deja que el grupo revise tus últimas 5 búsquedas en Google",
      "Escribe un mensaje de amor a la última persona que aparece en tu historial de llamadas",
      "Muéstrale tu galería de fotos al grupo durante 10 segundos",
      "Lee en voz alta el último mensaje que mandaste sin contexto",
      "Muestra tu pantalla de inicio y explica cada app vergonzosa que tengas",
      "Deja que el grupo redacte un mensaje que tú debes enviar a alguien real",
      "Di en voz alta lo que realmente piensas del trabajo o estudio de alguien del grupo",
      "Haz una confesión pública sobre algo que nunca has contado a nadie aquí",
      "Cambia tu bio de Instagram a lo que el grupo dicte durante 1 hora",
      "Manda un audio de voz de 30 segundos a la persona que más te gusta diciéndole lo que piensas",
      "Deja que el grupo elija una persona de tus contactos y mándale un voice note que el grupo dicta",
      "Muestra tu historial de YouTube de los últimos 3 días",
      "Haz una declaración pública de algo que negarías en cualquier otra situación",
      "Deja que el grupo revise tu lista de reproducción más escuchada",
      "Di en voz alta las últimas 3 personas con las que tuviste conversaciones significativas",
      "Siéntate frente a {player_opposite_gender}, mantengan contacto visual durante 1 minuto completo sin hablar ni reírse — al terminar, cada uno dice en voz alta una palabra que describa lo que sintió",
    ],
    2: [
      "Dale un masaje sensual (nuca, hombros, manos...) de 1 minuto a la persona que elijas (si está de acuerdo).",
      "Susúrrale algo (muy) picante al oído a tu vecino/a de la izquierda. Solo él/ella debe oírlo.",
      "Quítate una prenda de ropa (la que elijas, pero empezad suave: calcetín, accesorio, luego quizás camiseta si el ambiente y los jugadores están OK). Parad en cuanto alguien ya no esté cómodo.",
      "Besa a la persona que elijas (¡si está de acuerdo!) en la mejilla... o en el cuello... o en otro sitio si el consentimiento es CLARO y MUTUO.",
      "Baila de manera abiertamente sensual durante 30 segundos con una música elegida por los demás. ¡Suéltate!",
      "Deja que alguien (¡consintiendo!) te dé de comer un trocito de comida (fresa, chocolate...) con los ojos vendados.",
      "Escribe tu número de teléfono (o tu @Insta/Snap) en el brazo o la mano de alguien con un boli (o con la punta del dedo).",
      "Describe en detalle tu último beso apasionado (sin dar nombres si no quieres).",
      "Siéntate en las rodillas de alguien (¡consintiendo!) hasta tu próximo turno.",
      "Haz un striptease... de tu calcetín o tu guante. ¡Con la máxima sensualidad y teatralidad!",
      "Dale un (ligero) beso en el cuello a la persona que tienes enfrente (si está OK).",
      "Muerde (¡suuuavemente!) el lóbulo de la oreja de alguien (¡consintiendo!).",
      "Elige a alguien y mírale fijamente a los ojos durante 1 minuto sin hablar ni reír. Tensión...",
      "Dale un abrazo sensual (¡pero breve!) a un cojín o un peluche, imaginando que es alguien.",
      "Intercambia una prenda de ropa visible (camiseta, camisa, pañuelo...) con otra persona (¡consintiendo!) hasta el final del juego.",
      "Deja que alguien te vende los ojos y adivina quién te acaricia (¡suavemente!) la mano o el brazo.",
      "Bebe un sorbo de tu bebida de la forma más lenta y sexy posible.",
      "Elige a alguien y dile (sinceramente) qué es lo que te parece más sexy físicamente de él/ella.",
      "Finge tener un orgasmo (sonido y/o expresión facial) de manera teatral.",
      "Deja que la persona a tu derecha te ponga un mote picante para el resto de la noche. Tienes que usarlo para referirte a ti mismo/a al menos una vez.",
      "Acércate mucho a la cara de alguien (¡consintiendo!) y susúrrale algo (cualquier cosa, incluso una receta de cocina), luego aléjate lentamente.",
      "Elige una parte de tu cuerpo (muñeca, hombro, tobillo...) y deja que alguien (¡consintiendo!) deposite un beso ligero ahí.",
      "Enseña (¡brevemente!) la última foto que hiciste con tu móvil, aunque sea normal. Explica el contexto de forma sensual.",
      "Haz 5 flexiones o 5 sentadillas mirando a alguien fijamente a los ojos de manera intensa.",
      "Describe a tu pareja ideal en la cama en 3 palabras.",
      "Quítate otra capa de ropa (si te sientes cómodo/a y las reglas lo permiten – PARA si hay incomodidad).",
      "Deja que alguien (¡consintiendo!) te acaricie el pelo durante 30 segundos.",
      "Cuenta el principio de una historia erótica (inventada o no) y para en el momento más crucial.",
      "Haz un -body shot- imaginario (simular lamer sal, beber un chupito y morder limón) en una parte del cuerpo de alguien (¡consintiendo!) como el brazo o el hombro.",
      "Elige a alguien y hazle una pregunta -Verdad Picante- de tu elección (de la lista o inventada).",
      "Lanza un guiño muy marcado a tres personas diferentes en la sala.",
      "Ponte bálsamo labial (o haz como si lo hicieras) y luego acércate para -casi- besar a alguien (¡consintiendo!).",
      "Deja que alguien te dibuje un pequeño corazón con un boli (¡lavable!) en una parte del cuerpo visible pero un poco escondida (clavícula, tobillo...).",
      "Haz una demostración de tu -mirada matadora- o tu -sonrisa seductora-.",
      "Puntúa del 1 al 10 el ambiente -picante- de la noche hasta ahora y justifica.",
      "Elige una canción e imita la letra de forma muy sugerente.",
      "Arrodíllate delante de alguien (¡consintiendo!) y hazle un cumplido sobre sus zapatos o sus pies.",
      "Pasa delicadamente tu dedo por la mano o el brazo de tu vecino/a de la derecha (si está de acuerdo).",
      "Haz que adivinen una postura del Kamasutra solo con mímica (¡manteniendo la decencia!).",
      "Propón un brindis picante al grupo.",
      "Deja que alguien elija una palabra (simple) y tienes que repetirla de 3 maneras diferentes: inocente, sensual, autoritaria.",
      "Finge tomarle la temperatura a alguien (¡consintiendo!) poniendo (¡muy brevemente!) el dorso de tu mano en su frente.",
      "Túmbate en el suelo de manera sugerente durante 15 segundos.",
      "Cruza y descruza las piernas lentamente mientras miras a alguien de forma significativa.",
      "Deja que alguien (¡consintiendo!) te coloque un mechón de pelo detrás de la oreja.",
      "Elige a alguien y descríbelo/a como si estuvieras escribiendo el personaje de una novela erótica.",
      "Haz un striptease... de tu muñeca (quitándote un reloj o una pulsera con lentitud).",
      "Dale un beso en la punta de la nariz a alguien (¡consintiendo!). Es mono e inesperado.",
      "Termina tu turno lanzando un beso sensual a todo el grupo.",
      "Escribe una palabra picante (invisible) con el dedo en la espalda de alguien (¡consintiendo!). Él/ella debe intentar adivinarla.",
      "Propón un reto -picante- (razonable y consensuado) a la persona que elijas para su próximo turno de -Reto-.",
    ]
  },
// ===================================================
//  PREGUNTAS para el juego de trivia
// ===================================================
  trivia: {
    1: [
      { q: "¿Cuál es la danza puneña que representa el triunfo del arcángel sobre el demonio?", opts: ["Diablada", "Morenada", "Caporales", "Sicuris"], ans: 0 },
      { q: "¿Cómo se denomina la festividad religiosa más grande del Perú celebrada en Puno en febrero?", opts: ["Inti Raymi", "Virgen de la Candelaria", "Señor de los Milagros", "Corpus Christi"], ans: 1 },
      { q: "¿Qué pueblo preínca fue el antecesor directo de la cultura Tiahuanaco en la zona del Collao?", opts: ["Pucará", "Moche", "Nazca", "Chavín"], ans: 0 },
      { q: "¿Cuál es el instrumento de viento andino hecho de caña, típico de las bandas puneñas?", opts: ["Quena", "Zampoña", "Pinkullo", "Antara"], ans: 1 },
      { q: "¿Qué complejo arqueológico puneño es famoso por sus torres funerarias de piedra?", opts: ["Sillustani", "Kotosh", "Chan Chan", "Pikillacta"], ans: 0 },
      { q: "¿Cómo se llama el grupo de islas flotantes construidas de totora en el Lago Titicaca?", opts: ["Amantaní", "Taquile", "Uros", "Esteves"], ans: 2 },
      { q: "¿Cuál es el plato típico puneño preparado con carne de cordero, alpaca y chuño?", opts: ["Ceviche", "Chairo", "Lomo saltado", "Adobo"], ans: 1 },
      { q: "¿Qué baile puneño imita el paso de los esclavos africanos con matracas?", opts: ["Diablada", "Morenada", "Tinkus", "Llamerada"], ans: 1 },
      { q: "¿A qué cultura pertenece la famosa estela lítica del 'Degollador' hallada en Pucará?", opts: ["Inca", "Chimú", "Pucará", "Wari"], ans: 2 },
      { q: "¿Qué fenómeno climático es el principal desafío para la agricultura en el altiplano puneño?", opts: ["Huracanes", "Heladas", "Tsunamis", "Inundaciones"], ans: 1 },
      { q: "¿Cuál es el ave emblemática que habita en las zonas de totorales del Lago Titicaca?", opts: ["Cóndor", "Zambullidor del Titicaca", "Colibrí", "Águila"], ans: 1 },
      { q: "¿Qué idioma es co-oficial en la región de Puno junto al castellano?", opts: ["Quechua y Aymara", "Guaraní", "Muchik", "Shipibo"], ans: 0 },
      { q: "¿Cómo se llama el proceso de deshidratación de la papa para obtener chuño?", opts: ["Liofilización natural", "Salazón", "Ahumado", "Fermentación"], ans: 0 },
      { q: "¿En qué provincia de Puno se encuentra el templo de la fertilidad de Chucuito?", opts: ["Azángaro", "Melgar", "Puno", "Chucuito"], ans: 3 },
      { q: "¿Cuál es el río más largo del Perú?", opts: ["Rímac", "Ucayali", "Marañón", "Amazonas"], ans: 3 },
      { q: "¿Cómo se llama la obra de teatro de temática incaica más importante de la literatura colonial?", opts: ["Ollantay", "La ciudad de los perros", "Trilce", "Los heraldos negros"], ans: 0 },
      { q: "¿Quién fue el historiador peruano conocido como el 'Bibliotecario Mendigo'?", opts: ["Jorge Basadre", "Ricardo Palma", "Raúl Porras Barrenechea", "Basilio Santa Cruz"], ans: 1 },
      { q: "¿Qué departamento del Perú es conocido como la 'Capital de la Amistad'?", opts: ["Piura", "Chiclayo", "Trujillo", "Tumbes"], ans: 1 },
      { q: "¿Cuál es el volcán más alto del Perú?", opts: ["Misti", "Coropuna", "Huascarán", "Sabancaya"], ans: 1 },
      { q: "¿Qué cultura preinca es famosa por sus canales de irrigación y orfebrería?", opts: ["Chavín", "Chimú", "Moche", "Nazca"], ans: 2 },
      { q: "¿En qué año se proclamó la Independencia del Perú?", opts: ["1820", "1821", "1824", "1825"], ans: 1 },
      { q: "¿Cómo se llama el proceso de intercambio de productos entre pisos ecológicos propuesto por John Murra?", opts: ["Control vertical", "Trueque", "Reciprocidad", "Mita"], ans: 0 },
      { q: "¿Cuál es el documento supremo que establece la estructura y funciones del Estado peruano?", opts: ["La Ley Orgánica", "La Constitución Política", "El Código Civil", "El Reglamento del Congreso"], ans: 1 },
      { q: "¿Qué organismo autónomo es el encargado de administrar justicia electoral en el Perú?", opts: ["ONPE", "JNE", "RENIEC", "Tribunal Constitucional"], ans: 1 },
      { q: "¿Cuántos miembros tiene el Congreso de la República del Perú?", opts: ["100", "120", "130", "150"], ans: 2 },
      { q: "¿Qué entidad es la encargada de defender los derechos fundamentales de la persona?", opts: ["Ministerio Público", "Defensoría del Pueblo", "Poder Judicial", "Ministerio de Justicia"], ans: 1 },
      { q: "¿Cuál es el periodo de mandato del Presidente de la República en el Perú?", opts: ["4 años", "5 años", "6 años", "3 años"], ans: 1 },
      { q: "¿Quién tiene la potestad de declarar la guerra o firmar la paz según la Constitución?", opts: ["El Congreso", "El Presidente", "El Consejo de Ministros", "El Tribunal Constitucional"], ans: 0 },
      { q: "¿Qué institución es la encargada de formular y ejecutar la política monetaria en el Perú?", opts: ["Ministerio de Economía", "Banco Central de Reserva", "Superintendencia de Banca", "Contraloría"], ans: 1 },
      { q: "¿Cómo se llama el indicador que mide la variación porcentual de los precios al consumidor?", opts: ["PBI", "Tasa de interés", "Inflación", "Tipo de cambio"], ans: 2 },
      { q: "¿Qué es el PBI (Producto Bruto Interno)?", opts: ["El valor de la deuda externa", "El valor de toda la producción de bienes y servicios", "El total de impuestos recaudados", "El gasto público total"], ans: 1 },
      { q: "¿Qué tipo de mercado existe cuando hay un solo vendedor frente a muchos compradores?", opts: ["Oligopolio", "Competencia perfecta", "Monopolio", "Monopsonio"], ans: 2 },
      { q: "¿Cuál es el principal tributo que recauda la SUNAT sobre la venta de bienes y servicios?", opts: ["Impuesto a la Renta", "IGV", "ITAN", "ISC"], ans: 1 },
      { q: "¿Qué sucede cuando la cantidad demandada es mayor a la cantidad ofrecida a un precio determinado?", opts: ["Equilibrio", "Escasez", "Excedente", "Inflación"], ans: 1 },
      { q: "¿Qué sector económico engloba las actividades extractivas como la minería y pesca?", opts: ["Primario", "Secundario", "Terciario", "Cuaternario"], ans: 0 },
      { q: "¿Qué función cumple el dinero como medida para expresar el valor de los bienes?", opts: ["Depósito de valor", "Patrón de pago diferido", "Unidad de cuenta", "Medio de cambio"], ans: 2 },
      { q: "¿Qué significa el término 'Arancel' en economía?", opts: ["Impuesto a las ganancias", "Impuesto a la importación", "Subsidio estatal", "Tasa de interés"], ans: 1 },
      { q: "¿Quién es el autor de 'Los comentarios reales de los incas'?", opts: ["Felipe Guamán Poma", "Inca Garcilaso de la Vega", "Pedro Cieza de León", "Tito Cusi Yupanqui"], ans: 1 },
      { q: "¿Qué región natural del Perú abarca la zona de mayor altitud y frío?", opts: ["Yunga", "Quechua", "Janca", "Rupa Rupa"], ans: 2 },
      { q: "¿Cuál fue el periodo de auge económico por la explotación del guano de las islas?", opts: ["República Aristocrática", "Prosperidad Falaz", "Confederación Perú-Boliviana", "Oncenio"], ans: 1 },
      { q: "¿Cómo se denomina a la organización social y económica basada en el parentesco en el mundo andino?", opts: ["Ayni", "Minka", "Ayllu", "Mita"], ans: 2 },
      { q: "¿Qué corriente literaria representó Manuel González Prada con su radicalismo político?", opts: ["Romanticismo", "Realismo", "Naturalismo", "Modernismo"], ans: 1 },
      { q: "¿Cuál es el centro administrativo y religioso más importante de la cultura Wari?", opts: ["Pikillacta", "Wari", "Vilcashuamán", "Cajamarquilla"], ans: 1 },
      { q: "¿Qué tratado definió finalmente los límites con el Ecuador en 1998?", opts: ["Ancón", "Río de Janeiro", "Brasilia", "Velarde-Río Branco"], ans: 2 },
      { q: "¿Qué mineral, cuya extracción fue clave en la época colonial, tuvo gran importancia en la meseta del Collao?", opts: ["Cobre", "Plata", "Hierro", "Zinc"], ans: 1 },
      { q: "¿Qué obra de Abraham Valdelomar es considerada un cuento fundamental del modernismo peruano?", opts: ["La ciudad de los tísicos", "El Caballero Carmelo", "Los hijos del sol", "Cuentos andinos"], ans: 1 },
      { q: "¿Quién es el autor de 'Tradiciones Peruanas'?", opts: ["Manuel González Prada", "Ricardo Palma", "Ciro Alegría", "José María Arguedas"], ans: 1 },
      { q: "¿En qué novela de Ciro Alegría se narra la lucha por la tierra en la comunidad de Rumi?", opts: ["La serpiente de oro", "Los perros hambrientos", "El mundo es ancho y ajeno", "Duelo de caballeros"], ans: 2 },
      { q: "¿Cuál es la obra cumbre de César Vallejo que rompió con la métrica tradicional?", opts: ["Los heraldos negros", "Trilce", "España, aparta de mí este cáliz", "Poemas humanos"], ans: 1 },
      { q: "¿Quién escribió la obra teatral 'Ollantay'?", opts: ["Garcilaso de la Vega", "Anónimo", "Felipe Guamán Poma", "Inca Garcilaso"], ans: 1 },
      { q: "¿Qué movimiento literario lideró Manuel González Prada con su discurso 'En el Politeama'?", opts: ["Romanticismo", "Realismo", "Vanguardismo", "Indigenismo"], ans: 1 },
      { q: "¿Cuál es la temática principal en 'Los ríos profundos' de José María Arguedas?", opts: ["La vida en la costa", "El conflicto de identidad cultural", "La revolución industrial", "La conquista española"], ans: 1 },
      { q: "¿Qué cultura fue descubierta por Julio C. Tello en 1919?", opts: ["Moche", "Nazca", "Chavín", "Wari"], ans: 2 },
      { q: "¿Quién fue el último inca de la resistencia de Vilcabamba capturado en 1572?", opts: ["Manco Inca", "Sayri Túpac", "Titu Cusi Yupanqui", "Túpac Amaru I"], ans: 3 },
      { q: "¿Qué tratado puso fin a la guerra con Chile en 1883?", opts: ["Tratado de Lima", "Tratado de Ancón", "Tratado de Valparaíso", "Protocolo de Río"], ans: 1 },
      { q: "¿Qué presidente es conocido por iniciar la 'República Aristocrática' en 1899?", opts: ["Augusto B. Leguía", "Eduardo López de Romaña", "Nicolás de Piérola", "Guillermo Billinghurst"], ans: 1 },
      { q: "¿Cómo se llamó el levantamiento indígena más grande de la historia colonial en 1780?", opts: ["Rebelión de Juan Santos Atahualpa", "Rebelión de Túpac Amaru II", "Rebelión de Huaraz", "Rebelión de Pumacahua"], ans: 1 },
      { q: "¿Cuál fue el principal centro ceremonial de la cultura Chavín?", opts: ["Chan Chan", "Caral", "Chavín de Huántar", "Kuelap"], ans: 2 },
      { q: "¿Qué personaje histórico es conocido como el 'Brujo de los Andes'?", opts: ["Miguel Iglesias", "Andrés A. Cáceres", "Francisco Bolognesi", "Alfonso Ugarte"], ans: 1 },
      { q: "¿En qué gobierno se otorgó el voto a la mujer en el Perú (1955)?", opts: ["Manuel A. Odría", "Manuel Prado Ugarteche", "José Luis Bustamante y Rivero", "Fernando Belaúnde"], ans: 0 },
      { q: "¿Qué metal es líquido a temperatura ambiente?", opts: ["Plata", "Mercurio", "Oro", "Plomo"], ans: 1 },
      { q: "¿Cuántos corazones tiene un pulpo?", opts: ["1", "2", "3", "4"], ans: 2 },
      { q: "¿Qué inventó Alexander Graham Bell?", opts: ["La bombilla", "El teléfono", "La radio", "El avión"], ans: 1 },
      { q: "¿Cuál es el país más pequeño del mundo?", opts: ["Mónaco", "Nauru", "Ciudad del Vaticano", "San Marino"], ans: 2 },
      { q: "¿Qué es un 'Podcast'?", opts: ["Un video", "Un programa de audio", "Un libro", "Una app de citas"], ans: 1 },
      { q: "¿De qué color es el cielo en un día despejado?", opts: ["Verde","Azul","Rojo","Amarillo"], ans: 1 },
      { q: "¿Cuántas patas tiene un perro?", opts: ["2","3","4","6"], ans: 2 },
      { q: "¿Cuál es el planeta donde vivimos?", opts: ["Marte","Saturno","Tierra","Venus"], ans: 2 },
      { q: "¿Qué animal hace 'miau'?", opts: ["Perro","Pato","Gato","Vaca"], ans: 2 },
      { q: "¿Cuántos días tiene una semana?", opts: ["5","6","7","8"], ans: 2 },
      { q: "¿De qué color son las bananas maduras?", opts: ["Rojas","Verdes","Azules","Amarillas"], ans: 3 },
      { q: "¿Qué sale del sol por las mañanas?", opts: ["La luna","La lluvia","La luz","Las estrellas"], ans: 2 },
      { q: "¿Cuánto es 2 + 2?", opts: ["3","4","5","6"], ans: 1 },
      { q: "¿En qué estación del año hace más calor?", opts: ["Invierno","Otoño","Primavera","Verano"], ans: 3 },
      { q: "¿Cuántos meses tiene un año?", opts: ["10","11","12","13"], ans: 2 },
      { q: "¿De qué color es la hierba?", opts: ["Azul","Rojo","Verde","Morado"], ans: 2 },
      { q: "¿Cuántas letras tiene el abecedario español?", opts: ["25","26","27","28"], ans: 3 },
      { q: "¿Cuál es el animal rey de la selva?", opts: ["Elefante","León","Tigre","Gorila"], ans: 1 },
      { q: "¿Qué comida se hace con harina, agua y levadura?", opts: ["Pasta","Pan","Arroz","Queso"], ans: 1 },
      { q: "¿Cuántos lados tiene un triángulo?", opts: ["2","3","4","5"], ans: 1 },
      { q: "¿Qué bebida se obtiene de las vacas?", opts: ["Jugo","Agua","Leche","Café"], ans: 2 },
      { q: "¿De qué color es la nieve?", opts: ["Gris","Blanca","Azul","Transparente"], ans: 1 },
      { q: "¿Cuánto es 10 - 3?", opts: ["5","6","7","8"], ans: 2 },
      { q: "¿En qué continente está México?", opts: ["Europa","Asia","África","América"], ans: 3 },
      { q: "¿Qué fruta es roja, redonda y muy dulce?", opts: ["Limón","Sandía","Manzana","Kiwi"], ans: 2 },
      { q: "¿Cuál es el océano más grande del mundo?", opts: ["Atlántico","Índico","Ártico","Pacífico"], ans: 3 },
      { q: "¿Cuántos continentes hay en el mundo?", opts: ["5","6","7","8"], ans: 2 },
      { q: "¿Qué instrumento tiene teclas blancas y negras?", opts: ["Guitarra","Piano","Batería","Violín"], ans: 1 },
      { q: "¿Qué planeta es conocido como el planeta rojo?", opts: ["Júpiter","Marte","Saturno","Neptuno"], ans: 1 },
      { q: "¿Cuántas horas tiene un día?", opts: ["12","24","36","48"], ans: 1 },
      { q: "¿Qué animal es el más grande del mundo?", opts: ["Elefante","Ballena azul","Tiburón","Jirafa"], ans: 1 },
      { q: "¿Qué país tiene forma de bota?", opts: ["España","Italia","Grecia","Francia"], ans: 1 },
      { q: "¿Cuántos minutos tiene una hora?", opts: ["30","45","60","90"], ans: 2 },
      { q: "¿Qué gas respiramos para vivir?", opts: ["Oxígeno","Hidrógeno","Nitrógeno","Helio"], ans: 0 },
      { q: "¿Cuál es el río más largo del mundo?", opts: ["Amazonas","Nilo","Yangtsé","Misisipi"], ans: 1 },
      { q: "¿Qué animal es conocido por su memoria?", opts: ["Perro","Elefante","Gato","Caballo"], ans: 1 },
      { q: "¿Cuántos lados tiene un cuadrado?", opts: ["3","4","5","6"], ans: 1 },
      { q: "¿Qué planeta es el más cercano al sol?", opts: ["Venus","Tierra","Mercurio","Marte"], ans: 2 },
      { q: "¿Qué idioma se habla en Brasil?", opts: ["Español","Portugués","Inglés","Francés"], ans: 1 },
      { q: "¿Qué animal pone huevos?", opts: ["Perro","Gato","Gallina","Vaca"], ans: 2 },
      { q: "¿Cuántos segundos tiene un minuto?", opts: ["30","60","90","120"], ans: 1 },
      { q: "¿Qué planeta tiene anillos?", opts: ["Marte","Saturno","Venus","Mercurio"], ans: 1 },
      { q: "¿Qué fruta es amarilla y curva?", opts: ["Manzana","Plátano","Uva","Pera"], ans: 1 },
      { q: "¿Cuál es el metal más ligero?", opts: ["Oro","Hierro","Aluminio","Litio"], ans: 3 },
      { q: "¿Qué animal ladra?", opts: ["Gato","Perro","Caballo","Vaca"], ans: 1 },
      { q: "¿Cuántos días tiene febrero en un año normal?", opts: ["28","29","30","31"], ans: 0 },
      { q: "¿Qué planeta es el más grande?", opts: ["Tierra","Júpiter","Saturno","Urano"], ans: 1 },
      { q: "¿Qué animal es el rey de la selva?", opts: ["Tigre","León","Elefante","Mono"], ans: 1 },
      { q: "¿Qué usamos para ver mejor?", opts: ["Zapatos","Lentes","Sombrero","Guantes"], ans: 1 },
      { q: "¿Cuál es la capital de Francia?", opts: ["Roma","Madrid","París","Londres"], ans: 2 },
      { q: "¿Qué planeta es conocido por sus anillos?", opts: ["Júpiter","Saturno","Neptuno","Venus"], ans: 1 },
      { q: "¿Qué animal vive en el agua?", opts: ["Perro","Pez","Gato","León"], ans: 1 },
      { q: "¿Cuántos dedos tenemos en una mano?", opts: ["4","5","6","7"], ans: 1 },
      { q: "¿Qué color resulta de mezclar rojo y blanco?", opts: ["Rosa","Morado","Naranja","Gris"], ans: 0 },
      { q: "¿Qué instrumento soplas para que suene?", opts: ["Tambor","Flauta","Piano","Guitarra"], ans: 1 },
      { q: "¿Cuál es la capital del Perú?", opts: ["Cusco","Arequipa","Lima","Puno"], ans: 2 },
      { q: "¿Qué civilización construyó Machu Picchu?", opts: ["Maya","Azteca","Inca","Olmeca"], ans: 2 },
      { q: "¿Cuál es el plato bandera del Perú?", opts: ["Lomo saltado","Ceviche","Ají de gallina","Anticuchos"], ans: 1 },
      { q: "¿En qué lago está Puno?", opts: ["Titicaca","Baikal","Victoria","Superior"], ans: 0 },
      { q: "¿Qué moneda se usa en Perú?", opts: ["Peso","Dólar","Sol","Euro"], ans: 2 },
      { q: "¿Quién fue el libertador del Perú?", opts: ["Simón Bolívar","José de San Martín","Hidalgo","Sucre"], ans: 1 },
      { q: "¿Cuál es el idioma originario más hablado en Perú?", opts: ["Aymara","Quechua","Guaraní","Mapuche"], ans: 1 },
      { q: "¿Qué animal aparece en el escudo del Perú?", opts: ["Cóndor","Llama","Vicuña","Puma"], ans: 2 },
      { q: "¿En qué mes se celebra Fiestas Patrias en Perú?", opts: ["Junio","Julio","Agosto","Septiembre"], ans: 1 },
      { q: "¿Qué desierto está en la costa peruana?", opts: ["Sahara","Atacama","Sechura","Gobi"], ans: 2 },
      { q: "¿Cuál es el planeta más grande del sistema solar?", opts: ["Tierra","Júpiter","Saturno","Marte"], ans: 1 },
      { q: "¿Cuántos continentes hay?", opts: ["5","6","7","8"], ans: 2 },
      { q: "¿Qué país es conocido por la Torre Eiffel?", opts: ["Italia","España","Francia","Alemania"], ans: 2 },
      { q: "¿Cuál es el idioma más hablado del mundo?", opts: ["Inglés","Español","Chino mandarín","Hindi"], ans: 2 },
      { q: "¿Qué océano está entre América y Europa?", opts: ["Pacífico","Atlántico","Índico","Ártico"], ans: 1 },
      { q: "¿Qué órgano bombea la sangre?", opts: ["Pulmón","Cerebro","Corazón","Hígado"], ans: 2 },
      { q: "¿Cuántos lados tiene un hexágono?", opts: ["5","6","7","8"], ans: 1 },
      { q: "¿Qué gas necesitan las plantas para la fotosíntesis?", opts: ["Oxígeno","CO2","Helio","Nitrógeno"], ans: 1 },
      { q: "¿Qué instrumento mide la temperatura?", opts: ["Barómetro","Termómetro","Regla","Balanza"], ans: 1 },
      { q: "¿Cuál es el metal más valioso comúnmente?", opts: ["Hierro","Oro","Cobre","Plata"], ans: 1 },
      { q: "¿Qué plataforma es famosa por videos cortos?", opts: ["Netflix","TikTok","Spotify","Zoom"], ans: 1 },
      { q: "¿Qué significa 'LOL'?", opts: ["Mucho amor","Reírse fuerte","Tristeza","Enojo"], ans: 1 },
      { q: "¿Qué saga incluye a Harry Potter?", opts: ["Marvel","DC","Harry Potter","Star Wars"], ans: 2 },
      { q: "¿Qué app se usa para escuchar música?", opts: ["Spotify","Excel","Word","Drive"], ans: 0 },
      { q: "¿Qué significa 'crush'?", opts: ["Amigo","Persona que te gusta","Enemigo","Familiar"], ans: 1 },
      { q: "¿Qué significa 'viral' en redes?", opts: ["Aburrido","Popular rápidamente","Antiguo","Privado"], ans: 1 },
      { q: "¿Qué plataforma es para streaming de series?", opts: ["Netflix","WhatsApp","Telegram","Zoom"], ans: 0 },
      { q: "¿Qué significa 'DM'?", opts: ["Mensaje directo","Llamada","Video","Correo"], ans: 0 },
      { q: "¿Qué juego es tipo battle royale famoso?", opts: ["FIFA","Fortnite","Minecraft","Tetris"], ans: 1 },
      { q: "¿Cuál es la capital de la región Puno?", opts: ["Juliaca","Puno","Ilave","Azángaro"], ans: 1 },
      { q: "¿Qué mar baña la costa del Perú?", opts: ["Mar Caribe","Océano Pacífico","Atlántico","Índico"], ans: 1 },
      { q: "¿Qué cultura es conocida por las Líneas de Nazca?", opts: ["Inca","Nazca","Moche","Chavín"], ans: 1 },
      { q: "¿Cuál es la montaña más alta del Perú?", opts: ["Huascarán","Alpamayo","Ausangate","Salkantay"], ans: 0 },
      { q: "¿Qué ciudad es conocida como la 'Ciudad Blanca'?", opts: ["Cusco","Arequipa","Tacna","Ica"], ans: 1 },
      { q: "¿Qué bebida tradicional peruana se hace con uvas?", opts: ["Chicha","Pisco","Cerveza","Emoliente"], ans: 1 },
      { q: "¿Qué animal andino produce lana muy fina?", opts: ["Llama","Alpaca","Vicuña","Oveja"], ans: 2 },
      { q: "¿Qué cultura antigua construyó Chan Chan?", opts: ["Inca","Chimú","Nazca","Wari"], ans: 1 },
      { q: "¿Qué río es el más largo del Perú?", opts: ["Rímac","Amazonas","Ucayali","Mantaro"], ans: 1 },
      { q: "¿Qué instrumento es típico en la música andina?", opts: ["Piano","Zampoña","Batería","Violín"], ans: 1 },
      { q: "¿Cuál es el animal terrestre más rápido?", opts: ["León","Guepardo","Caballo","Tigre"], ans: 1 },
      { q: "¿Qué país inventó la pizza?", opts: ["España","Italia","Francia","Grecia"], ans: 1 },
      { q: "¿Cuántos huesos tiene el cuerpo humano adulto?", opts: ["206","201","210","198"], ans: 0 },
      { q: "¿Cuál es el idioma oficial de Japón?", opts: ["Chino","Coreano","Japonés","Inglés"], ans: 2 },
      { q: "¿Qué planeta es conocido como el más frío?", opts: ["Marte","Urano","Neptuno","Venus"], ans: 2 },
      { q: "¿Qué instrumento mide la presión atmosférica?", opts: ["Termómetro","Barómetro","Regla","Cronómetro"], ans: 1 },
      { q: "¿Cuál es el país más grande del mundo?", opts: ["China","Estados Unidos","Rusia","Canadá"], ans: 2 },
      { q: "¿Qué animal es símbolo de Australia?", opts: ["Koala","Canguro","Panda","Tigre"], ans: 1 },
      { q: "¿Qué vitamina se obtiene del sol?", opts: ["A","B","C","D"], ans: 3 },
      { q: "¿Cuál es el océano más pequeño?", opts: ["Atlántico","Índico","Ártico","Pacífico"], ans: 2 },
      { q: "¿Qué streamer es famoso por jugar videojuegos en vivo?", opts: ["Chef","Doctor","Gamer","Actor"], ans: 2 },
      { q: "¿Qué significa 'AFK'?", opts: ["Estoy aquí","Lejos del teclado","Muy rápido","Enojado"], ans: 1 },
      { q: "¿Qué app se usa para compartir fotos principalmente?", opts: ["Excel","Instagram","Word","Drive"], ans: 1 },
      { q: "¿Qué significa 'spoiler'?", opts: ["Final revelado","Error","Inicio","Publicidad"], ans: 0 },
      { q: "¿Qué saga incluye a los Avengers?", opts: ["DC","Marvel","Star Wars","Harry Potter"], ans: 1 },
      { q: "¿Qué plataforma es famosa por videos largos?", opts: ["TikTok","YouTube","WhatsApp","Zoom"], ans: 1 },
      { q: "¿Qué significa 'like'?", opts: ["Odio","Me gusta","Bloqueo","Ignorar"], ans: 1 },
      { q: "¿Qué significa 'cancelar a alguien' en redes?", opts: ["Apoyar","Criticar masivamente","Ignorar","Seguir"], ans: 1 },
      { q: "¿Qué juego es tipo construcción libre?", opts: ["Fortnite","Minecraft","FIFA","Call of Duty"], ans: 1 },
      { q: "¿Qué significa 'random'?", opts: ["Ordenado","Predecible","Aleatorio","Seguro"], ans: 2 },
      { q: "¿Cuál es el lago navegable más alto del mundo?", opts: ["Titicaca","Baikal","Victoria","Superior"], ans: 0 },
      { q: "¿Qué ciudad fue capital del Imperio Inca?", opts: ["Lima","Cusco","Arequipa","Trujillo"], ans: 1 },
      { q: "¿Qué cultura preincaica creó cabezas clavas?", opts: ["Nazca","Moche","Chavín","Wari"], ans: 2 },
      { q: "¿Qué animal es típico del altiplano?", opts: ["Cebra","Alpaca","León","Oso"], ans: 1 },
      { q: "¿Cuál es el baile típico de la costa peruana?", opts: ["Marinera","Saya","Diablada","Caporales"], ans: 0 },
      { q: "¿Qué fruto es base del ceviche?", opts: ["Naranja","Limón","Manzana","Uva"], ans: 1 },
      { q: "¿Qué departamento tiene la selva más grande?", opts: ["Loreto","Puno","Tacna","Ica"], ans: 0 },
      { q: "¿Qué línea imaginaria cruza el Perú?", opts: ["Ecuador","Meridiano de Greenwich","Trópico de Capricornio","Ninguna"], ans: 3 },
      { q: "¿Qué moneda se usaba antes del sol?", opts: ["Peso","Inti","Dólar","Euro"], ans: 1 },
      { q: "¿Qué plato lleva papa, ají y pollo desmenuzado?", opts: ["Ceviche","Ají de gallina","Causa","Anticuchos"], ans: 1 },
      { q: "¿Cuál es el animal más grande terrestre?", opts: ["Elefante","Jirafa","Rinoceronte","Hipopótamo"], ans: 0 },
      { q: "¿Cuántos planetas hay en el sistema solar?", opts: ["7","8","9","10"], ans: 1 },
      { q: "¿Qué país tiene forma de bota?", opts: ["España","Italia","Portugal","Francia"], ans: 1 },
      { q: "¿Cuál es el idioma oficial de Alemania?", opts: ["Francés","Inglés","Alemán","Italiano"], ans: 2 },
      { q: "¿Qué órgano controla el cuerpo?", opts: ["Corazón","Pulmón","Cerebro","Hígado"], ans: 2 },
      { q: "¿Qué planeta es el más caliente?", opts: ["Mercurio","Venus","Marte","Júpiter"], ans: 1 },
      { q: "¿Cuántos colores tiene el arcoíris?", opts: ["5","6","7","8"], ans: 2 },
      { q: "¿Qué instrumento tiene cuerdas?", opts: ["Batería","Guitarra","Flauta","Trompeta"], ans: 1 },
      { q: "¿Qué país es conocido por el sushi?", opts: ["China","Corea","Japón","Tailandia"], ans: 2 },
      { q: "¿Cuál es el desierto más grande del mundo?", opts: ["Sahara","Gobi","Antártida","Atacama"], ans: 2 },
      { q: "¿Qué significa 'GOAT' en redes?", opts: ["Cabra","El mejor de todos","Error","Juego"], ans: 1 },
      { q: "¿Qué app es para videos cortos virales?", opts: ["Zoom","TikTok","Drive","Word"], ans: 1 },
      { q: "¿Qué significa 'meme'?", opts: ["Imagen viral graciosa","Noticia","Correo","Juego"], ans: 0 },
      { q: "¿Qué saga incluye a Darth Vader?", opts: ["Marvel","DC","Star Wars","Harry Potter"], ans: 2 },
      { q: "¿Qué significa 'cringe'?", opts: ["Gracioso","Vergüenza ajena","Triste","Enojo"], ans: 1 },
      { q: "¿Qué plataforma es para streaming de música?", opts: ["Netflix","Spotify","YouTube","Zoom"], ans: 1 },
      { q: "¿Qué significa 'sus'?", opts: ["Normal","Sospechoso","Seguro","Rápido"], ans: 1 },
      { q: "¿Qué juego es popular de disparos?", opts: ["FIFA","Call of Duty","Minecraft","Tetris"], ans: 1 },
      { q: "¿Qué significa 'like' en redes?", opts: ["Ignorar","Me gusta","Bloquear","Reportar"], ans: 1 },
      { q: "¿Qué significa 'streaming'?", opts: ["Descargar","Transmitir en vivo","Editar","Borrar"], ans: 1 },
      { q: "¿Qué app es de videos cortos?", opts: ["Zoom","TikTok","Drive","Word"], ans: 1 },
    { q: "¿Qué significa LOL?", opts: ["Triste","Risa","Enojo","Sueño"], ans: 1 },
    { q: "¿Qué saga incluye Avengers?", opts: ["DC","Marvel","HP","SW"], ans: 1 },
    { q: "¿Qué app es para música?", opts: ["Spotify","Excel","Word","Drive"], ans: 0 },
    { q: "¿Qué significa crush?", opts: ["Amigo","Gusto","Enemigo","Nada"], ans: 1 },
    { q: "¿Qué significa viral?", opts: ["Lento","Popular","Viejo","Privado"], ans: 1 },
    { q: "¿Qué plataforma es de series?", opts: ["Netflix","Zoom","Drive","Excel"], ans: 0 },
    { q: "¿Qué significa DM?", opts: ["Mensaje directo","Llamada","Correo","Video"], ans: 0 },
    { q: "¿Qué juego es battle royale?", opts: ["FIFA","Fortnite","Tetris","Mario"], ans: 1 },
    { q: "¿Qué significa ghostear?", opts: ["Hablar","Ignorar","Gritar","Reír"], ans: 1 },
    { q: "¿Qué significa match?", opts: ["Error","Coincidencia","Bloqueo","Nada"], ans: 1 },
    { q: "¿Qué significa meme?", opts: ["Noticia","Imagen graciosa","Correo","Juego"], ans: 1 },
    { q: "¿Qué significa AFK?", opts: ["Aquí","Lejos teclado","Rápido","Error"], ans: 1 },
    { q: "¿Qué significa cringe?", opts: ["Risa","Vergüenza","Enojo","Amor"], ans: 1 },
    { q: "¿Qué significa sus?", opts: ["Normal","Sospechoso","Seguro","Lento"], ans: 1 },
    { q: "¿Qué juego es sandbox?", opts: ["FIFA","Minecraft","COD","LOL"], ans: 1 },
    { q: "¿Cuál es la capital del Perú?", opts: ["Cusco","Lima","Arequipa","Puno"], ans: 1 },
    { q: "¿Qué lago está en Puno?", opts: ["Titicaca","Baikal","Victoria","Superior"], ans: 0 },
    { q: "¿Quién proclamó la independencia del Perú?", opts: ["Bolívar","San Martín","Sucre","Castilla"], ans: 1 },
    { q: "¿Qué moneda se usa en Perú?", opts: ["Peso","Sol","Dólar","Euro"], ans: 1 },
    { q: "¿Cuál es el plato bandera?", opts: ["Lomo saltado","Ceviche","Causa","Ají"], ans: 1 },
    { q: "¿Qué cultura hizo Machu Picchu?", opts: ["Maya","Azteca","Inca","Nazca"], ans: 2 },
    { q: "¿Qué animal está en el escudo?", opts: ["Llama","Vicuña","Puma","Cóndor"], ans: 1 },
    { q: "¿En qué mes son Fiestas Patrias?", opts: ["Junio","Julio","Agosto","Septiembre"], ans: 1 },
    { q: "¿Qué ciudad es la Ciudad Blanca?", opts: ["Cusco","Arequipa","Tacna","Ica"], ans: 1 },
    { q: "¿Qué río pasa por Perú?", opts: ["Nilo","Amazonas","Danubio","Támesis"], ans: 1 },
    { q: "¿Qué cultura hizo Chan Chan?", opts: ["Inca","Chimú","Nazca","Wari"], ans: 1 },
    { q: "¿Qué bebida es de uva?", opts: ["Chicha","Pisco","Cerveza","Vino"], ans: 1 },
    { q: "¿Qué danza es típica?", opts: ["Tango","Marinera","Samba","Flamenco"], ans: 1 },
    { q: "¿Qué idioma originario es más hablado?", opts: ["Aymara","Quechua","Guaraní","Mapuche"], ans: 1 },
    { q: "¿Qué desierto está en Perú?", opts: ["Sahara","Sechura","Gobi","Atacama"], ans: 1 },
    { q: "¿Cuántos planetas hay?", opts: ["7","8","9","10"], ans: 1 },
    { q: "¿Cuál es el planeta más grande?", opts: ["Tierra","Júpiter","Marte","Venus"], ans: 1 },
    { q: "¿Qué animal es más rápido?", opts: ["León","Guepardo","Caballo","Tigre"], ans: 1 },
    { q: "¿Qué país tiene la Torre Eiffel?", opts: ["Italia","España","Francia","Alemania"], ans: 2 },
    { q: "¿Qué idioma se habla en Brasil?", opts: ["Español","Portugués","Inglés","Francés"], ans: 1 },
    { q: "¿Cuántos días tiene un año?", opts: ["360","365","366","364"], ans: 1 },
    { q: "¿Qué órgano bombea sangre?", opts: ["Pulmón","Cerebro","Corazón","Hígado"], ans: 2 },
    { q: "¿Cuántos lados tiene un triángulo?", opts: ["2","3","4","5"], ans: 1 },
    { q: "¿Qué gas respiramos?", opts: ["CO2","Oxígeno","Helio","Nitrógeno"], ans: 1 },
    { q: "¿Qué instrumento mide temperatura?", opts: ["Barómetro","Termómetro","Regla","Balanza"], ans: 1 },
    { q: "¿Cuál es el océano más grande?", opts: ["Atlántico","Índico","Pacífico","Ártico"], ans: 2 },
    { q: "¿Qué país es más grande?", opts: ["China","EEUU","Rusia","Canadá"], ans: 2 },
    { q: "¿Qué vitamina da el sol?", opts: ["A","B","C","D"], ans: 3 },
    { q: "¿Qué animal vive en agua?", opts: ["Perro","Pez","Gato","Caballo"], ans: 1 },
    { q: "¿Cuántos colores tiene el arcoíris?", opts: ["5","6","7","8"], ans: 2 },
    { q: "¿Qué planeta es rojo?", opts: ["Venus","Marte","Júpiter","Saturno"], ans: 1 },
    { q: "¿Qué instrumento tiene teclas?", opts: ["Guitarra","Piano","Batería","Flauta"], ans: 1 },
    { q: "¿Qué país inventó la pizza?", opts: ["España","Italia","Francia","Grecia"], ans: 1 },

    ],
    2: [
      { q: "¿Cuál es el compuesto orgánico resultante de la fotosíntesis?", opts: ["Proteína", "Glucosa", "Lípido", "Ácido nucleico"], ans: 1 },
      { q: "¿En qué etapa de la mitosis los cromosomas se alinean en el plano ecuatorial?", opts: ["Profase", "Anafase", "Metafase", "Telofase"], ans: 2 },
      { q: "¿Qué ley física relaciona la fuerza, la masa y la aceleración?", opts: ["Ley de Hooke", "Segunda Ley de Newton", "Ley de Ohm", "Principio de Pascal"], ans: 1 },
      { q: "¿Cuál fue el periodo histórico peruano caracterizado por la prosperidad del guano?", opts: ["Colonia", "Virreinato", "Prosperidad Falaz", "República Aristocrática"], ans: 2 },
      { q: "¿Qué región natural del Perú es conocida por su relieve escarpado y los 'pongos'?", opts: ["Costa", "Sierra", "Selva Alta", "Selva Baja"], ans: 2 },
      { q: "¿Cuál es el valor del pH de una solución neutra a 25°C?", opts: ["0", "7", "10", "14"], ans: 1 },
      { q: "¿Qué cultura preínca se caracterizó por sus geoglifos en el desierto?", opts: ["Moche", "Nazca", "Chavín", "Paracas"], ans: 1 },
      { q: "¿Cómo se llama el proceso de paso de estado sólido a gaseoso sin pasar por el líquido?", opts: ["Fusión", "Solidificación", "Sublimación", "Condensación"], ans: 2 },
      { q: "¿Qué filósofo griego fue maestro de Alejandro Magno?", opts: ["Sócrates", "Platón", "Aristóteles", "Zenón"], ans: 2 },
      { q: "¿Qué órgano humano es el encargado de la filtración de la sangre y formación de orina?", opts: ["Hígado", "Páncreas", "Riñón", "Vejiga"], ans: 2 },
      { q: "¿Cuál es la capital histórica del Imperio Inca?", opts: ["Lima", "Cusco", "Cajamarca", "Puno"], ans: 1 },
      { q: "¿Qué unidad mide la cantidad de sustancia en el Sistema Internacional?", opts: ["Gramo", "Mol", "Molaridad", "Kilogramo"], ans: 1 },
      { q: "¿Cómo se define a la estructura social jerárquica del Virreinato?", opts: ["Sociedad de clases", "Sociedad estamental", "Sociedad democrática", "Sociedad igualitaria"], ans: 1 },
      { q: "¿Qué gas es el principal responsable del efecto invernadero en la atmósfera?", opts: ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Argón"], ans: 2 },
      { q: "¿Cuál es el tipo de enlace en el que se comparten electrones entre átomos?", opts: ["Iónico", "Covalente", "Metálico", "Puente de hidrógeno"], ans: 1 },
      { q: "¿Cuántos colores tiene el arcoíris?", opts: ["5","6","7","8"], ans: 2 },
      { q: "¿En qué país se inventó la pizza?", opts: ["Francia","Italia","Grecia","España"], ans: 1 },
      { q: "¿Cuál es el océano más grande del mundo?", opts: ["Atlántico","Índico","Ártico","Pacífico"], ans: 3 },
      { q: "¿Cuántos lados tiene un hexágono?", opts: ["5","6","7","8"], ans: 1 },
      { q: "¿Cuál es el animal terrestre más rápido?", opts: ["León","Guepardo","Caballo","Avestruz"], ans: 1 },
      { q: "¿De qué país es originario el sushi?", opts: ["China","Corea","Japón","Tailandia"], ans: 2 },
      { q: "¿Cuántos planetas tiene el sistema solar?", opts: ["7","8","9","10"], ans: 1 },
      { q: "¿Quién pintó la Mona Lisa?", opts: ["Miguel Ángel","Rafael","Da Vinci","Botticelli"], ans: 2 },
      { q: "¿Cuál es el río más largo del mundo?", opts: ["Amazonas","Nilo","Yangtsé","Misisipi"], ans: 1 },
      { q: "¿En qué año llegó el hombre a la Luna?", opts: ["1965","1967","1969","1971"], ans: 2 },
      { q: "¿Cuántos huesos tiene el cuerpo humano adulto?", opts: ["196","206","216","226"], ans: 1 },
      { q: "¿Cuál es la capital de Australia?", opts: ["Sídney","Melbourne","Brisbane","Canberra"], ans: 3 },
      { q: "¿Cuántos jugadores tiene un equipo de fútbol?", opts: ["9","10","11","12"], ans: 2 },
      { q: "¿Qué elemento químico tiene el símbolo Au?", opts: ["Plata","Aluminio","Oro","Cobre"], ans: 2 },
      { q: "¿Cuál es el país más grande del mundo?", opts: ["China","EE.UU.","Canadá","Rusia"], ans: 3 },
      { q: "¿Cuántos continentes hay en el mundo?", opts: ["5","6","7","8"], ans: 2 },
      { q: "¿Cuál es el planeta más cercano al Sol?", opts: ["Venus","Marte","Mercurio","Tierra"], ans: 2 },
      { q: "¿En qué continente está Egipto?", opts: ["Asia","Europa","América","África"], ans: 3 },
      { q: "¿Cuántos días tiene un año bisiesto?", opts: ["364","365","366","367"], ans: 2 },
      { q: "¿Qué fruta tiene su semilla por fuera?", opts: ["Kiwi","Fresa","Mango","Naranja"], ans: 1 },
      { q: "¿Cuántas horas tiene un día?", opts: ["12","20","24","48"], ans: 2 },
      { q: "¿Cuál es el idioma más hablado del mundo?", opts: ["Inglés","Español","Mandarín","Hindi"], ans: 2 },
      { q: "¿Qué animal es el símbolo de Australia?", opts: ["Koala","Cocodrilo","Canguro","Wombat"], ans: 2 },
      { q: "¿En qué país está la Torre Eiffel?", opts: ["Italia","Francia","Bélgica","España"], ans: 1 },
      { q: "¿Cuánto es 12 x 12?", opts: ["124","132","144","156"], ans: 2 },
      { q: "¿Cuál es el metal más ligero?", opts: ["Aluminio","Titanio","Litio","Magnesio"], ans: 2 },
      { q: "¿De qué color es el corazón de un pulpo?", opts: ["Rojo","Azul","Verde","Morado"], ans: 1 },
      { q: "¿Cuántas cuerdas tiene una guitarra estándar?", opts: ["4","5","6","7"], ans: 2 },
      { q: "¿En qué año se fundó Facebook?", opts: ["2002","2003","2004","2005"], ans: 2 },
      { q: "¿Cuál es la montaña más alta del mundo?", opts: ["K2","Everest","Aconcagua","Kilimanjaro"], ans: 1 },
      { q: "¿Cuál es el deporte más practicado del mundo?", opts: ["Béisbol","Baloncesto","Fútbol","Cricket"], ans: 2 },
      { q: "¿Cuántos colores tiene la bandera de Italia?", opts: ["2","3","4","5"], ans: 1 },
      { q: "¿Qué gas respiramos principalmente?", opts: ["Oxígeno","Nitrógeno","CO2","Argón"], ans: 1 },
      { q: "¿Cuál es la capital de Canadá?", opts: ["Toronto","Vancouver","Montreal","Ottawa"], ans: 3 },
      { q: "¿Cuántas semanas tiene un año?", opts: ["48","50","52","54"], ans: 2 },
      { q: "¿Quién escribió Romeo y Julieta?", opts: ["Dickens","Chaucer","Shakespeare","Marlowe"], ans: 2 },
      { q: "¿Qué país tiene forma de bota?", opts: ["España","Grecia","Portugal","Italia"], ans: 3 },
      { q: "¿Cuál es el instrumento de cuerda más pequeño?", opts: ["Viola","Violín","Cello","Ukulele"], ans: 1 },
      { q: "¿En qué continente está Brasil?", opts: ["África","Oceanía","América del Norte","América del Sur"], ans: 3 },
      { q: "¿Cuántos minutos tiene una hora?", opts: ["30","60","90","120"], ans: 1 },
      { q: "¿De qué país es la Torre de Pisa?", opts: ["Francia","España","Grecia","Italia"], ans: 3 },
      { q: "¿Cuántos ojos tiene una araña típica?", opts: ["2","4","6","8"], ans: 3 },
      { q: "¿Qué país inventó los Juegos Olímpicos?", opts: ["Roma","Grecia","Egipto","Persia"], ans: 1 },
      { q: "¿Cuál es el planeta más grande del sistema solar?", opts: ["Saturno","Urano","Neptuno","Júpiter"], ans: 3 },
      { q: "¿Cuántos metros tiene un kilómetro?", opts: ["10","100","1000","10000"], ans: 2 },
      { q: "¿Cuál es el idioma oficial de Brasil?", opts: ["Español","Inglés","Portugués","Guaraní"], ans: 2 },
      { q: "¿En qué año empezó el siglo XXI?", opts: ["1999","2000","2001","2002"], ans: 2 },
      { q: "¿Cuál es el animal más grande del mundo?", opts: ["Tiburón ballena","Elefante africano","Ballena azul","Jirafa"], ans: 2 },
      { q: "¿Qué fruta se usa para hacer el guacamole?", opts: ["Mango","Aguacate","Pepino","Kiwi"], ans: 1 },
      { q: "¿Cuántos cromosomas tiene una célula humana normal?", opts: ["23","44","46","48"], ans: 2 },
      { q: "¿Qué país tiene más pirámides en el mundo?", opts: ["Egipto","México","Sudán","Perú"], ans: 2 },
      { q: "¿Cuál es el hueso más largo del cuerpo humano?", opts: ["Columna","Húmero","Tibia","Fémur"], ans: 3 },
      { q: "¿A qué velocidad viaja la luz (km/s aprox)?", opts: ["100.000","200.000","300.000","400.000"], ans: 2 },
      { q: "¿En qué año cayó el Muro de Berlín?", opts: ["1987","1988","1989","1990"], ans: 2 },
      { q: "¿Cuál es el metal más abundante en la corteza terrestre?", opts: ["Hierro","Silicio","Aluminio","Calcio"], ans: 2 },
      { q: "¿Cuántos libros tiene el Quijote originalmente?", opts: ["1","2","3","4"], ans: 1 },
      { q: "¿Cuál es la moneda oficial de Japón?", opts: ["Yuan","Won","Yen","Ringgit"], ans: 2 },
      { q: "¿Quién escribió '100 años de soledad'?", opts: ["Vargas Llosa","Borges","García Márquez","Rulfo"], ans: 2 },
      { q: "¿Qué país tiene la selva amazónica más grande?", opts: ["Colombia","Perú","Venezuela","Brasil"], ans: 3 },
      { q: "¿Cuál es el órgano más grande del cuerpo humano?", opts: ["Hígado","Pulmón","Piel","Intestino"], ans: 2 },
      { q: "¿En qué año comenzó la Segunda Guerra Mundial?", opts: ["1937","1938","1939","1940"], ans: 2 },
      { q: "¿Qué planeta tiene más lunas en el sistema solar?", opts: ["Júpiter","Saturno","Urano","Neptuno"], ans: 1 },
      { q: "¿Cuál es el elemento más abundante en el universo?", opts: ["Oxígeno","Carbono","Helio","Hidrógeno"], ans: 3 },
      { q: "¿Qué científico formuló la teoría de la relatividad?", opts: ["Newton","Bohr","Einstein","Hawking"], ans: 2 },
      { q: "¿Cuántos husos horarios tiene Rusia?", opts: ["9","10","11","12"], ans: 2 },
      { q: "¿En qué año se descubrió América (llegada de Colón)?", opts: ["1490","1491","1492","1493"], ans: 2 },
      { q: "¿Cuál es el desierto más grande del mundo?", opts: ["Sahara","Ártico","Gobi","Antártico"], ans: 3 },
      { q: "¿Qué significa ADN?", opts: ["Ácido Desoxirribonucleico","Ácido Di-Nucleico","Asociación de Nucleótidos","Almacén de Nucleobases"], ans: 0 },
      { q: "¿Cuál fue el primer país en dar el voto a las mujeres?", opts: ["EE.UU.","Reino Unido","Nueva Zelanda","Francia"], ans: 2 },
      { q: "¿Cuántos huesos tiene la mano humana?", opts: ["22","25","27","29"], ans: 2 },
      { q: "¿Cuál es la densidad del agua en g/cm³?", opts: ["0.5","0.8","1.0","1.2"], ans: 2 },
      { q: "¿Qué filósofo dijo 'Pienso, luego existo'?", opts: ["Kant","Descartes","Hume","Locke"], ans: 1 },
      { q: "¿Cuántos países conforman la Unión Europea en 2024?", opts: ["25","27","28","30"], ans: 1 },
      { q: "¿Cuál es el símbolo químico del plomo?", opts: ["Pl","Pb","Pe","Ld"], ans: 1 },
      { q: "¿En qué año se fundó la ONU?", opts: ["1943","1944","1945","1946"], ans: 2 },
      { q: "¿Quién compuso la Quinta Sinfonía?", opts: ["Mozart","Bach","Chopin","Beethoven"], ans: 3 },
      { q: "¿Cuántos huesos tiene la columna vertebral humana?", opts: ["24","26","33","36"], ans: 2 },
      { q: "¿Cuál es el río más largo de América del Sur?", opts: ["Orinoco","Paraná","Amazonas","Magdalena"], ans: 2 },
      { q: "¿Qué país tiene más lagos del mundo?", opts: ["Rusia","EE.UU.","Finlandia","Canadá"], ans: 3 },
      { q: "¿Cuál es el punto de ebullición del agua en °C a nivel del mar?", opts: ["90","95","100","105"], ans: 2 },
      { q: "¿Qué pintor español fundó el cubismo junto a Braque?", opts: ["Dalí","Goya","Velázquez","Picasso"], ans: 3 },
      { q: "¿Cuántos satélites naturales tiene Marte?", opts: ["0","1","2","3"], ans: 2 },
      { q: "¿En qué ciudad se firmó la Declaración de Independencia de EE.UU.?", opts: ["Boston","Nueva York","Washington","Filadelfia"], ans: 3 },
    ]
  },
// ===================================================
//  YO NUNCA NUNCA — banco de preguntas
// ===================================================
  never: {
    1: [
      "Yo nunca he llegado tarde a algo importante",
      "Yo nunca he fingido estar dormido para no hablar",
      "Yo nunca he comido algo del suelo",
      "Yo nunca he mentido en un curriculum",
      "Yo nunca he stalkeado a alguien en redes sociales",
      "Yo nunca he salido a la calle con algo al revés sin darme cuenta",
      "Yo nunca he llamado por el nombre equivocado a alguien",
      "Yo nunca he perdido las llaves de casa",
      "Yo nunca he cantado solo en el carro o el baño",
      "Yo nunca me he quedado dormido en clase o en una reunión",
      "Yo nunca he olvidado el cumpleaños de alguien importante",
      "Yo nunca he mandado un audio de voz equivocado",
      "Yo nunca he reprobado una materia o examen",
      "Yo nunca he comido la comida de otra persona por error",
      "Yo nunca he creído en un horóscopo o predicción",
      "Yo nunca he tropezado en público de forma épica",
      "Yo nunca he hecho trampa en algún juego de mesa",
      "Yo nunca he llorado con una publicidad de televisión",
      "Yo nunca he respondido mal a alguien por error y luego fingí que era intencional",
      "Yo nunca he comprado algo innecesario solo porque estaba en oferta",
      "Yo nunca he fingido conocer una película o libro que nunca vi ni leí",
      "Yo nunca me he tomado una foto en el espejo y no me gustó cómo quedó",
      "Yo nunca he seguido a alguien en redes solo para ver su vida",
      "Yo nunca he preguntado '¿a qué hora llegamos?' antes de que el viaje empezara",
      "Yo nunca he dejado platos sucios más de un día esperando que alguien más los lave",
      "Yo nunca me he inventado un plan para no salir de casa",
      "Yo nunca he buscado los síntomas de una enfermedad en Google y concluí que me estaba muriendo",
      "Yo Nunca me he hecho un tatuaje.",
      "Yo Nunca he -stalkeado- a alguien que me mola.",
      "Yo Nunca me he hecho pasar por otra persona.",
      "Yo Nunca me he hecho un piercing.",
      "Yo Nunca me he desnudado en público.",
      "Yo Nunca he perdido un vuelo.",
      "Yo Nunca me he hecho pis en la cama.",
      "Yo Nunca me he hecho pis de reírme tanto.",
      "Yo Nunca he tenido un diario secreto.",
      "Yo Nunca he plantado un árbol.",
      "Yo Nunca he dejado plantado a alguien en una cita.",
      "Yo Nunca me he comido las sobras de unos amigos.",
      "Yo Nunca me han puesto una multa por robar algo.",
      "Yo Nunca me han puesto una multa por exceso de velocidad.",
      "Yo Nunca he hecho 'ghosting' a alguien.",
      "Yo Nunca he querido huir de una cita.",
      "Yo Nunca he creído en el Horóscopo.",
      "Yo Nunca he mentido para no ir a trabajar.",
      "Yo Nunca he dado un nombre falso.",
      "Yo Nunca he dado un número de teléfono falso.",
      "Yo Nunca he dejado a alguien por Whatsapp.",
      "Yo Nunca me he puesto enferma/o en el transporte público.",
      "Yo Nunca he mentido a alguien de esta sala.",
      "Yo Nunca he enviado un mensaje a un ex.",
      "Yo Nunca he mentido en una 'app' para ligar.",
      "Yo Nunca he robado en una tienda.",
      "Yo Nunca he besado al hermano/a de un amigo.",
      "Yo Nunca he hecho 'catfishing' a alguien.",
      "Nunca me han negado la entrada a una disco.",
      "Yo Nunca he usado el cepillo de dientes de otra persona.",
      "Yo Nunca he orinado en la ducha.",
      "Yo Nunca he orinado en la playa.",
      "Yo Nunca he pretendido ser famosa.",
      "Yo Nunca he acosado a la nueva pareja de un ex en las redes sociales.",
      "Nunca me han echado de un bar o club.",
      "Nunca me he bañado desnuda.",
      "Nunca he salido con el ex de un amiga.",
      "Nunca he dicho 'te quiero' cuando no era verdad.",
      "Nunca me han asaltado.",
      "Yo Nunca he llorado por una película.",
      "Yo Nunca me he roto un hueso.",
      "Yo Nunca he mentido para salir de la discoteca antes de tiempo.",
      "Yo Nunca he cogido manía a una amiga o a otra persona.",
      "Yo Nunca he besado a un famoso.",
      "Nunca he comido las sobras de otra mesa en un restaurante.",
      "Yo Nunca he tenido una cita a ciegas.",
      "Yo Nunca he robado algo.",
      "Yo Nunca me han engañado.",
      "Yo Nunca he cenado con un chico/a y me he acostado con él/ella en la primera cita.",
      "Yo Nunca he entrado sin autorización a un lugar.",
      "Yo Nunca he gastado más de 200 soles en una noche de fiesta.",
      "Yo Nunca he mandado mensajes privados a un famoso.",
      "Yo Nunca he pagado por una clase de gimnasia y no he asistido.",
      "Yo Nunca he estado en una playa.",
      "Yo Nunca me he quedado a dormir en la casa de un extraño una noche entera.",
      "Yo Nunca he copiado en un examen.",
      "Yo Nunca he dado un beso al hermano de un amigo.",
      "Yo Nunca he prendido fuego en la cocina.",
      "Yo Nunca he hecho trampas en un juego de mesa.",
      "Yo Nunca he fingido no ver una llamada entrante.",
      "Yo Nunca he llorado viendo una película de dibujos.",
      "Yo Nunca he fingido ser otra persona.",
      "Yo Nunca me he colado en un concierto.",
      "Yo  Nunca he sido abofeteado o golpeado en un lugar público.",
      "Yo Nunca he ignorado a un conocido en público.",
      "Yo Nunca he estropeado una prenda de vestir que me prestó una amiga/o.",
      "Yo Nunca me he colado en un festival o club.",
      "Yo Nunca he mentido en este juego.",
      "Yo Nunca he orinado en público.",
      "Yo Nunca he mentido al besar a alguien.",
      "Yo Nunca he infringido la ley.",
      "Yo Nunca he robado comida.",
      "Yo Nunca me he enamorado de alguien de esta sala.",
      "Yo Nunca me he quedado encerrado/a en mi casa por estar borracho/a.",
      "Yo Nunca he mentido a mi jefe.",
      "Yo Nunca he perdido el móvil o las llaves.",
      "Yo nunca he roto algo en una tienda y lo he escondido.",
      "Yo Nunca me he hecho un tatuaje del que me haya arrepentido.",
      "Yo Nunca he mirado el teléfono de mi pareja.",
      "Yo Nunca he editado mis selfies.",
      "Yo Nunca he usado la cuenta de Netflix de otra persona.",
      "Yo Nunca he hecho 'ghosting' a alguien por algo minúsculo y sin importancia.",
      "Yo Nunca he contado el secreto de alguien.",
      "Yo Nunca he devuelto algo después de habérmelo puesto.",
      "Nunca se me ha caído el teléfono en el baño.",
      "Yo Nunca me he escapado de casa.",
      "Yo Nunca he salido corriendo porque estaba tarde para algo.",
      "Yo Nunca he buscado mi propio nombre en Google.",
      "Yo Nunca he olvidado dónde he aparcado mi coche.",
      "Yo Nunca he utilizado una frase para ligar.",
      "Yo Nunca he engañado a nadie.",
      "Yo Nunca me he tirado un pedo en público.",
      "Yo Nunca he estado en un karaoke.",
      "Nunca me han detenido.",
      "Nunca me han operado.",
      "Yo Nunca me he hecho un tatuaje.",
      "Yo Nunca me he hecho un operación estética.",
      "Yo Nunca he vuelto a regalar un regalo que no quería.",
      "Yo Nunca le he puesto a una pareja un mote de animal.",
      "Yo Nunca he creado una cuenta de Instagram falsa.",
      "Yo Nunca he gastado una broma telefónica.",
      "Yo Nunca he llorado de mentira para conseguir algo.",
      "Yo Nunca me he peleado con alguien.",
      "Yo Nunca me he teñido el pelo.",
      "Yo Nunca he pensado en cambiar de trabajo.",
      "Yo Nunca he pensado en cambiar de ciudad.",
      "Yo Nunca he mentido a nadie de este grupo.",
      "Yo Nunca he mentido sobre mi vida en Instagram.",
      "Yo nunca he perdido el trabajo por haber salido de fiesta y bebido mucho la noche anterior.",
      "Yo nunca he entrado en un trabajo por enchufe o contacto.",
      "Yo nunca he intentado seducir a un profesor/a.",
      "Yo nunca me he enamorado de un profesor/a.",
      "Yo nunca he jugado a la Ouija.",
      "Yo nunca he bebido antes de cumplir 18.",
      "Yo nunca he despertado en un lugar extraño porque iba muy borracho.",
      "Yo nunca he perdido la parte de abajo de mi traje de baño mientras estaba en la playa.",
      "Yo nunca he ido en pijama y zapatillas por la calle.",
      "Yo nunca lloré ni supliqué para librarme de una multa o de un castigo.",
      "Yo nunca he perdido el conocimiento.",
      "Yo nunca he tenido una pelea en un lugar público.",
      "Yo nunca he mentido sobre cuánto mido.",
      "Yo nunca he llorado por un famoso.",
      "Yo nunca he hecho que alguien tenga que ir al hospital.",
      "Yo nunca me he hecho un piercing en una zona innombrable.",
      "Yo nunca he estado más de una semana sin ducharme.",
      "Yo nunca he tenido una experiencia paranormal.",
      "Yo nunca he llevado la ropa interior al revés durante todo un día.",
      "Yo nunca he fingido encontrarme mal para no ir al trabajo",
      "Yo nunca he quedado muy en ridículo al intentar ligar con alguien.",
      "Yo nunca he bloqueado a alguien y luego lo he desbloqueado para stalkear",
      "Yo nunca he mandado un mensaje al destinatario equivocado y me arrepentí",
      "Yo nunca he fingido no ver el mensaje de alguien y lo dejé en visto",
      "Yo nunca he dicho que iba en camino estando en casa",
      "Yo nunca he creado un perfil falso en redes",
      "Yo nunca he cancelado planes con una excusa mentirosa",
      "Yo nunca he leído los mensajes del teléfono de otra persona",
      "Yo nunca he hablado mal de alguien presente en el grupo",
      "Yo nunca he fingido reírme de un chiste que no entendí",
      "Yo nunca he exagerado una historia para hacerla más interesante",
      "Yo nunca he usado la cuenta de streaming de alguien sin decirle",
      "Yo nunca he pedido consejo sobre algo que ya había decidido hacer",
      "Yo nunca he comprado algo caro y ocultado el precio",
      "Yo nunca he chequeado si alguien me borró de sus seguidores",
      "Yo nunca he dejado comida en el plato de otro para que parezca que comí más",
      "Yo nunca he fingido no tener dinero para no pagar algo",
      "Yo nunca he editado una foto tanto que ya no parecía yo",
      "Yo nunca he mandado un meme a alguien y me arrepentí inmediatamente",
      "Yo nunca he fingido estar ocupado para no responder una llamada",
      "Yo nunca he revisado cuántas veces alguien vio mi historia",
      "Yo nunca he borrado un mensaje antes de que lo leyeran",
      "Yo nunca he dicho 'estoy bien' cuando realmente no lo estaba",
      "Yo nunca he usado el modo avión para desaparecer un rato",
      "Yo nunca he stalkeado a la nueva pareja de un ex",
      "Yo nunca he terminado con alguien por WhatsApp",
      "Yo nunca he enamorado a propósito a alguien que no me gustaba",
      "Yo nunca me he ido de una cita a escondidas",
      "Yo nunca he mentido sobre dónde estuve",
      "Yo nunca he tenido un crush con alguien de este grupo",
      "Yo nunca he enviado una foto que no debería haber enviado",
      "Yo nunca he fingido estar bien cuando en realidad estaba destruido",
      "Yo nunca he hecho algo solo para dar envidia en redes sociales",
      "Yo nunca he investigado a la pareja o ex de alguien cercano",
      "Yo nunca he fingido no tener pareja ante alguien que me gustaba",
      "Yo nunca he dicho te quiero sin sentirlo de verdad",
      "Yo nunca he tenido una conversación completamente diferente cara a cara vs por texto",
      "Yo nunca he sentido algo romántico por alguien de este grupo",
      "Yo nunca he terminado una amistad sin dar ninguna explicación",
      "Yo nunca le he contado a alguien un secreto que me pidieron guardar",
      "Yo nunca he deseado que una relación ajena fracasara",
      "Yo nunca he dicho 'te quiero' y en ese momento no lo sentía",
      "Yo nunca he vuelto con alguien sabiendo que era mala idea",
      "Yo nunca he inventado una versión diferente de mí mismo para impresionar a alguien",
    ],
    2: [
      "Nunca he tenido sexo en un lugar público.",
      "Nunca me he tocado pensando en alguien que conozco.",
      "Nunca he enviado un mensaje subido de tono a la persona equivocada.",
      "Nunca he dicho el nombre equivocado en la cama.",
      "Nunca he tenido un amigo con derecho.",
      "Nunca me he acostado con alguien cuyo nombre no conozco.",
      "Nunca he estado en un sex shop.",
      "Nunca me he arrepentido de acostarme con alguien.",
      "Nunca me he arrepentido de besar a alguien.",
      "Nunca he hecho sexo tántrico.",
      "Yo Nunca he usado afrodisíacos.",
      "Yo Nunca he probado posturas del kamasutra.",
      "Yo Nunca me he arrepentido de perder mi virginidad con alguien.",
      "Yo Nunca he pasado más de un año sin tener sexo.",
      "Yo Nunca me he masturbado delante de alguien.",
      "Yo Nunca he coqueteado con alguien mucho mayor que yo.",
      "Yo Nunca he coqueteado con alguien mucho menor que yo.",
      "Yo Nunca he hecho un trío.",
      "Yo Nunca he tenido una cita a ciegas.",
      "Yo Nunca he tenido sexo en un tipo de transporte publico.",
      "Yo Nunca he enviado 'nudes'.",
      "Yo Nunca he fantaseado con un famoso.",
      "Yo Nunca he tenido relaciones con un famoso.",
      "Yo Nunca he tenido relaciones por dinero o por favores.",
      "Yo Nunca he tenido sexo en el mar/piscina.",
      "Yo Nunca he tenido una aventura de una noche.",
      "Yo Nunca he fingido un orgasmo.",
      "Yo Nunca he tenido sexo rápido con alguien.",
      "Yo Nunca he hecho o recibido un baile erótico.",
      "Yo Nunca me he acostado con un compañero de trabajo.",
      "Yo Nunca he vuelto con un ex.",
      "Yo Nunca he sido infiel.",
      "Yo Nunca me he acostado con un ex.",
      "Yo Nunca he fantaseado con un ex.",
      "Yo Nunca he mantenido una relación en secreto.",
      "Nunca me han descubierto mientras tenía relaciones sexuales.",
      "Yo Nunca he tenido un sueño erótico con alguien de esta habitación.",
      "Nunca he tenido un sueño sexual con alguien que la gente de esta habitación conozca.",
      "Yo Nunca he tenido un juguete sexual favorito.",
      "Yo Nunca he jugado a interpretar personajes en la cama.",
      "Nunca me han dado azotes en la cama.",
      "Yo Nunca me he depilado 'por si acaso'.",
      "Yo Nunca he hecho 'sexting'.",
      "Nunca he jugado al 'strip poker'.",
          ]
  },
// ===================================================
//  QUIEN — banco de preguntas
// ===================================================
  who: {
    1: [
      "¿Quién del grupo sería el primero en rendirse en una caminata?",
      "¿Quién sería el más probable de ganar un reality show de cocina?",
      "¿Quién siempre llega tarde a todo?",
      "¿Quién sería el mejor jefe?",
      "¿Quién tiene el historial de búsqueda más extraño?",
      "¿Quién sobreviviría más tiempo en una isla desierta?",
      "¿Quién sería el primero en llorar en una película triste?",
      "¿Quién es el peor guardando secretos?",
      "¿Quién del grupo es el más dramático?",
      "¿Quién sería el mejor en un concurso de baile?",
      "¿Quién comería lo más raro en un reto de comida?",
      "¿Quién del grupo duerme más horas?",
      "¿A quién le costarías más trabajo convencer de algo?",
      "¿Quién del grupo sería el más viral en TikTok?",
      "¿Quién sería el más peligroso al volante?",
      "¿Quién del grupo sería el mejor maestro de escuela?",
      "¿A quién del grupo le tiene más miedo al dentista?",
      "¿Quién sería el primero en comerse el postre antes del plato principal?",
      "¿Quién del grupo habla más sin decir nada importante?",
      "¿Quién tardaría más en hacer una maleta de emergencia?",
      "¿Quién sería el mejor guía turístico en una ciudad que no conoce?",
      "¿Quién es más probable que se pierda en un centro comercial?",
      "¿Quién del grupo tiene la colección de memes más grande?",
      "¿Quién sería el primero en pedir ayuda ensamblando un mueble de IKEA?",
      "¿Quién del grupo haría más amigos en un viaje en tren?",
      "¿Quién es más probable de quedarse dormido viendo una película?",
      "¿Quién del grupo sería el mejor en un concurso de karaoke?",
      "¿Quién del grupo sería el primero en gastar todo su dinero en algo innecesario?",
      "¿Quién sería más probable de volverse famoso de la nada?",
      "¿Quién del grupo sería el peor mintiendo?",
      "¿Quién sería el primero en perder su celular?",
      "¿Quién del grupo sería más probable de casarse primero?",
      "¿Quién sería el más probable de cancelar planes a último momento?",
      "¿Quién del grupo sería el más intenso en una relación?",
      "¿Quién sería el primero en quedarse sin batería?",
      "¿Quién del grupo sería más probable de iniciar un negocio?",
      "¿Quién sería el peor en un escape room?",
      "¿Quién del grupo sería el primero en rendirse en un juego difícil?",
      "¿Quién sería el más probable de olvidarse un cumpleaños importante?",
      "¿Quién del grupo sería el más competitivo?",
      "¿Quién sería el primero en pedir comida aunque ya haya comido?",
      "¿Quién del grupo sería el más probable de hablar con extraños?",
      "¿Quién sería el más probable de perder una apuesta ridícula?",
      "¿Quién del grupo sería el más confiado sin razón?",
      "¿Quién sería el primero en reírse en un momento serio?",
      "¿Quién del grupo sería más probable de hacerse influencer?",
      "¿Quién sería el más probable de enamorarse rápido?",
      "¿Quién del grupo sería el más flojo?",
      "¿Quién sería el más probable de decir algo fuera de lugar?",
      "¿Quién del grupo sería el primero en aburrirse en una fiesta?",
      "¿Quién sería el más probable de gastar dinero en ropa que no usa?",
      "¿Quién del grupo sería el más probable de olvidarse dónde dejó algo?",
      "¿Quién sería el primero en proponer un plan loco?",
      "¿Quién del grupo sería el más probable de hacerse viral por accidente?",
      "¿Quién sería el más probable de mentir para salir de un problema?",
      "¿Quién del grupo sería el más probable de perder un vuelo?",
      "¿Quién sería el más probable de sobrevivir sin celular una semana?",
      "¿Quién del grupo sería el más probable de caer en una broma?",
      "¿Quién sería el primero en quedarse sin dinero en un viaje?",
      "¿Quién del grupo sería el más probable de exagerar una historia?",
      "¿Quién sería el más probable de enamorarse de alguien imposible?",
      "¿Quién del grupo sería el más probable de quedarse atrapado en una situación incómoda?",
      "¿Quién sería el primero en olvidar lo que estaba diciendo?",
      "¿Quién del grupo sería el más probable de hacer el ridículo en público?",
      "¿Quién sería el más probable de llorar de risa?",
      "¿Quién del grupo sería el más probable de romper algo sin querer?",
      "¿Quién sería el más probable de quedarse sin palabras en una discusión?",
      "¿Quién del grupo sería el primero en perderse usando Google Maps?",
      "¿Quién sería el más probable de olvidar su propia contraseña?",
      "¿Quién del grupo sería el primero en romper algo caro sin querer?",
      "¿Quién sería el más probable de reírse en el peor momento?",
      "¿Quién del grupo sería el más probable de quedarse hablando solo?",
      "¿Quién sería el más probable de quedarse sin voz en una fiesta?",
      "¿Quién del grupo sería el más probable de hacer una compra impulsiva?",
      "¿Quién sería el más probable de quedarse dormido en una reunión importante?",
      "¿Quién del grupo sería el más probable de hacer drama por algo pequeño?",
      "¿Quién sería el más probable de confundirse de chat y enviar algo incómodo?",
      "¿Quién del grupo sería el más probable de perder las llaves?",
      "¿Quién sería el más probable de stalkear sin ser descubierto?",
      "¿Quién del grupo sería el más probable de inventar una excusa mala?",
      "¿Quién sería el más probable de hacer un viaje sin planear nada?",
      "¿Quién del grupo sería el más probable de quedarse sin internet en el peor momento?",
      "¿Quién sería el más probable de decir 'yo lo arreglo' y empeorarlo?",
      "¿Quién del grupo sería el más probable de repetir la misma historia mil veces?",
      "¿Quién sería el más probable de quedarse sin dinero a mitad de mes?",
      "¿Quién del grupo sería el más probable de confiar demasiado rápido?",
      "¿Quién sería el más probable de enviar un mensaje y arrepentirse?",
      "¿Quién del grupo sería el más probable de llegar al lugar equivocado?",
      "¿Quién sería el más probable de olvidar algo importante en casa?",
      "¿Quién del grupo sería el más probable de hacer reír a todos sin querer?",
      "¿Quién sería el más probable de meterse en problemas por curiosidad?",
      "¿Quién del grupo sería el más probable de perder una discusión aunque tenga razón?",
      "¿Quién sería el más probable de hacer amigos en menos de 5 minutos?",
      "¿Quién del grupo sería el más probable de romper una promesa pequeña?",
      "¿Quién sería el más probable de decir algo sin pensar?",
      "¿Quién del grupo sería el más probable de cambiar de opinión rápido?",
      "¿Quién sería el más probable de quedarse viendo videos hasta las 3am?",
      "¿Quién del grupo sería el más probable de olvidarse de responder mensajes?",
      "¿Quién sería el más probable de ser demasiado sincero?",
      "¿Quién del grupo sería el más probable de hacer una locura por diversión?",
      "¿Quién sería el más probable de perder el hilo de una conversación?",
      "¿Quién del grupo sería el más probable de hacer una broma pesada?",
      "¿Quién sería el más probable de exagerar una reacción?",
      "¿Quién del grupo sería el más probable de confiar en alguien equivocado?",
      "¿Quién sería el más probable de cambiar de humor en minutos?",
      "¿Quién del grupo sería el más probable de meterse en una situación incómoda?",
      "¿Quién sería el más probable de olvidar lo que iba a hacer?",
      "¿Quién del grupo sería el primero en caer en una estafa online?",
      "¿Quién sería el más probable de olvidar dónde estacionó?",
      "¿Quién del grupo sería el más probable de hacer un comentario incómodo?",
      "¿Quién sería el más probable de perder el celular en una fiesta?",
      "¿Quién del grupo sería el más probable de hablar dormido?",
      "¿Quién sería el más probable de quedarse viendo el celular ignorando a todos?",
      "¿Quién del grupo sería el más probable de hacerse el experto sin saber?",
      "¿Quién sería el más probable de reírse de su propio chiste?",
      "¿Quién del grupo sería el más probable de equivocarse de nombre?",
      "¿Quién sería el más probable de hacer una compra innecesaria en oferta?",
      "¿Quién del grupo sería el más probable de ser demasiado confiado?",
      "¿Quién sería el más probable de quedarse callado en una discusión?",
      "¿Quién del grupo sería el más probable de inventar una historia para impresionar?",
      "¿Quién sería el más probable de olvidar una cita importante?",
      "¿Quién del grupo sería el más probable de ser el más escandaloso?",
      "¿Quién sería el más probable de perder algo y culpar a otro?",
      "¿Quién del grupo sería el más probable de quedarse sin palabras en público?",
      "¿Quién sería el más probable de hacer algo impulsivo?",
      "¿Quién del grupo sería el más probable de arruinar una sorpresa?",
      "¿Quién sería el más probable de hacer drama por mensajes?",
      "¿Quién del grupo sería el más probable de quedarse pegado en redes sociales?",
      "¿Quién sería el más probable de decir algo y arrepentirse al instante?",
      "¿Quién del grupo sería el más probable de actuar sin pensar?",
      "¿Quién sería el más probable de perder la paciencia rápido?",
      "¿Quién del grupo sería el más probable de ser el más distraído?",
      "¿Quién sería el más probable de hacer una promesa y olvidarla?",
      "¿Quién del grupo sería el más probable de exagerar una anécdota?",
      "¿Quién sería el más probable de quedarse mirando al vacío pensando?",
      "¿Quién del grupo sería el más probable de no entender una broma?",
      "¿Quién sería el más probable de hacer el ridículo por diversión?",
      "¿Quién del grupo sería el más probable de quedarse sin ideas en un momento importante?",
      "¿Quién sería el más probable de hablar demasiado cuando está nervioso?",
      "¿Quién del grupo sería el más probable de ser el más impuntual?",
      "¿Quién sería el más probable de hacer una locura por presión del grupo?",
      "¿Quién del grupo sería el más probable de equivocarse en algo obvio?",
      "¿Quién sería el más probable de distraerse fácilmente?",
      "¿Quién del grupo sería el más probable de ser el más olvidadizo?",
      "¿Quién sería el más probable de no terminar lo que empieza?",
      "¿Quién del grupo sería el más probable de hacer reír incluso en momentos serios?",
      "¿Quién sería el más probable de quedarse sin reacción ante algo importante?",
      "¿Quién del grupo sería el primero en quedarse sin datos móviles?",
      "¿Quién sería el más probable de quedarse atrapado en un ascensor?",
      "¿Quién del grupo sería el más probable de olvidar cerrar sesión?",
      "¿Quién sería el más probable de perder una apuesta tonta?",
      "¿Quién del grupo sería el más probable de hacer algo vergonzoso sin darse cuenta?",
      "¿Quién sería el más probable de confundirse de persona en la calle?",
      "¿Quién del grupo sería el más probable de exagerar una lesión?",
      "¿Quién sería el más probable de quedarse viendo series toda la noche?",
      "¿Quién del grupo sería el más probable de decir 'ya voy' y no ir?",
      "¿Quién sería el más probable de meterse en problemas por hablar de más?",
      "¿Quién del grupo sería el más probable de olvidar lo que iba a decir a mitad de frase?",
      "¿Quién sería el más probable de quedarse sin batería en el peor momento?",
      "¿Quién del grupo sería el más probable de hacer una broma en el momento equivocado?",
      "¿Quién sería el más probable de confiar en alguien sospechoso?",
      "¿Quién del grupo sería el más probable de hacer una escena sin querer?",
      "¿Quién sería el más probable de reírse cuando no debe?",
      "¿Quién del grupo sería el más probable de quedarse dormido en el transporte?",
      "¿Quién sería el más probable de perder tiempo viendo cosas sin sentido?",
      "¿Quién del grupo sería el más probable de no darse cuenta de algo obvio?",
      "¿Quién sería el más probable de enviar un audio larguísimo?",
      "¿Quién del grupo sería el más probable de cambiar de tema sin razón?",
      "¿Quién sería el más probable de quedarse callado cuando debería hablar?",
      "¿Quién del grupo sería el más probable de hablar cuando debería callarse?",
      "¿Quién sería el más probable de olvidar responder algo importante?",
      "¿Quién del grupo sería el más probable de hacer algo impulsivo por emoción?",
      "¿Quién sería el más probable de distraerse con cualquier cosa?",
      "¿Quién del grupo sería el más probable de ser el más indeciso?",
      "¿Quién sería el más probable de tomar la peor decisión en un momento clave?",
      "¿Quién del grupo sería el más probable de hacer algo solo por presión social?",
      "¿Quién sería el más probable de no entender una situación incómoda?",
      "¿Quién del grupo sería el más probable de ser el más exagerado?",
      "¿Quién sería el más probable de perder el control en un juego competitivo?",
      "¿Quién del grupo sería el más probable de hacer algo ridículo por diversión?",
      "¿Quién sería el más probable de quedarse sin reacción ante una sorpresa?",
      "¿Quién del grupo sería el más probable de confundirse en algo básico?",
      "¿Quién sería el más probable de ser el más desordenado?",
      "¿Quién del grupo sería el más probable de dejar todo para último momento?",
      "¿Quién sería el más probable de no aprender de sus errores?",
      "¿Quién del grupo sería el más probable de hacer algo sin pensar en consecuencias?",
      "¿Quién sería el más probable de meterse en problemas sin querer?"
    ],
    2: [
      "¿Quién del grupo es más probable que haya llorado con una película de Disney?",
      "¿Quién miente con la cara más seria?",
      "¿Quién es más probable que se case primero?",
      "¿A quién llamarías si necesitas ayuda a las 3am?",
      "¿Quién sería el peor candidato presidencial?",
      "¿Quién del grupo tiene el ex más complicado?",
      "¿Quién es el más probable de olvidar un aniversario importante?",
      "¿Quién del grupo habla más de sí mismo?",
      "¿Quién es el más probable de gastar todo su dinero en un día?",
      "¿A quién del grupo le costaría más vivir sin su teléfono por una semana?",
      "¿Quién del grupo tiene la relación más complicada con su familia?",
      "¿Quién es más probable de ser el último en enterarse de un chisme?",
      "¿Quién del grupo cambiaría de opinión más fácilmente ante la presión?",
      "¿Quién sería el primero en confesar si cometiera un error grande?",
      "¿Quién del grupo es el más probable de tener una crisis existencial un martes?",
      "¿Quién del grupo daría el mejor discurso de boda improvisado?",
      "¿Quién es más probable de tener una playlist diferente según su estado de ánimo?",
      "¿Quién del grupo es más probable que llore en su propia fiesta de cumpleaños?",
      "¿Quién adaptaría mejor su personalidad según la persona que tiene enfrente?",
      "¿Quién es el que menos pide perdón y más cree que tiene razón?",
      "¿Quién del grupo tiene el grupo de WhatsApp más activo fuera de este?",
      "¿Quién es más probable de reenviar un bulo como si fuera verdad?",
      "¿Quién del grupo tomaría la peor decisión financiera si ganara la lotería?",
      "¿Quién del grupo tiene el ex más dramático?",
      "¿Quién rompería primero las reglas en un experimento social?",
      "¿Quién del grupo crees que tiene secretos más oscuros?",
      "¿Quién del grupo cambiaría más si tuviera mucho dinero?",
      "¿Quién es el más hipócrita del grupo cuando nadie lo ve?",
      "¿A quién del grupo le cuesta más pedir perdón sinceramente?",
      "¿Quién del grupo es más probable que haya hecho algo ilegal sin darse cuenta?",
      "¿Quién manda más mensajes de voz de más de 2 minutos?",
      "¿Quién del grupo es el que más veces ha dicho 'yo no soy así' y sí lo es?",
      "¿Quién del grupo sobreviviría mejor en una relación tóxica sin notarlo?",
      "¿A quién del grupo le cuesta más vivir en el presente?",
      "¿Quién es más probable de enamorarse de alguien que le está mal?",
      "¿Quién del grupo manipularía más sutilmente en una negociación?",
      "¿Quién crees que guarda más rencores de los que admite?",
      "¿Quién del grupo es más probable que llore escuchando una canción de desamor a las 2am?",
      "¿Quién del grupo tiene la historia de vida más interesante para una película?",
      "¿Quién es más probable de bloquearte sin previo aviso si se enoja?",
      "¿Quién del grupo ha cambiado más en los últimos 2 años?",
      "¿Quién es el que más aparenta tenerlo todo bajo control pero por dentro no?",
    ]
  }
};

// ===================================================
//  VS QUESTIONS — chicos sobre chicas y viceversa
// ===================================================
const VS_QUESTIONS = {
  // preguntas para CHICOS sobre CHICAS
  m: [
    "¿Cuánto tiempo tarda una chica promedio en arreglarse para salir?",
    "¿Qué significa 'estoy bien' cuando una chica lo dice con tono seco?",
    "¿Qué hace una chica típicamente cuando está enojada pero no quiere decirlo?",
    "¿Por qué las chicas van al baño en grupo?",
    "¿Qué es lo primero que nota una chica cuando conoce a alguien nuevo?",
    "¿Cuántos pares de zapatos tiene en promedio una chica en su clóset?",
    "¿Qué significa cuando una chica dice 'no importa'?",
    "¿Qué es un 'dry text' y por qué les molesta tanto a las chicas?",
    "¿Qué espera una chica cuando le cuenta un problema a alguien?",
    "¿Cuántos mensajes sin respuesta antes de que una chica asuma que la están ignorando?",
    "¿Qué se entiende por 'breadcrumbing' en el mundo de las relaciones?",
    "¿Qué significa que una chica te mande un meme sin texto?",
    "¿Por qué les importa tanto a las chicas el detalle de recordar cosas pequeñas?",
    "¿Qué hace una chica cuando le gusta alguien pero no quiere parecer obvia?",
    "¿Qué significa que alguien te responda con un simple 'ok' sin punto?",
    "¿Cuál es la diferencia entre 'no tengo hambre' y 'no tengo hambre' según el contexto?",
    "¿Qué es lo que más molesta a las chicas de cómo se comunican los chicos?",
    "¿Por qué las chicas dicen 'tú decide' pero en realidad ya decidieron?",
    "¿Qué significa que una chica deje de mandarte memes de repente?",
    "¿Qué hace una chica cuando está esperando que le pidas disculpas?",
    "¿Por qué una chica guarda conversaciones aunque ya pasó mucho tiempo?",
    "¿Qué significa que una chica te responda solo con 'ok' después de una discusión?",
    "¿Por qué las chicas analizan tanto el tono de un mensaje de texto?",
    "¿Qué pasa cuando una chica dice 'haz lo que quieras' en serio?",
    "¿Por qué las chicas recuerdan exactamente lo que dijiste hace 3 años?",
    "¿Qué significa que una chica deje de subir historias de repente?",
    "¿Por qué las chicas piden opinión sobre un outfit si ya eligieron qué ponerse?",
    "¿Qué hace una chica cuando quiere llamar la atención pero no quiere pedirlo directamente?",
    "¿Por qué las chicas siempre saben cuándo algo 'está raro' en la dinámica del grupo?",
    "¿Qué significa cuando una chica tarda mucho en responder pero luego sube historias?",
    "¿Por qué una chica dice 'nada' cuando claramente le pasa algo?",
    "¿Qué significa cuando una chica cambia su forma de escribir de un día para otro?",
    "¿Por qué una chica revisa varias veces un mensaje antes de enviarlo?",
    "¿Qué significa cuando una chica se ríe de todo lo que dices?",
    "¿Por qué una chica elimina y vuelve a subir una historia?",
    "¿Qué hace una chica cuando revisa el perfil de alguien que le gusta?",
    "¿Qué significa cuando una chica te deja en visto pero luego te escribe como si nada?",
    "¿Por qué una chica se enoja si no reaccionas a su historia?",
    "¿Qué significa cuando una chica menciona a otro chico en conversación?",
    "¿Qué hace una chica cuando quiere poner celoso a alguien?",
    "¿Por qué una chica guarda capturas de conversaciones?",
    "¿Qué significa cuando una chica te responde con emojis pero sin texto?",
    "¿Por qué una chica dice 'no salgo' pero luego sí sale con otras personas?",
    "¿Qué significa cuando una chica te dice 'solo eres mi amigo'?",
    "¿Qué hace una chica cuando alguien le gusta pero no le escribe primero?",
    "¿Por qué una chica cambia de humor rápidamente en una conversación?",
    "¿Qué significa cuando una chica te manda indirectas en historias?",
    "¿Por qué una chica compara lo que haces con lo que hacen otros chicos?",
    "¿Qué hace una chica cuando se siente ignorada?",
    "¿Qué significa cuando una chica te responde diferente en persona que por chat?",
    "¿Por qué una chica deja de reaccionar a tus mensajes de repente?",
    "¿Qué significa cuando una chica te cuenta cosas personales muy rápido?",
    "¿Qué hace una chica cuando quiere terminar una conversación sin decirlo directamente?",
    "¿Por qué una chica prueba tu interés con preguntas indirectas?",
    "¿Qué significa cuando una chica se arregla más de lo normal para verte?",
    "¿Por qué una chica te responde seco después de estar cariñosa?",
    "¿Qué hace una chica cuando sospecha algo pero no tiene pruebas?",
    "¿Qué significa cuando una chica te manda TikToks relacionados contigo?",
    "¿Por qué una chica deja pistas en vez de decir las cosas directamente?",
    "¿Qué significa cuando una chica responde con 'jajaja' en vez de seguir la conversación?",
    "¿Por qué una chica puede ignorar a alguien que le gusta?",
    "¿Qué hace una chica cuando quiere saber si la estás pensando?",
    "¿Qué significa cuando una chica te manda fotos sin contexto?",
    "¿Por qué una chica cambia su actitud dependiendo de quién esté presente?",
    "¿Qué hace una chica cuando siente que no es tu prioridad?",
    "¿Qué significa cuando una chica te escribe y luego borra el mensaje?",
    "¿Por qué una chica puede volverse más cariñosa de repente?",
    "¿Qué hace una chica cuando quiere que le pidas salir?",
    "¿Qué significa cuando una chica te menciona indirectamente en historias?",
    "¿Por qué una chica puede enojarse por algo que tú consideras pequeño?",
    "¿Qué hace una chica cuando quiere comprobar si estás celoso?",
    "¿Qué significa cuando una chica se queda callada en una discusión?",
    "¿Por qué una chica puede responder diferente en público que en privado?",
    "¿Qué hace una chica cuando siente que algo 'no cuadra'?",
    "¿Qué significa cuando una chica te manda selfies seguido?",
    "¿Por qué una chica puede dejar de hablarte sin explicación?",
    "¿Qué hace una chica cuando quiere retomar contacto después de tiempo?",
    "¿Qué significa cuando una chica te habla de otros chicos?",
    "¿Por qué una chica puede exagerar una reacción?",
    "¿Qué hace una chica cuando quiere sentirse especial?",
    "¿Qué significa cuando una chica te prueba con preguntas incómodas?",
    "¿Por qué una chica puede decir una cosa pero esperar otra?",
    "¿Qué hace una chica cuando siente que la estás perdiendo?",
    "¿Qué significa cuando una chica cambia su tono contigo de forma repentina?",
    "¿Por qué una chica puede buscar excusas para escribirte?",
    "¿Qué hace una chica cuando quiere saber tus intenciones reales?",
    "¿Qué significa cuando una chica deja de reaccionar a tus historias?",
    "¿Por qué una chica puede actuar indiferente aunque le importes?",
    "¿Qué hace una chica cuando quiere cerrar una etapa sin decirlo directamente?",
    "¿Qué significa cuando una chica te deja en visto pero sigue activa?",
  "¿Por qué una chica puede reírse contigo y luego ignorarte?",
  "¿Qué hace una chica cuando quiere saber si estás interesado sin preguntarlo?",
  "¿Qué significa cuando una chica responde diferente según su estado de ánimo?",
  "¿Por qué una chica puede desaparecer después de una buena conversación?",
  "¿Qué hace una chica cuando quiere sentirse valorada?",
  "¿Qué significa cuando una chica te incluye en sus planes y luego los cancela?",
  "¿Por qué una chica puede sobrepensar un mensaje simple?",
  "¿Qué hace una chica cuando quiere saber si eres celoso?",
  "¿Qué significa cuando una chica te habla bonito y luego cambia?",
  "¿Por qué una chica puede evitarte si le gustas mucho?",
  "¿Qué hace una chica cuando quiere que tomes iniciativa?",
  "¿Qué significa cuando una chica te responde solo cuando tú escribes?",
  "¿Por qué una chica puede actuar distante después de acercarse?",
  "¿Qué hace una chica cuando siente que no estás siendo claro?",
  "¿Qué significa cuando una chica te manda indirectas y luego las niega?",
  "¿Por qué una chica puede molestarse por detalles pequeños?",
  "¿Qué hace una chica cuando quiere saber si estás hablando con otras?",
  "¿Qué significa cuando una chica cambia su actitud sin avisar?",
  "¿Por qué una chica puede probar tu paciencia?",
  "¿Qué hace una chica cuando quiere que insistas un poco más?",
  "¿Qué significa cuando una chica te responde con sarcasmo?",
  "¿Por qué una chica puede reaccionar diferente en chat y en persona?",
  "¿Qué hace una chica cuando quiere volver pero no quiere escribir primero?",
  "¿Qué significa cuando una chica se muestra indiferente a propósito?",
  "¿Por qué una chica puede comparar lo que haces con lo que espera?",
  "¿Qué hace una chica cuando siente que pierde control emocional?",
  "¿Qué significa cuando una chica te habla más cuando está sola?",
  "¿Por qué una chica puede actuar fría después de ser cariñosa?",
  "¿Qué hace una chica cuando quiere saber si eres constante?"
  ],
  // preguntas para CHICAS sobre CHICOS
  f: [
    "¿Por qué los chicos dicen 'estoy bien' aunque claramente no lo están?",
    "¿Qué significa cuando un chico deja de responder rápido de un día para otro?",
    "¿Por qué los chicos no piden direcciones aunque estén perdidos?",
    "¿Qué piensa un chico cuando le dices 'haz lo que quieras'?",
    "¿Por qué los chicos no pueden hacer varias cosas a la vez según el estereotipo?",
    "¿Qué es el 'modo cueva' que entran los chicos cuando están estresados?",
    "¿Qué significa cuando un chico te responde con un audio de 30 segundos en vez de texto?",
    "¿Por qué los chicos no mencionan problemas emocionales hasta que ya explotaron?",
    "¿Qué hace un chico cuando le gusta alguien pero tiene miedo al rechazo?",
    "¿Qué significa que un chico te diga 'estaba ocupado' sin más explicación?",
    "¿Por qué los chicos compiten entre sí aunque digan que no les importa?",
    "¿Qué significa cuando un chico te presenta a sus amigos?",
    "¿Por qué los chicos insisten en cargar las bolsas aunque pesen mil kilos?",
    "¿Qué quiere decir un chico cuando dice 'no es nada' con cara de que sí es algo?",
    "¿Por qué los chicos guardan tanto el teléfono boca abajo?",
    "¿Qué significa que un chico te escriba a las 11pm con un '¿qué haces?'?",
    "¿Por qué los chicos prefieren resolver el problema en vez de hablar del problema?",
    "¿Qué hace un chico cuando está celoso pero no lo quiere admitir?",
    "¿Qué significa que un chico te presente como 'mi amiga' ante sus conocidos?",
    "¿Por qué los chicos dicen 'ya voy' y aparecen 45 minutos después?",
    "¿Por qué los chicos se ofenden cuando alguien les da indicaciones de cómo manejar?",
    "¿Qué significa que un chico te proponga 'ver una peli' a las 10pm?",
    "¿Por qué los chicos se ponen en silencio cuando están procesando algo emocionalmente?",
    "¿Qué hace un chico cuando quiere reconciliarse pero no sabe cómo empezar?",
    "¿Por qué los chicos evitan hablar de sus sentimientos en grupo?",
    "¿Qué significa que un chico diga 'tú sabes cómo soy yo' como excusa?",
    "¿Por qué los chicos necesitan tiempo 'solos' después de un conflicto antes de hablar?",
    "¿Qué hace un chico cuando está deprimido y no quiere que nadie se dé cuenta?",
    "¿Por qué los chicos dicen que no les importa algo y luego sí les importa?",
    "¿Por qué un chico puede estar horas jugando pero no responder un mensaje?",
    "¿Qué significa cuando un chico te responde solo con memes?",
    "¿Por qué un chico desaparece varios días y luego vuelve como si nada?",
    "¿Qué hace un chico cuando revisa el perfil de alguien que le gusta?",
    "¿Qué significa cuando un chico te habla más de noche que de día?",
    "¿Por qué un chico evita definir la relación?",
    "¿Qué significa cuando un chico te dice 'vemos' en vez de confirmar?",
    "¿Por qué un chico mira tu historia pero no te escribe?",
    "¿Qué hace un chico cuando quiere impresionarte sin que se note?",
    "¿Qué significa cuando un chico te invita a planes de último momento?",
    "¿Por qué un chico tarda en responder pero está en línea?",
    "¿Qué significa cuando un chico cambia su tono de conversación contigo?",
    "¿Por qué un chico hace bromas cuando la conversación se pone seria?",
    "¿Qué hace un chico cuando está nervioso frente a alguien que le gusta?",
    "¿Qué significa cuando un chico te incluye en sus planes a futuro?",
    "¿Por qué un chico evita conversaciones incómodas?",
    "¿Qué significa cuando un chico te cuenta problemas personales?",
    "¿Por qué un chico deja de reaccionar a tus mensajes de repente?",
    "¿Qué hace un chico cuando quiere saber si te gusta sin preguntarlo directamente?",
    "¿Qué significa cuando un chico se pone competitivo contigo jugando o en algo?",
    "¿Por qué un chico dice 'ya casi llego' cuando recién está saliendo?",
    "¿Qué significa cuando un chico se acuerda de detalles pequeños sobre ti?",
    "¿Por qué un chico actúa diferente cuando está con sus amigos?",
    "¿Qué hace un chico cuando siente que está perdiendo tu interés?",
    "¿Qué significa cuando un chico responde rápido un día y lento al siguiente?",
    "¿Por qué un chico evita hablar de lo que siente pero actúa diferente?",
    "¿Qué hace un chico cuando quiere volver a hablar contigo después de tiempo?",
    "¿Qué significa cuando un chico te manda reels relacionados contigo?",
    "¿Por qué un chico no corta una conversación aunque ya no tenga mucho que decir?",
    "¿Qué hace un chico cuando realmente está interesado pero no quiere parecer intenso?",
    "¿Qué significa cuando un chico responde con un simple 'ok' y nada más?",
    "¿Por qué un chico puede hablarte mucho y luego desaparecer días?",
    "¿Qué hace un chico cuando quiere llamar tu atención sin escribirte?",
    "¿Qué significa cuando un chico te mira pero no se acerca?",
    "¿Por qué un chico puede ponerse serio de repente?",
    "¿Qué hace un chico cuando siente que está perdiendo control de la situación?",
    "¿Qué significa cuando un chico te escribe y luego corta la conversación rápido?",
    "¿Por qué un chico puede actuar más frío frente a otras personas?",
    "¿Qué hace un chico cuando no sabe cómo expresar lo que siente?",
    "¿Qué significa cuando un chico te busca solo en ciertos momentos?",
    "¿Por qué un chico puede evitar verte aunque le gustes?",
    "¿Qué hace un chico cuando quiere saber si estás interesada sin preguntarlo?",
    "¿Qué significa cuando un chico cambia su forma de hablar contigo?",
    "¿Por qué un chico puede responder con humor cuando algo es serio?",
    "¿Qué hace un chico cuando siente presión en una relación?",
    "¿Qué significa cuando un chico deja de iniciar conversaciones?",
    "¿Por qué un chico puede seguir pendiente de ti sin hablarte?",
    "¿Qué hace un chico cuando quiere recuperar tu atención?",
    "¿Qué significa cuando un chico te responde pero sin interés?",
    "¿Por qué un chico puede confundirte con sus acciones?",
    "¿Qué hace un chico cuando siente que lo estás evaluando?",
    "¿Qué significa cuando un chico te habla más cuando nadie lo ve?",
    "¿Por qué un chico puede evitar comprometerse aunque le gustes?",
    "¿Qué hace un chico cuando quiere acercarse poco a poco?",
    "¿Qué significa cuando un chico te incluye en su rutina diaria?",
    "¿Por qué un chico puede actuar distante después de un momento cercano?",
    "¿Qué hace un chico cuando no quiere perderte pero tampoco comprometerse?",
    "¿Qué significa cuando un chico cambia de actitud sin explicación?",
    "¿Por qué un chico puede seguir ahí aunque no avance la relación?",
    "¿Qué hace un chico cuando realmente le importas pero no lo demuestra bien?",
    "¿Qué significa cuando un chico ve tu mensaje y no responde?",
    "¿Por qué un chico puede desaparecer justo cuando todo iba bien?",
    "¿Qué hace un chico cuando quiere espacio pero no quiere perderte?",
    "¿Qué significa cuando un chico te responde seco de repente?",
    "¿Por qué un chico puede evitar conversaciones importantes?",
    "¿Qué hace un chico cuando quiere verte pero no lo dice directo?",
    "¿Qué significa cuando un chico te habla solo en ciertos horarios?",
    "¿Por qué un chico puede cambiar su actitud sin explicación?",
    "¿Qué hace un chico cuando siente que te estás alejando?",
    "¿Qué significa cuando un chico responde pero no muestra interés?",
    "¿Por qué un chico puede actuar normal después de algo intenso?",
    "¿Qué hace un chico cuando no sabe qué quiere?",
    "¿Qué significa cuando un chico te incluye pero no se compromete?",
    "¿Por qué un chico puede seguir ahí sin avanzar?",
    "¿Qué hace un chico cuando quiere llamar tu atención indirectamente?",
    "¿Qué significa cuando un chico te habla bonito pero no actúa igual?",
    "¿Por qué un chico puede confundirte con sus acciones?",
    "¿Qué hace un chico cuando siente que lo estás ignorando?",
    "¿Qué significa cuando un chico evita verte en persona?",
    "¿Por qué un chico puede actuar diferente frente a sus amigos?",
    "¿Qué hace un chico cuando quiere recuperar una conversación perdida?",
    "¿Qué significa cuando un chico responde tarde pero sigue interesado?",
    "¿Por qué un chico puede no ser claro con sus intenciones?",
    "¿Qué hace un chico cuando le gustas pero no quiere algo serio?",
    "¿Qué significa cuando un chico te escribe pero no concreta planes?",
    "¿Por qué un chico puede evitar definir la relación?",
    "¿Qué hace un chico cuando siente presión emocional?",
    "¿Qué significa cuando un chico vuelve después de desaparecer?",
    "¿Por qué un chico puede actuar distante sin motivo claro?",
    "¿Qué hace un chico cuando no quiere perderte pero tampoco avanzar?"
  ]
};

// ===================================================
//  CARTAS ESPECIALES
// ===================================================

// ===================================================
//  IMPOSTOR — banco de palabras por categoría
// ===================================================
const IMPOSTOR_WORDS = {
  comida: [
    { word: 'Pizza', cat: 'Comida' },
    { word: 'Sushi', cat: 'Comida' },
    { word: 'Tacos', cat: 'Comida' },
    { word: 'Hamburguesa', cat: 'Comida' },
    { word: 'Helado', cat: 'Comida' },
    { word: 'Spaghetti', cat: 'Comida' },
    { word: 'Arepa', cat: 'Comida' },
    { word: 'Ramen', cat: 'Comida' },
    { word: 'Empanada', cat: 'Comida' },
    { word: 'Hot Dog', cat: 'Comida' },
    { word: 'Ceviche', cat: 'Comida' },
    { word: 'Paella', cat: 'Comida' },
    { word: 'Lasagna', cat: 'Comida' },
    { word: 'Pollo a la brasa', cat: 'Comida' },
    { word: 'Ensalada', cat: 'Comida' },
    { word: 'Panqueques', cat: 'Comida' },
    { word: 'Chifa', cat: 'Comida' },
    { word: 'Causa', cat: 'Comida' },
    { word: 'Lomo saltado', cat: 'Comida' },
    { word: 'Tamales', cat: 'Comida' },
    { word: 'Salchipapas', cat: 'Comida' },
    { word: 'Gelatina', cat: 'Comida' },
    { word: 'Arroz con pollo', cat: 'Comida' },
    { word: 'Churros', cat: 'Comida' },
    { word: 'Pachamanca', cat: 'Comida' },
    { word: 'Carapulcra', cat: 'Comida' },
    { word: 'Seco de carne', cat: 'Comida' },
    { word: 'Pollo al horno', cat: 'Comida' },
    { word: 'Milanesa', cat: 'Comida' },
    { word: 'Tallarines verdes', cat: 'Comida' },
    { word: 'Arroz con huevo', cat: 'Comida' },
    { word: 'Sándwich', cat: 'Comida' },
    { word: 'Empanadas dulces', cat: 'Comida' },
    { word: 'Flan', cat: 'Comida' },
    { word: 'Mazamorra', cat: 'Comida' },
    { word: 'Gelatina', cat: 'Comida' },
  ],
  lugares: [
    { word: 'Playa', cat: 'Lugar' },
    { word: 'Aeropuerto', cat: 'Lugar' },
    { word: 'Hospital', cat: 'Lugar' },
    { word: 'Casino', cat: 'Lugar' },
    { word: 'Gimnasio', cat: 'Lugar' },
    { word: 'Supermercado', cat: 'Lugar' },
    { word: 'Cine', cat: 'Lugar' },
    { word: 'Discoteca', cat: 'Lugar' },
    { word: 'Estadio', cat: 'Lugar' },
    { word: 'Biblioteca', cat: 'Lugar' },
    { word: 'Zoológico', cat: 'Lugar' },
    { word: 'Hotel', cat: 'Lugar' },
    { word: 'Parque', cat: 'Lugar' },
    { word: 'Centro comercial', cat: 'Lugar' },
    { word: 'Restaurante', cat: 'Lugar' },
    { word: 'Bar', cat: 'Lugar' },
    { word: 'Escuela', cat: 'Lugar' },
    { word: 'Universidad', cat: 'Lugar' },
    { word: 'Iglesia', cat: 'Lugar' },
    { word: 'Mercado', cat: 'Lugar' },
    { word: 'Cancha', cat: 'Lugar' },
    { word: 'Piscina', cat: 'Lugar' },
    { word: 'Terminal', cat: 'Lugar' },
    { word: 'Montaña', cat: 'Lugar' },
    { word: 'Banco', cat: 'Lugar' },
    { word: 'Farmacia', cat: 'Lugar' },
    { word: 'Panadería', cat: 'Lugar' },
    { word: 'Tienda', cat: 'Lugar' },
    { word: 'Carretera', cat: 'Lugar' },
    { word: 'Puente', cat: 'Lugar' },
    { word: 'Bosque', cat: 'Lugar' },
    { word: 'Desierto', cat: 'Lugar' },
    { word: 'Isla', cat: 'Lugar' },
    { word: 'Cabaña', cat: 'Lugar' },
    { word: 'Campamento', cat: 'Lugar' },
    { word: 'Mirador', cat: 'Lugar' },
    { word: 'Cancha de fútbol', cat: 'Lugar' },
    { word: 'Cancha de básquet', cat: 'Lugar' },
    { word: 'Paradero', cat: 'Lugar' },
    { word: 'Callejón', cat: 'Lugar' },
    { word: 'Azotea', cat: 'Lugar' },
    { word: 'Garaje', cat: 'Lugar' },
    { word: 'Patio', cat: 'Lugar' },
    { word: 'Jardín', cat: 'Lugar' },
    { word: 'Plaza', cat: 'Lugar' },
    { word: 'Cementerio', cat: 'Lugar' },
    { word: 'Mirador turístico', cat: 'Lugar' },
    { word: 'Hostal', cat: 'Lugar' },
  ],
  objetos: [
    { word: 'Paraguas', cat: 'Objeto' },
    { word: 'Espejo', cat: 'Objeto' },
    { word: 'Despertador', cat: 'Objeto' },
    { word: 'Mochila', cat: 'Objeto' },
    { word: 'Cargador', cat: 'Objeto' },
    { word: 'Candado', cat: 'Objeto' },
    { word: 'Calculadora', cat: 'Objeto' },
    { word: 'Tijeras', cat: 'Objeto' },
    { word: 'Linterna', cat: 'Objeto' },
    { word: 'Termómetro', cat: 'Objeto' },
    { word: 'Brújula', cat: 'Objeto' },
    { word: 'Traje', cat: 'Objeto' },
    { word: 'Laptop', cat: 'Objeto' },
    { word: 'Audífonos', cat: 'Objeto' },
    { word: 'Botella', cat: 'Objeto' },
    { word: 'Llaves', cat: 'Objeto' },
    { word: 'Reloj', cat: 'Objeto' },
    { word: 'Control remoto', cat: 'Objeto' },
    { word: 'Ventilador', cat: 'Objeto' },
    { word: 'Silla', cat: 'Objeto' },
    { word: 'Mesa', cat: 'Objeto' },
    { word: 'Cuaderno', cat: 'Objeto' },
    { word: 'Lapicero', cat: 'Objeto' },
    { word: 'Televisor', cat: 'Objeto' },
    { word: 'Celular', cat: 'Objeto' },
    { word: 'Tablet', cat: 'Objeto' },
    { word: 'Cámara', cat: 'Objeto' },
    { word: 'Micrófono', cat: 'Objeto' },
    { word: 'Parlante', cat: 'Objeto' },
    { word: 'Cuchillo', cat: 'Objeto' },
    { word: 'Tenedor', cat: 'Objeto' },
    { word: 'Vaso', cat: 'Objeto' },
    { word: 'Plato', cat: 'Objeto' },
    { word: 'Cama', cat: 'Objeto' },
    { word: 'Almohada', cat: 'Objeto' },
    { word: 'Cobija', cat: 'Objeto' },
    { word: 'USB', cat: 'Objeto' },
    { word: 'Disco duro', cat: 'Objeto' },
    { word: 'Mouse', cat: 'Objeto' },
    { word: 'Teclado', cat: 'Objeto' },
    { word: 'Lámpara', cat: 'Objeto' },
    { word: 'Extensión', cat: 'Objeto' },
    { word: 'Candela', cat: 'Objeto' },
    { word: 'Encendedor', cat: 'Objeto' },
    { word: 'Escoba', cat: 'Objeto' },
    { word: 'Trapeador', cat: 'Objeto' },
    { word: 'Basurero', cat: 'Objeto' },
    { word: 'Perchero', cat: 'Objeto' },
  ],
  animales: [
    { word: 'Pingüino', cat: 'Animal' },
    { word: 'Pulpo', cat: 'Animal' },
    { word: 'Delfín', cat: 'Animal' },
    { word: 'Cocodrilo', cat: 'Animal' },
    { word: 'Panda', cat: 'Animal' },
    { word: 'Avestruz', cat: 'Animal' },
    { word: 'Camaleón', cat: 'Animal' },
    { word: 'Murciélago', cat: 'Animal' },
    { word: 'Flamenco', cat: 'Animal' },
    { word: 'Puercoespín', cat: 'Animal' },
    { word: 'Axolote', cat: 'Animal' },
    { word: 'Mantarraya', cat: 'Animal' },
    { word: 'León', cat: 'Animal' },
    { word: 'Tigre', cat: 'Animal' },
    { word: 'Elefante', cat: 'Animal' },
    { word: 'Perro', cat: 'Animal' },
    { word: 'Gato', cat: 'Animal' },
    { word: 'Caballo', cat: 'Animal' },
    { word: 'Mono', cat: 'Animal' },
    { word: 'Lobo', cat: 'Animal' },
    { word: 'Zorro', cat: 'Animal' },
    { word: 'Jirafa', cat: 'Animal' },
    { word: 'Tortuga', cat: 'Animal' },
    { word: 'Águila', cat: 'Animal' },
    { word: 'Serpiente', cat: 'Animal' },
    { word: 'Rana', cat: 'Animal' },
    { word: 'Sapo', cat: 'Animal' },
    { word: 'Cebra', cat: 'Animal' },
    { word: 'Hipopótamo', cat: 'Animal' },
    { word: 'Rinoceronte', cat: 'Animal' },
    { word: 'Canguro', cat: 'Animal' },
    { word: 'Koala', cat: 'Animal' },
    { word: 'Ardilla', cat: 'Animal' },
    { word: 'Castor', cat: 'Animal' },
    { word: 'Búho', cat: 'Animal' },
    { word: 'Halcón', cat: 'Animal' },
    { word: 'Gallina', cat: 'Animal' },
    { word: 'Gallo', cat: 'Animal' },
    { word: 'Pato', cat: 'Animal' },
    { word: 'Oveja', cat: 'Animal' },
    { word: 'Cabra', cat: 'Animal' },
    { word: 'Toro', cat: 'Animal' },
    { word: 'Vaca', cat: 'Animal' },
    { word: 'Burro', cat: 'Animal' },
    { word: 'Llama', cat: 'Animal' },
    { word: 'Alpaca', cat: 'Animal' },
    { word: 'Cóndor', cat: 'Animal' },
    { word: 'Puma', cat: 'Animal' },
  ],
  profesiones: [
    { word: 'Espía', cat: 'Profesión' },
    { word: 'Cirujano', cat: 'Profesión' },
    { word: 'Astronauta', cat: 'Profesión' },
    { word: 'Chef', cat: 'Profesión' },
    { word: 'Detective', cat: 'Profesión' },
    { word: 'Bombero', cat: 'Profesión' },
    { word: 'Payaso', cat: 'Profesión' },
    { word: 'Modelo', cat: 'Profesión' },
    { word: 'Piloto', cat: 'Profesión' },
    { word: 'Taxista', cat: 'Profesión' },
    { word: 'Árbitro', cat: 'Profesión' },
    { word: 'Político', cat: 'Profesión' },
    { word: 'Ingeniero', cat: 'Profesión' },
    { word: 'Profesor', cat: 'Profesión' },
    { word: 'Abogado', cat: 'Profesión' },
    { word: 'Arquitecto', cat: 'Profesión' },
    { word: 'Enfermero', cat: 'Profesión' },
    { word: 'Psicólogo', cat: 'Profesión' },
    { word: 'Programador', cat: 'Profesión' },
    { word: 'Fotógrafo', cat: 'Profesión' },
    { word: 'Youtuber', cat: 'Profesión' },
    { word: 'Influencer', cat: 'Profesión' },
    { word: 'Mecánico', cat: 'Profesión' },
    { word: 'Electricista', cat: 'Profesión' },
    { word: 'Barbero', cat: 'Profesión' },
    { word: 'Panadero', cat: 'Profesión' },
    { word: 'Carnicero', cat: 'Profesión' },
    { word: 'Vendedor', cat: 'Profesión' },
    { word: 'Conductor', cat: 'Profesión' },
    { word: 'Repartidor', cat: 'Profesión' },
    { word: 'Actor', cat: 'Profesión' },
    { word: 'Cantante', cat: 'Profesión' },
    { word: 'Bailarín', cat: 'Profesión' },
    { word: 'Entrenador', cat: 'Profesión' },
    { word: 'Seguridad', cat: 'Profesión' },
    { word: 'Guardia', cat: 'Profesión' },
    { word: 'Carpintero', cat: 'Profesión' },
    { word: 'Albañil', cat: 'Profesión' },
    { word: 'Pintor', cat: 'Profesión' },
    { word: 'Chofer', cat: 'Profesión' },
    { word: 'Guía turístico', cat: 'Profesión' },
    { word: 'Recepcionista', cat: 'Profesión' },
    { word: 'Cajero', cat: 'Profesión' },
    { word: 'Mesero', cat: 'Profesión' },
    { word: 'Bartender', cat: 'Profesión' },
    { word: 'DJ', cat: 'Profesión' },
    { word: 'Streamer', cat: 'Profesión' },
    { word: 'Diseñador', cat: 'Profesión' },
  ],
  peliculas: [
    { word: 'Titanic', cat: 'Película' },
    { word: 'Avatar', cat: 'Película' },
    { word: 'El Padrino', cat: 'Película' },
    { word: 'Matrix', cat: 'Película' },
    { word: 'Toy Story', cat: 'Película' },
    { word: 'Scream', cat: 'Película' },
    { word: 'Shrek', cat: 'Película' },
    { word: 'Frozen', cat: 'Película' },
    { word: 'Interstellar', cat: 'Película' },
    { word: 'Coco', cat: 'Película' },
    { word: 'Batman', cat: 'Película' },
    { word: 'Superman', cat: 'Película' },
    { word: 'Joker', cat: 'Película' },
    { word: 'Avengers', cat: 'Película' },
    { word: 'Spider-Man', cat: 'Película' },
    { word: 'Deadpool', cat: 'Película' },
    { word: 'Cars', cat: 'Película' },
    { word: 'Up', cat: 'Película' },
    { word: 'It', cat: 'Película' },
    { word: 'Rocky', cat: 'Película' },
    { word: 'Harry Potter', cat: 'Película' },
    { word: 'Jurassic Park', cat: 'Película' },
    { word: 'El Rey León', cat: 'Película' },
    { word: 'Rápidos y Furiosos', cat: 'Película' },
    { word: 'Transformers', cat: 'Película' },
    { word: 'Minions', cat: 'Película' },
    { word: 'Buscando a Nemo', cat: 'Película' },
    { word: 'El Conjuro', cat: 'Película' },
    { word: 'Anabelle', cat: 'Película' },
    { word: 'Gladiador', cat: 'Película' },
    { word: 'Kung Fu Panda', cat: 'Película' },
    { word: 'Madagascar', cat: 'Película' },
    { word: 'Hotel Transylvania', cat: 'Película' },
    { word: 'John Wick', cat: 'Película' },
    { word: 'Misión Imposible', cat: 'Película' },
    { word: 'La Máscara', cat: 'Película' },
    { word: 'Forrest Gump', cat: 'Película' },
    { word: 'El Hombre Araña', cat: 'Película' },
    { word: 'Black Panther', cat: 'Película' },
    { word: 'Thor', cat: 'Película' },
  ],
  situaciones: [
    { word: 'Primera cita', cat: 'Situación' },
    { word: 'Examen final', cat: 'Situación' },
    { word: 'Boda', cat: 'Situación' },
    { word: 'Entrevista de trabajo', cat: 'Situación' },
    { word: 'Resaca', cat: 'Situación' },
    { word: 'Pelea de pareja', cat: 'Situación' },
    { word: 'Atasco de tráfico', cat: 'Situación' },
    { word: 'Velorio', cat: 'Situación' },
    { word: 'Fiesta sorpresa', cat: 'Situación' },
    { word: 'Apagón de luz', cat: 'Situación' },
    { word: 'Vuelo cancelado', cat: 'Situación' },
    { word: 'Cita a ciegas', cat: 'Situación' },
    { word: 'Ruptura amorosa', cat: 'Situación' },
    { word: 'Viaje con amigos', cat: 'Situación' },
    { word: 'Mudanza', cat: 'Situación' },
    { word: 'Reencuentro', cat: 'Situación' },
    { word: 'Discusión familiar', cat: 'Situación' },
    { word: 'Graduación', cat: 'Situación' },
    { word: 'Fiesta de cumpleaños', cat: 'Situación' },
    { word: 'Accidente leve', cat: 'Situación' },
    { word: 'Día de pago', cat: 'Situación' },
    { word: 'Viaje largo', cat: 'Situación' },
    { word: 'Cambio de look', cat: 'Situación' },
    { word: 'Primer día de clases', cat: 'Situación' },
    { word: 'Llegar tarde', cat: 'Situación' },
    { word: 'Perder el celular', cat: 'Situación' },
    { word: 'Quedarse sin dinero', cat: 'Situación' },
    { word: 'Dormirse en clase', cat: 'Situación' },
    { word: 'Olvidar una fecha importante', cat: 'Situación' },
    { word: 'Encontrarse con el ex', cat: 'Situación' },
    { word: 'Hacer el ridículo', cat: 'Situación' },
    { word: 'Quedarse sin batería', cat: 'Situación' },
    { word: 'Viajar solo', cat: 'Situación' },
    { word: 'Tener visita inesperada', cat: 'Situación' },
    { word: 'Quedarse atrapado en ascensor', cat: 'Situación' },
    { word: 'Ganar dinero inesperado', cat: 'Situación' },
    { word: 'Quedarse dormido', cat: 'Situación' },
    { word: 'Perder un examen', cat: 'Situación' },
    { word: 'Ser rechazado', cat: 'Situación' },
    { word: 'Ganar un premio', cat: 'Situación' },
    { word: 'Quedarse sin internet', cat: 'Situación' },
    { word: 'Romper algo ajeno', cat: 'Situación' },
    { word: 'Decir algo incómodo', cat: 'Situación' },
    { word: 'Olvidar una tarea', cat: 'Situación' },
    { word: 'Quedarse solo en casa', cat: 'Situación' },
    { word: 'Ser sorprendido', cat: 'Situación' },
    { word: 'Viajar de emergencia', cat: 'Situación' },
    { word: 'Cambiar de planes', cat: 'Situación' },
  ],
  deportes: [
    { word: 'Fútbol', cat: 'Deporte' },
    { word: 'Básquet', cat: 'Deporte' },
    { word: 'Vóley', cat: 'Deporte' },
    { word: 'Tenis', cat: 'Deporte' },
    { word: 'Natación', cat: 'Deporte' },
    { word: 'Boxeo', cat: 'Deporte' },
    { word: 'Ciclismo', cat: 'Deporte' },
    { word: 'Atletismo', cat: 'Deporte' },
    { word: 'Surf', cat: 'Deporte' },
    { word: 'Skate', cat: 'Deporte' },
  ],
  emociones: [
    { word: 'Felicidad', cat: 'Emoción' },
    { word: 'Tristeza', cat: 'Emoción' },
    { word: 'Enojo', cat: 'Emoción' },
    { word: 'Miedo', cat: 'Emoción' },
    { word: 'Ansiedad', cat: 'Emoción' },
    { word: 'Celos', cat: 'Emoción' },
    { word: 'Vergüenza', cat: 'Emoción' },
    { word: 'Amor', cat: 'Emoción' },
    { word: 'Odio', cat: 'Emoción' },
    { word: 'Sorpresa', cat: 'Emoción' },
  ]
};

// flatten all words
const IMPOSTOR_ALL_WORDS = Object.values(IMPOSTOR_WORDS).flat();

const SPECIAL_CARDS = [
  { id:'double1', type:'double', icon:'🔥', title:'¡DOBLE O NADA!',
    desc:'El próximo shot que reciba alguien este turno vale el DOBLE. La suerte está echada.' },
  { id:'double2', type:'double', icon:'⚡', title:'APUESTA MÁXIMA',
    desc:'Si el jugador activo falla o pasa, toma 3 shots en vez de 1. ¿Tenés el valor?' },
  { id:'double3', type:'double', icon:'💥', title:'RIESGO TOTAL',
    desc:'Este turno los shots se multiplican x2. Sin excepciones.' },
  { id:'all1',    type:'all',    icon:'💀', title:'LA MESA PAGA',
    desc:'Todos — sin excepción — toman 1 shot ahora mismo. Ni uno se salva.' },
  { id:'all2',    type:'all',    icon:'🌊', title:'OLA DE SHOTS',
    desc:'Empezando por la izquierda del jugador activo, todos toman en cadena. ¡Ahora!' },
  { id:'all3',    type:'all',    icon:'🎉', title:'BRINDIS FORZADO',
    desc:'El grupo tiene 10 segundos para hacer un brindis improvisado o toman el doble.' },
  { id:'all4',    type:'all',    icon:'☠️', title:'EL APOCALIPSIS',
    desc:'Todos toman. No hay nada más que decir. Fue un placer conocerlos.' },
  { id:'red1',    type:'redirect', icon:'🎯', title:'ESCUDO ACTIVO',
    desc:'Si al jugador activo le toca tomar este turno, elige quién toma en su lugar.' },
  { id:'red2',    type:'redirect', icon:'🪃', title:'BOOMERANG',
    desc:'El jugador activo puede redirigir su próximo shot a cualquier persona del grupo.' },
  { id:'red3',    type:'redirect', icon:'🃏', title:'COMODÍN',
    desc:'Poder especial: si recibís un shot este turno, podés pasárselo a quien quieras.' },
  { id:'red4',    type:'redirect', icon:'👑', title:'INMUNIDAD REAL',
    desc:'El jugador activo tiene inmunidad total. Si le toca tomar, elige a otro.' },
];

let state = {
  players: [],
  mode: 'truth',
  intensity: 2,   // 2=Amigos, 3=Picante, 4=Salvaje(mix)
  currentPlayerIndex: 0,
  round: 1,
  totalRounds: Infinity,
  challengesDone: 0,
  maxChallenges: 0,
  usedChallenges: { truth:[],dare:[], trivia:[], never:[], who:[] },
  scores: {},
  fingerState: {},        // for never mode
  hotVote: null,
  currentTrivia: null,
  triviaAnswered: false,
  whoVote: null,
  whoVotes: {},
  whoVoterIndex: 0,
  whoSelectedVote: null,
  whoLoser: null,
  whoLoserVotes: 0,
  whoIsFullTie: false,
  neverTruth: null,
  shots: {},              // { playerName: totalShots }
  pendingShotCallback: null,
  // VS mode
  vsTeamM: [], vsTeamF: [],
  vsScoreM: 0, vsScoreF: 0,
  vsAttacking: 'm',
  vsPlayerM: 0, vsPlayerF: 0,
  vsUsedM: [], vsUsedF: [],
  // special cards
  specialCard: null,      // active card object or null
  specialUsedIds: [],     // cards already shown this game
  doubleActive: false,    // doble shot modifier active this turn
  redirectActive: false,  // redirect power active this turn
  // impostor state
  impostorWord: null,       // { word, cat } current round word
  impostorImpostors: [],    // indices of impostor players
  impostorHintIndex: 0,     // which player is giving hint now
  impostorHints: [],        // [{ name, text }] collected hints
  impostorVoterIndex: 0,    // which player is currently voting
  impostorVotes: {},        // { playerName: votedForName }
  impostorUsedWords: [],    // words already used this session
};

// avatar color palette
const AVATAR_COLORS = [
  ['#ff2d6b','#fff'], ['#00e5ff','#000'], ['#ffd600','#000'],
  ['#b44fff','#fff'], ['#ff7c2d','#fff'], ['#00e676','#000'],
  ['#ff4081','#fff'], ['#40c4ff','#000'], ['#69f0ae','#000'],
  ['#ea80fc','#000']
];

function avatarColor(i) { return AVATAR_COLORS[i % AVATAR_COLORS.length]; }
function initials(name) { return name.slice(0,2).toUpperCase(); }

// ===================================================
//  NAVIGATION
// ===================================================
function goTo(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-'+id).classList.add('active');
  if (id === 'modes') { setTimeout(() => { cfLayout(); cfRender(false); }, 50); }
}

// ===================================================
//  NUEVA PARTIDA — limpia TODO el estado previo
//  Se llama desde el botón "Nueva Partida" en el home.
//  Evita que jugadores de partidas anteriores (guardadas
//  o finalizadas) persistan al querer empezar de cero.
// ===================================================
function startNewGame() {
  state.players = [];
  state.totalRounds = Infinity;
  resetGameState(); // hace todo el resto
  renderPlayers();
  goTo('players');
}

// ===================================================
//  HOME
// ===================================================
function showHowTo() {
  showToast('Agrega jugadores → elige modo → ¡a jugar!');
}

// ===================================================
//  PLAYERS
// ===================================================
const EMOJI_SETS = {
  m: ['😎','🤠','🎃','🎓','💰','🧨','🎉','🎧','🎹','🦊','🐺','🐻','🦁','🐯','🦅','🤖','👾','🎸'],
  f: ['🐥','🐸','🐭','🐰','🐌','🐶','🐹','🐼','🧚','🦋','🌸','🐾','🦄','🐱','🦊','🐽','👑','🌙'],
  o: ['🐍','✨','🎭','🎪','🎨','🎯','🔮','💎','🌊','🍀','⚡','🔥','💫','🎲','🎠','🛸','🧿','🎋'],
};

const GENDER_COLORS = {
  m: { border: '#40c4ff', bg: 'rgba(64,196,255,0.15)' },
  f: { border: '#ff80ab', bg: 'rgba(255,128,171,0.15)' },
  o: { border: '#b44fff', bg: 'rgba(180,79,255,0.15)' },
};

const GENDER_LABELS = { m: '♂ Varón', f: '♀ Mujer', o: '✦ Otro' };

let playerModalState = { gender: null, emoji: null };

// ===================================================
//  MODAL PARA AGREGAR JUGADOR
//  Abre el sheet inferior donde se ingresa nombre,
//  género e ícono del nuevo jugador. Resetea el estado
//  previo del formulario antes de mostrarse.
// ===================================================
function openPlayerModal() {
  if (state.players.length >= 10) return showToast('Máximo 10 jugadores');
  playerModalState = { gender: null, emoji: null };

  const input = document.getElementById('player-modal-input');
  input.value = '';

  // reset gender buttons
  ['m','f','o'].forEach(g => {
    document.getElementById('gbtn-'+g).className = 'gender-btn';
  });

  // start with neutral emoji grid
  buildEmojiGrid('o');
  updatePlayerPreview();

  const overlay = document.getElementById('player-modal-overlay');
  overlay.classList.add('show');

  // focus input after modal animates in
  setTimeout(() => { try { input.focus(); } catch(e){} }, 300);
}

function closePlayerModal(e) {
  if (e && e.target !== document.getElementById('player-modal-overlay')) return;
  const overlay = document.getElementById('player-modal-overlay');
  overlay.classList.remove('show');
}

function selectGender(g) {
  playerModalState.gender = g;
  playerModalState.emoji = null; // reset emoji when gender changes
  ['m','f','o'].forEach(k => {
    const btn = document.getElementById('gbtn-'+k);
    btn.className = 'gender-btn' + (k === g ? ` selected-${k}` : '');
  });
  buildEmojiGrid(g);
  updatePlayerPreview();
}

function buildEmojiGrid(g) {
  const emojis = EMOJI_SETS[g] || EMOJI_SETS.o;
  const grid = document.getElementById('emoji-grid');
  grid.innerHTML = '';
  emojis.forEach(em => {
    const btn = document.createElement('button');
    btn.className = 'emoji-btn' + (em === playerModalState.emoji ? ' selected' : '');
    btn.textContent = em;
    btn.onclick = () => selectEmoji(em);
    grid.appendChild(btn);
  });
}

function selectEmoji(em) {
  playerModalState.emoji = em;
  document.querySelectorAll('.emoji-btn').forEach(b => {
    b.classList.toggle('selected', b.textContent === em);
  });
  updatePlayerPreview();
}

function updatePlayerPreview() {
  const name = document.getElementById('player-modal-input').value.trim() || 'Sin nombre';
  const emoji = playerModalState.emoji || '?';
  const gender = playerModalState.gender;
  const colors = gender ? GENDER_COLORS[gender] : { border: 'var(--border)', bg: 'var(--surface2)' };

  document.getElementById('player-preview-name').textContent = name;
  document.getElementById('player-preview-name').style.color = name === 'Sin nombre' ? 'var(--text-dim)' : 'var(--text)';
  document.getElementById('player-preview-gender').textContent = gender ? GENDER_LABELS[gender] : 'Sin género';
  const av = document.getElementById('player-preview-avatar');
  av.textContent = emoji;
  av.style.background = colors.bg;
  av.style.borderColor = colors.border;
}

// ===================================================
//  CONFIRMAR NUEVO JUGADOR
//  Valida nombre (no vacío, no duplicado) y género.
//  Si no eligió emoji, asigna uno aleatorio del set
//  del género seleccionado. Puede usarse en mid-game.
// ===================================================
function confirmAddPlayer() {
  const name = document.getElementById('player-modal-input').value.trim();
  if (!name) return showToast('Escribe un nombre primero');
  if (state.players.find(p => p.name.toLowerCase() === name.toLowerCase()))
    return showToast('Ese nombre ya existe');
  if (!playerModalState.gender) return showToast('Elige un género');

  // emoji is optional — auto-pick one from gender set if not chosen
  if (!playerModalState.emoji) {
    const g = playerModalState.gender;
    const pool = EMOJI_SETS[g] || EMOJI_SETS.o;
    playerModalState.emoji = pool[Math.floor(Math.random() * pool.length)];
  }

  state.players.push({name,gender: playerModalState.gender,emoji: playerModalState.emoji,score: 0,});
  document.getElementById('player-modal-overlay').classList.remove('show');

  // if adding mid-game, update game state too
  if (state._addingMidGame) {
    state._addingMidGame = false;
    state.shots[name] = 0;
    state.fingerState[name] = true;
    state.maxChallenges += state.totalRounds;
    renderPlayersStrip();
    showToast(`${name} se unió a la partida 🎉`);
    saveGame();
  } else {
    renderPlayers();
  }
}

function renderPlayers() {
  const list = document.getElementById('players-list');
  list.innerHTML = '';
  state.players.forEach((p, i) => {
    const [bg] = avatarColor(i);
    const colors = p.gender ? GENDER_COLORS[p.gender] : { border: bg, bg: bg+'22' };
    const div = document.createElement('div');
    div.className = 'player-item';
    div.style.animation = 'slideIn 0.25s ease';
    div.innerHTML = `
      <div class="player-emoji-avatar" style="background:${colors.bg};border-color:${colors.border}">
        ${p.emoji || initials(p.name)}
      </div>
      <div style="flex:1">
        <div class="player-name-text">${p.name}</div>
        <div class="player-gender-badge">${p.gender ? GENDER_LABELS[p.gender] : ''}</div>
      </div>
      <button class="player-remove" onclick="removePlayer(${i})">✕</button>
    `;
    list.appendChild(div);
  });
}

function removePlayer(i) {
  state.players.splice(i, 1);
  renderPlayers();
}

function goToModes() {
  if (state.players.length < 2) return showToast('Agrega al menos 2 jugadores');
  goTo('modes');
}

// ===================================================
//  MODES
// ===================================================
// ===================================================
//  MODE TUTORIALS
// ===================================================
const MODE_TUTORIALS = {
  truth: {
    icon: '🤫', title: 'VERDAD O RETO', color: 'var(--truth-color)',
    rules: [
      '🎯 Los turnos alternan: primero Verdad, luego Reto.',
      '💬 Verdad: debes responder honestamente o tomar shots.',
      '🎪 Reto: completa la acción o el grupo decide si tomás.',
      '⏭ "Pasar" es posible pero cuesta un shot.'
    ]
  },
  who: {
    icon: '👆', title: '¿QUIÉN EN EL GRUPO?', color: 'var(--who-color)',
    rules: [
      '🤫 Votación secreta: cada jugador vota en privado.',
      '📊 Al final se revelan los votos y el más votado toma.',
      '🤝 En caso de empate, la suerte decide entre los empatados.',
      '🌊 Empate total = todos toman.'
    ]
  },
  trivia: {
    icon: '🧠', title: 'TRIVIA', color: 'var(--vote-color)',
    rules: [
      '❓ El jugador activo ve una pregunta con 4 opciones.',
      '✅ Si acierta, elige a quién del grupo le toca tomar.',
      '❌ Si falla, el shot es para él/ella.',
      '📚 Nivel Amigos = cultura general. Picante = más difícil.'
    ]
  },
  never: {
    icon: '🍹', title: 'YO NUNCA', color: 'var(--never-color)',
    rules: [
      '☝️ Todos empiezan con el dedo arriba.',
      '📢 Se lee una frase. Si lo hiciste, bajas el dedo y tomás.',
      '🏆 El que más veces bajó el dedo ganó (o perdió) la noche.',
      '⏭ Presioná "Siguiente turno" cuando todos hayan decidido.'
    ]
  },
  todi: {
    icon: '🎰', title: 'TODI', color: 'var(--todi-color)',
    rules: [
      '🎲 Cada jugador gira la ruleta en su turno.',
      '🅃 T = Tú tomás. 🅾 O = Ordenas a alguien.',
      '🄳 D = El de tu derecha toma. 🄸 I = El de tu izquierda.',
      '🔄 Los turnos rotan automáticamente entre todos.'
    ]
  },
  vs: {
    icon: '⚔️', title: 'CHICOS VS CHICAS', color: 'var(--vs-color)',
    rules: [
      '♂♀ Los equipos se forman por el género que registraste.',
      '🎤 Un jugador del equipo atacante responde la pregunta.',
      '✅ Si acierta, +10 pts para su equipo.',
      '❌ Si falla, TODO su equipo toma shots.'
    ]
  },
  impostor: {
    icon: '🕵️', title: 'EL IMPOSTOR', color: '#ff6b35',
    rules: [
      '🤫 Todos ven su rol en privado — inocentes ven la palabra, impostores no.',
      '💬 Cada jugador dice UNA pista relacionada con la palabra (impostores inventan).',
      '🗳 Votación: todos votan en secreto a quien creen impostor.',
      '🏆 Impostor atrapado = él toma. Impostor escapa = todos los demás toman.'
    ]
  }
};

// ===================================================
//  SELECCIÓN DE MODO
//  Se llama al deslizar el carrusel o hacer click en una card.
//  Actualiza state.mode, marca la card activa, muestra/oculta
//  el panel de intensidad (TODI e Impostor no lo usan),
//  y renderiza el tutorial explicativo del modo elegido.
// ===================================================
function selectMode(mode) {
  state.mode = mode;
  document.querySelectorAll('.mode-card').forEach(c => c.classList.remove('selected'));
  const card = document.querySelector(`.mode-card[data-mode="${mode}"]`);
  if (card) card.classList.add('selected');

  // hide intensity for modes that don't use it
  const noIntensity = ['todi', 'impostor','vs'];
  const intensityRow = document.getElementById('intensity-row');
  const settingsPanel = document.getElementById('modes-settings-panel');
  if (intensityRow) intensityRow.style.display = noIntensity.includes(mode) ? 'none' : 'flex';
  if (settingsPanel) settingsPanel.style.display = noIntensity.includes(mode) ? 'none' : 'flex';

  // show tutorial card
  const t = MODE_TUTORIALS[mode];
  const el = document.getElementById('mode-tutorial-card');
  if (!t || !el) return;
  el.style.display = 'block';
  el.style.borderColor = t.color + '44';
  el.innerHTML = `
    <div class="tutorial-header">
      <div class="tutorial-icon">${t.icon}</div>
      <div class="tutorial-title" style="color:${t.color}">${t.title}</div>
    </div>
    <div class="tutorial-rules">
      ${t.rules.map(r => `<div class="tutorial-rule"><span>${r}</span></div>`).join('')}
    </div>`;
}

// ===================================================
//  SELECTOR DE INTENSIDAD
//  Guarda el nivel elegido en state.intensity:
//    2 = Amigos 😏  → pool nivel 1 del banco
//    3 = Picante 🌶 → pool nivel 2 del banco
//    4 = Salvaje 🔥 → pool nivel 1 + nivel 2 combinados
//  Actualiza los botones activos en la UI.
// ===================================================
function setIntensity(level) {
  state.intensity = level;
  document.querySelectorAll('#intensity-btns .setting-btn').forEach(b => b.classList.toggle('active', +b.dataset.level === level));
  const labels = {2:'Amigos', 3:'Picante', 4:'Salvaje'};
  const el = document.getElementById('intensity-value-label');
  if (el) el.textContent = labels[level] || '';
}

// ===================================================
//  LOCALSTORAGE — auto-save & resume
// ===================================================
const SAVE_KEY = 'chispa_save_v1';

// ===================================================
//  GUARDADO AUTOMÁTICO (localStorage)
//  Serializa el estado completo de la partida en el
//  navegador. Se llama después de cada turno para que
//  si se cierra la app, pueda reanudarse desde donde quedó.
// ===================================================
function saveGame() {
  try {
    const save = {
      players: state.players,
      mode: state.mode,
      intensity: state.intensity,
       totalRounds: state.totalRounds === Infinity ? 'Infinity' : state.totalRounds,
      currentPlayerIndex: state.currentPlayerIndex,
      round: state.round,
      challengesDone: state.challengesDone,
      maxChallenges: state.maxChallenges === Infinity ? 'Infinity' : state.maxChallenges,
      usedChallenges: state.usedChallenges,
      shots: state.shots,
      fingerState: state.fingerState,
      vsScoreM: state.vsScoreM,
      vsScoreF: state.vsScoreF,
      vsTeamM: state.vsTeamM,
      vsTeamF: state.vsTeamF,
      vsAttacking: state.vsAttacking,
      vsPlayerM: state.vsPlayerM,
      vsPlayerF: state.vsPlayerF,
      vsRound: state.vsRound,
      vsMaxRounds: state.vsMaxRounds,
      screen: document.querySelector('.screen.active')?.id || 'screen-home',
      savedAt: Date.now()
    };
    localStorage.setItem(SAVE_KEY, JSON.stringify(save));
  } catch(e) {}
}

// ===================================================
//  CARGAR PARTIDA GUARDADA
//  Lee el estado guardado del localStorage y lo retorna.
//  Si no existe o está corrupto retorna null.
// ===================================================
function loadSave() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return null;
    const save = JSON.parse(raw);
    // only offer resume if saved less than 12 hours ago
    if (Date.now() - save.savedAt > 12 * 60 * 60 * 1000) { localStorage.removeItem(SAVE_KEY); return null; }
    return save;
  } catch(e) { return null; }
}

function resumeGame() {
  const save = loadSave();
  if (!save) return showToast('No hay partida guardada');
  // restore state
  state.players = save.players;
  state.mode = save.mode;
  state.intensity = save.intensity;
  state.totalRounds = save.totalRounds === 'Infinity' ? Infinity : (save.totalRounds || Infinity);
  state.currentPlayerIndex = save.currentPlayerIndex;
  state.round = save.round;
  state.challengesDone = save.challengesDone;
  state.maxChallenges = save.maxChallenges === 'Infinity' ? Infinity : (save.maxChallenges || Infinity);
  state.usedChallenges = save.usedChallenges || { truth:[], dare:[], trivia:[], never:[], who:[] };
  state.shots = save.shots || {};
  state.fingerState = save.fingerState || {};
  state.vsScoreM = save.vsScoreM || 0;
  state.vsScoreF = save.vsScoreF || 0;
  state.vsTeamM = save.vsTeamM || [];
  state.vsTeamF = save.vsTeamF || [];
  state.vsAttacking = save.vsAttacking || 'm';
  state.vsPlayerM = save.vsPlayerM || 0;
  state.vsPlayerF = save.vsPlayerF || 0;
  state.vsRound = save.vsRound || 0;
  state.vsMaxRounds = save.vsMaxRounds || 0;

  // navigate to correct screen
  const screenId = save.screen || 'screen-game';
  if (screenId === 'screen-vs') {
    goTo('vs');
    vsRenderBanners();
    vsDrawQuestion();
  } else if (screenId === 'screen-todi') {
    startTodi();
  } else {
    goTo('game');
    renderPlayersStrip();
    drawChallenge();
  }
  showToast('Partida recuperada ✅');
}

function clearSave() {
  try { localStorage.removeItem(SAVE_KEY); } catch(e) {}
}

// ===================================================
//  MID-GAME PLAYER MANAGEMENT
// ===================================================
function renderMenuPlayers() {
  const list = document.getElementById('menu-players-list');
  if (!list) return;
  list.innerHTML = '';
  state.players.forEach((p, i) => {
    const [bg] = avatarColor(i);
    const colors = p.gender ? GENDER_COLORS[p.gender] : { border: bg, bg: bg + '22' };
    const row = document.createElement('div');
    row.className = 'menu-player-row';
    row.innerHTML = `
      <div class="menu-player-avatar" style="background:${colors.bg};border-color:${colors.border}">
        ${p.emoji || initials(p.name)}
      </div>
      <div class="menu-player-name">${p.name}</div>
      <button class="menu-player-remove" onclick="menuRemovePlayer(${i})" title="Eliminar">✕</button>
    `;
    list.appendChild(row);
  });
}

function menuRemovePlayer(i) {
  if (state.players.length <= 2) return showToast('Mínimo 2 jugadores');
  const name = state.players[i].name;
  state.players.splice(i, 1);
  // keep currentPlayerIndex valid
  if (state.currentPlayerIndex >= state.players.length) state.currentPlayerIndex = 0;
  renderMenuPlayers();
  renderPlayersStrip();
  showToast(`${name} eliminado`);
  saveGame();
}

function menuAddPlayer() {
  closeMenu();
  state._addingMidGame = true;
  openPlayerModal();
}

function resetGameState() {
  state.currentPlayerIndex = 0;
  state.round = 1;
  state.challengesDone = 0;
  state.usedChallenges = { truth: [],dare:[], trivia: [], never: [], who: [] };
  state.scores = {};
  state.players.forEach(p => { p.score = 0; });
  state.fingerState = {};
  state.shots = {};
  state.currentTrivia = null;
  state.triviaAnswered = false;
  state.triviaPickChosen = null;
  state.specialCard = null;
  state.specialUsedIds = [];
  state.doubleActive = false;
  state.redirectActive = false;
  state.redirectTarget = null;
  state.vsScoreM = 0;
  state.vsScoreF = 0;
  state.vsUsedM = [];
  state.vsUsedF = [];
  state.impostorWord = null;
  state.impostorImpostors = [];
  state.impostorHints = [];
  state.impostorVotes = {};
  state.impostorUsedWords = [];
  state.players.forEach(p => {
    state.fingerState[p.name] = true;
    state.shots[p.name] = 0;
  });
}

// ===================================================
//  GAME START
// ===================================================
// ===================================================
//  INICIAR PARTIDA
//  Resetea todo el estado del juego y arranca el modo
//  seleccionado. Calcula maxChallenges = jugadores × rondas.
//  Redirige al modo correcto: normal, VS, TODI o Impostor.
// ===================================================
function startGame() {
  if (!state.mode) return showToast('Elige un modo de juego');
  resetGameState(); // ← hace todo el reset
  state.maxChallenges = state.players.length * state.totalRounds;

  if (state.mode === 'todi') {
    startTodi();
  } else if (state.mode === 'vs') {
    startVs();
  } else if (state.mode === 'impostor') {
    startImpostor();
  } else {
    goTo('game');
    renderPlayersStrip();
    drawChallenge();
  }
}

// ===================================================
//  STRIP
// ===================================================
function renderPlayersStrip() {
  const strip = document.getElementById('players-strip');
  strip.innerHTML = '';
  state.players.forEach((p, i) => {
    const [bg] = avatarColor(i);
    const colors = p.gender ? GENDER_COLORS[p.gender] : { border: bg, bg };
    const wrap = document.createElement('div');
    wrap.className = 'strip-player';
    wrap.id = 'strip-'+i;
    wrap.innerHTML = `
      <div class="strip-avatar${i === state.currentPlayerIndex ? ' current' : ''}"
           style="background:${colors.bg};border-color:${i === state.currentPlayerIndex ? '#fff' : colors.border};font-size:${p.emoji ? '18px' : '14px'}"
      >${p.emoji || initials(p.name)}</div>
      <div class="strip-name">${p.name}</div>
    `;
    strip.appendChild(wrap);
  });
}

function updateStrip() {
  document.querySelectorAll('.strip-avatar').forEach((el, i) => {
    el.classList.toggle('current', i === state.currentPlayerIndex);
  });
}

// ===================================================
//  CHALLENGE ENGINE
// ===================================================
/*
   * MOTOR DE SELECCIÓN DE PREGUNTAS
   * ─────────────────────────────────
   * El banco de datos tiene 2 niveles por modo:
   *   Nivel 1 → Amigos 😏  (preguntas moderadas)
   *   Nivel 2 → Picante 🌶 (preguntas más atrevidas)
   *
   * La intensidad elegida por el usuario determina qué pool usar:
   *   intensity=2 (Amigos)  → usa solo nivel 1
   *   intensity=3 (Picante) → usa solo nivel 2
   *   intensity=4 (Salvaje) → combina nivel 1 + nivel 2
   *
   * Sistema anti-repetición:
   *   usedChallenges[type] guarda los ÍNDICES de las preguntas ya mostradas.
   *   Cuando se agota el pool disponible, se resetea y vuelve a usarlas todas.
   *   Esto garantiza que nunca se repita una pregunta hasta haberlas visto todas.
   */
function pickChallenge(type) {
  // Seleccionar el pool según intensidad
  let pool;
  if (state.intensity === 4) {
    pool = [...(CHALLENGES[type][1] || []), ...(CHALLENGES[type][2] || [])];
  } else if (state.intensity === 3) {
    pool = CHALLENGES[type][2] || CHALLENGES[type][1];
  } else {
    pool = CHALLENGES[type][1] || CHALLENGES[type][2];
  }

  const used = state.usedChallenges[type];
  const currentPlayer = state.players[state.currentPlayerIndex];
  const currentGender = currentPlayer.gender;

  function getOppositeGenderTarget() {
    if (currentGender === 'm') return state.players.filter((p, i) => i !== state.currentPlayerIndex && p.gender === 'f');
    if (currentGender === 'f') return state.players.filter((p, i) => i !== state.currentPlayerIndex && p.gender === 'm');
    return [];
  }

  const oppositeTargets = getOppositeGenderTarget();
  const hasOpposite = oppositeTargets.length > 0;

  // Filtrar ÍNDICES disponibles (no usar .indexOf con objetos)
  let availableIdxs = pool.map((item, i) => i).filter(i => {
    if (used.includes(i)) return false;
    if (typeof pool[i] === 'string' && pool[i].includes('{player_opposite_gender}') && !hasOpposite) return false;
    return true;
  });

  // Si ya se usaron todos → resetear historial
  if (availableIdxs.length === 0) {
    state.usedChallenges[type] = [];
    availableIdxs = pool.map((item, i) => i).filter(i => {
      if (typeof pool[i] === 'string' && pool[i].includes('{player_opposite_gender}') && !hasOpposite) return false;
      return true;
    });
  }

  // Elegir índice al azar y registrarlo
  const poolIdx = availableIdxs[Math.floor(Math.random() * availableIdxs.length)];
  state.usedChallenges[type].push(poolIdx);

  const chosen = pool[poolIdx];

  // Si es objeto (trivia) → devolver sin tocar
  if (typeof chosen !== 'string') return chosen;

  // Si es string → aplicar reemplazos de nombres
  let text = chosen;
  if (text.includes('{player}')) {
    const others = state.players.filter((_, i) => i !== state.currentPlayerIndex);
    if (others.length > 0) text = text.replace('{player}', others[Math.floor(Math.random() * others.length)].name);
  }
  if (text.includes('{player_opposite_gender}')) {
    const target = oppositeTargets[Math.floor(Math.random() * oppositeTargets.length)];
    text = text.replace('{player_opposite_gender}', target.name);
  }

  return text;
}
// ===================================================
//  DIBUJAR SIGUIENTE CARTA
//  Punto de entrada de cada turno. Antes de mostrar la
//  pregunta verifica si debe aparecer una carta especial
//  (25% de probabilidad en modos compatibles).
//  Resetea modificadores de turno (doble shot, redirigir).
// ===================================================
function drawChallenge() {
  const p = state.players[state.currentPlayerIndex];
  document.getElementById('turn-player-name').textContent = p.name;
  document.getElementById('round-num').textContent = state.round;
  updateStrip();

  // reset per-turn modifiers
  state.doubleActive = false;
  state.redirectActive = false;
  state.redirectTarget = null;

  // maybe show a special card first, then render the challenge
  maybeShowSpecialCard(() => _drawChallengeContent());
}

// ===================================================
//  CONTENIDO DE LA CARTA (llamada por drawChallenge)
//  Según state.mode, decide qué tipo de carta mostrar:
//    truth   → alterna Verdad / Reto
//    trivia  → pregunta con 4 opciones A-D
//    never   → afirmación "Yo nunca..."
//    who     → pregunta de votación grupal
//  Usa pickChallenge() para sacar la pregunta del banco.
// ===================================================
function _drawChallengeContent() {
  const card = document.getElementById('challenge-card');
  const typeLabel = document.getElementById('card-type-label');
  const textEl = document.getElementById('card-text');
  const interactionEl = document.getElementById('card-interaction');

  state.hotVote = null;
  state.whoVote = null;
  state.triviaAnswered = false;
  state.triviaPickChosen = null;
  interactionEl.innerHTML = '';

  let cardClass, label, text;

  if (state.mode === 'truth') {
    // alternate truth / dare
    const isTruth = state.challengesDone % 2 === 0;
    const type = isTruth ? 'truth' : 'dare';
    cardClass = 'card-' + type;
    label = isTruth ? 'VERDAD' : 'RETO';
    text = pickChallenge(type);
    document.getElementById('game-mode-badge').style.color = isTruth ? 'var(--truth-color)' : 'var(--dare-color)';
    document.getElementById('game-mode-badge').textContent = isTruth ? 'VERDAD O RETO' : 'VERDAD O RETO';

  } else if (state.mode === 'trivia') {
  cardClass = 'card-trivia';
  label = 'TRIVIA 🧠';
  document.getElementById('game-mode-badge').style.color = 'var(--vote-color)';
  document.getElementById('game-mode-badge').textContent = 'TRIVIA';

  const trivia = pickChallenge('trivia'); // ← ahora usa el motor unificado
  state.currentTrivia = trivia;
  state.triviaAnswered = false;
  text = trivia.q;

  const letters = ['A', 'B', 'C', 'D'];
  let optsHtml = '<div class="trivia-options">';
  trivia.opts.forEach((opt, i) => {
    optsHtml += `<button class="trivia-opt" id="trivia-opt-${i}" type="button" data-index="${i}">
      <span class="trivia-opt-letter">${letters[i]}</span>
      <span class="trivia-opt-text">${opt}</span>
    </button>`;
  });
  optsHtml += '</div>';
  interactionEl.innerHTML = optsHtml;

  document.querySelectorAll('.trivia-opt').forEach(btn => {
    btn.addEventListener('click', function () {
      if (state.triviaAnswered) return;
      answerTrivia(Number(this.dataset.index));
    });
  });

  } else if (state.mode === 'never') {
    cardClass = 'card-never';
    label = 'YO NUNCA...';
    text = pickChallenge('never');
    document.getElementById('game-mode-badge').style.color = 'var(--never-color)';
    document.getElementById('game-mode-badge').textContent = 'YO NUNCA';
    // fingers
    const alive = state.players.filter(pl => state.fingerState[pl.name]);
    let html = '<div class="fingers-area">';
    alive.forEach((pl, pi) => {
      const idx = state.players.indexOf(pl);
      const [bg] = avatarColor(idx);
      html += `<div class="finger-wrap">
        <div class="finger-btn" id="finger-${pl.name}" onclick="toggleFinger('${pl.name}', this)"
             style="border-color:${bg}">☝️</div>
        <div class="finger-name">${pl.name}</div>
      </div>`;
    });
    html += '</div><div style="font-size:11px;color:var(--text-dim);margin-top:8px;text-align:center">Baja el dedo si sí lo hiciste</div>';
    interactionEl.innerHTML = html;

  } else if (state.mode === 'who') {
    cardClass = 'card-who';
    label = '¿QUIÉN EN EL GRUPO?';
    text = pickChallenge('who');
    document.getElementById('game-mode-badge').style.color = 'var(--who-color)';
    document.getElementById('game-mode-badge').textContent = '¿QUIÉN?';
    // reset votes
    state.whoVotes = {};
    state.players.forEach(pl => { state.whoVotes[pl.name] = 0; });
    state.whoVoterIndex = 0;
    state.whoSelectedVote = null;
    // show start voting button inside card
    interactionEl.innerHTML = `
      <button class="btn btn-primary" style="margin-top:8px;width:100%" onclick="startWhoVoting()">
        Empezar votación 👆
      </button>`;
  }

  // animate card
  card.className = 'challenge-card ' + cardClass;
  card.style.animation = 'none';
  void card.offsetWidth;
  card.style.animation = 'cardIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
  sfxCard();
  typeLabel.textContent = label;
  textEl.textContent = text;

  // hide action buttons in trivia (answer taps handle flow) and never (finger taps handle shots, button handles advance)
  const actionsEl = document.querySelector('.game-actions');
  if (actionsEl) {
    if (state.mode === 'trivia' || state.mode === 'never') {
      actionsEl.style.display = 'none';
    } else {
      actionsEl.style.display = 'flex';
    }
  }

  // for never mode: show a "Siguiente turno" button below the card that advances without shots
  const neverNextEl = document.getElementById('never-next-btn');
  if (neverNextEl) neverNextEl.style.display = state.mode === 'never' ? 'block' : 'none';
}

// ===================================================
//  INTERACTIONS
// ===================================================
function answerTrivia(chosenIdx) {
  if (state.triviaAnswered) return;
  state.triviaAnswered = true;

  const trivia = state.currentTrivia;
  const correct = trivia.ans;
  const currentPlayer = state.players[state.currentPlayerIndex];

  // style all options
  document.querySelectorAll('.trivia-opt').forEach((el, i) => {
    if (i === correct) {
      el.classList.add('correct');
    } else if (i === chosenIdx) {
      el.classList.add('wrong');
    } else {
      el.classList.add('disabled');
    }
  });

  const won = chosenIdx === correct;
  if (won) sfxCorrect(); else sfxWrong();

  setTimeout(() => {
    if (won) {
      // player won — show pick-someone overlay
      showTriviaPickOverlay(currentPlayer.name);
    } else {
      // player lost — they take
      const proceed = () => {
        state.challengesDone++;
        if (state.challengesDone >= state.maxChallenges) { clearSave(); showResults(); return; }
        state.currentPlayerIndex = (state.currentPlayerIndex + 1) % state.players.length;
        if (state.currentPlayerIndex === 0) state.round++;
        saveGame();
        drawChallenge();
      };
      showShot(currentPlayer.name, '¡Respuesta incorrecta! 🧠💥', null, proceed);
    }
  }, 900);
}

function showTriviaPickOverlay(winnerName) {
  const overlay = document.getElementById('trivia-pick-overlay');
  document.getElementById('trivia-winner-name').textContent = winnerName;
  // build targets — all players except winner
  const targets = document.getElementById('trivia-pick-targets');
  targets.innerHTML = '';
  state.players.forEach((pl, pi) => {
    const [bg] = avatarColor(pi);
    const colors = pl.gender ? GENDER_COLORS[pl.gender] : { border: bg, bg };
    const div = document.createElement('div');
    div.className = 'who-secret-option';
    div.innerHTML = `
      <span style="display:inline-flex;width:32px;height:32px;border-radius:50%;background:${colors.bg};border:2px solid ${colors.border};align-items:center;justify-content:center;font-size:${pl.emoji?'17px':'13px'};flex-shrink:0">${pl.emoji || initials(pl.name)}</span>
      <span style="flex:1">${pl.name}</span>
      ${pl.gender ? `<span style="font-size:10px;color:var(--text-dim)">${GENDER_LABELS[pl.gender]}</span>` : ''}
    `;
    div.onclick = () => triviaPickTarget(pl.name, div);
    targets.appendChild(div);
  });
  state.triviaPickChosen = null;
  document.getElementById('trivia-pick-confirm').style.opacity = '0.5';
  document.getElementById('trivia-pick-confirm').style.pointerEvents = 'none';
  overlay.classList.add('show');
}

function triviaPickTarget(name, el) {
  document.querySelectorAll('#trivia-pick-targets .who-secret-option').forEach(o => o.classList.remove('chosen'));
  el.classList.add('chosen');
  state.triviaPickChosen = name;
  document.getElementById('trivia-pick-confirm').style.opacity = '1';
  document.getElementById('trivia-pick-confirm').style.pointerEvents = 'auto';
}

function confirmTriviaPick() {
  const name = state.triviaPickChosen;
  if (!name) return;
  document.getElementById('trivia-pick-overlay').classList.remove('show');

  const proceed = () => {
    state.players[state.currentPlayerIndex].score += 15;
    state.challengesDone++;
    if (state.challengesDone >= state.maxChallenges) { clearSave(); showResults(); return; }
    state.currentPlayerIndex = (state.currentPlayerIndex + 1) % state.players.length;
    if (state.currentPlayerIndex === 0) state.round++;
    saveGame();
    drawChallenge();
  };
  showShot(name, `¡${state.players[state.currentPlayerIndex].name} acertó y te eligió! 🎯`, null, proceed);
}

function startWhoVoting() {
  state.whoVoterIndex = 0;
  state.whoSelectedVote = null;
  state.whoVotes = {};   // ← AGREGAR: limpiar votos al iniciar
  showWhoVoterTurn();
  document.getElementById('who-voting-overlay').classList.add('show');
  document.getElementById('who-voter-phase').style.display = 'flex';
  document.getElementById('who-voter-phase').style.flexDirection = 'column';
  document.getElementById('who-voter-phase').style.alignItems = 'center';
  document.getElementById('who-reveal-phase').classList.remove('visible');  
  document.getElementById('who-reveal-phase').style.display = '';           
}

function showWhoVoterTurn() {
  const voter = state.players[state.whoVoterIndex];
  const total = state.players.length;

  // update header
  document.getElementById('who-voter-name').textContent = voter.name;

  // progress bar
  const pct = (state.whoVoterIndex / total) * 100;
  document.getElementById('who-progress-fill').style.width = pct + '%';

  // reset selected
  state.whoSelectedVote = null;
  document.getElementById('who-confirm-vote-btn').style.opacity = '0.5';
  document.getElementById('who-confirm-vote-btn').style.pointerEvents = 'none';

  // build options — all players shown
  const opts = document.getElementById('who-secret-options');
  opts.innerHTML = '';
  state.players.forEach((pl, pi) => {
    const [bg] = avatarColor(pi);
    const colors = pl.gender ? GENDER_COLORS[pl.gender] : { border: bg, bg };
    const div = document.createElement('div');
    div.className = 'who-secret-option';
    div.id = 'who-sopt-' + pi;
    div.innerHTML = `
      <span style="display:inline-flex;width:32px;height:32px;border-radius:50%;background:${colors.bg};border:2px solid ${colors.border};align-items:center;justify-content:center;font-size:${pl.emoji?'17px':'13px'};flex-shrink:0">${pl.emoji || initials(pl.name)}</span>
      <span style="flex:1">${pl.name}</span>
      ${pl.gender ? `<span style="font-size:10px;color:var(--text-dim)">${GENDER_LABELS[pl.gender]}</span>` : ''}
    `;
    div.onclick = () => selectWhoOption(pl.name, pi);
    opts.appendChild(div);
  });

  // animate in
  opts.style.animation = 'none';
  void opts.offsetWidth;
  opts.style.animation = 'slideIn 0.25s ease';
}

function selectWhoOption(name, idx) {
  // clear previous selection
  document.querySelectorAll('.who-secret-option').forEach(o => o.classList.remove('chosen'));
  document.getElementById('who-sopt-' + idx).classList.add('chosen');
  state.whoSelectedVote = name;
  // enable confirm
  const btn = document.getElementById('who-confirm-vote-btn');
  btn.style.opacity = '1';
  btn.style.pointerEvents = 'auto';
}

function confirmWhoVote() {
  if (!state.whoSelectedVote) return;
  // register vote
  state.whoVotes[state.whoSelectedVote] = (state.whoVotes[state.whoSelectedVote] || 0) + 1;
  state.whoVoterIndex++;

  if (state.whoVoterIndex < state.players.length) {
    // next voter
    state.whoSelectedVote = null;
    showWhoVoterTurn();
  } else {
    // all voted — show reveal
    showWhoReveal();
  }
}

function showWhoReveal() {
  sfxReveal();
  // update progress to 100%
  document.getElementById('who-progress-fill').style.width = '100%';

  const entries = Object.entries(state.whoVotes);
  const maxVotes = Math.max(...entries.map(([, v]) => v));
  const winners = entries.filter(([, v]) => v === maxVotes).map(([n]) => n);

  // full tie = everyone is tied at the top
  const isFullTie = winners.length === state.players.length;
  const loser = isFullTie ? null : (winners.length === 1 ? winners[0] : winners[Math.floor(Math.random() * winners.length)]);

  // switch phases
  document.getElementById('who-voter-phase').style.display = 'none';
  const revealPhase = document.getElementById('who-reveal-phase');
  revealPhase.classList.add('visible');

  if (isFullTie) {
    document.getElementById('who-reveal-name').textContent = '¡TODOS!';
    document.getElementById('who-reveal-votes').textContent = 'Empate total — el grupo entero toma 🥃';
  } else {
    document.getElementById('who-reveal-name').textContent = loser;
    document.getElementById('who-reveal-votes').textContent =
      winners.length > 1
        ? `Empate con ${maxVotes} voto${maxVotes > 1 ? 's' : ''} — elegido al azar`
        : `${maxVotes} voto${maxVotes > 1 ? 's' : ''} en su contra`;
  }

  // tally bars
  const maxVal = Math.max(...entries.map(([, v]) => v), 1);
  const tally = document.getElementById('who-reveal-tally');
  tally.innerHTML = '';
  entries.sort((a, b) => b[1] - a[1]).forEach(([name, votes]) => {
    const pi = state.players.findIndex(p => p.name === name);
    const [bg] = avatarColor(pi);
    const pct = Math.round((votes / maxVal) * 100);
    const isHighlighted = isFullTie || name === loser;
    const row = document.createElement('div');
    row.className = 'who-tally-row';
    row.innerHTML = `
      <div class="who-tally-name" style="color:${isHighlighted ? 'var(--who-color)' : 'var(--text)'};font-weight:${isHighlighted ? '700' : '400'}">${name}</div>
      <div class="who-tally-bar-wrap">
        <div class="who-tally-bar" style="width:0%;background:${isHighlighted ? 'var(--who-color)' : bg}"></div>
      </div>
      <div class="who-tally-count">${votes}</div>
    `;
    tally.appendChild(row);
    setTimeout(() => { row.querySelector('.who-tally-bar').style.width = pct + '%'; }, 50);
  });

  // store for shot
  state.whoLoser = loser;         // null = full tie
  state.whoLoserVotes = maxVotes;
  state.whoIsFullTie = isFullTie;
}

function whoRevealShot() {
  document.getElementById('who-voting-overlay').classList.remove('show');

  // ← AGREGAR: limpiar estado de fases para la próxima ronda
  document.getElementById('who-reveal-phase').classList.remove('visible');
  document.getElementById('who-voter-phase').style.display = '';
  state.whoVotes = {};        // ← limpiar votos
  state.whoVoterIndex = 0;   // ← resetear índice

  const proceed = () => {
    state.players[state.currentPlayerIndex].score += 10;
    state.challengesDone++;
    if (state.challengesDone >= state.maxChallenges) { clearSave(); showResults(); return; }
    state.currentPlayerIndex = (state.currentPlayerIndex + 1) % state.players.length;
    if (state.currentPlayerIndex === 0) state.round++;
    saveGame();
    drawChallenge();
  };

  if (state.whoIsFullTie) {
    let i = 0;
    function nextShot() {
      if (i >= state.players.length) { proceed(); return; }
      const name = state.players[i].name;
      i++;
      showShot(name, '¡Empate total! Todos toman 🥃', null, nextShot);
    }
    nextShot();
  } else {
    const votes = state.whoLoserVotes;
    showShot(state.whoLoser, `El más votado del grupo 👆 (${votes} voto${votes > 1 ? 's' : ''})`, null, proceed);
  }
}

function toggleFinger(name, el) {
  if (el.classList.contains('down')) return; // ya bajó, ignorar tap
  el.classList.add('down');
  el.style.pointerEvents = 'none'; // bloquear nuevos taps
  sfxFinger();
  showShot(name, 'Sí lo ha hecho 😬', null, null);
}

function neverNextTurn() {
  state.challengesDone++;
  if (state.challengesDone >= state.maxChallenges) { clearSave(); showResults(); return; }
  state.currentPlayerIndex = (state.currentPlayerIndex + 1) % state.players.length;
  if (state.currentPlayerIndex === 0) state.round++;
  saveGame();
  drawChallenge();
}

// ===================================================
//  NEXT TURN
// ===================================================
// ===================================================
//  RESOLVER Y PASAR AL SIGUIENTE TURNO
//  Botón "Siguiente →". En modo Reto muestra el diálogo
//  de confirmación (¿completó el reto?). Avanza el índice
//  del jugador actual, incrementa el contador de turnos,
//  verifica si la partida terminó y guarda el estado.
// ===================================================
function resolveAndNext() {
  const p = state.players[state.currentPlayerIndex];

  const proceed = () => {
    state.players[state.currentPlayerIndex].score += 10;
    state.challengesDone++;
    if (state.challengesDone >= state.maxChallenges) { clearSave(); showResults(); return; }
    state.currentPlayerIndex = (state.currentPlayerIndex + 1) % state.players.length;
    if (state.currentPlayerIndex === 0) state.round++;
    saveGame();
    drawChallenge();
  };

  // dare mode: confirm completion with custom dialog
  const isDare = state.mode === 'truth' && state.challengesDone % 2 !== 0;
  if (isDare) {
    showConfirmDialog(p.name, proceed);
    return;
  }

  proceed();
}

// ── Custom confirm dialog (replaces native confirm()) ──────────────────
let _confirmCallback = null;

function showConfirmDialog(playerName, onProceed) {
  _confirmCallback = onProceed;

  document.getElementById('confirm-player-name').textContent = playerName;
  document.getElementById('confirm-question').textContent = '¿Completó el reto?';
  document.getElementById('confirm-hint').textContent = 'Si lo hizo, sigue el juego. Si no, toma un shot.';
  document.getElementById('confirm-icon').textContent = '🎯';

  sfxTap();
  document.getElementById('confirm-overlay').classList.add('show');
}

function confirmDialogAnswer(accepted) {
  document.getElementById('confirm-overlay').classList.remove('show');
  const cb = _confirmCallback;
  _confirmCallback = null;

  if (accepted) {
    // completed — proceed normally
    if (cb) cb();
  } else {
    // didn't complete — show shot then proceed
    const p = state.players[state.currentPlayerIndex];
    showShot(p.name, 'No completó el reto 😈', null, cb || (() => {}));
  }
}

// ===================================================
//  PASAR EL TURNO (botón "Pasar 🙈")
//  El jugador activo paga 1 shot por no querer intentar
//  la pregunta/reto. Luego avanza al siguiente turno.
// ===================================================
function skipChallenge() {
  sfxTap();
  const p = state.players[state.currentPlayerIndex];
  showShot(p.name, 'Pasó el reto sin intentarlo', null, () => {
    state.challengesDone++;
    if (state.challengesDone >= state.maxChallenges) { clearSave(); showResults(); return; }
    state.currentPlayerIndex = (state.currentPlayerIndex + 1) % state.players.length;
    if (state.currentPlayerIndex === 0) state.round++;
    saveGame();
    drawChallenge();
  });
}

// ===================================================
//  SHOT SYSTEM — ruleta dramática
// ===================================================
let shotSpinInterval = null;

function randomShots() {
  return Math.floor(Math.random() * 4) + 1; // 1–4
}

// ===================================================
//  MODAL DE SHOTS
//  Muestra el overlay animado indicando quién toma,
//  por qué razón y cuántos shots. La ruleta gira y
//  aterriza en el número final. Aplica modificadores
//  activos: doble shot (×2) y redirigir (cambia target).
//  Al confirmar ejecuta el callback para continuar.
// ===================================================
function showShot(playerName, reason, count, callback) {
  // apply special card modifiers
  let finalTarget = playerName;
  let finalReason = reason;
  let finalCount  = count;

  if (state.doubleActive) {
    state.doubleActive = false;
    finalCount = (finalCount == null) ? null : finalCount * 2;
    finalReason = '🔥 DOBLE — ' + finalReason;
  }

  if (state.redirectActive && playerName === state.players[state.currentPlayerIndex]?.name) {
    state.redirectActive = false;
    finalTarget = state.redirectTarget || playerName;
    finalReason = '🎯 REDIRIGIDO — ' + finalReason;
  }

  const fc = (finalCount === null || finalCount === undefined) ? randomShots() : finalCount;
  state.shots[finalTarget] = (state.shots[finalTarget] || 0) + fc;
  state.pendingShotCallback = callback || null;

  // set player and reason — show emoji if available
  const shotPlayer = state.players.find(p => p.name === finalTarget);
  const shotEmoji = shotPlayer && shotPlayer.emoji ? shotPlayer.emoji + ' ' : '';
  document.getElementById('shot-player-name').textContent = shotEmoji + finalTarget;
  document.getElementById('shot-reason').textContent = finalReason;

  // reset display state
  const display   = document.getElementById('shot-number-display');
  const glassRow  = document.getElementById('shot-glasses-row');
  const confirmBtn = document.getElementById('shot-confirm-btn');
  const ringSpinner = document.getElementById('shot-ring-spin');

  display.textContent = '?';
  display.className = 'shot-number-display spinning';
  glassRow.textContent = '';
  confirmBtn.style.display = 'none';
  ringSpinner.style.animationPlayState = 'running';

  document.getElementById('shot-overlay').classList.add('show');
  sfxShotOpen();

  // spin through numbers with accelerating tension
  let tick = 0;
  const spinDuration = 1400 + Math.random() * 700; // 1.4–2.1s
  let interval = 80;
  sfxSpinStart();

  function scheduleTick() {
    shotSpinInterval = setTimeout(() => {
      tick++;
      // cycle 1→2→3→4→1...
      display.textContent = (tick % 4) + 1;

      // slow down near the end for drama
      const elapsed = tick * interval;
      if (elapsed < spinDuration * 0.6) {
        interval = 80;
      } else if (elapsed < spinDuration * 0.8) {
        interval = 140;
      } else if (elapsed < spinDuration * 0.92) {
        interval = 220;
      } else {
        interval = 340;
      }

      if (elapsed < spinDuration) {
        scheduleTick();
      } else {
        // land
        clearTimeout(shotSpinInterval);
        sfxShotLand();
        display.textContent = fc;
        display.className = 'shot-number-display landed';
        ringSpinner.style.animationPlayState = 'paused';
        glassRow.textContent = '🥃'.repeat(fc);
        confirmBtn.style.display = 'flex';
        confirmBtn.style.width = '100%';
      }
    }, interval);
  }

  scheduleTick();
}

function closeShotModal() {
  clearTimeout(shotSpinInterval);
  document.getElementById('shot-overlay').classList.remove('show');
  if (state.pendingShotCallback) {
    const cb = state.pendingShotCallback;
    state.pendingShotCallback = null;
    cb();
  }
}

// ===================================================
//  SPECIAL CARDS
// ===================================================
const SPECIAL_CARD_MODES = ['truth', 'trivia', 'who'];
const SPECIAL_CARD_CHANCE = 0.25; // 25% per turn

let specialRedirectChosen = null;

// ===================================================
//  CARTAS ESPECIALES — PROBABILIDAD DE APARICIÓN
//  Con 25% de probabilidad antes de cada carta normal
//  (solo en modos truth, trivia, who) aparece una carta
//  especial. Evita repetir cartas hasta agotar las 12.
// ===================================================
function maybeShowSpecialCard(callback) {
  // only in supported modes
  if (!SPECIAL_CARD_MODES.includes(state.mode)) { callback(); return; }
  // 25% random chance
  if (Math.random() > SPECIAL_CARD_CHANCE) { callback(); return; }

  // pick a card not recently used (reset if all used)
  let available = SPECIAL_CARDS.filter(c => !state.specialUsedIds.includes(c.id));
  if (available.length === 0) { state.specialUsedIds = []; available = SPECIAL_CARDS; }
  const card = available[Math.floor(Math.random() * available.length)];
  state.specialUsedIds.push(card.id);
  state.specialCard = card;

  showSpecialCard(card, callback);
}

// ===================================================
//  MOSTRAR CARTA ESPECIAL
//  Renderiza el overlay de carta especial con su tipo:
//    double   → activa doble shot en este turno
//    all      → todos los jugadores toman en cadena
//    redirect → el jugador elige a quién pasarle su shot
// ===================================================
function showSpecialCard(card, afterCallback) {
  specialRedirectChosen = null;

  // set content
  document.getElementById('special-card-icon').textContent  = card.icon;
  document.getElementById('special-card-title').textContent = card.title;
  document.getElementById('special-card-desc').textContent  = card.desc;

  // type classes
  const modal = document.getElementById('special-card-modal');
  const title = document.getElementById('special-card-title');
  const btn   = document.getElementById('special-card-btn');
  const flare = document.getElementById('special-card-flare');
  ['type-double','type-all','type-redirect'].forEach(c => {
    modal.classList.remove(c); title.classList.remove(c);
    btn.classList.remove(c);   flare.classList.remove(c);
  });
  modal.classList.add('type-' + card.type);
  title.classList.add('type-' + card.type);
  btn.classList.add('type-' + card.type);
  flare.classList.add('type-' + card.type);

  // redirect: show target picker, disable confirm until chosen
  const redirectWrap = document.getElementById('special-redirect-wrap');
  const otherPlayers = state.players.filter(p => p.name !== state.players[state.currentPlayerIndex].name);
  if (card.type === 'redirect' && otherPlayers.length > 0) {
    redirectWrap.style.display = 'block';
    btn.textContent = 'Elegir destino →';
    btn.disabled = true;
    const opts = document.getElementById('special-redirect-options');
    opts.innerHTML = '';
    otherPlayers.forEach(p => {
      const el = document.createElement('div');
      el.className = 'special-redirect-opt';
      el.innerHTML = `<span style="font-size:18px">${p.emoji || initials(p.name)}</span>${p.name}`;
      el.onclick = () => {
        document.querySelectorAll('.special-redirect-opt').forEach(o => o.classList.remove('selected'));
        el.classList.add('selected');
        specialRedirectChosen = p.name;
        btn.disabled = false;
        btn.textContent = `¡Que tome ${p.name}! →`;
      };
      opts.appendChild(el);
    });
  } else if (card.type === 'redirect' && otherPlayers.length === 0) {
    // fallback: solo 1 jugador, no hay a quien redirigir — se trata como double
    redirectWrap.style.display = 'none';
    btn.disabled = false;
    btn.textContent = '¡Entendido! →';
    state.doubleActive = true;
    document.getElementById('special-card-desc').textContent = 'Eres el único jugador... ¡te toca el doble! 🔥';
  } else {
    redirectWrap.style.display = 'none';
    btn.disabled = false;
    btn.textContent = card.type === 'all' ? '¡Todos toman! 🥃' : '¡Entendido! →';
  }

  // store callback for dismiss
  state._specialCallback = afterCallback;

  // apply immediate effects
  if (card.type === 'double') {
    state.doubleActive = true;
  }

  // show overlay
  document.getElementById('special-card-overlay').classList.add('show');
  sfxSpecialCard();
}

function dismissSpecialCard() {
  const card = state.specialCard;
  if (!card) return;

  const overlay = document.getElementById('special-card-overlay');
  const cb = state._specialCallback;
  state._specialCallback = null;

  if (card.type === 'all') {
    // fire shots for everyone sequentially then continue
    overlay.classList.remove('show');
    let i = 0;
    function nextAllShot() {
      if (i >= state.players.length) { state.specialCard = null; if (cb) cb(); return; }
      showShot(state.players[i++].name, `${card.icon} ${card.title}`, 1, nextAllShot);
    }
    nextAllShot();

  } else if (card.type === 'redirect') {
    // store redirect target, continue — shot redirect happens in showShot wrapper
    state.redirectActive = true;
    state.redirectTarget = specialRedirectChosen;
    overlay.classList.remove('show');
    state.specialCard = null;
    if (cb) cb();

  } else {
    // double: just continue, doubleActive flag already set
    overlay.classList.remove('show');
    state.specialCard = null;
    if (cb) cb();
  }
}


function openMenu() {
  document.querySelectorAll('.menu-mode-btn').forEach(b => {
    b.classList.toggle('active-mode', b.dataset.mode === state.mode);
  });
  renderMenuPlayers();
  document.getElementById('menu-overlay').classList.add('show');
  document.getElementById('menu-drawer').classList.add('show');
}

function closeMenu() {
  document.getElementById('menu-overlay').classList.remove('show');
  document.getElementById('menu-drawer').classList.remove('show');
}

function switchMode(mode) {
  state.mode = mode;
  resetGameState(); 
  closeMenu();
  if (mode === 'todi') {
    startTodi();
  } else if (mode === 'vs') {
    startVs();
  } else if (mode === 'impostor') {
    startImpostor();
  } else {
    goTo('game');
    drawChallenge();
  }
  showToast('Modo: ' + {
    truth:'Verdad o Reto', who:'¿Quién en el grupo?',
    trivia:'Trivia', never:'Yo Nunca', todi:'TODI', vs:'Chicos VS Chicas',
    impostor:'El Impostor'
  }[mode]);
}

// ===================================================
//  VS MODE
// ===================================================
// ===================================================
//  MODO VS — CHICOS VS CHICAS
//  Divide los jugadores en dos equipos por género.
//  Verifica que haya al menos 1 jugador en cada equipo.
//  Alterna turnos entre equipos; si un jugador falla,
//  TODO su equipo toma shots.
// ===================================================
function startVs() {
  const teamM = state.players.filter(p => p.gender === 'm');
  const teamF = state.players.filter(p => p.gender === 'f');
  const teamO = state.players.filter(p => p.gender === 'o' || !p.gender);

  // distribute 'o' players to balance teams
  teamO.forEach(p => {
    if (teamM.length <= teamF.length) teamM.push(p);
    else teamF.push(p);
  });

  if (teamM.length === 0) return showToast('Necesitas al menos un chico (♂) para jugar VS');
  if (teamF.length === 0) return showToast('Necesitas al menos una chica (♀) para jugar VS');

  state.vsTeamM = teamM.map(p => p.name);
  state.vsTeamF = teamF.map(p => p.name);

  state.vsScoreM = 0; state.vsScoreF = 0;
  state.vsAttacking = 'm';
  state.vsPlayerM = 0; state.vsPlayerF = 0;
  state.vsRound = 0;
  state.vsMaxRounds = state.totalRounds * 2; // each team gets totalRounds turns
  state.vsUsedM = []; state.vsUsedF = [];

  goTo('vs');
  vsRenderBanners();
  vsDrawQuestion();
}

function vsRenderBanners() {
  const isM = state.vsAttacking === 'm';

  // top banner = attacking team, bot = defending
  const topTeam = isM ? 'm' : 'f';
  const botTeam = isM ? 'f' : 'm';

  const topBanner = document.getElementById('vs-top-banner');
  const botBanner = document.getElementById('vs-bot-banner');
  topBanner.className = `vs-team-banner team-${topTeam}`;
  botBanner.className = `vs-team-banner team-${botTeam}`;

  const teamNames = { m: '♂ Chicos', f: '♀ Chicas' };
  document.getElementById('vs-top-name').textContent = teamNames[topTeam];
  document.getElementById('vs-bot-name').textContent = teamNames[botTeam];

  // scores — compute shots from state.shots per team
  const shotsM = state.vsTeamM.reduce((sum, n) => sum + (state.shots[n] || 0), 0);
  const shotsF = state.vsTeamF.reduce((sum, n) => sum + (state.shots[n] || 0), 0);
  document.getElementById('vs-top-score').textContent =
    `${topTeam === 'm' ? state.vsScoreM : state.vsScoreF} pts · ${topTeam === 'm' ? shotsM : shotsF} 🥃`;
  document.getElementById('vs-bot-score').textContent =
    `${botTeam === 'm' ? state.vsScoreM : state.vsScoreF} pts · ${botTeam === 'm' ? shotsM : shotsF} 🥃`;

  // player chips
  vsRenderChips('vs-top-players', topTeam);
  vsRenderChips('vs-bot-players', botTeam);
}

function vsRenderChips(containerId, team) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  const names = team === 'm' ? state.vsTeamM : state.vsTeamF;
  const activeIdx = team === 'm' ? state.vsPlayerM : state.vsPlayerF;
  names.forEach((name, i) => {
    const p = state.players.find(pl => pl.name === name);
    const colors = p && p.gender ? GENDER_COLORS[p.gender] : { border: '#888', bg: 'rgba(136,136,136,0.1)' };
    const isActive = (i === activeIdx) && (team === state.vsAttacking);
    const chip = document.createElement('div');
    chip.className = 'vs-player-chip' + (isActive ? ' active-player' : '');
    chip.innerHTML = `
      <div class="vs-player-chip-avatar" style="background:${colors.bg};border:1.5px solid ${colors.border}">
        ${p && p.emoji ? p.emoji : initials(name)}
      </div>
      <span>${name}</span>
    `;
    container.appendChild(chip);
  });
}

function vsPickQuestion(team) {
  const pool = VS_QUESTIONS[team];
  const used = team === 'm' ? state.vsUsedM : state.vsUsedF;
  let available = pool.map((_, i) => i).filter(i => !used.includes(i));
  if (available.length === 0) {
    if (team === 'm') state.vsUsedM = [];
    else state.vsUsedF = [];
    available = pool.map((_, i) => i);
  }
  const idx = available[Math.floor(Math.random() * available.length)];
  if (team === 'm') state.vsUsedM.push(idx);
  else state.vsUsedF.push(idx);
  return pool[idx];
}

function vsDrawQuestion() {
  const isM = state.vsAttacking === 'm';
  // set 'm' = preguntas PARA chicos (sobre chicas)
  // set 'f' = preguntas PARA chicas (sobre chicos)
  const questionSet = isM ? 'm' : 'f';
  const q = vsPickQuestion(questionSet);

  const attackerName = isM
    ? state.vsTeamM[state.vsPlayerM]
    : state.vsTeamF[state.vsPlayerF];

  const aboutLabel = isM ? 'sobre las chicas 👇' : 'sobre los chicos 👇';
  document.getElementById('vs-question-label').textContent =
    `${attackerName} responde — ${aboutLabel}`;
  document.getElementById('vs-question-text').textContent = q;

  // highlight card zone border by team
  const zone = document.getElementById('vs-card-zone');
  zone.style.borderTop = `2px solid ${isM ? 'rgba(64,196,255,0.3)' : 'rgba(255,128,171,0.3)'}`;

  // animate question in
  const txt = document.getElementById('vs-question-text');
  txt.style.animation = 'none';
  void txt.offsetWidth;
  txt.style.animation = 'slideIn 0.3s ease';
}

function vsAnswer(correct) {
  const isM = state.vsAttacking === 'm';
  state.vsRound++;

  if (correct) {
    // attacking team scores
    if (isM) state.vsScoreM += 10;
    else state.vsScoreF += 10;
    showToast('¡Correcto! +10 pts 🎉');
    vsNextTurn();
  } else {
    // attacking team drinks — everyone on that team takes a shot
    const attackTeam = isM ? state.vsTeamM : state.vsTeamF;
    let i = 0;
    function nextShot() {
      if (i >= attackTeam.length) { vsNextTurn(); return; }
      showShot(attackTeam[i++], `¡${isM ? 'Los chicos' : 'Las chicas'} fallaron! 💀`, null, nextShot);
    }
    nextShot();
  }
}

function vsNextTurn() {
  if (state.vsRound >= state.vsMaxRounds) {
    vsShowResults();
    return;
  }

  // alternate team
  state.vsAttacking = state.vsAttacking === 'm' ? 'f' : 'm';

  // advance player index within team
  if (state.vsAttacking === 'm') {
    state.vsPlayerM = (state.vsPlayerM + 1) % state.vsTeamM.length;
  } else {
    state.vsPlayerF = (state.vsPlayerF + 1) % state.vsTeamF.length;
  }

  vsRenderBanners();
  saveGame();
  vsDrawQuestion();
}

function vsShowResults() {
  clearSave();
  const mWon = state.vsScoreM > state.vsScoreF;
  const tie  = state.vsScoreM === state.vsScoreF;

  const sorted = [...state.players].sort((a,b) => b.score - a.score);
  const list = document.getElementById('results-list');
  list.innerHTML = '';

  // winner banner at top
  const winnerDiv = document.createElement('div');
  winnerDiv.className = 'vs-result-winner';
  winnerDiv.innerHTML = tie
    ? `<div class="vs-result-winner-label">EMPATE ÉPICO</div>
       <div class="vs-result-winner-team" style="background:linear-gradient(135deg,var(--vs-m-color),var(--vs-f-color));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">¡TODOS TOMAN!</div>`
    : `<div class="vs-result-winner-label">GANADORES</div>
       <div class="vs-result-winner-team" style="color:${mWon ? 'var(--vs-m-color)' : 'var(--vs-f-color)'}">${mWon ? '♂ CHICOS' : '♀ CHICAS'}</div>`;
  list.appendChild(winnerDiv);

  // score summary
  const scoreDiv = document.createElement('div');
  scoreDiv.style.cssText = 'display:flex;gap:12px;justify-content:center;margin-bottom:16px';
  const shotsM = state.vsTeamM.reduce((sum, n) => sum + (state.shots[n] || 0), 0);
  const shotsF = state.vsTeamF.reduce((sum, n) => sum + (state.shots[n] || 0), 0);
  scoreDiv.innerHTML = `
    <div style="flex:1;text-align:center;background:rgba(64,196,255,0.08);border:1px solid rgba(64,196,255,0.2);border-radius:12px;padding:12px">
      <div style="font-family:'Bebas Neue',sans-serif;font-size:28px;color:var(--vs-m-color)">${state.vsScoreM}</div>
      <div style="font-size:11px;color:var(--text-dim)">pts Chicos</div>
      <div style="font-size:11px;color:var(--neon-pink)">🥃 ${shotsM}</div>
    </div>
    <div style="flex:1;text-align:center;background:rgba(255,128,171,0.08);border:1px solid rgba(255,128,171,0.2);border-radius:12px;padding:12px">
      <div style="font-family:'Bebas Neue',sans-serif;font-size:28px;color:var(--vs-f-color)">${state.vsScoreF}</div>
      <div style="font-size:11px;color:var(--text-dim)">pts Chicas</div>
      <div style="font-size:11px;color:var(--neon-pink)">🥃 ${shotsF}</div>
    </div>`;
  list.appendChild(scoreDiv);

  // individual shots
  state.players.forEach(p => {
    const [bg] = avatarColor(state.players.indexOf(p));
    const colors = p.gender ? GENDER_COLORS[p.gender] : { border: bg, bg };
    const shots = state.shots[p.name] || 0;
    const div = document.createElement('div');
    div.className = 'result-item';
    div.innerHTML = `
      <div style="width:34px;height:34px;border-radius:50%;background:${colors.bg};border:2px solid ${colors.border};display:flex;align-items:center;justify-content:center;font-size:${p.emoji?'17px':'13px'};flex-shrink:0">${p.emoji || initials(p.name)}</div>
      <div class="result-name">${p.name}<br><span style="font-size:10px;color:var(--text-dim)">${p.gender ? GENDER_LABELS[p.gender] : ''}</span></div>
      <div style="font-size:11px;color:var(--neon-pink);text-align:right">${shots > 0 ? `🥃 ${shots} shot${shots>1?'s':''}` : '😇 0 shots'}</div>
    `;
    list.appendChild(div);
  });

  // if tie, everyone on both teams takes a shot
  if (tie) {
    let i = 0;
    function tieShot() {
      if (i >= state.players.length) { goTo('results'); spawnConfetti(); return; }
      showShot(state.players[i++].name, '¡Empate! Todos toman 🥃', null, tieShot);
    }
    tieShot();
  } else {
    // losers take shots
    const loserTeam = mWon ? state.vsTeamF : state.vsTeamM;
    let i = 0;
    function loserShot() {
      if (i >= loserTeam.length) { goTo('results'); spawnConfetti(); return; }
      showShot(loserTeam[i++], `Perdieron 😈 El equipo perdedor toma`, null, loserShot);
    }
    loserShot();
  }
}

function openMenuFromVs() {
  renderMenuPlayers();
  document.querySelectorAll('.menu-mode-btn').forEach(b => {
    b.classList.toggle('active-mode', b.dataset.mode === state.mode);
  });
  document.getElementById('menu-overlay').classList.add('show');
  document.getElementById('menu-drawer').classList.add('show');
}
const TODI_LETTERS = ['T','O','D','I'];
const TODI_INFO = {
  T: { label: 'T — TOMA',      instruction: '¡Tú tomas!' },
  O: { label: 'O — ORDENA',    instruction: 'Ordena a alguien del grupo que tome' },
  D: { label: 'D — DERECHA',   instruction: 'Toma el que está a tu derecha' },
  I: { label: 'I — IZQUIERDA', instruction: 'Toma el que está a tu izquierda' },
};

let todiSpinInterval = null;
let todiTurnIndex = 0;
let todiTurnCount = 0;

// ===================================================
//  MODO TODI
//  Inicializa la ruleta T-O-D-I. No usa el banco de
//  preguntas — la letra determina quién toma:
//    T = Tú | O = Otro | D = Derecha | I = Izquierda
//  Termina cuando se alcanza maxChallenges.
// ===================================================
function startTodi() {
  todiTurnIndex = state.currentPlayerIndex;
  todiTurnCount = 0;
  goTo('todi');
  renderTodiStrip();
  resetTodiCard();
}

function renderTodiStrip() {
  const strip = document.getElementById('todi-players-strip');
  strip.innerHTML = '';
  state.players.forEach((p, i) => {
    const [bg] = avatarColor(i);
    const colors = p.gender ? GENDER_COLORS[p.gender] : { border: bg, bg };
    const wrap = document.createElement('div');
    wrap.className = 'strip-player';
    wrap.innerHTML = `
      <div class="strip-avatar${i === todiTurnIndex ? ' current' : ''}"
           style="background:${colors.bg};border-color:${i === todiTurnIndex ? '#fff' : colors.border};font-size:${p.emoji ? '18px' : '14px'}"
      >${p.emoji || initials(p.name)}</div>
      <div class="strip-name">${p.name}</div>
    `;
    strip.appendChild(wrap);
  });
  document.getElementById('todi-player-name').textContent = state.players[todiTurnIndex].name;
  document.getElementById('todi-turn-num').textContent = todiTurnCount + 1;
}

function resetTodiCard() {
  // show press btn, hide letter display and next btn
  document.getElementById('todi-press-btn').style.display = 'flex';
  document.getElementById('todi-press-btn').classList.remove('disabled');
  document.getElementById('todi-letter-display').style.display = 'none';
  document.getElementById('todi-next-btn').style.display = 'none';
  document.getElementById('todi-result-card').innerHTML =
    '<div class="todi-empty-hint">Presiona el botón para girar la ruleta</div>';
}

function spinTodi() {
  const btn = document.getElementById('todi-press-btn');
  const display = document.getElementById('todi-letter-display');
  const resultCard = document.getElementById('todi-result-card');

  // disable press btn and show spinning letter
  btn.classList.add('disabled');
  btn.style.display = 'none';
  display.style.display = 'flex';
  display.classList.remove('landed');
  display.classList.add('spinning');
  resultCard.innerHTML = '<div class="todi-empty-hint">Girando...</div>';
  sfxSpinStart();

  let tick = 0;
  const duration = 1800 + Math.random() * 800; // 1.8–2.6s
  const interval = 90;
  todiSpinInterval = setInterval(() => {
    tick++;
    display.textContent = TODI_LETTERS[tick % 4];
  }, interval);

  setTimeout(() => {
    clearInterval(todiSpinInterval);
    sfxShotLand();
    const landed = TODI_LETTERS[Math.floor(Math.random() * 4)];
    display.textContent = landed;
    display.classList.remove('spinning');
    display.classList.add('landed');
    showTodiResult(landed);
  }, duration);
}

function showTodiResult(letter) {
  const info = TODI_INFO[letter];
  const currentPlayer = state.players[todiTurnIndex];

  let html = `
    <div class="todi-result-badge">${info.label}</div>
    <div class="todi-result-instruction">${info.instruction}</div>
  `;

  if (letter === 'T') {
    html += `<div class="todi-result-who">${currentPlayer.name} 🥃</div>`;
  } else {
    html += `<div class="todi-result-who">🥃</div>`;
  }

  const card = document.getElementById('todi-result-card');
  card.innerHTML = html;
  card.style.animation = 'none';
  void card.offsetWidth;
  card.style.animation = 'cardIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
  document.getElementById('todi-next-btn').style.display = 'flex';
}

function todiNext() {
  todiTurnCount++;
  // end game after maxChallenges turns
  if (state.maxChallenges > 0 && todiTurnCount >= state.maxChallenges) {
    clearSave();
    // give everyone equal score for todi (no trivia scoring)
    state.players.forEach(p => { p.score = 10; });
    showResults();
    return;
  }
  todiTurnIndex = (todiTurnIndex + 1) % state.players.length;
  renderTodiStrip();
  resetTodiCard();
  // scroll strip to current
  const strip = document.getElementById('todi-players-strip');
  const avatars = strip.querySelectorAll('.strip-player');
  if (avatars[todiTurnIndex]) avatars[todiTurnIndex].scrollIntoView({ behavior:'smooth', inline:'center', block:'nearest' });
}

function openMenuFromTodi() {
  state.mode = 'todi';
  openMenu();
}

function menuGoPlayers() {
  closeMenu();
  renderPlayers();
  goTo('players');
}

function menuGoModes() {
  closeMenu();
  goTo('modes');
}

function menuGoHome() {
  closeMenu();
  goTo('home');
}

// ===================================================
//  RESULTS
// ===================================================
// ===================================================
//  PANTALLA DE RESULTADOS
//  Ordena los jugadores por puntaje (mayor → menor) y
//  genera el ranking final con shots tomados por cada uno.
//  Lanza el confetti y la fanfarria de victoria.
// ===================================================
function showResults() {
  const sorted = [...state.players].sort((a,b) => b.score - a.score);
  const list = document.getElementById('results-list');
  list.innerHTML = '';
  sorted.forEach((p, i) => {
    const [bg] = avatarColor(state.players.indexOf(p));
    const colors = p.gender ? GENDER_COLORS[p.gender] : { border: bg, bg };
    const shots = state.shots[p.name] || 0;
    const medals = ['🥇','🥈','🥉'];
    const div = document.createElement('div');
    div.className = 'result-item';
    div.innerHTML = `
      <div class="result-rank">${medals[i] || i+1}</div>
      <div style="width:36px;height:36px;border-radius:50%;background:${colors.bg};border:2px solid ${colors.border};display:flex;align-items:center;justify-content:center;font-size:${p.emoji ? '18px' : '14px'};flex-shrink:0">${p.emoji || initials(p.name)}</div>
      <div class="result-name">${p.name}<br><span style="font-size:10px;color:var(--text-dim);font-weight:400">${p.gender ? GENDER_LABELS[p.gender] : ''}</span></div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:2px">
        <div class="result-score">${p.score} pts</div>
        ${shots > 0 ? `<div style="font-size:11px;color:var(--neon-pink)">🥃 ${shots} shot${shots>1?'s':''}</div>` : ''}
      </div>
    `;
    list.appendChild(div);
  });
  goTo('results');
  spawnConfetti();
}

function playAgain() {
  resetGameState();
  goTo('modes');
}

// ===================================================
//  CONFETTI
// ===================================================
function spawnConfetti() {
  sfxVictory();
  const colors = ['#ff2d6b','#00e5ff','#ffd600','#b44fff','#ff7c2d','#00e676'];
  for (let i = 0; i < 60; i++) {
    setTimeout(() => {
      const el = document.createElement('div');
      el.className = 'confetti-piece';
      el.style.cssText = `
        left: ${Math.random()*100}vw;
        background: ${colors[Math.floor(Math.random()*colors.length)]};
        width: ${6+Math.random()*8}px;
        height: ${6+Math.random()*8}px;
        border-radius: ${Math.random()>0.5?'50%':'2px'};
        animation-duration: ${1.5+Math.random()*2}s;
        animation-delay: 0s;
      `;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 3500);
    }, i * 40);
  }
}

// ===================================================
//  TOAST
// ===================================================
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._tid);
  t._tid = setTimeout(() => t.classList.remove('show'), 2200);
}

// ===================================================
//  INIT
// ===================================================
function initParticles() {
  const canvas = document.getElementById('home-particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
  resize();
  window.addEventListener('resize', resize);

  const count = 36;
  const colors = ['#ff2d6b','#b44fff','#00e5ff','#ffd600','#00e676'];
  const pts = Array.from({length: count}, () => ({
    x: Math.random(), y: Math.random(),
    vx: (Math.random() - 0.5) * 0.0003,
    vy: (Math.random() - 0.5) * 0.0003,
    r: 1 + Math.random() * 2,
    color: colors[Math.floor(Math.random() * colors.length)],
    alpha: 0.3 + Math.random() * 0.5
  }));

  let animId;
  function draw() {
    const w = canvas.width, h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    pts.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = 1; if (p.x > 1) p.x = 0;
      if (p.y < 0) p.y = 1; if (p.y > 1) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x * w, p.y * h, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    animId = requestAnimationFrame(draw);
  }
  draw();
}


// ===================================================
//  IMPOSTOR MODE
// ===================================================

// ===================================================
//  MODO IMPOSTOR
//  El juego elige 1 o 2 impostores al azar. Los inocentes
//  ven la palabra secreta en privado; el impostor no.
//  Flujo: roles → ronda de pistas → votación → reveal.
//  Usa el banco IMPOSTOR_WORDS (82 palabras, 7 categorías).
// ===================================================
function startImpostor() {

  console.log(
    'ANTES DE IMPOSTOR:',
    JSON.parse(JSON.stringify(state.players))
  );

  state.impostorCurrentIndex = 0;

  goTo('impostor');

  console.log(
    'DESPUÉS DE goTo:',
    JSON.parse(JSON.stringify(state.players))
  );

  impostorNewRound();

  console.log(
    'DESPUÉS DE NEW ROUND:',
    JSON.parse(JSON.stringify(state.players))
  );
}

function impostorPickWord() {
  // pick random word not recently used
  let pool = IMPOSTOR_ALL_WORDS.filter(w => !state.impostorUsedWords.includes(w.word));
  if (pool.length === 0) { state.impostorUsedWords = []; pool = IMPOSTOR_ALL_WORDS; }
  const picked = pool[Math.floor(Math.random() * pool.length)];
  state.impostorUsedWords.push(picked.word);
  return picked;
}

function impostorNewRound() {
  const n = state.players.length;

  // pick word
  const wordObj = impostorPickWord();
  state.impostorWord = wordObj;

  // assign impostors: 1 if ≤4 players, 2 if ≥5 players
  const numImpostors = n >= 5 ? 2 : 1;
  const indices = [...Array(n).keys()];
  // shuffle
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  state.impostorImpostors = indices.slice(0, numImpostors);
  state.impostorHints = [];
  state.impostorHintIndex = 0;
  state.impostorVoterIndex = 0;
  state.impostorVotes = {};

  // show phase badge
  document.getElementById('impostor-phase-badge').textContent = 'RONDA DE PISTAS';

  // word banner (only shows for innocents — hide for now, shown after all roles revealed)
  // banner shows ONLY category during hint round — word stays secret
  document.getElementById('impostor-word-display').textContent = wordObj.cat;

  // show hint phase, hide others
  document.getElementById('impostor-hint-phase').classList.add('visible');
  document.getElementById('impostor-vote-phase').style.display = 'none';
  document.getElementById('impostor-reveal-phase').style.display = 'none';
  document.getElementById('impostor-hints-done').innerHTML = '';

  // hide current hint slot until roles are revealed
  document.getElementById('impostor-current-hint-wrap').style.display = 'none';
  document.getElementById('impostor-word-banner').style.display = 'none';

  // inicializar índice actual
  state.impostorCurrentIndex = 0;

  // guardar índice en overlay
  const overlay =
    document.getElementById(
      'impostor-role-overlay'
    );

  overlay.dataset.revealIdx =
    state.impostorCurrentIndex;

  // start role reveal sequence
  impostorShowRoleFor(0);
}

function impostorShowRoleFor(idx) {
  /*
   * PASO 1 — Pantalla de llamado
   * Muestra el nombre del jugador para que sepa que le toca.
   * El resto del grupo puede ver esta pantalla sin problema.
   * Solo muestra el rol cuando el jugador presiona "Soy yo, ver mi rol".
   */
  const overlay    = document.getElementById('impostor-role-overlay');
  const callCard   = document.getElementById('impostor-call-card');
  const roleCard   = document.getElementById('impostor-role-card');
  const callName   = document.getElementById('impostor-call-name');
  const callEmoji  = document.getElementById('impostor-call-emoji');

  const player = state.players[idx];

  // Mostrar nombre y emoji del jugador en la pantalla de llamado
  callName.textContent  = player.name;
  callEmoji.textContent = player.emoji || '👤';

  // Construir chips de progreso (quién ya vio su rol)
  const chipsEl = document.getElementById('impostor-progress-chips');
  chipsEl.innerHTML = '';
  state.players.forEach((p, i) => {
    const chip = document.createElement('div');
    chip.className = 'impostor-progress-chip' +
      (i < idx ? ' done' : i === idx ? ' current' : '');
    chip.textContent = (i < idx ? '✓ ' : '') + p.name;
    chipsEl.appendChild(chip);
  });

  // Mostrar llamado, ocultar rol
  callCard.style.display = 'block';
  roleCard.style.display = 'none';

  // Guardar índice actual para cuando presione "ver mi rol"
  overlay.dataset.revealIdx = idx;
  overlay.classList.add('show');
  sfxTap();
}

function impostorRevealRole() {
  /*
   * PASO 2 — Mostrar el rol al jugador
   * Solo se ejecuta cuando el propio jugador presiona el botón.
   * Oculta la pantalla de llamado y muestra Impostor o Inocente.
   */
  const overlay  = document.getElementById('impostor-role-overlay');
  const callCard = document.getElementById('impostor-call-card');
  const roleCard = document.getElementById('impostor-role-card');

  let idx      = parseInt(overlay.dataset.revealIdx);
  if (isNaN(idx)) {

  idx = state.impostorCurrentIndex || 0;

  overlay.dataset.revealIdx = idx;
  }
  console.log('Reveal IDX:', idx);
  console.log('Players:', state.players);

  const card    = document.getElementById('impostor-role-card');
  const iconEl  = document.getElementById('impostor-role-icon');
  const whoEl   = document.getElementById('impostor-role-who');
  const labelEl = document.getElementById('impostor-role-label');
  const wordEl  = document.getElementById('impostor-role-word');
  const allyEl  = document.getElementById('impostor-ally-notice');
  const btn     = document.getElementById('impostor-role-btn');

  const isImpostor   = state.impostorImpostors.includes(idx);
  const numImpostors = state.impostorImpostors.length;

  // Nombre del cómplice si hay 2 impostores
 let allyName = null;

 if (isImpostor && numImpostors === 2) {

   const allyIdx =
     state.impostorImpostors.find(
       i => i !== idx
     );

   // Validar índice y jugador
   if (
     allyIdx !== undefined &&
     state.players[allyIdx]
   ) {

     allyName =
       state.players[allyIdx].name;
   }
 }

  // Limpiar clases anteriores
  card.className    = 'impostor-role-card';
  labelEl.className = 'impostor-role-label';
  wordEl.innerHTML  = '';

  const player = state.players[idx];
  if (!player) {
      console.error('Jugador inválido en impostorRevealRole');
      return;
  } 

  whoEl.textContent = player.name;
  if (!state.impostorWord) {

    console.error(
      'impostorWord es null'
    );

    return;
  }

  if (isImpostor) {
    card.classList.add('is-impostor');
    iconEl.textContent = '🕵️';
    labelEl.classList.add('is-impostor');
    labelEl.textContent = 'ERES EL IMPOSTOR';
    wordEl.textContent  = 'No conoces la palabra. Da pistas vagas y confunde al grupo.';
    allyEl.style.display = allyName ? 'block' : 'none';
    if (allyName) allyEl.textContent = `Tu cómplice es: ${allyName} — ¡no se delaten!`;
    // Último jugador o no → texto del botón igual
    btn.textContent = idx === state.players.length - 1 ? 'Listo, empezar 🕵️' : 'Listo, pasar al siguiente →';
  } else {
    card.classList.add('is-innocent');
    iconEl.textContent = '😇';
    labelEl.classList.add('is-innocent');
    labelEl.textContent = 'INOCENTE';
    wordEl.innerHTML = 'La palabra secreta es:';
    const wordReveal = document.createElement('div');
    wordReveal.className  = 'impostor-word-reveal';
    wordReveal.textContent = state.impostorWord?.word || '???';
    wordEl.appendChild(document.createElement('br'));
    wordEl.appendChild(wordReveal);
    allyEl.style.display = 'none';
    btn.textContent = idx === state.players.length - 1 ? 'Listo, empezar 😇' : 'Listo, pasar al siguiente →';
  }

  // Ocultar llamado, mostrar rol con animación
  callCard.style.display = 'none';
  roleCard.style.display = 'block';
  roleCard.style.animation = 'none';
  void roleCard.offsetWidth;
  roleCard.style.animation = 'specialCardPop 0.35s cubic-bezier(0.34,1.56,0.64,1)';

  sfxSpecialCard();
}

function impostorRoleNext() {
  /*
   * PASO 3 — Cerrar rol y pasar al siguiente jugador
   * Si quedan jugadores, vuelve a la pantalla de llamado con el próximo.
   * Si todos vieron su rol, arranca la ronda de pistas.
   */
  const overlay = document.getElementById('impostor-role-overlay');
  const idx     = parseInt(overlay.dataset.revealIdx);

  // Limpiar contenido del rol para que no se vea durante el llamado al siguiente
  document.getElementById('impostor-role-word').innerHTML = '';

  const next = idx + 1;
  if (next < state.players.length) {
    // Hay más jugadores — mostrar llamado del siguiente
    setTimeout(() => impostorShowRoleFor(next), 300);
  } else {
    // Todos vieron su rol — cerrar overlay y arrancar ronda de pistas
    overlay.classList.remove('show');
    setTimeout(() => impostorStartHintRound(), 300);
  }
}

function impostorStartHintRound() {
  // show banner with category only (word stays hidden)
  const banner = document.getElementById('impostor-word-banner');
  banner.style.display = 'block';
  // remove any old category badge leftover from previous rounds
  const old = banner.querySelector('.impostor-category-badge');
  if (old) old.remove();

  impostorShowCurrentHinter();
}

function impostorShowCurrentHinter() {
  const idx = state.impostorHintIndex;
  if (idx >= state.players.length) {
    // all hints collected — move to voting
    impostorStartVoting();
    return;
  }
  const player = state.players[idx];
  const [bg] = avatarColor(idx);
  const wrap = document.getElementById('impostor-current-hint-wrap');
  wrap.style.display = 'flex';

  document.getElementById('impostor-hint-avatar').textContent = player.emoji || initials(player.name);
  document.getElementById('impostor-hint-avatar').style.background = bg;
  document.getElementById('impostor-hint-avatar').style.color = '#000';
  document.getElementById('impostor-hint-name').textContent = player.name;

  const btn = document.getElementById('impostor-next-hint-btn');
  btn.textContent = idx === state.players.length - 1 ? 'Votar ahora 🗳️' : 'Siguiente jugador →';
  btn.onclick = () => impostorNextHint();
  sfxCard();
}

function impostorNextHint() {
  sfxTap();
  const idx = state.impostorHintIndex;
  const player = state.players[idx];

  // record placeholder hint (group marks it verbally — we just log the name)
  state.impostorHints.push({ name: player.name, idx });

  // add to done list
  const [bg] = avatarColor(idx);
  const done = document.getElementById('impostor-hints-done');
  const item = document.createElement('div');
  item.className = 'impostor-hint-item';
  item.innerHTML = `
    <div style="width:28px;height:28px;border-radius:50%;background:${bg};display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0">
      ${player.emoji || initials(player.name)}
    </div>
    <strong>${player.name}</strong>
    <span>dio su pista ✓</span>
  `;
  done.appendChild(item);

  state.impostorHintIndex++;
  impostorShowCurrentHinter();
}

// ── VOTING PHASE ─────────────────────────────────────

function impostorStartVoting() {
  document.getElementById('impostor-current-hint-wrap').style.display = 'none';
  document.getElementById('impostor-hint-phase').style.display = 'none';
  document.getElementById('impostor-word-banner').style.display = 'none';
  document.getElementById('impostor-vote-phase').style.display = 'flex';
  document.getElementById('impostor-vote-phase').style.flexDirection = 'column';
  document.getElementById('impostor-phase-badge').textContent = 'VOTACIÓN';
  state.impostorVoterIndex = 0;
  impostorShowVoter();
}

function impostorShowVoter() {
  const voterIdx = state.impostorVoterIndex;
  if (voterIdx >= state.players.length) {
    impostorReveal();
    return;
  }
  const voter = state.players[voterIdx];
  document.getElementById('impostor-voter-name').textContent = voter.name;

  // build vote options (everyone except self)
  const opts = document.getElementById('impostor-vote-opts');
  opts.innerHTML = '';
  let selected = null;
  const confirmBtn = document.getElementById('impostor-vote-confirm-btn');
  confirmBtn.disabled = true;

  state.players.forEach((p, i) => {
    if (i === voterIdx) return; // can't vote for yourself
    const [bg] = avatarColor(i);
    const opt = document.createElement('div');
    opt.className = 'impostor-vote-opt';
    opt.innerHTML = `
      <div style="width:32px;height:32px;border-radius:50%;background:${bg};display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0">
        ${p.emoji || initials(p.name)}
      </div>
      <span>${p.name}</span>
    `;
    opt.onclick = () => {
      document.querySelectorAll('.impostor-vote-opt').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      selected = p.name;
      confirmBtn.disabled = false;
      sfxTap();
    };
    opts.appendChild(opt);
  });

  confirmBtn.onclick = () => {
    if (!selected) return;
    state.impostorVotes[voter.name] = selected;
    state.impostorVoterIndex++;
    sfxTap();
    impostorShowVoter();
  };
  sfxCard();
}

function impostorConfirmVote() {
  // handled via onclick in impostorShowVoter
}

// ── REVEAL PHASE ─────────────────────────────────────

function impostorReveal() {
  document.getElementById('impostor-vote-phase').style.display = 'none';
  document.getElementById('impostor-reveal-phase').style.display = 'flex';
  document.getElementById('impostor-reveal-phase').style.flexDirection = 'column';
  document.getElementById('impostor-phase-badge').textContent = 'RESULTADO';

  // tally votes
  const tally = {}; // name → count
  state.players.forEach(p => { tally[p.name] = 0; });
  Object.values(state.impostorVotes).forEach(votedFor => {
    tally[votedFor] = (tally[votedFor] || 0) + 1;
  });

  // find max votes
  const maxVotes = Math.max(...Object.values(tally));
  const mostVoted = Object.entries(tally).filter(([,v]) => v === maxVotes).map(([k]) => k);

  // get impostor names
  const impostorNames = state.impostorImpostors.map(i => state.players[i].name);

  // check if ALL most-voted are impostors
  const caught = mostVoted.length > 0 && mostVoted.every(name => impostorNames.includes(name)) && maxVotes > 0;
  const isTie = mostVoted.length > 1;
  const impostorEscapes = isTie || !caught;

  // verdict
  const verdictEl = document.getElementById('impostor-verdict-text');
  const subEl = document.getElementById('impostor-verdict-sub');
  const chipsEl = document.getElementById('impostor-reveal-impostors');
  const wordEl = document.getElementById('impostor-reveal-word');

  wordEl.textContent = state.impostorWord.word;
  chipsEl.innerHTML = '';
  impostorNames.forEach(name => {
    const chip = document.createElement('div');
    chip.className = 'impostor-reveal-chip';
    chip.innerHTML = `🕵️ ${name}`;
    chipsEl.appendChild(chip);
  });

  if (isTie) {
    verdictEl.className = 'impostor-verdict draw';
    verdictEl.textContent = '¡EMPATE!';
    subEl.textContent = 'El impostor se salva. Nadie toma esta ronda.';
  } else if (caught) {
    verdictEl.className = 'impostor-verdict caught';
    verdictEl.textContent = '¡ATRAPADO!';
    const shotCount = Math.max(2, Math.floor(state.players.length / 2));
    subEl.textContent = `${impostorNames.join(' y ')} ${impostorNames.length > 1 ? 'son' : 'es'} el impostor. ${impostorNames.length > 1 ? 'Toman' : 'Toma'} ${shotCount} shots de castigo.`;
  } else {
    verdictEl.className = 'impostor-verdict escaped';
    verdictEl.textContent = '¡ESCAPÓ!';
    subEl.textContent = `El impostor era ${impostorNames.join(' y ')}. El resto del grupo toma 2 shots cada uno.`;
  }

  // votes summary
  const summary = document.getElementById('impostor-votes-summary');
  summary.innerHTML = '<div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:var(--text-dim);margin-bottom:4px">VOTOS</div>';
  const sortedEntries = Object.entries(tally).sort(([,a],[,b]) => b - a);
  sortedEntries.forEach(([name, votes]) => {
    const isTop = votes === maxVotes && votes > 0;
    const row = document.createElement('div');
    row.className = 'impostor-vote-result-row' + (isTop ? ' most-voted' : '');
    const pct = state.players.length > 1 ? Math.round((votes / (state.players.length - 1)) * 100) : 0;
    const isImp = impostorNames.includes(name);
    row.innerHTML = `
      <span style="min-width:80px;font-weight:600;color:${isImp ? '#ff6b35' : 'var(--text)'}">${name}${isImp ? ' 🕵️' : ''}</span>
      <div class="impostor-vote-bar"><div class="impostor-vote-bar-fill" style="width:0%" data-pct="${pct}"></div></div>
      <span style="font-size:12px;color:var(--text-dim);min-width:36px;text-align:right">${votes} voto${votes !== 1 ? 's' : ''}</span>
    `;
    summary.appendChild(row);
  });

  sfxReveal();
  spawnConfetti();

  // animate bars after paint
  setTimeout(() => {
    summary.querySelectorAll('.impostor-vote-bar-fill').forEach(el => {
      el.style.width = el.dataset.pct + '%';
    });
  }, 100);

  // trigger shots
  if (!isTie) {
    if (caught) {
      const shotCount = Math.max(2, Math.floor(state.players.length / 2));
      let i = 0;
      function nextImpostorShot() {
        if (i >= impostorNames.length) return;
        showShot(impostorNames[i], '¡El impostor fue atrapado! 🕵️', shotCount, () => {
          i++;
          nextImpostorShot();
        });
      }
      setTimeout(nextImpostorShot, 1200);
    } else {
      // innocents drink
      const innocents = state.players.filter(p => !impostorNames.includes(p.name));
      let i = 0;
      function nextInnocentShot() {
        if (i >= innocents.length) return;
        showShot(innocents[i].name, `El impostor escapó — ${impostorNames.join(' y ')} los engañó 😈`, 2, () => {
          i++;
          nextInnocentShot();
        });
      }
      setTimeout(nextInnocentShot, 1200);
    }
  }
}

function impostorNextRound() {
  sfxTap();
  impostorNewRound();
}


// ===================================================
//  COVER FLOW CAROUSEL
// ===================================================
const CF_MODES = ['truth','trivia','never','who','todi','vs','impostor'];
let cfIndex = 0;
let cfW = 0;        // active card width 
let cfH = 0;        // active card height
let cfTouchX = 0;
let cfDragX  = 0;
let cfDragging = false;

// Layout constants
const CF_SIDE_SCALE  = 0.72;   // side cards scale
const CF_SIDE_OFFSET = 0.55;   // how far side cards peek in (fraction of active width)
const CF_SIDE_OPACITY = 0.45;
const CF_FAR_OPACITY  = 0.18;
const CF_FAR_SCALE    = 0.52;
const CF_FAR_OFFSET   = 1.0;

function cfLayout() {
  const stage = document.getElementById('coverflow-stage');
  if (!stage) return;

  const vw = stage.offsetWidth;
  const vh = window.innerHeight;
  const isDesktop = window.innerWidth >= 900;

  // active card dimensions
  cfW = isDesktop ? Math.min(420, vw * 0.58) : Math.min(vw * 0.64, 260);
  cfH = isDesktop ? 240 : Math.min(210, vh * 0.27);

  // stage height = active card height
  stage.style.height = cfH + 'px';

  const cards = stage.querySelectorAll('.mode-card');
  cards.forEach(c => {
    c.style.width  = cfW + 'px';
    c.style.height = cfH + 'px';
  });
}

// ===================================================
//  COVER FLOW — RENDERIZAR POSICIONES
//  Posiciona cada card con transform 3D según su distancia
//  al índice activo: centro=100%, lados=72%, lejos=52%.
//  Actualiza dots, flechas y selecciona el modo activo.
// ===================================================
function cfRender(animate) {
  const stage = document.getElementById('coverflow-stage');
  if (!stage) return;

  const cards = Array.from(stage.querySelectorAll('.mode-card'));
  const total = cards.length;

  cards.forEach((card, i) => {
    const offset = i - cfIndex;
    const absOff = Math.abs(offset);

    let tx = 0, scale = 1, opacity = 1, zIndex = 0, rotY = 0;

    if (offset === 0) {
      // ACTIVE — center, full size
      tx      = 0;
      scale   = 1;
      opacity = 1;
      zIndex  = 10;
      rotY    = 0;
    } else if (absOff === 1) {
      // ADJACENT — visible at sides, slightly scaled + rotated
      const dir = offset > 0 ? 1 : -1;
      tx      = dir * cfW * CF_SIDE_OFFSET;
      scale   = CF_SIDE_SCALE;
      opacity = CF_SIDE_OPACITY;
      zIndex  = 5;
      rotY    = dir * 18;
    } else if (absOff === 2) {
      // FAR — barely visible, more behind
      const dir = offset > 0 ? 1 : -1;
      tx      = dir * cfW * CF_FAR_OFFSET;
      scale   = CF_FAR_SCALE;
      opacity = CF_FAR_OPACITY;
      zIndex  = 2;
      rotY    = dir * 32;
    } else {
      // HIDDEN
      const dir = offset > 0 ? 1 : -1;
      tx      = dir * cfW * 1.4;
      scale   = 0.4;
      opacity = 0;
      zIndex  = 0;
      rotY    = dir * 45;
    }

    if (!animate) card.style.transition = 'none';
    else          card.style.transition = 'transform 0.42s cubic-bezier(0.4,0,0.2,1), opacity 0.42s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s, border-color 0.3s';

    card.style.transform  = `translateX(${tx}px) scale(${scale}) perspective(900px) rotateY(${rotY}deg)`;
    card.style.opacity    = opacity;
    card.style.zIndex     = zIndex;
    card.style.pointerEvents = offset === 0 ? 'auto' : 'none';

    // active state class
    card.classList.toggle('cf-active', offset === 0);
  });

  // dots
  document.querySelectorAll('.cf-dot').forEach((d, i) => {
    d.classList.toggle('active', i === cfIndex);
  });

  // arrow buttons
  const prev = document.getElementById('cf-prev');
  const next = document.getElementById('cf-next');
  if (prev) prev.disabled = cfIndex === 0;
  if (next) next.disabled = cfIndex === total - 1;

  // auto-select mode
  const mode = CF_MODES[cfIndex];
  if (mode) selectMode(mode);
}

function cfGoTo(i, animate) {
  const total = CF_MODES.length;
  cfIndex = Math.max(0, Math.min(i, total - 1));
  cfRender(animate !== false);
}

function cfPrev() { cfGoTo(cfIndex - 1); }
function cfNext() { cfGoTo(cfIndex + 1); }
function cfSelect(i) { cfGoTo(i); }

// ===================================================
//  COVER FLOW — INICIALIZACIÓN
//  Calcula las dimensiones de las cards según el viewport,
//  activa los eventos de touch/mouse/teclado y renderiza
//  el carrusel en la posición del modo seleccionado.
// ===================================================
function cfInit() {
  const stage = document.getElementById('coverflow-stage');
  if (!stage) return;

  cfLayout();
  cfRender(false);  // no animation on first render

  // Touch
  stage.addEventListener('touchstart', e => {
    cfTouchX = e.touches[0].clientX;
    cfDragX  = 0;
  }, { passive: true });
  stage.addEventListener('touchmove', e => {
    cfDragX = e.touches[0].clientX - cfTouchX;
  }, { passive: true });
  stage.addEventListener('touchend', () => {
    if (cfDragX < -45) cfNext();
    else if (cfDragX > 45) cfPrev();
    cfDragX = 0;
  });

  // Mouse drag
  stage.addEventListener('mousedown', e => {
    cfDragging = true;
    cfTouchX   = e.clientX;
    cfDragX    = 0;
    stage.style.cursor = 'grabbing';
  });
  window.addEventListener('mousemove', e => {
    if (!cfDragging) return;
    cfDragX = e.clientX - cfTouchX;
  });
  window.addEventListener('mouseup', () => {
    if (!cfDragging) return;
    cfDragging = false;
    stage.style.cursor = '';
    if (cfDragX < -45) cfNext();
    else if (cfDragX > 45) cfPrev();
    cfDragX = 0;
  });

  // Keyboard
  document.addEventListener('keydown', e => {
    const ms = document.getElementById('screen-modes');
    if (!ms || !ms.classList.contains('active')) return;
    if (e.key === 'ArrowRight') cfNext();
    if (e.key === 'ArrowLeft')  cfPrev();
  });
}

// Resize
window.addEventListener('resize', () => {
  const ms = document.getElementById('screen-modes');
  if (ms && ms.classList.contains('active')) {
    cfLayout();
    cfRender(false);
  }
});

;

// ===================================================
//  SOUND SYSTEM — Web Audio API (sin dependencias)
// ===================================================
let _audioCtx = null;
let soundEnabled = true;

function getAudioCtx() {
  if (!_audioCtx) _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (_audioCtx.state === 'suspended') _audioCtx.resume();
  return _audioCtx;
}

function playSound(fn) {
  if (!soundEnabled) return;
  try { fn(getAudioCtx()); } catch(e) {}
}

// --- Sonido: carta nueva (whoosh suave) ---
function sfxCard() {
  playSound(ctx => {
    const buf = ctx.createBuffer(1, ctx.sampleRate * 0.18, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) {
      d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / d.length, 2) * 0.35;
    }
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(800, ctx.currentTime);
    filter.frequency.linearRampToValueAtTime(2400, ctx.currentTime + 0.15);
    filter.Q.value = 0.8;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.5, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);
    src.connect(filter); filter.connect(gain); gain.connect(ctx.destination);
    src.start();
  });
}

// --- Sonido: carta especial (impacto dramático) ---
function sfxSpecialCard() {
  playSound(ctx => {
    const t = ctx.currentTime;
    // boom bajo
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(120, t);
    osc.frequency.exponentialRampToValueAtTime(40, t + 0.4);
    const g1 = ctx.createGain();
    g1.gain.setValueAtTime(0.7, t);
    g1.gain.exponentialRampToValueAtTime(0.001, t + 0.5);
    osc.connect(g1); g1.connect(ctx.destination);
    osc.start(t); osc.stop(t + 0.5);
    // chispa alta
    setTimeout(() => playSound(c2 => {
      const o2 = c2.createOscillator();
      o2.type = 'square';
      o2.frequency.setValueAtTime(880, c2.currentTime);
      o2.frequency.exponentialRampToValueAtTime(1760, c2.currentTime + 0.08);
      const g2 = c2.createGain();
      g2.gain.setValueAtTime(0.2, c2.currentTime);
      g2.gain.exponentialRampToValueAtTime(0.001, c2.currentTime + 0.12);
      o2.connect(g2); g2.connect(c2.destination);
      o2.start(); o2.stop(c2.currentTime + 0.12);
    }), 80);
  });
}

// --- Sonido: shot modal abre (tensión creciente) ---
function sfxShotOpen() {
  playSound(ctx => {
    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(200, t);
    osc.frequency.linearRampToValueAtTime(400, t + 0.6);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0, t);
    gain.gain.linearRampToValueAtTime(0.18, t + 0.1);
    gain.gain.linearRampToValueAtTime(0.12, t + 0.6);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.7);
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 600;
    osc.connect(filter); filter.connect(gain); gain.connect(ctx.destination);
    osc.start(t); osc.stop(t + 0.7);
  });
}

// --- Sonido: ruleta girando (ticks acelerados) ---
let _spinInterval = null;
function sfxSpinStart() {
  sfxSpinStop();
  let speed = 120;
  function tick() {
    playSound(ctx => {
      const o = ctx.createOscillator();
      o.type = 'square';
      o.frequency.value = 900 + Math.random() * 200;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.06, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
      o.connect(g); g.connect(ctx.destination);
      o.start(); o.stop(ctx.currentTime + 0.04);
    });
    speed = Math.max(speed * 0.97, 30);
    _spinInterval = setTimeout(tick, speed);
  }
  tick();
}
function sfxSpinStop() {
  if (_spinInterval) { clearTimeout(_spinInterval); _spinInterval = null; }
}

// --- Sonido: número aterriza / resultado (golpe + reverb corto) ---
function sfxShotLand() {
  sfxSpinStop();
  playSound(ctx => {
    const t = ctx.currentTime;
    // impacto
    const buf = ctx.createBuffer(1, ctx.sampleRate * 0.3, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = (Math.random()*2-1) * Math.exp(-i/(ctx.sampleRate*0.04));
    const noise = ctx.createBufferSource();
    noise.buffer = buf;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.6, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
    noise.connect(g); g.connect(ctx.destination);
    noise.start(t);
    // nota grave de aterrizaje
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(180, t);
    osc.frequency.exponentialRampToValueAtTime(80, t + 0.25);
    const g2 = ctx.createGain();
    g2.gain.setValueAtTime(0.5, t);
    g2.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
    osc.connect(g2); g2.connect(ctx.destination);
    osc.start(t); osc.stop(t + 0.3);
  });
}

// --- Sonido: trivia correcta (fanfarria) ---
function sfxCorrect() {
  playSound(ctx => {
    const t = ctx.currentTime;
    [[523,0],[659,0.1],[784,0.2],[1047,0.3]].forEach(([freq, delay]) => {
      const o = ctx.createOscillator();
      o.type = 'triangle';
      o.frequency.value = freq;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0, t+delay);
      g.gain.linearRampToValueAtTime(0.25, t+delay+0.02);
      g.gain.exponentialRampToValueAtTime(0.001, t+delay+0.2);
      o.connect(g); g.connect(ctx.destination);
      o.start(t+delay); o.stop(t+delay+0.22);
    });
  });
}

// --- Sonido: trivia incorrecta (bzzz descendente) ---
function sfxWrong() {
  playSound(ctx => {
    const t = ctx.currentTime;
    const o = ctx.createOscillator();
    o.type = 'sawtooth';
    o.frequency.setValueAtTime(300, t);
    o.frequency.linearRampToValueAtTime(80, t + 0.35);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.25, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.4);
    o.connect(g); g.connect(ctx.destination);
    o.start(t); o.stop(t + 0.4);
  });
}

// --- Sonido: victoria / resultados (fanfarria épica) ---
function sfxVictory() {
  playSound(ctx => {
    const t = ctx.currentTime;
    [[392,0,0.3],[523,0.15,0.3],[659,0.3,0.3],[784,0.45,0.6],[1047,0.6,0.8]].forEach(([freq,delay,dur]) => {
      const o = ctx.createOscillator();
      o.type = 'triangle';
      o.frequency.value = freq;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0, t+delay);
      g.gain.linearRampToValueAtTime(0.3, t+delay+0.03);
      g.gain.setValueAtTime(0.3, t+delay+dur-0.05);
      g.gain.exponentialRampToValueAtTime(0.001, t+delay+dur);
      o.connect(g); g.connect(ctx.destination);
      o.start(t+delay); o.stop(t+delay+dur);
    });
  });
}

// --- Sonido: click de botón (tap suave) ---
function sfxTap() {
  playSound(ctx => {
    const o = ctx.createOscillator();
    o.type = 'sine';
    o.frequency.setValueAtTime(600, ctx.currentTime);
    o.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.06);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.15, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    o.connect(g); g.connect(ctx.destination);
    o.start(); o.stop(ctx.currentTime + 0.08);
  });
}

// --- Sonido: dedo bajado Yo Nunca ---
function sfxFinger() {
  playSound(ctx => {
    const t = ctx.currentTime;
    const o = ctx.createOscillator();
    o.type = 'sine';
    o.frequency.setValueAtTime(440, t);
    o.frequency.exponentialRampToValueAtTime(220, t + 0.18);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.2, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
    o.connect(g); g.connect(ctx.destination);
    o.start(t); o.stop(t + 0.2);
  });
}

// --- Sonido: votación revelada (redoble corto) ---
function sfxReveal() {
  playSound(ctx => {
    const t = ctx.currentTime;
    for (let i = 0; i < 6; i++) {
      const o = ctx.createOscillator();
      o.type = 'triangle';
      o.frequency.value = 200 + i * 60;
      const g = ctx.createGain();
      const dt = t + i * 0.06;
      g.gain.setValueAtTime(0.18, dt);
      g.gain.exponentialRampToValueAtTime(0.001, dt + 0.08);
      o.connect(g); g.connect(ctx.destination);
      o.start(dt); o.stop(dt + 0.1);
    }
  });
}

// --- Toggle mute (botón UI) ---
function toggleSound() {
  soundEnabled = !soundEnabled;
  const btn = document.getElementById('sound-toggle-btn');
  if (btn) btn.textContent = soundEnabled ? '🔊' : '🔇';
  if (soundEnabled) sfxTap();
}

function initApp() {
  selectMode('truth');
  setIntensity(2);
  state.totalRounds = Infinity; // Rondas infinitas
  initParticles();
  initDesktopLayout();
  setTimeout(cfInit, 30);

  // check for saved game
  const save = loadSave();
  if (save && save.players && save.players.length >= 2) {
    const btn = document.getElementById('btn-resume');
    if (btn) {
      const mins = Math.round((Date.now() - save.savedAt) / 60000);
      const timeLabel = mins < 60 ? `hace ${mins} min` : `hace ${Math.round(mins/60)}h`;
      btn.style.display = 'block';
      btn.textContent = `▶ Continuar partida (${save.players.map(p=>p.name).join(', ')}) — ${timeLabel}`;
    }
  }
}

function initDesktopLayout() {
  if (window.innerWidth < 900) return;

  const screen = document.getElementById('screen-modes');
  if (!screen) return;

  // Already split — skip
  if (screen.querySelector('.modes-main-panel')) return;

  // Grab existing elements
  const header   = screen.querySelector('.modes-screen-header');
  const carousel = screen.querySelector('.coverflow-scene');
  const tutorial = document.getElementById('mode-tutorial-card');
  const settings = screen.querySelector('.modes-settings');
  const actions  = [...screen.children].find(el => el.querySelector('.btn-primary'));

  if (!header || !carousel) return; // elements not ready yet

  // Build left panel
  const main = document.createElement('div');
  main.className = 'modes-main-panel';
  main.appendChild(header);
  main.appendChild(carousel);
  if (tutorial) main.appendChild(tutorial);

  // Build right panel
  const side = document.createElement('div');
  side.className = 'modes-side-panel';

  const sideTitle = document.createElement('div');
  sideTitle.style.cssText = 'font-family:"Bebas Neue",sans-serif;font-size:20px;letter-spacing:3px;color:var(--text-dim);margin-bottom:8px';
  sideTitle.textContent = 'CONFIGURAR';
  side.appendChild(sideTitle);

  if (settings) side.appendChild(settings);
  if (actions)  side.appendChild(actions);

  screen.innerHTML = '';
  screen.appendChild(main);
  screen.appendChild(side);
}

// Re-run on resize crossing 900px
let _lastWasDesktop = window.innerWidth >= 900;
window.addEventListener('resize', () => {
  const isDesktop = window.innerWidth >= 900;
  if (isDesktop && !_lastWasDesktop) {
    // switched to desktop — rebuild layout
    _lastWasDesktop = true;
    setTimeout(() => { initDesktopLayout(); cfLayout(); cfRender(false); }, 50);
  } else if (!isDesktop && _lastWasDesktop) {
    _lastWasDesktop = false;
  }
});

initApp();
