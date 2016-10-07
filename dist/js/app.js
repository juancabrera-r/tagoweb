(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require('./logo-canvas');
require('./isotope');


},{"./isotope":2,"./logo-canvas":3}],2:[function(require,module,exports){
//var $ = require('masonry');
//var $window = $(window);

// init Masonry

$(window).load(function() {
    var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer',
        gutter: 0
    });
// layout Isotope after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid.masonry();
    });
});

/*
var $grid = $('.grid')

$(window).load(function() {

        $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            columnWidth: '.grid-sizer',
            gutter: 0,
        });
});
*/
/*
var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer',
    gutter: 0,

});
$grid.imagesLoaded().progress( function() {
    $grid.masonry();
});*/
    //var $container = $('#container');
    //$container.isotope({
      //itemSelector: '.item',
    //percentPosition: true,
    //width: "100%",
    //height: "100%",
     //defaultColumnWidth: '*',
    //masonry: {
   //  columnWidth: 0,
    //fitWidth: false,

   // },
    //});
    //var $container = $('#container');
    //$container.imagesLoaded(function () {
      //  $container.masonry({
        //    itemSelector: '.box',

          //  columnWidth: function (containerWidth) {
            //    return containerWidth / 3
            //},
        //});
    //});




},{}],3:[function(require,module,exports){
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");


ctx.fillStyle = "#0C9BD3";
ctx.strokeStyle = "#0C9BD3";
ctx.beginPath();
ctx.fillRect(50, 160, 225, 5);


ctx.beginPath();
ctx.fillStyle = "black";
ctx.strokeStyle = "black";

ctx.moveTo(20,150);
ctx.lineTo(100,150);
ctx.moveTo(20,150);
ctx.lineTo(20,157);
ctx.lineTo(103,157);
ctx.lineTo(100,150);
ctx.fill();

ctx.moveTo(100,150);
ctx.lineTo(50,40);
ctx.lineTo(46,42);
ctx.lineTo(95,150);
ctx.fill();

ctx.moveTo(75,40);
ctx.lineTo(130,20);
ctx.lineTo(130,170);
ctx.lineTo(122,170);
ctx.lineTo(122,35);
ctx.lineTo(80,50);
ctx.lineTo(75,40);
ctx.fill();
ctx.position = "absolute";


ctx.fillStyle = "#0C9BD3";
ctx.strokeStyle = "#0C9BD3";
ctx.beginPath();
ctx.moveTo(20,150);
ctx.lineTo(95,150);
ctx.lineTo(46,42);
ctx.lineTo(45,44);
ctx.lineTo(92,147);
ctx.lineTo(20,147);
ctx.lineTo(20,150);
ctx.fill();


setTimeout(function(){
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.font ="12px Minion Web";
    ctx.fillText("ESTUDIO",135,175);
}, 4500 );

//T
setTimeout(function(){
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.fillRect(175, 165, 2, -45);
    ctx.fillRect(170, 120, 20, 4);
}, 1500 );

//A
setTimeout(function(){
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.fillRect(185, 165, 2, -35);
    ctx.fillRect(185, 130, 20, 2);
    ctx.fillRect(203, 145, 2, -15);
    ctx.fillRect(185, 142, 20, 4);
    ctx.fillRect(201, 165, 4, -20);
}, 2200 );
//G
setTimeout(function(){
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.fillRect(215, 165, 2, -45);
    ctx.fillRect(215, 120, 25, 2);
    ctx.fillRect(236, 120, 4, 15);
    ctx.fillRect(215, 165, 30, -3);
    ctx.fillRect(242, 165, 2, -20);
    ctx.fillRect(225, 145, 20, 4);
}, 2800 );
//O
setTimeout(function(){
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.fillRect(250, 165, 4, -35);
    ctx.fillRect(270, 165, 2, -35);
    ctx.fillRect(250, 161, 22, 4);
    ctx.fillRect(250, 130, 22, 2);
}, 3500 );
},{}]},{},[1]);
