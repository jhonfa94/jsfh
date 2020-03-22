Debemos iniciar un proyecto de node con 
npm init
Cuando ejecutamos el comando npm init, nos lleva a crear un archivo package.json, en donde se guardara el nombre del proyecto que se tiene, se establece el nombre de la aplicación, 
que dependencias son necesarias, que elementos son innesarias para pasar a producción. 



npm install webpack webpack-cli --save-dev 
Indicamos que se guarde en el modoo

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

Instalamos  los siguiente comando a nivel de node
npm i -D html-loader html=webpack-plugin

Dado que cada cambio que se realiza en el proyecto se debe estar compilando en webpack se hace 
muy maluco estar realizando esta tarea consecutivamente, por lo que se va instalar un paquete
que haga esto automaticamente.

npm install -D webpack-dev-server
-D dependencia de desarrollo sino se especifica lo toma como si fuese de de desarrollo
Con esto instalamos un servidor de desarrollo de webpack, la instalacion se demora dependiendo 
la conexión a internet
Una vez esta instalado el paquete procedemos a configurar en el package.json en la 
seccion de los scripts, en donde se configura el comando start para iniciar el webpack server, 
seguido de la instrucción webpack-dev-server
Al final debe quedar de la siguiente forma
"start": "webpack-dev-server"
y en la ventana de comandos del cmd o la consola que se tenga configurado se daria 
npm start
con esto inicia un servidor de webpack donde todo cambio que se realice en el desarrollo del 
proyecto se autorecarga en cada momento que se de durante la fase de desarrollo.

Dado que nuestro proyecto no tiene en el momento los estilos css, por tal motivo se debe importar 
al webpack, para ello se procede a instalar las siguientes dependencias.

npm i -D css-loader style-loader

Instalamos la dependencia para que nos deje el archivo css 
npm i -D mini-css-extract-plugin

Para que nuestro código css quede minizado se debe instalar la siguiente dependencia
pero esta es opcional 
npm i -D optimize-css-assets-webpack-plugin

Para trabajar con imagenes se debe instalar la siguiente dependencia
npm i -D file-loader

Para hacer compatible el código de javascript con los diferentes navegadores  se utiliza
babeljs 
https://babeljs.io/setup

Para instalar babel en nuestro proyecto de webpack se debe hacer mediante el siguiente comando 
npm i -D babel-loader @babel/core
Una vez instalado configuramos en el webpack de producción lo que se desea tener al 
momento de compilar

npm install babel-preset-minify --save-dev

Paquete para minificar el archivo javascript
npm install babel-minify-webpack-plugin --save-dev

Luego la compatibilidad para compilar a la versión emascript 5
npm install --save-dev @babel/preset-env

Instalamos plugin para limpiar la carpeta dist cada vez que se ejecuta una compilación
npm install --save-dev clean-webpack-plugin
