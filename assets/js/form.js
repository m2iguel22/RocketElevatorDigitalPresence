$( document ).ready(function() {
    // console.log( "ready!" );

    $("#select_building_type").change(function(){
        var type = $(this).val();
        

        if( type == "residential") {
            $("#residential").show();
            $("#corporate,#hybrid,#commercial").hide();
             }
         else if ( type == "hybrid") {
            $("#hybrid").show();
            $("#corporate,#residential,#commercial").hide();
             }
        else if( type == "commercial") {
            $("#commercial").show();
            $("#corporate,#hybrid,#residential").hide();
             }
         else if ( type == "corporate") {
             $("#corporate").show();
             $("#commercial,#hybrid,#residential").hide();
            }
      });
 
});