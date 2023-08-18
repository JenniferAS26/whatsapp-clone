# whatsapp-clone

## Requerimientos técnicos del aplicativo
#### 1. Implementar CSS para aplicar estilos y diseño responsive. El uso de SASS como preprocesador CSS duplica el porcentaje del item sobre la calificación del proyecto

#### 2. Imprementar JSON-server que contenga la siguiente información:
  &nbsp;&nbsp;a.  Usuarios <br>
  &nbsp;&nbsp;b.  Mensajes <br>
  &nbsp;&nbsp;c.  Seguidos (BONUS) <br>
  NOTA: Cada uno de estos items debe tener su propio endpoint. Asimismo, el JSON-server debe ser desplegado en un hosting como railway.app

#### 3. Cada objeto usuario debe contener minimo la siguiente información:
  &nbsp;&nbsp;a.  id <br>
  &nbsp;&nbsp;b.  Nombre <br>
  &nbsp;&nbsp;c.  Número de celular <br>
  &nbsp;&nbsp;d.  Password <br>
  &nbsp;&nbsp;e.  URL de la imagen de perfil <br>
  &nbsp;&nbsp;f.  Una propiedad "flag" que se modifique cuando el usuario está en línea o desconectado <br>
  &nbsp;&nbsp;g.  Info o frase que identifique al usuario <br>
  &nbsp;&nbsp;h.  Propiedad con la fecha y la hora de la última vez que estuvo en línea (opcional) <br>

#### 4. Cada objeto mensajes debe tener las siguientes propiedades:
  &nbsp;&nbsp;a.  idUser1: id del usuario que inició la conversación <br>
  &nbsp;&nbsp;b.  idUser2: id del usuario que recibió el mensaje <br>
  &nbsp;&nbsp;c.  Un array de conversaciones donde cada elemento sea un objeto con la siguiente estructura <br>
    &nbsp;&nbsp;&nbsp;&nbsp;i.    Una propiedad llamada sendBy que contenga el id del usuario que envió el mensaje <br>
    &nbsp;&nbsp;&nbsp;&nbsp;ii.   Una propiedad llamada date con la fecha en que fue enviado el mensaje <br>
    &nbsp;&nbsp;&nbsp;&nbsp;iii.  Una propiedad llamada hour con la hora en que fue enviado el mensaje <br>
    &nbsp;&nbsp;&nbsp;&nbsp;iv.   Una propiedad llamada message <br>
    &nbsp;&nbsp;&nbsp;&nbsp;v.    Una propiedad llamada "flag" que se modifique cuando el usuario receptor haya visto el mensaje <br>

#### 5. El aplicativo debe consistir en tres páginas:
  &nbsp;&nbsp;a.  La primera pagina es un Sign in o un inicio de sesión que debe: <br>
    &nbsp;&nbsp;&nbsp;&nbsp;i.  Contener un form con dos inputs: el primero con el atributo type="number" para iniciar sesión con el numero de celular y el segundo input con type="password" <br>
    &nbsp;&nbsp;&nbsp;&nbsp;ii. Al dar click el botón Sign in debe validar lo siguiente: <br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.  Si hay campos vacios debe mostrar una ventana emergente o un alert que indique cual es el dato faltante <br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.  Si el número de celular es incorrecto mostrar una ventana emergente o un alert que mustre el mensaje "el número ingresado no existe". <br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.  Si la contraseña es incorrecta mostrar una ventana emergente o un alert que muestre el mensaje "la contraseña ingresada es incorrecta". <br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.  Si el número de celular y contraseña ingresada son correctas debe: <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a.  Mostrar una ventana emergente o alert que muestre el mensaje "Bienvenido [nombre del usuario]", y  <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b.  Redireccionar al usuario a la página home, la página home debe tener este diseño <br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i.  Desktop <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;https://raw.githubusercontent.com/uxcristopher/imagenes/main/Readmes/MensajesApp/Desktop.png <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;imagen 1 <br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii. Mobile <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;https://raw.githubusercontent.com/uxcristopher/imagenes/main/Readmes/MensajesApp/Mobile.png <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;imagen 2 <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c.  Asimismo, en el home el usuario debe tener la oportunidad de: <br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i.    Observar el listado de todas las conversaciones que haya tenido con otros usuarios <br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii.   Una vez que inicie sesión, por defecto se debe visualizar en la parte derecha el historial de la última conversación enviada o recibida. <br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iii.  Realizar búsqueda por nombre de usuario o mensajes enviados o recibidos. <br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iv.   Al dar click sobre una conversación ver desplegado, en la parte derecha de la página, todo el historial de mensajes enviados y recibidos con ese contacto. <br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v.    Al dar click sobre la imagen de perfil debe reemplazar el contenido de la sección izquierda de la página como se muestra en la imagen 3: <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.  Al dar click en el botón editar debe activarse el input para editar el nombre de perfil <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.  Este contenedor con la información de perfil también debe incluir un input con atributo type=”url” que permita editar la imagen de perfil. <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.  Al dar click en el botón back debe devolverlo a la vista principal de la página home <br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;https://raw.githubusercontent.com/JenniferAS26/whatsapp-clone/main/assets/resourses/sprint.png <br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;imagen 3 <br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i.    En la conversación desplegada en la parte derecha de la página el usuario debe tener la posibilidad de enviar un nuevo mensaje mediante el evento ‘submit’ del form ubicado en la parte inferior de la página. Este form debe contener un input o textarea y el botón de enviar mensaje. <br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii.   Cada mensaje enviado por el usuario logueado debe cambiar de color azul al ícono doblecheck cuando el mensaje haya sido visto y tener habilitado un botón que permita realizar las acciones de editar o eliminar mensaje. <br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iii.  El usuario al dar click sobre el botón de actions o acciones indicadas en el ítem anterior se debe desplegar una caja con las opciones mencionadas: <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a.  Al dar click sobre la opción editar se debe activar o desplegar un input con el mensaje listo para ser modificado. <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b.  Al dar click sobre la opción eliminar debe aparecer un confirm preguntando al usuario si está seguro de eliminar el mensaje, si el usuario da click en aceptar se procede a realizar la petición DELETE. <br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iv.   Al dar click sobre el botón buscar de la conversación seleccionada (parte derecha), debe aparecer una nueva sección en la parte derecha de la página como se muestra en la imagen 4 y ser posible la búsqueda por palabra incluida en un mensaje enviado. <br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;https://raw.githubusercontent.com/JenniferAS26/whatsapp-clone/main/assets/resourses/sprint-img2.png <br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;imagen 4 <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d.  En la página Sign in debe tener un link llamado “Sign up for free” que al dar click sobre él debe permitir al usuario: <br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i.  Redireccionarlo a la página Sign up <br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii. La página Sign up debe contener: <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.  El título Create an account <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.  Un form con mínimo 4 inputs, una etiqueta "<textarea>" como campo de entrada para ingresar la frase y un botón type=”submit” llamado Sign up. <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.  Los inputs deben ser: <br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a.  Un input Type=”text”para el nombre <br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b.  Un input type=”number” para el número de celular <br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c.  Un input type=”password” <br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d.  Un input type =”url” para ingresar la url de la imagen del usuario. <br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e.  Al dar click en el botón Sign up debe: <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i.  Verificar que el número de celular no exista en la lista de usuarios. <br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.  Si existe, debe mostrar un mensaje o alert diciendo que el número de celular ingresado ya está registrado. <br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.  Si no existe, se procede a crear el nuevo usuario mediante la petición POST y por último mostrar una ventana modal o alert que indique que el nuevo usuario fue creado exitosamente. <br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Los usuarios que sean creados en el Signup deben ser capaces de loguearse o iniciar sesión en el sign in y continuar el flujo especificado anteriormente. <br>
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