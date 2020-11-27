# Ejercicio en Express de heroes refactorizado

Consignas: A continuación se detalla lo que deberá mostrar cada ruta.

1. Home (/) Deberá mostrar un texto de bienvenida al sitio. El texto será: Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!.

2. Héroes (/heroes) Deberá mostrar todo el contenido del archivo heroes.json. En el navegador se deberá ver algo así:

3. Héroes - Detalle (/heroes/detalle/id) Deberá mostrar un texto que diga: "Hola, mi nombre es NOMBRE y soy PROFESION". En donde el NOMBRE y PROFESION deberán ser reemplazados por al información real. Ejemplo: /heroes/2 mostrará la información de la Heroina o del Héroe con id 2 . Controlar el escenario en donde se pase un número n que no haga match con el id de un héroe.

4. Héroes - Detalle con bio (/heroes/bio/id/ok) Aquí se desea mostrar la información así: A. Si no se encontró el héroe con ese id. El texto será: "No encontramos un héroe para mostrarte su biografía". Esto, indistintamente si se envió o no el parámetro "ok". B. Si se encontró el héroe con ese id y NO vino exactamente la palabra ok o simplemente NO vino nada en la ruta. Mostrar el nombre del héroe y un texto adicional que diga: "Lamento que no desees saber más de mi :(". C. Si se encontró el héroe con ese id y vino exactamente la palabra ok. Mostrar el nombre del héroe y su reseña.

5. Créditos (/creditos) Mostrar los créditos de ustedes como equipo y cualquier texto adicional que deseen mostrar.
