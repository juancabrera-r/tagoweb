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



