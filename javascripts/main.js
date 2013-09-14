$(function(){

  var jmpressOpts = {
    animation   : { transitionDuration : '0.8s' }
  };

  $( '#jms-slideshow' ).jmslideshow( $.extend( true, { jmpressOpts : jmpressOpts }, {
    autoplay  : false,
    bgColorSpeed: '0.8s',
    arrows    : false
}));

// $('.donut').hide();
// $('.bar-graph').hide();


// $(".skills-icon").mouseover(function(){
//   // $('.donut').show(2200);
//   // $('.donut').css('-webkit-transform', 'translateX(0px) rotate(-1.5turn)');
//   // $('.donut').css('webkit-transition', '-webkit-transform 2s ease-in-out');
//   // $(".bar-graph").show();
//   $(this).text('X');
//   $(this).attr('class', 'transform-icon');
// });

/*@-webkit-keyframes rollOut {
    0% {-webkit-transform: translateX(0) rotate(0);}
  100% {-webkit-transform: translateX(450px) rotate(1turn);}
}*/

/*@-webkit-keyframes rollIn {

  0% {-webkit-transform: translateX(0) rotate(0);}
  20% {-webkit-transform: translateX(-450px) rotate(1turn);}

  .donutIn {
    -webkit-animation: rollIn 3s infinite;
  }*/


$(".transform-bottom").click(function(){
  console.log('hit it');
  $('.donut').css('-webkit-transform', 'translateX(500px) rotate(1.5turn)');
  $('.donut').css('webkit-transition', '-webkit-transform 2s ease-in-out');
  $(this).text('<');
  $(this).attr('class', 'skills-icon');
});


  d3.select("body")
    .selectAll(".bar-slide")
    .data([90,80,70,96,96,78,75,70])
    .transition()
    .duration(2000)
    .style("width", function(d) { return  d + "%";

  });

// $('#button').onClick(function(){
// $('#target_element').addClass('.animate_class_name');});



// var width = 460,
//     height = 300,
//     radius = Math.min(width, height) / 2;

// nv.addGraph(function() {
//   var chart = nv.models.pieChart()
//       .x(function(d) { return d.label })
//       .y(function(d) { return d.value })
//       .showLabels(true);

//     d3.select("#chart svg")
//         .datum(exampleData())
//       .transition().duration(1200)
//         .call(chart);

//   return chart;
// });

// nv.addGraph(function() {
//   var chart = nv.models.pieChart()
//       .x(function(d) { return d.label })
//       .y(function(d) { return d.value })
//       .showLabels(true)
//       .labelThreshold(.05)
//       .donut(true);

//     d3.select("#chart2 svg")
//         .datum(exampleData())
//       .transition().duration(1200)
//         .call(chart);

//   return chart;
// });



function exampleData() {
  return [
  {
    key: "Cumulative Return",
    values: [
      {
        "label": "One",
        "value" : 29.765957771107
      } ,
      {
        "label": "Two",
        "value" : 0
      } ,
      {
        "label": "Three",
        "value" : 32.807804682612
      } ,
      {
        "label": "Four",
        "value" : 196.45946739256
      } ,
      {
        "label": "Five",
        "value" : 0.19434030906893
      } ,
      {
        "label": "Six",
        "value" : 98.079782601442
      } ,
      {
        "label": "Seven",
        "value" : 13.925743130903
      } ,
      {
        "label": "Eight",
        "value" : 5.1387322875705
      }
    ]
  }
  ];
}




// d3.select("div")
//     .data([200,500,400,500,600])
//     .transition()
//     .duration(2000)
//     .style("width", function(d) { return  d + "px"; });

   // $(window).on('scroll',function() {
   //   var scrolltop = $(this).scrollTop();

   //   if(scrolltop >= 650) {
   //     $('.strip').fadeIn(250);
   //   }

   //   else if(scrolltop <= 650) {
   //     $('.strip').fadeOut(250);
   //   }
   // });

  // $('#something').click(function() {
  //     location.reload();
  // });

});





