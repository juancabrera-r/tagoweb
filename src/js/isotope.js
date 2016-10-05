//var $ = require('masonry');
//var $window = $(window);

$(window).load(function(){
            $('.grid').imagesLoaded( function() {
                $('.grid').isotope({
                    //itemSelector: '.grid-item',
                    itemSelector: '.grid-item',

                    percentPosition: true,
                    masonry: {
                        columnWidth: '.grid-sizer',

                        gutter: 0,
                    },
                });
            });
    });

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



