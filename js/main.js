
//Slider range jquery-ui
$( function() {
    $( "#slider-price" ).slider({
      range: true,
      min: 0,
      max: 1000,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#min-price" ).val( ui.values[ 0 ]  );
        $( "#max-price" ).val( ui.values[ 1 ]  );
      }
    });
    $( "#min-price" ).val(  $( "#slider-price" ).slider( "values", 0 ) );
    $( "#max-price" ).val(  $( "#slider-price" ).slider( "values", 1 ) );

    /* Slider Bedroom */
    $( "#slider-bedroom" ).slider({
      range: true,
      min: 1,
      max: 8,
      values: [ 2, 4 ],
      slide: function( event, ui ) {
        $( "#min-bedroom" ).val( ui.values[ 0 ]  );
        $( "#max-bedroom" ).val( ui.values[ 1 ]  );
      }
    });
    $( "#min-bedroom" ).val(  $( "#slider-bedroom" ).slider( "values", 0 ) );
    $( "#max-bedroom" ).val(  $( "#slider-bedroom" ).slider( "values", 1 ) );
  } );
