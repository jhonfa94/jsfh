https://webpack.js.org/guides/getting-started/
Para iniciar con webpack se debe tener instalado el nodejs, el cual nos va ayudar a empaquetar los modulos.
Iniciamos con el comando node con npm init y cofiguramos los datos de primera instacia.
npm install webpack webpack-cli --save-dev
Todo esto se debe desarrollar en el directorio actual del proyecto
Por defecto nos va  dejar una carpeta node llamada node_modules, en el cual maneja una gran serie de archivos para poder trabajar con todo lo que se necesita. 
Para trabajar con webpack debemos tener un directorio llamado src, que es donde se debe tener todo el código fuente para luego ser empaquetado
Posteriormente vamos a la pagina de webpack y copiamos la configuración inicial.
Alli se debe busca en la opción de scripts  y agrega el comando para la compilación de webpack
"build": "webpack"
ya con esto compilamos con el comando 
npm build
Se nos crea una carpeta llamada disk, donde se almacena un archivo llamado main.js, donde se tiene todo el código del proyecto compilado.

Creamos un archivo de configuracion del webpack para que cada vez que se ejecute el archivo nos deje listo lo que vamos a personlizar.
El carchivo se debe llamar 
webpack.config.js
Debemos dejar este archivo a raiz del proyecto o donde esta el pakage.json

Instalamos los siguiente comandos a nivel de node
npm i -D html-loader html=webpack-plugin