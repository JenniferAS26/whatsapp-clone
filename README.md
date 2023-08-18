# whatsapp-clone

## Requerimientos técnicos del aplicativo
1. Implementar CSS para aplicar estilos y diseño responsive. El uso de SASS como preprocesador CSS duplica el porcentaje del item sobre la calificación del proyecto

#### 2. Imprementar JSON-server que contenga la siguiente información:
  a.  Usuarios <br>
  b.  Mensajes <br>
  c.  Seguidos (BONUS) <br>
  NOTA: Cada uno de estos items debe tener su propio endpoint. Asimismo, el JSON-server debe ser desplegado en un hosting como railway.app

#### 3. Cada objeto usuario debe contener minimo la siguiente información:
  a.  id <br>
  b.  Nombre <br>
  c.  Número de celular <br>
  d.  Password <br>
  e.  URL de la imagen de perfil <br>
  f.  Una propiedad "flag" que se modifique cuando el usuario está en línea o desconectado <br>
  g.  Info o frase que identifique al usuario <br>
  h.  Propiedad con la fecha y la hora de la última vez que estuvo en línea (opcional) <br>

#### 4. Cada objeto mensajes debe tener las siguientes propiedades:
  a.  idUser1: id del usuario que inició la conversación <br>
  b.  idUser2: id del usuario que recibió el mensaje <br>
  c.  Un array de conversaciones donde cada elemento sea un objeto con la siguiente estructura <br>
    i.    Una propiedad llamada sendBy que contenga el id del usuario que envió el mensaje <br>
    ii.   Una propiedad llamada date con la fecha en que fue enviado el mensaje <br>
    iii.  Una propiedad llamada hour con la hora en que fue enviado el mensaje <br>
    iv.   Una propiedad llamada message <br>
    v.    Una propiedad llamada "flag" que se modifique cuando el usuario receptor haya visto el mensaje <br>

#### 5. El aplicativo debe consistir en tres páginas:
  a.  La primera pagina es un Sign in o un inicio de sesión que debe: <br>
    i.  Contener un form con dos inputs: el primero con el atributo type="number" para iniciar sesión con el numero de celular y el segundo input con type="password" <br>
    ii. Al dar click el botón Sign in debe validar lo siguiente: <br>
      1.  Si hay campos vacios debe mostrar una ventana emergente o un alert que indique cual es el dato faltante <br>
      2.  Si el número de celular es incorrecto mostrar una ventana emergente o un alert que mustre el mensaje "el número ingresado no existe". <br>
      3.  Si la contraseña es incorrecta mostrar una ventana emergente o un alert que muestre el mensaje "la contraseña ingresada es incorrecta". <br>
      4.  Si el número de celular y contraseña ingresada son correctas debe: <br>
        a.  Mostrar una ventana emergente o alert que muestre el mensaje "Bienvenido [nombre del usuario]", y  <br>
        b.  Redireccionar al usuario a la página home, la página home debe tener este diseño <br>
          i.  Desktop <br>
            https://raw.githubusercontent.com/uxcristopher/imagenes/main/Readmes/MensajesApp/Desktop.png <br>
            imagen 1 <br>
          ii. Mobile <br>
            https://raw.githubusercontent.com/uxcristopher/imagenes/main/Readmes/MensajesApp/Mobile.png <br>
            imagen 2 <br>
        c.  Asimismo, en el home el usuario debe tener la oportunidad de: <br>
          i.    Observar el listado de todas las conversaciones que haya tenido con otros usuarios <br>
          ii.   Una vez que inicie sesión, por defecto se debe visualizar en la parte derecha el historial de la última conversación enviada o recibida. <br>
          iii.  Realizar búsqueda por nombre de usuario o mensajes enviados o recibidos. <br>
          iv.   Al dar click sobre una conversación ver desplegado, en la parte derecha de la página, todo el historial de mensajes enviados y recibidos con ese contacto. <br>
          v.    Al dar click sobre la imagen de perfil debe reemplazar el contenido de la sección izquierda de la página como se muestra en la imagen 3: <br>
            1.  Al dar click en el botón editar debe activarse el input para editar el nombre de perfil <br>
            2.  Este contenedor con la información de perfil también debe incluir un input con atributo type=”url” que permita editar la imagen de perfil. <br>
            3.  Al dar click en el botón back debe devolverlo a la vista principal de la página home <br>
              https://raw.githubusercontent.com/JenniferAS26/whatsapp-clone/main/assets/resourses/sprint.png <br>
              imagen 3 <br>
              i.    En la conversación desplegada en la parte derecha de la página el usuario debe tener la posibilidad de enviar un nuevo mensaje mediante el evento ‘submit’ del form ubicado en la parte inferior de la página. Este form debe contener un input o textarea y el botón de enviar mensaje. <br>
              ii.   Cada mensaje enviado por el usuario logueado debe cambiar de color azul al ícono doblecheck cuando el mensaje haya sido visto y tener habilitado un botón que permita realizar las acciones de editar o eliminar mensaje. <br>
              iii.  El usuario al dar click sobre el botón de actions o acciones indicadas en el ítem anterior se debe desplegar una caja con las opciones mencionadas: <br>
                a.  Al dar click sobre la opción editar se debe activar o desplegar un input con el mensaje listo para ser modificado. <br>
                b.  Al dar click sobre la opción eliminar debe aparecer un confirm preguntando al usuario si está seguro de eliminar el mensaje, si el usuario da click en aceptar se procede a realizar la petición DELETE. <br>
              iv.   Al dar click sobre el botón buscar de la conversación seleccionada (parte derecha), debe aparecer una nueva sección en la parte derecha de la página como se muestra en la imagen 4 y ser posible la búsqueda por palabra incluida en un mensaje enviado. <br>
              https://raw.githubusercontent.com/JenniferAS26/whatsapp-clone/main/assets/resourses/sprint-img2.png <br>
              imagen 4 <br>
        d.  En la página Sign in debe tener un link llamado “Sign up for free” que al dar click sobre él debe permitir al usuario: <br>
          i.  Redireccionarlo a la página Sign up <br>
          ii. La página Sign up debe contener: <br>
            1.  El título Create an account <br>
            2.  Un form con mínimo 4 inputs, una etiqueta "<textarea>" como campo de entrada para ingresar la frase y un botón type=”submit” llamado Sign up. <br>
            3.  Los inputs deben ser: <br>
              a.  Un input Type=”text”para el nombre <br>
              b.  Un input type=”number” para el número de celular <br>
              c.  Un input type=”password” <br>
              d.  Un input type =”url” para ingresar la url de la imagen del usuario. <br>
              e.  Al dar click en el botón Sign up debe: <br>
                i.  Verificar que el número de celular no exista en la lista de usuarios. <br>
                  1.  Si existe, debe mostrar un mensaje o alert diciendo que el número de celular ingresado ya está registrado. <br>
                  2.  Si no existe, se procede a crear el nuevo usuario mediante la petición POST y por último mostrar una ventana modal o alert que indique que el nuevo usuario fue creado exitosamente. <br>
                  3. Los usuarios que sean creados en el Signup deben ser capaces de loguearse o iniciar sesión en el sign in y continuar el flujo especificado anteriormente. <br>
  #### 6. En el aplicativo se debe evidenciar el uso de:
    - Condicionales
    - Peticiones HTTPs con Axios
    - Eventos del DOM
    - Uso del objeto sessionStorage o localStorage
    - Métodos Array
    - Uso de Webpack y Babel
    - Uso de Flexbox y Media queries
    - Principios de código limpio
    - Implementación de JSON server (API)
    - Implementación de Sweetalert para mostrar alertas
    - Despliegue de la página en GitHub pages

### Nota: Todas las páginas deben conservar los mismos estilos, para el manejo de fechas y horas se sugiere uso de la librería luxon. Cualquier funcionalidad adicional implementada, será tenida en cuenta como punto extra sobre la calificación del taller, después de haber completado los requerimientos mínimos.