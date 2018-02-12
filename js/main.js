
//Slider range jquery-ui
$( function() {
    $( "#slider-price" ).slider({
      range: true,
      min: 0,
      max: 10000,
      values: [ 1500, 5000 ],
      slide: function( event, ui ) {
        $( "#min-price" ).val( ui.values[ 0 ]  );
        $( "#max-price" ).val( ui.values[ 1 ]  );
      }
    });
    $( "#min-price" ).val(  $( "#slider-price" ).slider( "values", 0 ) );
    $( "#max-price" ).val(  $( "#slider-price" ).slider( "values", 1 ) );

// rent button
  $("#rent").click(function(){
       $("#rent").css("color","#fff");
       $("#rent").css("background","#566062");
       $("#buy").css("color","#566062");
       $("#buy").css("background","#fff");
  });

// buy button
  $("#buy").click(function(){
       $("#buy").css("color","white");
       $("#buy").css("background","#566062");
       $("#rent").css("color","#566062");
       $("#rent").css("background","#fff");
  });

 // date
 $(document).ready(function() {
        $("#start_datepicker").datepicker();
    $("#end_datepicker").datepicker();

  });

});
