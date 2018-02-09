
//Slider range jquery-ui
$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#min-price" ).val( ui.values[ 0 ]  );
        $( "#max-price" ).val( ui.values[ 1 ]  );
      }
    });
    $( "#min-price" ).val(  $( "#slider-range" ).slider( "values", 0 ) );
    $( "#max-price" ).val(  $( "#slider-range" ).slider( "values", 1 ) );
  } );
