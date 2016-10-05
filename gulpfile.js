
//npm install --save-dev gulp-sass (Instala el paquete de sass)

var gulp = require('gulp'); //Importa gulp
var sass = require('gulp-sass');
var notify = require('gulp-notify'); //Notificación de gulp
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var browserify = require('browserify');
var tap = require('gulp-tap');
var buffer = require('gulp-buffer');


//variables de patrones de archivos
var jsFile = ["src/js/*.js", "src/**/*.js"]; //cualquier archivo que esta en la carpeta srs/js o subcarpeta

//Tareas por defectos, [tarea a ejecutar]
gulp.task("default", ["concat-js", "compile-sass"], function (){
    //iniciar BrowserSync
    browserSync. init({
        server:"./" //levanta servidor web en carpeta actual
        //proxy: "127.0.0.1:8000", //actúa como proxy enviando las peticiones a sparrest
        //browser: "google chrome"
    });

    //Observa cualquier archivo sass y si hay cambios ejecuta automaticamente la tarea compile-sass
    gulp.watch("src/scss/*.scss", ["compile-sass"]);

    //Observa cambios en carchivos HTML y recarga navegador
    gulp.watch("./*.html").on("change", browserSync.reload);

    //Observa cambios en archivos JS para concatenar
    gulp.watch(jsFile, ["concat-js"]);
});


//Definimos la tarea para compilar SASS

gulp.task("compile-sass", function(){
    gulp.src("./src/scss/style.scss") //cargamos el archivo
        .pipe(sass().on('error', sass.logError)) //compilamos el archivo SASS
        .pipe(gulp.dest("./dist/css/")) //guardamos el archivo en dist/css
        .pipe(notify({  //Notificación de gulp
            title: "SASS",
            message: "SASS Compiled"
        }))
        .pipe(browserSync.stream());
});

//Definimos la tarea para concatenar JS
gulp.task("concat-js", function(){
    gulp.src("src/js/app.js")
        .pipe(tap(function(file) { //tap nos permite ejecutar un código por cada fichero seleccionado en el paso anterior
            file.contents = browserify(file.path).bundle() //pasamos el archivo por browserify y para importar los requiere
        }))
        .pipe(buffer()) //convertir cada archivo en un stream
        .pipe(gulp.dest("dist/js/"))
        .pipe(notify({  //Notificación de gulp
            title: "JS",
            message: "Concatenated"
        }))
        .pipe(browserSync.stream());
});

